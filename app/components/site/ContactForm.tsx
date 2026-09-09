'use client'

import type { FormEvent } from 'react'
import { useState, useSyncExternalStore } from 'react'
import Link from 'next/link'

type ContactFormProps = {
  privacyHref?: string | null
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const noopSubscribe = () => () => {}

export function ContactForm({ privacyHref }: ContactFormProps) {
  // true uniquement après l'hydratation côté client, sans passer par un effet qui déclenche un rendu en cascade.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')

  // Le formulaire est monté uniquement côté client : les navigateurs et
  // extensions (remplissage automatique, gestionnaires de mots de passe)
  // injectent des styles et des nœuds dans les champs avant l'hydratation,
  // ce qui déclenche « Hydration failed ». Comme l'envoi repose sur fetch,
  // le rendu serveur du formulaire n'apporte rien et est donc omis.
  if (!mounted) {
    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_API
      ? `${process.env.NEXT_PUBLIC_CONTACT_API}/api/messages/contact`
      : '/api/messages/contact'

    setStatus('sending')
    setError('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
          consent: formData.get('consent') === 'on',
          website: formData.get('website'),
        }),
      })

      if (!response.ok) {
        setError('L’envoi a échoué. Merci de réessayer.')
        setStatus('error')
        return
      }

      form.reset()
      setStatus('sent')
    } catch {
      setError('L’envoi a échoué. Vérifiez votre connexion et réessayez.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className="border border-black/10 bg-[#f6f3ea] px-4 py-3 text-sm leading-relaxed text-[#4a5560]">
        Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.
      </p>
    )
  }

  const fieldClass =
    'mt-2 block w-full border-0 border-b border-gray-400 bg-transparent px-0 py-2 text-base text-black outline-none transition focus:border-b-2 focus:border-gray-700 focus:ring-0'
  const labelClass = 'text-xs font-normal uppercase tracking-wider text-gray-700'

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6" noValidate>
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Ne pas remplir ce champ</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-10">
        <div>
          <label htmlFor="contact-first-name" className={labelClass}>
            Prénom<span aria-hidden="true">*</span>
          </label>
          <input id="contact-first-name" name="firstName" type="text" required autoComplete="given-name" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="contact-last-name" className={labelClass}>
            Nom<span aria-hidden="true">*</span>
          </label>
          <input id="contact-last-name" name="lastName" type="text" required autoComplete="family-name" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-10">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Numéro de téléphone<span aria-hidden="true">*</span>
          </label>
          <input id="contact-phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email<span aria-hidden="true">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Description du projet<span aria-hidden="true">*</span>
        </label>
        <textarea id="contact-message" name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </div>

      <div className="flex items-start gap-2">
        <input id="contact-consent" name="consent" type="checkbox" required className="mt-1 size-4 rounded-none border-gray-400 text-gray-700 focus:ring-gray-700" />
        <label htmlFor="contact-consent" className="text-xs leading-relaxed text-gray-600">
          J’accepte que mes informations soient utilisées pour me recontacter.{' '}
          {privacyHref ? (
            <Link href={privacyHref} className="underline underline-offset-2 hover:text-black">
              Politique de confidentialité
            </Link>
          ) : null}
        </label>
      </div>

      {status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-[#9b2c2c]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-block bg-[#70798a] px-8 py-3 text-xs uppercase tracking-[1.8px] text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  )
}
