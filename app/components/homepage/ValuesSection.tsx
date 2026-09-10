import type { Page } from '../../../payload-types'
import { ValuesIcon, type ValuesIconName } from '../icons/ValuesIcons'

type ValuesContent = NonNullable<Page['valuesContent']>

const fallbackValues: { title: string; description: string; icon: ValuesIconName }[] = [
	{
		title: 'Rigueur',
		description: 'Une exigence constante de précision et de sécurité juridique pour chaque dossier.',
		icon: 'document',
	},
	{
		title: 'Clarté',
		description: 'Des informations juridiques expliquées de manière simple, structurée et accessible.',
		icon: 'balance',
	},
	{
		title: 'Écoute',
		description: 'Une attention portée à chaque situation afin d’apporter des réponses adaptées.',
		icon: 'person',
	},
	{
		title: 'Confiance',
		description: 'Une relation durable fondée sur la transparence et le respect du cadre déontologique.',
		icon: 'handshake',
	},
]

const knownIcons: ValuesIconName[] = ['document', 'balance', 'person', 'handshake']

/** Icône choisie dans l'admin, avec repli sur l'icône de la valeur par défaut. */
function resolveIcon(icon: unknown, index: number): ValuesIconName {
	if (typeof icon === 'string' && (knownIcons as string[]).includes(icon)) {
		return icon as ValuesIconName
	}
	return fallbackValues[index % fallbackValues.length].icon
}

export function ValuesSection({ content }: { content?: ValuesContent | null }) {
	const values = content?.values?.length ? content.values : fallbackValues
	const heading = content?.heading ?? 'Des valeurs au service de votre confiance'

	// Signature visuelle de la section : le dernier mot du titre est souligné
	// d'un bandeau doré (comme « Valeurs » sur la maquette).
	return (
		<section className="bg-[#fdfcf7] px-6 py-16 text-ink sm:px-8 sm:py-24 lg:px-12" id="valeurs">
			<div className="mx-auto max-w-[1216px]">
				<div className="mb-14 text-center sm:mb-20">
					<p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-gold">{content?.label ?? 'Nos valeurs'}</p>
					<h2 className="font-serif text-[21px] leading-[1.25] text-ink sm:text-[25px] lg:text-[34px]">
						{heading}
					</h2>
				</div>

				<div className="grid gap-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-12">
					{values.map((value, index) => (
						<article key={value.title ?? index} className="flex flex-col items-center text-center">
							<ValuesIcon name={resolveIcon(value.icon, index)} size={80} className="h-20 w-20" />
							<h3 className="mt-6 font-serif text-[22px] leading-[1.25] text-ink sm:text-[24px]">{value.title}</h3>
							<p className="mt-4 max-w-[280px] text-[15px] leading-[1.6] text-slate-muted">{value.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
