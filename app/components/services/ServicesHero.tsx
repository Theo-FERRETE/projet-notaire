import Image from "next/image";

import { FALLBACK_SERVICES_HERO } from "./services-data";

type ServicesHeroProps = {
	label?: string | null;
	heading?: string | null;
	intro?: string | null;
	image?: string | null;
	backgroundColor?: string | null;
	textColor?: string | null;
};

/**
 * Bandeau d'en-tête de la page Services.
 * Le texte vient de la section CMS « L'excellence au service de l'humain » ;
 * une image renseignée dans le CMS est affichée en arrière-plan de la section.
 */
export function ServicesHero({
	label,
	heading,
	intro,
	image,
	backgroundColor,
	textColor,
}: ServicesHeroProps) {
	const eyebrow = label ?? FALLBACK_SERVICES_HERO.eyebrow;
	const title = heading ?? FALLBACK_SERVICES_HERO.heading;
	const description = intro ?? FALLBACK_SERVICES_HERO.intro;

	const content = (
		<>
			<p className="mb-4 block font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
				{eyebrow}
			</p>
			<h1
				id="services-title"
				className="mx-auto mb-8 max-w-4xl font-serif text-[40px] leading-[1.2] tracking-[-0.02em] text-ink md:text-[64px] md:leading-[1.1]"
			>
				{title}
			</h1>
			<div aria-hidden="true" className="mx-auto mb-8 h-px w-16 bg-[#c7c7bf]" />
			<p className="mx-auto max-w-3xl font-sans text-lg italic leading-relaxed text-slate-muted">
				{description}
			</p>
		</>
	);

	if (image) {
		return (
			<section
				aria-labelledby="services-title"
				className="relative w-full overflow-hidden py-16 text-center md:py-20"
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
				/>
				<div aria-hidden="true" className="absolute inset-0 bg-white/90" />
				<div className="relative z-10 mx-auto w-full max-w-[1280px] px-8">
					{content}
				</div>
			</section>
		);
	}

	return (
		<section
			aria-labelledby="services-title"
			className="relative mx-auto max-w-[1280px] px-8 py-16 text-center md:py-20"
			style={{
				backgroundColor: backgroundColor ?? undefined,
				color: textColor ?? undefined,
			}}
		>
			{content}
		</section>
	);
}
