import Link from 'next/link'

type ServiceCard = { title: string; description: string; icon: string }

const familyImage = '/qui-suis-je/expertise-notariale.png'

export function ServicesSection({ serviceCards, heading, familyImage: cmsFamilyImage }: { serviceCards: ServiceCard[]; heading?: string; familyImage?: string }) {
  const family = serviceCards.find((service) => service.title === 'Famille')
  const patrimoine = serviceCards.find((service) => service.title === 'Patrimoine')
  const immobilier = serviceCards.find((service) => service.title === 'Immobilier')
  const transmission = serviceCards.find((service) => service.title === "Transmission d'entreprise")
  const international = serviceCards.find((service) => service.title === 'Droit international privé')

  const textCard = (service: ServiceCard | undefined, className: string) => service ? (
    <article className={`flex min-h-[168px] flex-col justify-center border border-white/[.12] bg-[#12172b] p-6 sm:p-7 ${className}`}>
      <span className="mb-5 text-2xl leading-none text-[#e3c68e]" aria-hidden="true">{service.icon}</span>
      <h3 className="font-serif text-[22px] leading-[1.2] text-[#f5eee2]">{service.title}</h3>
      <p className="mt-4 max-w-[290px] text-[13px] leading-[1.55] text-[#c3c6d0]">{service.description}</p>
    </article>
  ) : null

  return (
    <section className="bg-[#2A254E] px-6 py-20 text-[#f5eee2] sm:px-8 sm:py-24 lg:px-12" id="services">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.2px] text-[#e3c68e]">Domaines d’expertise</p>
          <h2 className="font-serif text-[clamp(32px,4vw,46px)] font-medium leading-[1.2]">{heading ?? 'Sécuriser vos projets avec rigueur et clarté.'}</h2>
          <p className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-[#c3c6d0]">Nous collaborons avec d&apos;autres spécialistes et professionnels du droit afin de garantir une approche globale et cohérente.</p>
        </div>
        <Link href="/services" className="w-fit text-[11px] font-bold uppercase tracking-[1px] text-[#e3c68e] transition-colors hover:text-white lg:mb-1">Voir tous les services <span aria-hidden="true">→</span></Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {family ? <article className="group relative min-h-[280px] overflow-hidden sm:col-span-2 lg:min-h-[236px]">
            <img src={cmsFamilyImage ?? familyImage} alt="Une famille réunie autour d'un projet patrimonial" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
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
