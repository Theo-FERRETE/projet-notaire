import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/qui-suis-je`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/confidentialite`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
