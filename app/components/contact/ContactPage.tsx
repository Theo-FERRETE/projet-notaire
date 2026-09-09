import { getPageBySlug, getPageSection, getSectionImageFocalPoint, getSectionImageUrl } from '@/lib/payload-server'
import { PAGE_SLUGS, SECTION_LABELS } from '@/lib/content-keys'
import { HomeFooter } from '@/app/components/homepage/HomeFooter'
import { getSiteNavItems, HomeHeader } from '@/app/components/homepage/HomeHeader'

import { ContactDetails } from './ContactDetails'
import { ContactHero } from './ContactHero'
import { ContactMap } from './ContactMap'
import {
	buildContactInfoView,
	buildContactMapView,
	type ContactContentRow,
} from './contact-data'

/**
 * Page Contact : même modèle que la page d'accueil.
 * Chaque bloc est un composant distinct alimenté par la collection Payload
 * « pages » (slug: contact) :
 *  - ContactHero     <- section « Entrer en relation »
 *  - ContactDetails  <- groupe contactContent (coordonnées, formulaire, citation)
 *  - ContactMap      <- section « Nous trouver » + groupe contactContent (carte)
 * Le contenu, l'image et les couleurs se gèrent dans /admin ; le repli
 * statique n'est utilisé que lorsque Payload est indisponible.
 */
export async function ContactPage() {
	const page = await getPageBySlug(PAGE_SLUGS.contact)
	const hero = getPageSection(page, SECTION_LABELS.contactHero)
	const mapBand = getPageSection(page, SECTION_LABELS.contactMapBand)
	const contactContent = page?.contactContent as ContactContentRow | null | undefined

	const quoteImage =
		contactContent?.quoteImage && typeof contactContent.quoteImage === 'object' && 'url' in contactContent.quoteImage
			? {
					src: contactContent.quoteImage.url ?? undefined,
					alt: contactContent.quoteImage.alt ?? undefined,
					position:
						contactContent.quoteImage.focalX != null && contactContent.quoteImage.focalY != null
							? `${contactContent.quoteImage.focalX}% ${contactContent.quoteImage.focalY}%`
							: undefined,
				}
			: null

	const infoView = buildContactInfoView(contactContent, quoteImage)
	const mapView = buildContactMapView(contactContent, mapBand?.heading)

	return (
		<div className="flex min-h-screen flex-col bg-cream text-ink">
			<HomeHeader compact navItems={getSiteNavItems('Contact')} />

			<a
				href="#contact-content"
				className="sr-only fixed left-4 top-4 z-50 bg-cream px-4 py-3 text-sm font-bold text-ink focus:not-sr-only"
			>
				Aller au contenu
			</a>

			<main id="contact-content" className="w-full flex-1 bg-gradient-to-r from-[#fdfcf7] to-[#fdfcf7]">
				<ContactHero
					label={hero?.label}
					heading={hero?.heading}
					intro={hero?.intro}
					image={getSectionImageUrl(hero)}
					imagePosition={getSectionImageFocalPoint(hero)}
					backgroundColor={hero?.backgroundColor}
					textColor={hero?.textColor}
				/>

				<ContactDetails view={infoView} />

				<ContactMap
					view={mapView}
					backgroundColor={mapBand?.backgroundColor}
					textColor={mapBand?.textColor}
				/>
			</main>

			<HomeFooter />
		</div>
	)
}
