import type { ContactMapView } from './contact-data'

type ContactMapProps = {
	view: ContactMapView
	backgroundColor?: string | null
	textColor?: string | null
}

/**
 * Bandeau carte Google Maps de la page Contact.
 * Le titre vient de la section CMS « Nous trouver » ; l'iframe, le lien et
 * le libellé du lien viennent du groupe CMS `contactContent`. Couleur de
 * fond et couleur de texte sont éditables dans le CMS et s'appliquent à
 * toute la largeur du bandeau (comme sur la page d'accueil).
 */
export function ContactMap({ view, backgroundColor, textColor }: ContactMapProps) {
	return (
		<section
			aria-labelledby="map-title"
			className="w-full"
			style={{ backgroundColor: backgroundColor ?? undefined, color: textColor ?? undefined }}
		>
			<div className="mx-auto max-w-6xl px-6 py-10 sm:px-12">
				<div className="mb-4 flex items-end justify-between gap-6">
					<h2 id="map-title" className="text-base font-normal text-ink">
						{view.heading}
					</h2>
					<a
						href={view.mapsLink}
						target="_blank"
						rel="noreferrer"
						className="border-b border-slate-blue pb-1 text-right text-sm text-slate-muted hover:text-navy"
					>
						{view.mapsLinkLabel}
					</a>
				</div>
				<div className="relative h-24 overflow-hidden border border-white/10">
					<div className="flex h-full w-full items-center justify-center bg-[#e4e7f0] p-3 text-center">
						<a
							href={view.mapsLink}
							target="_blank"
							rel="noopener noreferrer"
							className="border border-navy bg-white px-4 py-2 text-xs font-medium text-navy transition-colors hover:bg-navy hover:text-white"
						>
							{view.mapsLinkLabel}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
