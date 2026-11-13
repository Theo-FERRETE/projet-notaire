import type { ServiceIconName, ToolIconName } from "@/app/components/icons/ServicesIcons";

export type ServiceView = {
	title: string;
	icon: ServiceIconName;
	paragraphs: string[];
	bullets?: string[];
	conclusion?: string;
};

export type ToolView = {
	id: string;
	title: string;
	description: string;
	label: string;
	icon: ToolIconName;
	href: string;
};

/** Forme brute d'un domaine d'intervention tel que stocké dans Payload. */
export type ServiceItemRow = {
	title?: string | null;
	icon?: string | null;
	paragraphs?: Array<{ paragraph: string }> | null;
	bullets?: Array<{ bullet: string }> | null;
	conclusion?: string | null;
};

/** Forme brute d'un outil / simulateur tel que stocké dans Payload. */
export type ToolCardRow = {
	slug?: string | null;
	title?: string | null;
	description?: string | null;
	label?: string | null;
	icon?: string | null;
	link?: string | null;
};

export const FALLBACK_SERVICES_HERO = {
	eyebrow: "L'excellence au service de l'humain",
	heading: "Nos Services",
	intro:
		"Nous vous accompagnons à chaque étape de votre projet, en collaboration avec des professionnels complémentaires (avocats, experts-comptables, agents immobiliers, CGPI…), afin de sécuriser l’ensemble de votre opération.",
} as const;

export const FALLBACK_TOOLS_INTRO =
	"Préparez vos projets avec nos outils de calcul en ligne pour une vision claire de votre patrimoine.";

export const FALLBACK_SERVICES: ServiceView[] = [
	{
		title: "Acheter / Vendre",
		icon: "home",
		paragraphs: [
			"Vous projetez d’acheter ou de vendre un bien immobilier (appartement, maison, terrain constructible) ? Vous souhaitez discuter de votre projet avec notre équipe et obtenir des explications sur les étapes nécessaires à la constitution de votre dossier ?",
			"Nos experts vous accompagnent tout au long du processus :",
		],
		bullets: [
			"Analyse des éléments essentiels à vérifier avant l’acquisition",
			"Sécurisation juridique de l’opération",
			"Estimation détaillée des frais liés à l’achat",
			"Évaluation et calcul de la plus-value potentielle en cas de revente",
		],
		conclusion:
			"Nous mettons à votre disposition un accompagnement personnalisé, transparent et rigoureux afin de concrétiser votre projet immobilier en toute confiance.",
	},
	{
		title: "Succession",
		icon: "scroll",
		paragraphs: [
			"À la suite du décès d’un proche, de nombreuses questions peuvent se poser : quelles formalités accomplir ? Quels justificatifs fournir ? Quel sera le montant des frais liés à la succession ?",
			"Le notaire vous guide à chaque étape afin de vous apporter des réponses précises et d’assurer un règlement de la succession dans un cadre juridique sécurisé.",
		],
	},
	{
		title: "Divorcer",
		icon: "heart-crack",
		paragraphs: [
			"Le notaire occupe une place centrale dans le cadre d’une procédure de divorce. Il vous conseille et vous accompagne pour répondre à vos questions, vous guider dans les démarches à entreprendre, préciser les pièces à fournir et vous éclairer sur les coûts liés à la procédure.",
			"À vos côtés, il garantit la sécurisation des enjeux patrimoniaux et veille à l’organisation équitable du partage des biens.",
		],
	},
	{
		title: "Le Couple",
		icon: "heart",
		paragraphs: [
			"La vie de couple peut aujourd’hui s’organiser selon différentes formes juridiques. Quel que soit votre projet commun, il est essentiel d’anticiper et d’assurer votre protection, à la fois individuelle et partagée.",
			"Le notaire vous conseille et vous accompagne afin de déterminer la solution la plus appropriée à votre situation et à vos objectifs.",
		],
	},
	{
		title: "Donation",
		icon: "gift",
		paragraphs: [
			"À un moment ou à un autre, la transmission anticipée d’une partie de son patrimoine à ses proches devient une question essentielle. Quels bénéfices peut-elle présenter sur les plans pratique, juridique et fiscal ?",
			"Le notaire vous conseille afin d’anticiper cette démarche et de structurer votre projet de transmission dans un cadre sécurisé, en adéquation avec votre situation personnelle et vos objectifs.",
		],
	},
	{
		title: "Transmission d'Entreprise",
		icon: "building",
		paragraphs: [
			"La transmission d’une entreprise implique des enjeux juridiques, fiscaux et patrimoniaux majeurs.",
			"Le notaire vous accompagne dans l’anticipation et la structuration de votre projet afin de sécuriser les opérations, protéger vos intérêts et assurer la continuité de votre activité.",
		],
	},
	{
		title: "Droit International Privé",
		icon: "globe",
		paragraphs: [
			"Le droit international privé encadre les situations présentant un élément d’extranéité, impliquant l’application de plusieurs systèmes juridiques.",
			"Le notaire vous accompagne pour analyser votre situation, déterminer les règles applicables et sécuriser vos projets dans un environnement international.",
		],
	},
];

/** Lien externe par défaut de chaque outil / simulateur. */
export const DEFAULT_TOOL_LINKS: Record<string, string> = {
	"simulateur-pret":
		"https://www.immobilier.notaires.fr/fr/simulation-emprunt-immobilier",
	"frais-mainlevee":
		"https://notairesdugrandparis.fr/fr/outils-et-services/calcul-des-frais-main-levee",
	barometre:
		"https://www.immobilier.notaires.fr/fr/prix-immobilier?typeLocalisation=FRANCE&neuf=A",
	"frais-acte":
		"https://notairesdugrandparis.fr/fr/outils-et-services/calcul-de-frais-d-achat",
	"plus-value":
		"https://notairesdugrandparis.fr/fr/outils-et-services/calcul-des-plus-values",
	"droits-succession":
		"https://notairesdugrandparis.fr/fr/outils-et-services/calcul-des-droits-de-succession",
};

export const FALLBACK_TOOLS: ToolView[] = [
	{
		id: "simulateur-pret",
		title: "Simulateur de prêt",
		description:
			"Estimez votre capacité d'emprunt et vos mensualités pour votre futur projet immobilier.",
		label: "Accéder au simulateur",
		icon: "simulateur-pret",
		href: DEFAULT_TOOL_LINKS["simulateur-pret"],
	},
	{
		id: "frais-mainlevee",
		title: "Calcul des frais de mainlevée",
		description:
			"Calculez le coût de la radiation d'une hypothèque suite au remboursement de votre crédit.",
		label: "Lancer le calcul",
		icon: "frais-mainlevee",
		href: DEFAULT_TOOL_LINKS["frais-mainlevee"],
	},
	{
		id: "barometre",
		title: "Baromètre immobilier",
		description:
			"Consultez les tendances du marché et les prix au m² pour orienter votre transaction.",
		label: "Voir les statistiques",
		icon: "barometre",
		href: DEFAULT_TOOL_LINKS.barometre,
	},
	{
		id: "frais-acte",
		title: "Calcul des frais d'acte",
		description:
			"Obtenez une estimation précise des frais d'acquisition pour votre achat immobilier.",
		label: "Estimer mes frais",
		icon: "frais-acte",
		href: DEFAULT_TOOL_LINKS["frais-acte"],
	},
	{
		id: "plus-value",
		title: "Simulateur impôts plus-value",
		description:
			"Anticipez l'imposition lors de la revente de votre bien immobilier hors résidence principale.",
		label: "Calculer l'impôt",
		icon: "plus-value",
		href: DEFAULT_TOOL_LINKS["plus-value"],
	},
	{
		id: "droits-succession",
		title: "Calcul des droits de succession",
		description:
			"Évaluez le montant des droits à payer selon le lien de parenté et l'actif successoral.",
		label: "Simuler les droits",
		icon: "droits-succession",
		href: DEFAULT_TOOL_LINKS["droits-succession"],
	},
];

export function toServiceViews(docs: ServiceItemRow[]): ServiceView[] {
	return docs.map((doc) => ({
		title: doc.title ?? "",
		icon: (doc.icon ?? "home") as ServiceIconName,
		paragraphs: (doc.paragraphs ?? []).map((paragraph) => paragraph.paragraph),
		bullets:
			doc.bullets && doc.bullets.length > 0
				? doc.bullets.map((bullet) => bullet.bullet)
				: undefined,
		conclusion: doc.conclusion ?? undefined,
	}));
}

export function toToolViews(docs: ToolCardRow[]): ToolView[] {
	return docs.map((doc) => ({
		id: doc.slug ?? "",
		title: doc.title ?? "",
		description: doc.description ?? "",
		label: doc.label ?? "",
		icon: (doc.icon ?? "simulateur-pret") as ToolIconName,
		href:
			doc.link ?? DEFAULT_TOOL_LINKS[doc.slug ?? ""] ?? DEFAULT_TOOL_LINKS["simulateur-pret"],
	}));
}

/** Données structurées (SEO) de la page Services. */
export function buildServicesStructuredData(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LegalService",
				"@id": `${siteUrl}/#office`,
				name: "Maître Laïla GSSIME — Notaire",
				description:
					"Étude notariale à Aix-en-Provence accompagnant les particuliers et les entreprises dans leurs projets immobiliers, familiaux, patrimoniaux et internationaux.",
				url: `${siteUrl}/services`,
				image: `${siteUrl}/qui-suis-je/expertise-notariale.png`,
				areaServed: { "@type": "City", name: "Aix-en-Provence" },
				address: {
					"@type": "PostalAddress",
					streetAddress: "34 cours Mirabeau",
					postalCode: "13100",
					addressLocality: "Aix-en-Provence",
					addressCountry: "FR",
				},
				telephone: "+33 4 22 58 01 80",
				email: "laila.gssime@notaires.fr",
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Services notariaux",
					itemListElement: FALLBACK_SERVICES.map((service) => ({
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: service.title,
						},
					})),
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Accueil",
						item: `${siteUrl}/`,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Services",
						item: `${siteUrl}/services`,
					},
				],
			},
		],
	};
}
