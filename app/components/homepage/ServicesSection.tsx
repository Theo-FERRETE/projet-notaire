import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type ServiceCard = { title: string; description: string; icon: string }

const familyImage = '/qui-suis-je/expertise-notariale.png'

export function ServicesSection({ serviceCards, heading, intro, body, familyImage: cmsFamilyImage, familyImagePosition, backgroundColor, textColor }: { serviceCards: ServiceCard[]; heading?: string; intro?: string; body?: DefaultTypedEditorState | null; familyImage?: string; familyImagePosition?: string; backgroundColor?: string; textColor?: string }) {
  const family = serviceCards.find((service) => service.title === 'Famille')
  const patrimoine = serviceCards.find((service) => service.title === 'Patrimoine')
  const immobilier = serviceCards.find((service) => service.title === 'Immobilier')
  const transmission = serviceCards.find((service) => service.title === "Transmission d'entreprise")
  const international = serviceCards.find((service) => service.title === 'Droit international privé')

  const textCard = (service: ServiceCard | undefined, className: string) => service ? (
    <article className={`flex min-h-[168px] flex-col justify-center border border-line bg-[#f6f3ef] p-6 sm:p-7 ${className}`}>
      <span className="mb-5 text-2xl leading-none text-gold" aria-hidden="true">{service.icon}</span>
      <h3 className="font-serif text-[22px] leading-[1.2] text-ink">{service.title}</h3>
      <p className="mt-4 max-w-[290px] text-[13px] leading-[1.55] text-slate-muted">{service.description}</p>
    </article>
  ) : null

  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12" style={{ backgroundColor: backgroundColor ?? '#fdfcf7', color: textColor ?? undefined }} id="services">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.2px] text-gold">Domaines d’expertise</p>
          <h2 className="font-serif text-[clamp(32px,4vw,46px)] font-medium leading-[1.2]">{heading ?? 'Sécuriser vos projets avec rigueur et clarté.'}</h2>
          {body ? (
            <div className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-slate-muted">
              <RichText data={body} />
            </div>
          ) : (
            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-slate-muted">
              {intro ?? "Nous collaborons avec d'autres spécialistes et professionnels du droit afin de garantir une approche globale et cohérente."}
            </p>
          )}
        </div>
        <Link href="/services" className="w-fit text-[11px] font-bold uppercase tracking-[1px] text-gold transition-colors hover:text-navy lg:mb-1">Voir tous les services <span aria-hidden="true">→</span></Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {family ? <article className="group relative min-h-[280px] overflow-hidden sm:col-span-2 lg:min-h-[236px]">
            <Image src={cmsFamilyImage ?? familyImage} alt="Une famille réunie autour d'un projet patrimonial" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{ objectPosition: familyImagePosition ?? undefined }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101527]/70 via-transparent to-transparent" />
            <h3 className="absolute bottom-6 left-6 font-serif text-[28px] text-white sm:left-7">{family.title}</h3>
          </article> : null}
          {textCard(patrimoine, 'lg:col-start-3')}
          {textCard(immobilier, '')}
          {textCard(transmission, '')}
          {textCard(international, '')}
        </div>
      </div>
    </section>
  )
}