import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import type { Payload } from 'payload'
import type { Page } from '../../payload-types'
import { SECTION_INTROS, SECTION_LABELS } from '../../lib/content-keys'

/**
 * Pages minimales dont le contenu reproduit les sections canoniques des
 * pages publiques (labels utilisés par lib/payload.ts). Contenu volontairement
 * réduit : le but est de vérifier l'accès Payload, pas de dupliquer le seed.
 */
const pageSeeds: Array<Pick<Page, 'title' | 'slug' | 'sections'>> = [
  {
    title: 'Accueil',
    slug: 'home',
    sections: [
      {
        label: 'Excellence juridique',
        heading: 'Un notariat humain et de proximité au cœur d’Aix En Provence',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
  },
  {
    title: 'Services',
    slug: 'services',
    sections: [
      {
        label: SECTION_LABELS.servicesHero,
        heading: 'Nos services',
        intro: SECTION_INTROS.servicesHero,
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: SECTION_LABELS.servicesToolsBand,
        heading: 'Outils et Simulateurs',
        intro: SECTION_INTROS.servicesToolsBand,
        backgroundColor: '#F2EEE2',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
  },
  {
    title: 'Contact',
    slug: 'contact',
    sections: [
      {
        label: SECTION_LABELS.contactHero,
        heading: 'Contactez-nous',
        intro: SECTION_INTROS.contactHero,
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: SECTION_LABELS.contactMapBand,
        heading: 'Nous trouver',
        backgroundColor: '#F6F3EF',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
  },
]

/** Articles de test : publiés et brouillons, toutes catégories. */
export const articleSeeds = [
  {
    title: 'Réforme du droit de la famille',
    slug: 'reforme-droit-famille',
    category: 'famille' as const,
    status: 'published' as const,
    excerpt: 'Ce qui change en 2024.',
    publishedAt: '2026-09-05T08:00:00.000Z',
  },
  {
    title: 'Investir dans l’immobilier ancien',
    slug: 'investir-immobilier-ancien',
    category: 'immobilier' as const,
    status: 'published' as const,
    excerpt: 'Les pièges à éviter.',
    publishedAt: '2026-09-01T08:00:00.000Z',
  },
  {
    title: 'Brouillon à ne jamais publier',
    slug: 'brouillon-famille',
    category: 'famille' as const,
    status: 'draft' as const,
    publishedAt: '2026-09-09T08:00:00.000Z',
  },
]

export type TestContext = {
  payload: Payload
  dbDir: string
  /** Les fonctions réelles de lib/payload.ts, chargées après l'init de Payload. */
  lib: typeof import('../../lib/payload.ts')
  /** Ferme Payload (connexion DB) et supprime la base jetable. */
  cleanup: () => Promise<void>
}

/**
 * Démarre Payload sur une base SQLite jetable (hors du dépôt), crée le
 * schéma, seed les pages et articles de test, puis expose les fonctions
 * réelles de lib/payload.ts.
 */
export async function createTestContext(options?: {
  withArticles?: boolean
}): Promise<TestContext> {
  const dbDir = mkdtempSync(path.join(tmpdir(), 'notaire-payload-'))
  const dbPath = path.join(dbDir, 'test.db')

  // Doit être défini AVANT tout import du config Payload (module évalué une fois).
  process.env.DATABASE_URL = `file:${dbPath}`
  process.env.PAYLOAD_SECRET = 'test-secret-0123456789abcdef0123456789abcdef'

  const { getPayload } = await import('payload')
  const config = (await import('../../payload.config')).default

  const payload = await getPayload({ config })

  for (const page of pageSeeds) {
    await payload.create({
      collection: 'pages',
      data: page,
    })
  }

  if (options?.withArticles) {
    for (const article of articleSeeds) {
      await payload.create({
        collection: 'articles',
        data: article,
      })
    }
  }

  const lib = await import('../../lib/payload')

  return {
    payload,
    dbDir,
    lib,
    cleanup: async () => {
      await payload.destroy()
      rmSync(dbDir, { recursive: true, force: true })
    },
  }
}
