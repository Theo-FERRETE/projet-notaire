import config from '@payload-config'
import { getPayload } from 'payload'
import type { Page } from '../payload-types'

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

export function getPageSection(page: Page | null, label: string) {
  return page?.sections?.find((section) => section.label === label && section.enabled !== false) ?? null
}
