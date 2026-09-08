import { HomePage } from '@/app/components/homepage/HomePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Laila Gssime',
    description:
      'Étude notariale à Aix-en-Provence proposant un accompagnement humain et rigoureux pour les projets de vie, le patrimoine et les transmissions.',
    url: siteUrl,
    image: `${siteUrl}/qui-suis-je/home-hero.png`,
    areaServed: { '@type': 'City', name: 'Aix-en-Provence' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '34 cours Mirabeau',
      addressLocality: 'Aix-en-Provence',
      addressCountry: 'FR',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomePage />
    </>
  )
}
