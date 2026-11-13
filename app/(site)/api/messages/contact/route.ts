import config from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

import { PAGE_SLUGS } from '@/lib/content-keys'

/**
 * Réception du formulaire de contact (app/components/site/ContactForm.tsx).
 *
 * Le message est transmis par email via l'adaptateur nodemailer déclaré dans
 * payload.config.ts. L'adresse destinataire vient du CMS (groupe
 * `contactContent` de la page Contact) pour rester modifiable dans /admin,
 * avec `CONTACT_TO` en surcharge côté hébergement.
 */

type ContactBody = {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
  consent: boolean
  website: string
}

// Bornes hautes : un champ trop long est un signal d'abus, pas une saisie réelle.
const MAX_LENGTHS = {
  firstName: 100,
  lastName: 100,
  phone: 40,
  email: 200,
  message: 5000,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Limite en mémoire (process `next start` unique, pas de Redis en place) :
// une IP ne peut pas dépasser RATE_LIMIT_MAX envois par fenêtre.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()

  // Purge les entrées expirées à l'occasion pour ne pas laisser grossir la
  // map indéfiniment (une IP par bot ayant déjà tapé une fois suffit à créer
  // une entrée).
  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) rateLimitBuckets.delete(key)
  }

  const bucket = rateLimitBuckets.get(ip)

  if (!bucket) {
    rateLimitBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  bucket.count += 1
  return bucket.count > RATE_LIMIT_MAX
}

// Retire les caractères de contrôle (dont CR/LF) : sans ça, un champ comme
// firstName pourrait injecter des en-têtes SMTP supplémentaires (ex. Bcc)
// une fois réutilisé dans le sujet de l'email envoyé par nodemailer.
function stripControlChars(value: string) {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\x00-\x1f\x7f]/g, '')
}

function readString(source: Record<string, unknown>, key: string) {
  const value = source[key]
  return typeof value === 'string' ? stripControlChars(value.trim()) : ''
}

function parseBody(raw: unknown): { body: ContactBody } | { error: string } {
  if (typeof raw !== 'object' || raw === null) {
    return { error: 'Corps de requête invalide.' }
  }

  const source = raw as Record<string, unknown>
  const body: ContactBody = {
    firstName: readString(source, 'firstName'),
    lastName: readString(source, 'lastName'),
    phone: readString(source, 'phone'),
    email: readString(source, 'email'),
    message: readString(source, 'message'),
    consent: source.consent === true,
    website: readString(source, 'website'),
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    if (!body[field as keyof typeof MAX_LENGTHS]) {
      return { error: 'Merci de remplir tous les champs obligatoires.' }
    }
    if (body[field as keyof typeof MAX_LENGTHS].length > max) {
      return { error: 'Un des champs dépasse la longueur autorisée.' }
    }
  }

  if (!EMAIL_PATTERN.test(body.email)) {
    return { error: 'Adresse email invalide.' }
  }

  if (!body.consent) {
    return { error: 'Le consentement est obligatoire pour envoyer le message.' }
  }

  return { body }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function resolveRecipient() {
  if (process.env.CONTACT_TO) return process.env.CONTACT_TO

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: PAGE_SLUGS.contact } },
    limit: 1,
    depth: 0,
  })

  return result.docs[0]?.contactContent?.email ?? null
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Merci de réessayer dans quelques minutes.' },
      { status: 429 },
    )
  }

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 })
  }

  const parsed = parseBody(raw)

  if ('error' in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { body } = parsed

  // Pot de miel : un champ masqué qu'un humain ne voit jamais. Rempli, on
  // renvoie un succès sans rien envoyer, pour ne pas indiquer au robot qu'il
  // a été détecté.
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  // Sans SMTP, `payload.sendEmail` se contente d'écrire dans la console : le
  // visiteur verrait « message envoyé » alors que personne ne l'a reçu.
  if (!process.env.SMTP_HOST) {
    console.error('SMTP_HOST absent : le formulaire de contact ne peut pas envoyer d’email.')
    return NextResponse.json(
      { error: 'L’envoi est momentanément indisponible. Merci de nous écrire directement par email.' },
      { status: 503 },
    )
  }

  const nomComplet = `${body.firstName} ${body.lastName}`

  try {
    const recipient = await resolveRecipient()

    if (!recipient) {
      console.error('Aucune adresse destinataire : ni CONTACT_TO, ni contactContent.email en base.')
      return NextResponse.json(
        { error: 'L’envoi est momentanément indisponible. Merci de nous écrire directement par email.' },
        { status: 503 },
      )
    }

    const payload = await getPayload({ config })

    await payload.sendEmail({
      to: recipient,
      replyTo: body.email,
      subject: `Nouveau message du site — ${nomComplet}`,
      text: [
        `Nom : ${nomComplet}`,
        `Email : ${body.email}`,
        `Téléphone : ${body.phone}`,
        '',
        'Message :',
        body.message,
      ].join('\n'),
      html: `
        <p><strong>Nom :</strong> ${escapeHtml(nomComplet)}</p>
        <p><strong>Email :</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(body.phone)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Échec de l’envoi du formulaire de contact.', error)
    return NextResponse.json(
      { error: 'L’envoi a échoué. Merci de réessayer dans quelques instants.' },
      { status: 502 },
    )
  }
}
