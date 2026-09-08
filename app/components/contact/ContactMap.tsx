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
			style={{
				backgroundColor: backgroundColor ?? undefined,
				color: textColor ?? undefined,
			}}
		>
			<div className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
				<div className="mb-8 flex items-end justify-between gap-6">
					<h2 id="map-title" className="text-base font-normal text-black">
						{view.heading}
					</h2>
					<a
						href={view.mapsLink}
						target="_blank"
						rel="noreferrer"
						className="border-b border-gray-600 pb-1 text-right text-sm text-gray-600 hover:text-gray-800"
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
						<div className="flex h-full w-full items-center justify-center bg-gray-200">
							<p className="text-gray-600">Carte non disponible</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
