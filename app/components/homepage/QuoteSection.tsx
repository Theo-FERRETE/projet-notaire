const quoteMark = 'https://www.figma.com/api/mcp/asset/0a9d266b-2bca-4bdc-b210-f3f3bc096bf3.svg'

export function QuoteSection() {
  return (
    <section className="flex flex-col items-center bg-[#f4f1e6] px-8 py-28 text-center" id="team">
      <img src={quoteMark} alt="" className="mb-7 h-[30px] w-[42px]" />
      <blockquote className="max-w-[900px] font-serif text-[clamp(25px,3vw,36px)] italic leading-[1.25]">
        “Le notaire n’est pas seulement le garant du contrat, il est l’artisan de la paix durable entre les parties. Notre mission est de traduire vos intentions en actes inattaquables.”
      </blockquote>
      <cite className="mt-7 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-accessible)] not-italic">Me. Alexandre Girard — Fondateur</cite>
    </section>
  )
}
