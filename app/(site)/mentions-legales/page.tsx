import type { Metadata } from 'next'
import Link from 'next/link'

import { HomeFooter } from '@/app/components/homepage/HomeFooter'
import { getSiteNavItems, HomeHeader } from '@/app/components/homepage/HomeHeader'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de Maître Laïla GSSIME, notaire à Aix-en-Provence.',
  alternates: { canonical: '/mentions-legales' },
}

const sections = [
  {
    title: 'Éditeur du site',
    content: (
      <>
        <p>Le présent site est édité par l’office notarial de Maître Laïla GSSIME.</p>
        <p>
          Adresse : 34 cours Mirabeau, 13100 Aix-en-Provence, France
          <br />
          E-mail : <a href="mailto:laila.gssime@notaires.fr">laila.gssime@notaires.fr</a>
        </p>
        <p>Forme juridique, numéro SIREN/SIRET et numéro d’identification de l’office : <strong>[À compléter par l’office]</strong></p>
      </>
    ),
  },
  {
    title: 'Directeur de la publication',
    content: <p>La directrice de la publication est Maître Laïla GSSIME.</p>,
  },
  {
    title: 'Hébergement',
    content: <p>Le nom et les coordonnées de l’hébergeur seront renseignés après confirmation du prestataire d’hébergement : <strong>[À compléter]</strong>.</p>,
  },
  {
    title: 'Propriété intellectuelle',
    content: <p>Les textes, images, logo, graphismes et éléments présents sur ce site sont protégés par les règles applicables à la propriété intellectuelle. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation préalable, est interdite sauf exception légale.</p>,
  },
  {
    title: 'Données personnelles',
    content: <p>Les informations relatives au traitement des données personnelles et à l’exercice des droits des utilisateurs sont disponibles dans la <Link href="/confidentialite">politique de confidentialité</Link>.</p>,
  },
  {
    title: 'Contact',
    content: <p>Pour toute question concernant le site, vous pouvez utiliser <Link href="/contact">la page Contact</Link> ou écrire à <a href="mailto:laila.gssime@notaires.fr">laila.gssime@notaires.fr</a>.</p>,
  },
]

export default function MentionsLegalesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems('')} />

      <main id="content" className="flex-1">
        <section className="border-b border-line bg-[#fdfcf7] px-8 pb-20 pt-24 lg:pb-28 lg:pt-32">
          <div className="mx-auto flex w-full max-w-[896px] flex-col items-center gap-6 text-center">
            <p className="text-xs font-bold uppercase leading-[16.8px] tracking-[2.4px] text-gold">Informations légales</p>
            <h1 className="font-serif text-[40px] leading-tight tracking-[-1.28px] text-ink sm:text-[52px] lg:text-[64px]">Mentions légales</h1>
            <span aria-hidden className="h-px w-24 bg-gold" />
            <p className="max-w-[672px] text-[18px] leading-[28.8px] text-slate-muted">Les informations légales relatives au site de l’office notarial de Maître Laïla GSSIME.</p>
          </div>
        </section>

        <article className="mx-auto w-full max-w-[896px] px-8 py-16 lg:py-24">
          <div className="space-y-14 lg:space-y-16">
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={section.title}>
                <div className="mb-5 border-b border-line pb-4">
                  <h2 id={section.title} className="font-serif text-[26px] leading-[1.25] text-ink sm:text-[32px]">{section.title}</h2>
                </div>
                <div className="space-y-5 text-base leading-[1.75] text-slate-muted [&_a]:text-gold-accessible [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-ink">{section.content}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-6 text-sm leading-relaxed text-slate-muted">
            <p>Dernière mise à jour le 15/09/2026</p>
          </div>
        </article>
      </main>

      <HomeFooter />
    </div>
  )
}
