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
    image: 'https://www.figma.com/api/mcp/asset/bc507d92-6017-4cda-ba85-4892fd8079f5.png',
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
