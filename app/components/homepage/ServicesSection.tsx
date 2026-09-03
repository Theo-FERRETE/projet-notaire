type ServiceCard = { title: string; description: string; icon: string }

const familyImage = 'https://www.figma.com/api/mcp/asset/40875862-0fac-457e-a94f-45ac0be4dab8.png'

export function ServicesSection({ serviceCards }: { serviceCards: ServiceCard[] }) {
  return (
    <section className="bg-[#f4f1e6] px-8 py-24" id="services">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.2px] text-[var(--gold-accessible)]">Domaines d’expertise</p>
          <h2 className="font-serif text-[clamp(34px,4vw,46px)] font-medium leading-[1.25]">Sécuriser vos projets<br />avec rigueur et clarté.</h2>
        </div>
        <a href="#contact" className="hidden text-[11px] font-bold uppercase tracking-[1px] text-[#0d0070] md:block">Voir tous les services →</a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {serviceCards.map((service) => (
          <article key={service.title} className="overflow-hidden border border-black/[.08] bg-[#fdfcf7]">
            <img src={familyImage} alt="" className="h-[190px] w-full object-cover" />
            <div className="p-[22px]">
              <span className="mb-4 grid h-[38px] w-[38px] place-items-center rounded-full border border-[#c4a000] text-[#c4a000]">{service.icon}</span>
              <h3 className="font-serif text-[25px] font-medium">{service.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#4d4732]">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
