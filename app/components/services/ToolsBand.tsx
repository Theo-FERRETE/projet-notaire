import Link from "next/link";

import { ToolIcon } from "@/app/components/icons/ServicesIcons";
import { FALLBACK_TOOLS_INTRO } from "./services-data";
import type { ToolView } from "./services-data";

type ToolsBandProps = {
	label?: string | null;
	heading?: string | null;
	intro?: string | null;
	tools: ToolView[];
	backgroundColor?: string | null;
	textColor?: string | null;
};

/**
 * Bandeau « Outils et Simulateurs » de la page Services.
 * L'en-tête (petit titre, titre, accroche) provient de la section CMS
 * « Expertise digitale » ; les cartes proviennent de
 * « servicesContent.toolCards ». Couleur de fond et couleur de texte
 * sont éditables dans le CMS.
 */
export function ToolsBand({
	label,
	heading,
	intro,
	tools,
	backgroundColor,
	textColor,
}: ToolsBandProps) {
	const eyebrow = label ?? "Expertise digitale";
	const title = heading ?? "Outils et Simulateurs";
	const description = intro ?? FALLBACK_TOOLS_INTRO;

	return (
		<section
			aria-labelledby="tools-title"
			className="border-t border-[#c7c7bf] bg-[#f2eee2] py-[120px]"
			style={{
				backgroundColor: backgroundColor ?? undefined,
				color: textColor ?? undefined,
			}}
		>
			<div className="mx-auto max-w-[1280px] px-8">
				<div className="mb-16 text-center md:mb-20">
					<p className="mb-4 block font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
						{eyebrow}
					</p>
					<h2
						id="tools-title"
						className="mb-6 font-serif text-[40px] leading-[1.2] text-ink md:text-5xl"
					>
						{title}
					</h2>
					<div aria-hidden="true" className="mx-auto mb-6 h-px w-12 bg-[#c7c7bf]" />
					<p className="mx-auto max-w-xl font-sans text-base leading-relaxed text-slate-muted">
						{description}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{tools.map((tool) => (
						<article
							className="flex h-full flex-col items-center border border-[#c7c7bf] bg-cream p-8 text-center"
							id={tool.id}
							key={tool.id}
						>
							<div className="mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-[#f8f3e8]">
								<ToolIcon name={tool.icon} size={180} className="size-3/4 object-contain opacity-60" />
							</div>
							<h3 className="mb-4 font-serif text-xl uppercase tracking-tight text-ink">
								{tool.title}
							</h3>
							<p className="mb-8 flex-1 font-sans text-base leading-relaxed text-slate-muted">
								{tool.description}
							</p>
							<Link
								aria-label={`${tool.label} — ${tool.title}`}
								className="inline-flex w-full items-center justify-center bg-ink px-6 py-3 font-ui text-[10px] font-bold uppercase tracking-widest text-cream transition-colors hover:bg-gold"
								href="/contact"
							>
								{tool.label}
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
