import type { Page } from '../../../payload-types'

type MethodologyContent = NonNullable<Page['methodologyContent']>

const fallbackSteps = [
	{
		number: '01',
		title: 'Premier échange',
		description: 'Comprendre votre projet et vos objectifs dès le premier rendez-vous.',
	},
	{
		number: '02',
		title: 'Analyse & Conseil',
		description: 'Explications claires des options possibles adaptées à votre situation.',
	},
	{
		number: '03',
		title: 'Rédaction',
		description: "Élaboration d'actes conformes et juridiquement solides pour vous protéger.",
	},
	{
		number: '04',
		title: 'Signature & Suivi',
		description: "Accompagnement jusqu'à la finalisation. Vous avancez en toute sérénité.",
	},
]

export function QuoteSection({ content }: { content?: MethodologyContent | null }) {
	const steps = content?.steps?.length ? content.steps : fallbackSteps

	return (
		<section className="bg-[#f4f1e6] px-6 py-16 sm:px-8 sm:py-24 lg:px-8 lg:py-[118px]" id="methodologie">
			<div className="mx-auto max-w-[1216px]">
				<div className="mb-16 text-center sm:mb-20 lg:mb-[82px]">
					<p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#9b7e4f]">{content?.label ?? 'Méthodologie'}</p>
					<h2 className="font-serif text-[21px] leading-[1.25] text-[#10286d] sm:text-[25px] lg:text-[34px]">{content?.heading ?? 'Le droit, rendu plus lisible'}</h2>
				</div>

				<div className="mx-auto max-w-[720px] bg-[#fbf9f8] lg:grid lg:grid-cols-4 lg:max-w-none lg:border-t lg:border-[#10286d] lg:bg-transparent">
					{steps.map((step) => (
						<article key={step.number} className="min-h-[248px] border-b border-[#e8e4e1] px-10 py-11 last:border-b-0 sm:min-h-[250px] sm:px-10 sm:py-11 lg:min-h-[242px] lg:border-b-0 lg:border-r lg:border-[#d9d6cf] lg:px-8 lg:py-9 lg:last:border-r-0">
							<p className="font-serif text-[17px] leading-none text-[#c8cbd4]">{step.number}</p>
							<h3 className="mt-10 font-serif text-[18px] leading-[1.25] text-[#10286d]">{step.title}</h3>
							<p className="mt-5 max-w-[570px] text-[16px] leading-[1.5] tracking-[.2px] text-[#10286d]">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
