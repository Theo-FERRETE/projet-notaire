import type { Metadata } from 'next'
import Link from 'next/link'

import { HomeFooter } from '@/app/components/homepage/HomeFooter'
import { getSiteNavItems, HomeHeader } from '@/app/components/homepage/HomeHeader'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de l’office notarial de Maître Laïla GSSIME à Aix-en-Provence.',
  alternates: { canonical: '/confidentialite' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/confidentialite',
    title: 'Politique de confidentialité | Maître Laïla GSSIME — Notaire',
    description:
      'Consultez la politique de confidentialité de l’office notarial de Maître Laïla GSSIME.',
  },
}

const sections = [
  {
    number: '1.',
    title: 'Quelles données personnelles sont collectées ?',
    content: (
      <>
        <p>Plusieurs types de données à caractère personnel peuvent être collectés sur le site et autres solutions digitales, notamment :</p>
        <ul>
          <li>Les données relatives à l’identité ;</li>
          <li>Les coordonnées de contact.</li>
        </ul>
      </>
    ),
  },
  {
    number: '2.',
    title: 'Pourquoi certaines de mes données sont-elles collectées ?',
    content: (
      <>
        <p>Vos données personnelles, recueillies par l’office notarial, nous permettent de :</p>
        <ul>
          <li>Vous fournir des services : réponse aux demandes de contact, envoi de documentations ou d’informations, prise de rendez-vous.</li>
        </ul>
      </>
    ),
  },
  {
    number: '3.',
    title: 'Combien de temps mes données sont-elles conservées ?',
    content: (
      <>
        <p>Les données collectées seront traitées et conservées pendant la durée nécessaire au regard des finalités pour lesquelles elles sont traitées, dans le respect des normes, règlements et textes en vigueur.</p>
        <p>Néanmoins et conformément à l’article 5 du RGPD, certaines données à caractère personnel pourront être « conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l’intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques ».</p>
      </>
    ),
  },
  {
    number: '5.',
    title: 'Sur quels fondements juridiques reposent les traitements de mes données ?',
    content: (
      <>
        <p>Les traitements de vos données collectées ont pour bases légales :</p>
        <ul>
          <li>L’intérêt légitime lié à nos activités et à notre mission ;</li>
          <li>Le consentement (formulaire de contact) ;</li>
          <li>L’obligation légale selon les circonstances de la collecte des données.</li>
        </ul>
      </>
    ),
  },
  {
    number: '6.',
    title: 'Quels sont les destinataires de mes données ?',
    content: (
      <>
        <p>Les données personnelles vous concernant ne seront destinées qu’aux services et personnes habilitées à les traiter, conformément aux finalités déterminées.</p>
        <p>Ces données peuvent également être communiquées aux sous-traitants habilités pour la réalisation des finalités du traitement.</p>
      </>
    ),
  },
  {
    number: '7.',
    title: 'Mes données sortiront-elles de l’Union Européenne ?',
    content: (
      <>
        <p>Vos données personnelles seront hébergées au sein de l’Union Européenne.</p>
        <p>Pour autant, restant libre du choix de ses relations techniques et/ou commerciales, l’office notarial se réserve ainsi le droit d’héberger ou de transférer certaines données auprès de sous-traitants établis en dehors de l’Union Européenne à la condition qu’ils présentent les garanties suffisantes au regard des exigences du RGPD, notamment si les pays présentent un niveau adéquat de protection, conformément aux articles 44 et suivants du Règlement Européen UE2016/679 du 27 avril 2016.</p>
      </>
    ),
  },
  {
    number: '8.',
    title: 'Mes données sont-elles sécurisées lors de leurs traitements ?',
    content: (
      <>
        <p>Toutes les personnes ayant accès à vos données sont habilitées et tenues par une obligation de confidentialité.</p>
        <p>À ce titre et conformément à l’article 32 du RGPD, l’office notarial ainsi que l’ensemble des sous-traitants s’engagent à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires en vue de garantir la sécurité ainsi que la confidentialité des données traitées.</p>
      </>
    ),
  },
  {
    number: '9.',
    title: 'Je possède différents droits, comment puis-je les exercer ?',
    content: (
      <>
        <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016, vous disposez des droits d’accès, de rectification, d’effacement et de portabilité des données personnelles vous concernant. Vous pouvez également obtenir la limitation du traitement de vos données ou vous opposer à leur traitement pour un motif légitime.</p>
        <p>Vous pouvez exercer vos droits par e-mail à :{' '}
          <a href="mailto:laila.gssime@notaires.fr">laila.gssime@notaires.fr</a>
          <br />ou par courrier postal à l’adresse suivante : 34 cours Mirabeau, 13100 Aix-en-Provence
        </p>
        <p>Vous pouvez également contacter notre délégué à la protection des données personnelles à l’adresse suivante :{' '}
          <a href="mailto:dpo.notaires@datavigiprotection.fr">Data Vigi Protection – dpo.notaires@datavigiprotection.fr</a>
        </p>
        <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez également introduire une réclamation auprès de l’autorité de contrôle compétente à l’adresse{' '}
          <a href="https://www.cnil.fr/plaintes" target="_blank" rel="noreferrer">https://www.cnil.fr/plaintes</a>.
        </p>
      </>
    ),
  },
]

export default function ConfidentialitePage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems('')} />

      <main id="content" className="flex-1">
        <section className="border-b border-line bg-[#fdfcf7] px-8 pb-20 pt-24 lg:pb-28 lg:pt-32">
          <div className="mx-auto flex w-full max-w-[896px] flex-col items-center gap-6 text-center">
            <p className="text-xs font-bold uppercase leading-[16.8px] tracking-[2.4px] text-gold">Informations légales</p>
            <h1 className="font-serif text-[40px] leading-tight tracking-[-1.28px] text-ink sm:text-[52px] lg:text-[64px]">Politique de confidentialité</h1>
            <span aria-hidden className="h-px w-24 bg-gold" />
            <p className="max-w-[672px] text-[18px] leading-[28.8px] text-slate-muted">La protection de vos données personnelles est une priorité pour l’office notarial de Maître Laïla GSSIME.</p>
          </div>
        </section>

        <article className="mx-auto w-full max-w-[896px] px-8 py-16 lg:py-24">
          <div className="space-y-6 text-base leading-[1.75] text-ink">
            <p>L’office notarial de Maître Laïla GSSIME, en tant que Responsable de traitement, est sensible à la protection de vos données à caractère personnel. À ce titre, la présente politique de confidentialité a pour objet de vous informer de la manière dont vos données sont traitées et vous assurer du respect de la réglementation établie notamment par le Règlement Européen UE2016/679 du 27 avril 2016 ainsi que de la loi 78-17 Informatique et Libertés modifiée du 6 janvier 1978.</p>
            <p>Cette politique de confidentialité est applicable à l’ensemble des sites internet, applications et services, édités et utilisés par l’office notarial. Cette politique étant vouée à être mise à jour selon les dispositions légales et les services proposés par l’office notarial, nous vous invitons à la consulter le plus fréquemment possible.</p>
          </div>

          <div className="mt-14 space-y-14 lg:mt-20 lg:space-y-16">
            {sections.map((section) => (
              <section key={section.number} aria-labelledby={`privacy-section-${section.number}`}>
                <div className="mb-5 flex items-start gap-4 border-b border-line pb-4">
                  <span className="pt-1 text-xs font-bold uppercase tracking-[1.2px] text-gold">{section.number}</span>
                  <h2 id={`privacy-section-${section.number}`} className="font-serif text-[26px] leading-[1.25] text-ink sm:text-[32px]">{section.title}</h2>
                </div>
                <div className="space-y-5 text-base leading-[1.75] text-slate-muted [&_a]:text-gold-accessible [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">{section.content}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-6 text-sm leading-relaxed text-slate-muted">
            <p>Dernière mise à jour le 15/09/2026</p>
            <p className="mt-3">Pour toute question concernant cette politique, vous pouvez également nous <Link href="/contact" className="text-gold-accessible underline underline-offset-2 hover:text-ink">contacter</Link>.</p>
          </div>
        </article>
      </main>

      <HomeFooter />
    </div>
  )
}
