import 'server-only'

import config from '@payload-config'
import { getPayload } from 'payload'
import type { Where } from 'payload'
import type { Page } from '../payload-types'
import type { Article as PayloadArticle, Media } from '../payload-types'
import type { Article, BlogCategory } from '../app/components/blog/blog-data'

const isProduction = process.env.NODE_ENV === 'production'

function payloadUnavailable(context: string, error: unknown): null {
  if (isProduction) throw error
  console.warn(`Payload indisponible pour ${context}. Fallback utilisé.`, error)
  return null
}

export async function getPageBySlug(slug: Page['slug']) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, depth: 1 })
    return result.docs[0] ?? null
  } catch (error) {
    return payloadUnavailable(`la page ${slug}`, error)
  }
}

// Type manuel : évite une dépendance dure à payload-types.ts tant que le global n'a pas été régénéré.
export type SiteSettings = {
  footerDescription?: string | null
  footerAddress?: string | null
  footerEmail?: string | null
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const payload = await getPayload({ config })
    return (await payload.findGlobal({ slug: 'site-settings' })) as SiteSettings
  } catch (error) {
    return payloadUnavailable('les réglages du site', error)
  }
}

export function getPageSection(page: Page | null, label: string) {
  return page?.sections?.find((section) => section.label === label && section.enabled !== false) ?? null
}

export function getSectionImageUrl(section: ReturnType<typeof getPageSection>) {
  if (!section?.image || typeof section.image === 'number') return undefined
  return section.image.url ?? undefined
}

// Point focal choisi dans l'admin Payload, utilisé pour cadrer les recadrages `object-cover`.
export function getSectionImageFocalPoint(section: ReturnType<typeof getPageSection>) {
  if (!section?.image || typeof section.image === 'number') return undefined
  const { focalX, focalY } = section.image
  if (focalX == null || focalY == null) return undefined
  return `${focalX}% ${focalY}%`
}

function getMediaUrl(image: PayloadArticle['image']) {
  if (!image || typeof image === 'number') return undefined
  return (image as Media).url ?? undefined
}

function getMediaFocalPoint(image: PayloadArticle['image']) {
  if (!image || typeof image === 'number') return undefined
  const { focalX, focalY } = image as Media
  if (focalX == null || focalY == null) return undefined
  return `${focalX}% ${focalY}%`
}

const categoryLabels: Record<PayloadArticle['category'], Article['category']> = {
  famille: 'Famille', immobilier: 'Immobilier', patrimoine: 'Patrimoine', international: 'International',
}

export async function getPublishedArticles(category?: BlogCategory) {
  try {
    const payload = await getPayload({ config })
    const where: Where[] = [{ status: { equals: 'published' } }, ...(category && category !== 'Tous' ? [{ category: { equals: category.toLowerCase() } }] : [])]
    const result = await payload.find({ collection: 'articles', where: { and: where }, sort: '-publishedAt', depth: 1, limit: 100 })
    if (result.docs.length === 0) return null
    return result.docs.map((article): Article => ({
      slug: article.slug,
      category: categoryLabels[article.category],
      date: article.publishedAt ? new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(article.publishedAt)) : '',
      title: article.title,
      excerpt: article.excerpt ?? '',
      image: getMediaUrl(article.image),
      imagePosition: getMediaFocalPoint(article.image),
    }))
  } catch (error) {
    return payloadUnavailable('les articles', error)
  }
}

export async function getPublishedArticleBySlug(slug: string) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'articles', where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] }, depth: 1, limit: 1 })
    return result.docs[0] ?? null
  } catch (error) {
    return payloadUnavailable(`l’article ${slug}`, error)
  }
}
