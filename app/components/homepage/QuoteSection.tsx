export function QuoteSection() {
	return (
		<section className="flex flex-col items-center bg-[#f4f1e6] px-8 py-28 text-center" id="team">
			{/* Guillemet de la maquette (42x30) : viewBox calee sur la bbox du glyphe Libre Caslon a 100px */}
			<svg aria-hidden="true" viewBox="5 -83 34 28" className="mb-7 h-[30px] w-[42px] fill-[#c4a000]">
				<text x="0" y="0" fontSize="100" className="font-serif">&rdquo;</text>
			</svg>
			<blockquote className="max-w-[900px] font-serif text-[clamp(25px,3vw,36px)] italic leading-[1.25]">
				“Le notaire n’est pas seulement le garant du contrat, il est l’artisan de la paix durable entre les parties. Notre mission est de traduire vos intentions en actes inattaquables.”
			</blockquote>
			<cite className="mt-7 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-accessible)] not-italic">Me. Alexandre Girard — Fondateur</cite>
		</section>
	)
}
