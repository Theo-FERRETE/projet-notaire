import config from '@payload-config'
import { getPayload } from 'payload'
import type { Article, Page } from '../payload-types'

export type ArticleCategory = Article['category']

/**
 * Articles publiés, triés du plus récent au plus ancien.
 *
 * Retourne `null` si Payload est injoignable, afin que l'appelant puisse
 * basculer sur le contenu de secours. Un tableau vide signifie au contraire
 * que Payload répond mais qu'aucun article publié ne correspond.
 */
export async function getPublishedArticles(category?: ArticleCategory) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'articles',
      where: {
        status: { equals: 'published' },
        ...(category ? { category: { equals: category } } : {}),
      },
      sort: '-publishedAt',
      limit: 50,
      depth: 1,
    })

    return result.docs
  } catch (error) {
    console.warn('Payload indisponible pour les articles. Fallback utilisé.', error)
    return null
  }
}

export async function getPageBySlug(slug: Page['slug']) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 1,
    })

    return result.docs[0] ?? null
  } catch (error) {
    console.warn(`Payload indisponible pour la page ${slug}. Fallback utilisé.`, error)
    return null
  }
}

/**
 * Normalise un libellé pour l'appariement : casse, accents et espaces
 * superflus sont ignorés. Sans cela, renommer « Actualités & analyses »
 * en « Actualités & Analyses » depuis le back-office suffit à casser la
 * correspondance, et la page retombe en silence sur son texte codé en dur.
 */
function normalizeLabel(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

export function getPageSection(page: Page | null, label: string) {
  const wanted = normalizeLabel(label)

  return (
    page?.sections?.find(
      (section) =>
        typeof section.label === 'string' &&
        normalizeLabel(section.label) === wanted &&
        section.enabled !== false,
    ) ?? null
  )
}
