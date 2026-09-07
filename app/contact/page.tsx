import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { ContactForm } from '../components/site/ContactForm'
import { HomeFooter } from '../components/homepage/HomeFooter'
import { getSiteNavItems, HomeHeader } from '../components/homepage/HomeHeader'
import { getPageBySlug, getPageSection } from '../../lib/payload'

/**
 * Classic static Contact page.
 *
 * Everything this page displays lives right here — no CMS, no Payload
 * query, no block renderer. To change a text, address, or link, edit the
 * CONTENT object below.
 */
const CONTENT = {
  hero: {
    eyebrow: 'ENTRER EN RELATION',
    heading: 'Contactez-nous',
    description:
      'Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre projet.',
  },
  info: {
    addressLabel: 'ADRESSE',
    address: '34 cours Mirabeau, 13100 Aix-en-Provence',
    phoneLabel: 'TÉLÉPHONE',
    phone: '04 22 58 01 80',
    emailLabel: 'E-MAIL',
    email: 'laila.gssime@notaires.fr',
    hoursLabel: "HORAIRES D'OUVERTURE",
    hours: 'Lundi au Vendredi : 09h00 - 18h00. Samedi sur rendez-vous uniquement.',
  },
  form: {
    heading: 'Envoyer une demande',
    privacyHref: '/confidentialite',
  },
  map: {
    heading: 'Nous trouver',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8390853931005!2d5.4495929!3d43.5265482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d962fff3b4b%3A0x73d8ad4ec13fce8b!2s34%20Cr%20Mirabeau%2C%2013100%20Aix-en-Provence!5e0!3m2!1sen!2sfr!4v1788527296384!5m2!1sen!2sfr',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=34+cours+Mirabeau+Aix-en-Provence',
  },
} as const

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Contact',
  description: CONTENT.hero.description,
  keywords: [
    'contact notaire Aix-en-Provence',
    'rendez-vous notaire Aix-en-Provence',
    'Maître Laïla GSSIME',
    '34 cours Mirabeau',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/contact',
    title: 'Contact | Maître Laïla GSSIME — Notaire',
    description: CONTENT.hero.description,
  },
  twitter: {
    card: 'summary',
    title: 'Contact | Maître Laïla GSSIME — Notaire',
    description: CONTENT.hero.description,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${siteUrl}/contact#webpage`,
      name: CONTENT.hero.heading,
      url: `${siteUrl}/contact`,
      description: CONTENT.hero.description,
    },
    {
      '@type': 'LegalService',
      '@id': `${siteUrl}/#office`,
      name: 'Maître Laïla GSSIME — Notaire',
      url: siteUrl,
      telephone: `+33 4 22 58 01 80`,
      email: CONTENT.info.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '34 cours Mirabeau',
        postalCode: '13100',
        addressLocality: 'Aix-en-Provence',
        addressCountry: 'FR',
      },
      areaServed: { '@type': 'City', name: 'Aix-en-Provence' },
      openingHours: 'Mo-Fr 09:00-18:00',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: `${siteUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: `${siteUrl}/contact`,
        },
      ],
    },
  ],
}

const IconAddress = () => (
  <svg className="h-6 w-4 text-gray-700" viewBox="0 0 16 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M8 0C3.6 0 0 3.6 0 8c0 4 8 16 8 16s8-12 8-16c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
  </svg>
)

const IconPhone = () => (
  <svg className="h-6 w-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)

const IconEmail = () => (
  <svg className="h-4 w-5 text-gray-700" viewBox="0 0 24 20" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20 0H4C1.8 0 0 1.8 0 4v12c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 4-8 5-8-5v0zm0 12H4V4l8 5 8-5v12z" />
  </svg>
)

const IconHours = () => (
  <svg className="h-6 w-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-5.5-3.4V7z" />
  </svg>
)

const InfoCard = ({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) => (
  <div className="flex gap-4">
    <div className="shrink-0 pt-1">{icon}</div>
    <div>
      <h2 className="text-sm font-normal uppercase tracking-wider text-black">{label}</h2>
      <p className="mt-2 text-base leading-relaxed text-[#c5a059]">{children}</p>
    </div>
  </div>
)

export default async function ContactPage() {
  const telHref = `tel:${CONTENT.info.phone.replace(/[^\d+]/g, '')}`
  const page = await getPageBySlug('contact')
  const hero = getPageSection(page, 'Entrer en relation')

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems('Contact')} />

      <a
        href="#contact-content"
        className="sr-only fixed left-4 top-4 z-50 bg-cream px-4 py-3 text-sm font-bold text-ink focus:not-sr-only"
      >
        Aller au contenu
      </a>

      <main id="contact-content" className="w-full flex-1 bg-gradient-to-r from-[#fdfcf7] to-[#fdfcf7]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero */}
        <section aria-labelledby="contact-title" className="relative py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <div className="space-y-4">
              <p className="text-sm font-normal uppercase tracking-[0.1em] text-gray-500">
                {CONTENT.hero.eyebrow}
              </p>
              <h1 id="contact-title" className="font-serif text-5xl font-normal leading-tight text-black sm:text-6xl">
                {hero?.heading ?? CONTENT.hero.heading}
              </h1>
              <div aria-hidden="true" className="h-px w-24 bg-gray-500" />
              <p className="max-w-2xl text-base leading-relaxed text-[#c5a059]">
                {CONTENT.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section aria-label="Coordonnées et formulaire de contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: contact details */}
            <div className="space-y-8 lg:col-span-5">
              <InfoCard icon={<IconAddress />} label={CONTENT.info.addressLabel}>
                <address className="not-italic">{CONTENT.info.address}</address>
              </InfoCard>
              <InfoCard icon={<IconPhone />} label={CONTENT.info.phoneLabel}>
                <a href={telHref} className="hover:underline">
                  {CONTENT.info.phone}
                </a>
              </InfoCard>
              <InfoCard icon={<IconEmail />} label={CONTENT.info.emailLabel}>
                <a href={`mailto:${CONTENT.info.email}`} className="hover:underline">
                  {CONTENT.info.email}
                </a>
              </InfoCard>
              <InfoCard icon={<IconHours />} label={CONTENT.info.hoursLabel}>
                {CONTENT.info.hours}
              </InfoCard>
            </div>

            {/* Right: form */}
            <section aria-labelledby="contact-form-heading" className="border border-white/10 bg-white p-12 lg:col-span-7">
              <h2 id="contact-form-heading" className="mb-8 text-base font-normal text-black">
                {CONTENT.form.heading}
              </h2>
              <ContactForm privacyHref={CONTENT.form.privacyHref} />
            </section>
          </div>
        </section>

        {/* Map */}
        <section aria-labelledby="map-title" className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 id="map-title" className="text-base font-normal text-black">{CONTENT.map.heading}</h2>
            <a
              href={CONTENT.map.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="border-b border-gray-600 pb-1 text-right text-sm text-gray-600 hover:text-gray-800"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
          <div className="relative h-96 overflow-hidden border border-white/10">
            {CONTENT.map.embedUrl ? (
              <iframe
                title={CONTENT.map.heading}
                src={CONTENT.map.embedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <p className="text-gray-600">Carte non disponible</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
