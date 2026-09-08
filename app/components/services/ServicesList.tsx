import { ServiceIcon } from "@/app/components/icons/ServicesIcons";
import type { ServiceView } from "./services-data";

/**
 * Domaine d'intervention de la page Services.
 * Chaque bloc provient de « servicesContent.serviceItems » du CMS (titre,
 * icône, paragraphes, points clés et conclusion entièrement éditables).
 */
export function ServicesList({ services }: { services: ServiceView[] }) {
	return (
		<section
			aria-labelledby="service-list-title"
			className="mx-auto max-w-[1280px] space-y-24 px-8 pb-[120px]"
		>
			<h2 id="service-list-title" className="sr-only">
				Les services de l&apos;étude
			</h2>

			{services.map((service, index) => {
				const titleId = `service-title-${index}`;
				const isReversed = index % 2 === 1;

				return (
					<article
						aria-labelledby={titleId}
						className={`flex flex-col items-center gap-12 md:flex-row md:gap-24 ${isReversed ? "md:flex-row-reverse" : ""}`}
						key={service.title}
					>
						<div
							className={`w-full flex-1 py-4 ${isReversed ? "md:border-l md:border-[#c7c7bf] md:pl-12" : "md:border-r md:border-[#c7c7bf] md:pr-12"}`}
						>
							<h2 id={titleId} className="mb-8 font-serif text-4xl font-normal text-gold">
								{service.title}
							</h2>
							<div className="space-y-6 font-sans text-base leading-relaxed text-slate-muted">
								{service.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								{service.bullets ? (
									<ul className="list-none space-y-2 pl-2" aria-label={`Points clés — ${service.title}`}>
										{service.bullets.map((bullet) => (
											<li className="flex items-start gap-2" key={bullet}>
												<span aria-hidden="true">—</span>
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								) : null}

								{service.conclusion ? (
									<p className="font-medium italic text-ink">{service.conclusion}</p>
								) : null}
							</div>
						</div>

						<div className="flex w-full flex-1 items-center justify-center" aria-hidden="true">
							<div className="relative flex size-64 items-center justify-center">
								<ServiceIcon name={service.icon} size={160} className="opacity-30" />
								<div className="absolute inset-0 scale-110 rounded-full border border-gold/20" />
							</div>
						</div>
					</article>
				);
			})}
		</section>
	);
}
