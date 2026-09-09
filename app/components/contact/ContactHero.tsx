import Image from 'next/image'

import { CONTACT_FALLBACK } from './contact-data'

type ContactHeroProps = {
	label?: string | null
	heading?: string | null
	intro?: string | null
	image?: string | null
	imagePosition?: string
	backgroundColor?: string | null
	textColor?: string | null
}

/**
 * En-tête de la page Contact.
 * Le texte vient de la section CMS « Entrer en relation » ; une image
 * renseignée dans le CMS est affichée en arrière-plan de la section.
 */
export function ContactHero({
	label,
	heading,
	intro,
	image,
	imagePosition,
	backgroundColor,
	textColor,
}: ContactHeroProps) {
	const eyebrow = label ?? CONTACT_FALLBACK.hero.eyebrow
	const title = heading ?? CONTACT_FALLBACK.hero.heading
	const description = intro ?? CONTACT_FALLBACK.hero.description

	const content = (
		<div className="space-y-4">
			<p className="text-sm font-normal uppercase tracking-[0.1em] text-gray-500">{eyebrow}</p>
			<h1 id="contact-title" className="font-serif text-5xl font-normal leading-tight text-black sm:text-6xl">
				{title}
			</h1>
			<div aria-hidden="true" className="h-px w-24 bg-gray-500" />
			<p className="max-w-2xl text-base leading-relaxed text-[#c5a059]">{description}</p>
		</div>
	)

	if (image) {
		return (
			<section
				aria-labelledby="contact-title"
				className="relative w-full overflow-hidden py-20"
				style={{
					backgroundColor: backgroundColor ?? undefined,
					color: textColor ?? undefined,
				}}
			>
				<Image
					src={image}
					alt=""
					aria-hidden="true"
					fill
					sizes="100vw"
					className="object-cover"
					style={{ objectPosition: imagePosition ?? undefined }}
				/>
				<div aria-hidden="true" className="absolute inset-0 bg-white/90" />
				<div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12">{content}</div>
			</section>
		)
	}

	return (
		<section
			aria-labelledby="contact-title"
			className="relative py-20"
			style={{
				backgroundColor: backgroundColor ?? undefined,
				color: textColor ?? undefined,
			}}
		>
			<div className="mx-auto max-w-6xl px-6 sm:px-12">{content}</div>
		</section>
	)
}
