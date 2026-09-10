import { getPageBySlug, getPageSection, getSectionImageFocalPoint, getSectionImageUrl } from "@/lib/payload-server";
import { PAGE_SLUGS, SECTION_LABELS } from "@/lib/content-keys";
import { HomeFooter } from "@/app/components/homepage/HomeFooter";
import { getSiteNavItems, HomeHeader } from "@/app/components/homepage/HomeHeader";

import { ServicesHero } from "./ServicesHero";
import { ServicesList } from "./ServicesList";
import { ToolsBand } from "./ToolsBand";
import {
	FALLBACK_SERVICES,
	FALLBACK_TOOLS,
	toServiceViews,
	toToolViews,
} from "./services-data";

/**
 * Page Services : même modèle que la page d'accueil.
 * Les blocs sont des composants distincts, chacun alimenté par les sections
 * et groupes de la collection Payload « pages » (slug: services) :
 *  - ServicesHero   <- section « L'excellence au service de l'humain »
 *  - ServicesList   <- servicesContent.serviceItems
 *  - ToolsBand      <- section « Expertise digitale » + servicesContent.toolCards
 * Le contenu, les images et les couleurs se gèrent dans /admin ; le repli
 * statique ci-dessous n'est utilisé que lorsque Payload est indisponible.
 */
export async function ServicesPage() {
	const page = await getPageBySlug(PAGE_SLUGS.services);
	const hero = getPageSection(page, SECTION_LABELS.servicesHero);
	const toolsBand = getPageSection(page, SECTION_LABELS.servicesToolsBand);

	const serviceItems = page?.servicesContent?.serviceItems;
	const toolCards = page?.servicesContent?.toolCards;

	const services =
		serviceItems && serviceItems.length > 0 ? toServiceViews(serviceItems) : FALLBACK_SERVICES;
	const tools = toolCards && toolCards.length > 0 ? toToolViews(toolCards) : FALLBACK_TOOLS;

	return (
		<div className="min-h-screen bg-cream text-ink selection:bg-selection selection:text-selection-text">
			<HomeHeader compact navItems={getSiteNavItems("Services")} />

			<main id="content">
				<ServicesHero
					label={hero?.label}
					heading={hero?.heading}
					intro={hero?.intro}
					image={getSectionImageUrl(hero)}
					imagePosition={getSectionImageFocalPoint(hero)}
					backgroundColor={hero?.backgroundColor}
					textColor={hero?.textColor}
				/>

				<ServicesList services={services} />

				<ToolsBand
					label={toolsBand?.label}
					heading={toolsBand?.heading}
					intro={toolsBand?.intro}
					tools={tools}
					backgroundColor={toolsBand?.backgroundColor}
					textColor={toolsBand?.textColor}
				/>
			</main>

			<HomeFooter />
		</div>
	);
}
