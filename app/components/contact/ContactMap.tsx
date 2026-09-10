import type { ContactMapView } from './contact-data'

type ContactMapProps = {
	view: ContactMapView
}

/**
 * Bandeau carte Google Maps de la page Contact.
 * Le titre vient de la section CMS « Nous trouver » ; l'iframe, le lien et
 * le libellé du lien viennent du groupe CMS `contactContent`. Couleur de
 * fond et couleur de texte sont éditables dans le CMS et s'appliquent à
 * toute la largeur du bandeau (comme sur la page d'accueil).
 */
export function ContactMap({ view }: ContactMapProps) {
	return (
		<section
			aria-labelledby="map-title"
			className="w-full"
		>
			<div className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
				<div className="mb-8 flex items-end justify-between gap-6">
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
				<div className="relative h-96 overflow-hidden border border-white/10">
					{view.embedUrl ? (
						<iframe
							title={view.heading}
							src={view.embedUrl}
							className="h-full w-full border-0"
							loading="lazy"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center bg-[#e4e7f0]">
							<p className="text-slate-muted">Carte non disponible</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
