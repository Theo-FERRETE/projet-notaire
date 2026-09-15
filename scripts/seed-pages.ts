import config from '../payload.config'
import { getPayload, type Payload } from 'payload'
import type { Page } from '../payload-types'
import {
	CANONICAL_HEADINGS,
	LEGACY_SEEDED_HEADINGS,
	SECTION_INTROS,
	SECTION_LABELS,
} from '../lib/content-keys'

type PageSeed = Pick<Page, 'title' | 'slug' | 'sections' | 'methodologyContent' | 'valuesContent' | 'servicesContent' | 'contactContent' | 'seo'>

const methodologyContentSeed: NonNullable<Page['methodologyContent']> = {
	label: 'Méthodologie',
	heading: 'Le droit, rendu plus lisible',
	steps: [
		{ number: '01', title: 'Premier échange', description: 'Comprendre votre projet et vos objectifs dès le premier rendez-vous.' },
		{ number: '02', title: 'Analyse & Conseil', description: 'Explications claires des options possibles adaptées à votre situation.' },
		{ number: '03', title: 'Rédaction', description: "Élaboration d'actes conformes et juridiquement solides pour vous protéger." },
		{ number: '04', title: 'Signature & Suivi', description: "Accompagnement jusqu'à la finalisation. Vous avancez en toute sérénité." },
	],
}

const valuesContentSeed: NonNullable<Page['valuesContent']> = {
	label: 'Nos valeurs',
	heading: 'Nos Valeurs',
	values: [
		{ title: 'Rigueur', icon: 'document', description: 'Une exigence constante de précision et de sécurité juridique pour chaque dossier.' },
		{ title: 'Clarté', icon: 'balance', description: 'Des informations juridiques expliquées de manière simple, structurée et accessible.' },
		{ title: 'Écoute', icon: 'person', description: 'Une attention portée à chaque situation afin d’apporter des réponses adaptées.' },
		{ title: 'Confiance', icon: 'handshake', description: 'Une relation durable fondée sur la transparence et le respect du cadre déontologique.' },
	],
}

// ---- Contenus de la page Services (copiés à l'identique du site statique) ----

const serviceItemsSeed: NonNullable<Page['servicesContent']>['serviceItems'] = [
	{
		title: 'Acheter / Vendre',
		icon: 'home',
		paragraphs: [
			{
				paragraph:
					'Vous projetez d’acheter ou de vendre un bien immobilier (appartement, maison, terrain constructible) ? Vous souhaitez discuter de votre projet avec notre équipe et obtenir des explications sur les étapes nécessaires à la constitution de votre dossier ?',
			},
			{ paragraph: 'Nos experts vous accompagnent tout au long du processus :' },
		],
		bullets: [
			{ bullet: 'Analyse des éléments essentiels à vérifier avant l’acquisition' },
			{ bullet: 'Sécurisation juridique de l’opération' },
			{ bullet: 'Estimation détaillée des frais liés à l’achat' },
			{ bullet: 'Évaluation et calcul de la plus-value potentielle en cas de revente' },
		],
		conclusion:
			'Nous mettons à votre disposition un accompagnement personnalisé, transparent et rigoureux afin de concrétiser votre projet immobilier en toute confiance.',
	},
	{
		title: 'Succession',
		icon: 'scroll',
		paragraphs: [
			{
				paragraph:
					'À la suite du décès d’un proche, de nombreuses questions peuvent se poser : quelles formalités accomplir ? Quels justificatifs fournir ? Quel sera le montant des frais liés à la succession ?',
			},
			{
				paragraph:
					'Le notaire vous guide à chaque étape afin de vous apporter des réponses précises et d’assurer un règlement de la succession dans un cadre juridique sécurisé.',
			},
		],
	},
	{
		title: 'Divorcer',
		icon: 'heart-crack',
		paragraphs: [
			{
				paragraph:
					'Le notaire occupe une place centrale dans le cadre d’une procédure de divorce. Il vous conseille et vous accompagne pour répondre à vos questions, vous guider dans les démarches à entreprendre, préciser les pièces à fournir et vous éclairer sur les coûts liés à la procédure.',
			},
			{
				paragraph:
					'À vos côtés, il garantit la sécurisation des enjeux patrimoniaux et veille à l’organisation équitable du partage des biens.',
			},
		],
	},
	{
		title: 'Le Couple',
		icon: 'heart',
		paragraphs: [
			{
				paragraph:
					'La vie de couple peut aujourd’hui s’organiser selon différentes formes juridiques. Quel que soit votre projet commun, il est essentiel d’anticiper et d’assurer votre protection, à la fois individuelle et partagée.',
			},
			{
				paragraph:
					'Le notaire vous conseille et vous accompagne afin de déterminer la solution la plus appropriée à votre situation et à vos objectifs.',
			},
		],
	},
	{
		title: 'Donation',
		icon: 'gift',
		paragraphs: [
			{
				paragraph:
					'À un moment ou à un autre, la transmission anticipée d’une partie de son patrimoine à ses proches devient une question essentielle. Quels bénéfices peut-elle présenter sur les plans pratique, juridique et fiscal ?',
			},
			{
				paragraph:
					'Le notaire vous conseille afin d’anticiper cette démarche et de structurer votre projet de transmission dans un cadre sécurisé, en adéquation avec votre situation personnelle et vos objectifs.',
			},
		],
	},
	{
		title: "Transmission d'Entreprise",
		icon: 'building',
		paragraphs: [
			{
				paragraph:
					'La transmission d’une entreprise implique des enjeux juridiques, fiscaux et patrimoniaux majeurs.',
			},
			{
				paragraph:
					'Le notaire vous accompagne dans l’anticipation et la structuration de votre projet afin de sécuriser les opérations, protéger vos intérêts et assurer la continuité de votre activité.',
			},
		],
	},
	{
		title: 'Droit International Privé',
		icon: 'globe',
		paragraphs: [
			{
				paragraph:
					'Le droit international privé encadre les situations présentant un élément d’extranéité, impliquant l’application de plusieurs systèmes juridiques.',
			},
			{
				paragraph:
					'Le notaire vous accompagne pour analyser votre situation, déterminer les règles applicables et sécuriser vos projets dans un environnement international.',
			},
		],
	},
]

const toolCardsSeed: NonNullable<Page['servicesContent']>['toolCards'] = [
	{
		slug: 'simulateur-pret',
		title: 'Simulateur de prêt',
		description:
			"Estimez votre capacité d'emprunt et vos mensualités pour votre futur projet immobilier.",
		label: 'Accéder au simulateur',
		icon: 'simulateur-pret',
	},
	{
		slug: 'frais-mainlevee',
		title: 'Calcul des frais de mainlevée',
		description:
			"Calculez le coût de la radiation d'une hypothèque suite au remboursement de votre crédit.",
		label: 'Lancer le calcul',
		icon: 'frais-mainlevee',
	},
	{
		slug: 'barometre',
		title: 'Baromètre immobilier',
		description:
			'Consultez les tendances du marché et les prix au m² pour orienter votre transaction.',
		label: 'Voir les statistiques',
		icon: 'barometre',
	},
	{
		slug: 'frais-acte',
		title: "Calcul des frais d'acte",
		description:
			"Obtenez une estimation précise des frais d'acquisition pour votre achat immobilier.",
		label: 'Estimer mes frais',
		icon: 'frais-acte',
	},
	{
		slug: 'plus-value',
		title: 'Simulateur impôts plus-value',
		description:
			"Anticipez l'imposition lors de la revente de votre bien immobilier hors résidence principale.",
		label: "Calculer l'impôt",
		icon: 'plus-value',
	},
	{
		slug: 'droits-succession',
		title: 'Calcul des droits de succession',
		description:
			"Évaluez le montant des droits à payer selon le lien de parenté et l'actif successoral.",
		label: 'Simuler les droits',
		icon: 'droits-succession',
	},
]

// ---- Contenu de la page Contact (mêmes valeurs que les defaultValue de la collection Pages) ----

const contactContentSeed: NonNullable<Page['contactContent']> = {
	addressLabel: 'ADRESSE',
	address: '34 cours Mirabeau, 13100 Aix-en-Provence',
	phoneLabel: 'TÉLÉPHONE',
	phone: '04 22 58 01 80',
	emailLabel: 'E-MAIL',
	email: 'laila.gssime@notaires.fr',
	hoursLabel: "HORAIRES D'OUVERTURE",
	hours: 'Lundi au Vendredi : 09h00 - 18h00. Samedi sur rendez-vous uniquement.',
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8390853931005!2d5.4495929!3d43.5265482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d962fff3b4b%3A0x73d8ad4ec13fce8b!2s34%20Cr%20Mirabeau%2C%2013100%20Aix-en-Provence!5e0!3m2!1sen!2sfr!4v1788527296384!5m2!1sen!2sfr',
	mapsLink:
		'https://www.google.com/maps/search/?api=1&query=34+cours+Mirabeau+Aix-en-Provence',
	quoteText:
		'“La précision dans la pratique, l’autorité dans le conseil. Notre étude reflète les normes rigoureuses que nous appliquons à chaque dossier juridique.”',
	quoteCite: 'Droit Notaires',
	formHeading: 'Envoyer une demande',
	mapsLinkLabel: 'Ouvrir dans Google Maps',
}

const privacyTextNode = (text: string) => ({
	type: 'text' as const,
	version: 1,
	text,
	detail: 0,
	format: 0,
	mode: 'normal' as const,
	style: '',
})

const privacyParagraph = (text: string) => ({
	type: 'paragraph' as const,
	version: 1,
	children: [privacyTextNode(text)],
	direction: null,
	format: '' as const,
	indent: 0,
})

const privacyHeading = (text: string) => ({
	type: 'heading' as const,
	tag: 'h2' as const,
	version: 1,
	children: [privacyTextNode(text)],
	direction: null,
	format: '' as const,
	indent: 0,
})

const privacyPolicyBody: NonNullable<Page['sections']>[number]['body'] = {
	root: {
		type: 'root',
		children: [
			privacyParagraph('L’office notarial de Maître Laïla GSSIME, en tant que Responsable de traitement, est sensible à la protection de vos données à caractère personnel. À ce titre, la présente politique de confidentialité a pour objet de vous informer de la manière dont vos données sont traitées et vous assurer du respect de la réglementation établie notamment par le Règlement Européen UE2016/679 du 27 avril 2016 ainsi que de la loi 78-17 Informatique et Libertés modifiée du 6 janvier 1978.'),
			privacyParagraph('Cette politique de confidentialité est applicable à l’ensemble des sites internet, applications et services, édités et utilisés par l’office notarial. Cette politique étant vouée à être mise à jour selon les dispositions légales et les services proposés par l’office notarial, nous vous invitons à la consulter le plus fréquemment possible.'),
			privacyHeading('1. Quelles données personnelles sont collectées ?'),
			privacyParagraph('Plusieurs types de données à caractère personnel peuvent être collectés sur le site et autres solutions digitales, notamment : • Les données relatives à l’identité ; • Les coordonnées de contact.'),
			privacyHeading('2. Pourquoi certaines de mes données sont-elles collectées ?'),
			privacyParagraph('Vos données personnelles, recueillies par l’office notarial, nous permettent de vous fournir des services : réponse aux demandes de contact, envoi de documentations ou d’informations, prise de rendez-vous.'),
			privacyHeading('3. Combien de temps mes données sont-elles conservées ?'),
			privacyParagraph('Les données collectées seront traitées et conservées pendant la durée nécessaire au regard des finalités pour lesquelles elles sont traitées, dans le respect des normes, règlements et textes en vigueur. Néanmoins et conformément à l’article 5 du RGPD, certaines données à caractère personnel pourront être « conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l’intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques ». '),
			privacyHeading('5. Sur quels fondements juridiques reposent les traitements de mes données ?'),
			privacyParagraph('Les traitements de vos données collectées ont pour bases légales : • L’intérêt légitime lié à nos activités et à notre mission ; • Le consentement (formulaire de contact) ; • L’obligation légale selon les circonstances de la collecte des données.'),
			privacyHeading('6. Quels sont les destinataires de mes données ?'),
			privacyParagraph('Les données personnelles vous concernant ne seront destinées qu’aux services et personnes habilitées à les traiter, conformément aux finalités déterminées. Ces données peuvent également être communiquées aux sous-traitants habilités pour la réalisation des finalités du traitement.'),
			privacyHeading('7. Mes données sortiront-elles de l’Union Européenne ?'),
			privacyParagraph('Vos données personnelles seront hébergées au sein de l’Union Européenne. Pour autant, restant libre du choix de ses relations techniques et/ou commerciales, l’office notarial se réserve ainsi le droit d’héberger ou de transférer certaines données auprès de sous-traitants établis en dehors de l’Union Européenne à la condition qu’ils présentent les garanties suffisantes au regard des exigences du RGPD, notamment si les pays présentent un niveau adéquat de protection, conformément aux articles 44 et suivants du Règlement Européen UE2016/679 du 27 avril 2016.'),
			privacyHeading('8. Mes données sont-elles sécurisées lors de leurs traitements ?'),
			privacyParagraph('Toutes les personnes ayant accès à vos données sont habilitées et tenues par une obligation de confidentialité. À ce titre et conformément à l’article 32 du RGPD, l’office notarial ainsi que l’ensemble des sous-traitants s’engagent à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires en vue de garantir la sécurité ainsi que la confidentialité des données traitées.'),
			privacyHeading('9. Je possède différents droits, comment puis-je les exercer ?'),
			privacyParagraph('Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016, vous disposez des droits d’accès, de rectification, d’effacement et de portabilité des données personnelles vous concernant. Vous pouvez également obtenir la limitation du traitement de vos données ou vous opposer à leur traitement pour un motif légitime.'),
			privacyParagraph('Vous pouvez exercer vos droits par e-mail à : laila.gssime@notaires.fr ou par courrier postal à l’adresse suivante : 34 cours Mirabeau, 13100 Aix-en-Provence. Vous pouvez également contacter notre délégué à la protection des données personnelles : Data Vigi Protection – dpo.notaires@datavigiprotection.fr. Réclamation CNIL : https://www.cnil.fr/plaintes.'),
			privacyParagraph('Dernière mise à jour le 15/09/2026.'),
		],
		direction: null,
		format: '' as const,
		indent: 0,
		version: 1,
	},
}

const pages: PageSeed[] = [
	{
		title: 'Accueil',
		slug: 'home',
		methodologyContent: methodologyContentSeed,
		valuesContent: valuesContentSeed,
		sections: [
			{
				label: 'Excellence juridique',
				heading: 'Un notariat humain et de proximité au cœur d’Aix En Provence',
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
			{
				label: 'À propos',
				heading: 'La rigueur du droit, l’élégance du service.',
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
			{
				label: 'Domaines d’expertise',
				heading: 'Sécuriser vos projets avec rigueur et clarté.',
				backgroundColor: '#101527',
				textColor: '#F5EEE2',
				enabled: true,
			},
		],
		seo: {
			metaTitle: 'Maître Laïla GSSIME | Étude notariale à Aix-en-Provence',
			metaDescription:
				'Un accompagnement humain et rigoureux pour vos projets de vie, votre patrimoine et vos transmissions.',
		},
	},
	{
		title: 'Qui suis-je',
		slug: 'qui-suis-je',
		sections: [
			{
				label: 'L’excellence au service de l’humain',
				heading: 'Maître Laïla GSSIME',
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
			{
				label: 'Un parcours de rigueur',
				heading: 'Une expertise dédiée à vos projets.',
				backgroundColor: '#F6F3EF',
				textColor: '#1B1B1B',
				enabled: true,
			},
		],
		seo: {
			metaTitle: 'Qui suis-je | Maître Laïla GSSIME',
			metaDescription:
				'Découvrez le parcours et l’approche de Maître Laïla GSSIME, notaire à Aix-en-Provence.',
		},
	},
	{
		title: 'Services',
		slug: 'services',
		sections: [
			{
				label: SECTION_LABELS.servicesHero,
				heading: 'Nos services',
				intro: SECTION_INTROS.servicesHero,
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
			{
				label: SECTION_LABELS.servicesToolsBand,
				heading: CANONICAL_HEADINGS.servicesToolsBand,
				intro: SECTION_INTROS.servicesToolsBand,
				backgroundColor: '#F2EEE2',
				textColor: '#1B1B1B',
				enabled: true,
			},
		],
		servicesContent: {
			serviceItems: serviceItemsSeed,
			toolCards: toolCardsSeed,
		},
		seo: {
			metaTitle: 'Nos services | Maître Laïla GSSIME',
			metaDescription:
				'Découvrez les services notariaux proposés par Maître Laïla GSSIME à Aix-en-Provence.',
		},
	},
	{
		title: 'Contact',
		slug: 'contact',
		sections: [
			{
				label: SECTION_LABELS.contactHero,
				heading: 'Contactez-nous',
				intro: SECTION_INTROS.contactHero,
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
			{
				label: SECTION_LABELS.contactMapBand,
				heading: CANONICAL_HEADINGS.contactMapBand,
				backgroundColor: '#F6F3EF',
				textColor: '#1B1B1B',
				enabled: true,
			},
		],
		contactContent: contactContentSeed,
		seo: {
			metaTitle: 'Contact | Maître Laïla GSSIME',
			metaDescription:
				'Contactez l’étude notariale de Maître Laïla GSSIME à Aix-en-Provence.',
		},
	},
	{
		title: 'Politique de confidentialité',
		slug: 'confidentialite',
		sections: [
			{
				label: 'Politique de confidentialité',
				heading: 'Politique de confidentialité',
				body: privacyPolicyBody,
				backgroundColor: '#FCF9F5',
				textColor: '#1B1B1B',
				enabled: true,
			},
		],
		seo: {
			metaTitle: 'Politique de confidentialité | Maître Laïla GSSIME',
			metaDescription: 'Politique de confidentialité de l’office notarial de Maître Laïla GSSIME.',
		},
	},
]

const legacyHeadingByLabel: Record<string, string> = {
	[SECTION_LABELS.servicesToolsBand]: LEGACY_SEEDED_HEADINGS.servicesToolsBand,
	[SECTION_LABELS.contactMapBand]: LEGACY_SEEDED_HEADINGS.contactMapBand,
}

/**
 * Pour une page déjà présente : remplit uniquement ce qui est vide (jamais sur une
 * édition manuelle) et corrige les anciens titres seedés, afin que la base reflète
 * le contenu canonique du site sans écraser les modifications faites dans /admin.
 */
async function ensurePageContent(payload: Payload, seed: PageSeed, page: Page) {
	const data: Record<string, unknown> = {}

	// --- Sections : titres canoniques (anciennes valeurs seedées) + introductions manquantes ---
	let sectionsChanged = false
	const sections = (page.sections ?? []).map((section) => {
		const seedSection = seed.sections?.find((candidate) => candidate.label === section.label)
		if (!seedSection) return section

		const next = { ...section }
		let changed = false

		if (seedSection.heading) {
			const legacyHeading = legacyHeadingByLabel[section.label ?? '']
			if (legacyHeading && next.heading === legacyHeading) {
				next.heading = seedSection.heading
				changed = true
			}
		}

		if (seedSection.intro && next.intro == null) {
			next.intro = seedSection.intro
			changed = true
		}

		if (changed) sectionsChanged = true
		return changed ? next : section
	})
	if (sectionsChanged) data.sections = sections

	// --- Page Accueil : méthodologie initiale si le groupe est absent ---
	if (seed.slug === 'home' && seed.methodologyContent && !page.methodologyContent) {
		data.methodologyContent = seed.methodologyContent
	}

	// --- Page Accueil : valeurs initiales si le groupe (ou la liste) est vide ---
	// Le groupe peut exister à vide : l'ajout du champ crée la colonne avec les
	// valeurs par défaut mais sans lignes.
	if (seed.slug === 'home' && seed.valuesContent) {
		const current = page.valuesContent
		if (!current) {
			data.valuesContent = seed.valuesContent
		} else if (!current.values?.length) {
			data.valuesContent = { ...current, values: seed.valuesContent.values }
		}
	}

	// --- Page Services : domaines d'intervention & outils manquants ---
	if (seed.slug === 'services' && seed.servicesContent) {
		const current = page.servicesContent
		const next: Record<string, unknown> = current ? { ...current } : {}
		let groupChanged = false

		const currentServices = current?.serviceItems ?? []
		const currentServiceKeys = new Set(currentServices.map((item) => item.title?.trim()).filter(Boolean))
		const appendedServices = seed.servicesContent.serviceItems?.filter(
			(item) => item.title && !currentServiceKeys.has(item.title.trim()),
		)
		if (appendedServices && appendedServices.length > 0) {
			next.serviceItems = [...currentServices, ...appendedServices]
			groupChanged = true
		}

		const currentTools = current?.toolCards ?? []
		const currentToolKeys = new Set(currentTools.map((item) => item.slug?.trim()).filter(Boolean))
		const appendedTools = seed.servicesContent.toolCards?.filter(
			(item) => item.slug && !currentToolKeys.has(item.slug.trim()),
		)
		if (appendedTools && appendedTools.length > 0) {
			next.toolCards = [...currentTools, ...appendedTools]
			groupChanged = true
		}

		if (groupChanged) data.servicesContent = next
	}

	// --- Page Contact : coordonnées, carte & citation manquantes ---
	if (seed.slug === 'contact' && seed.contactContent) {
		const current = page.contactContent
		const next: Record<string, unknown> = current ? { ...current } : {}
		let groupChanged = false

		const contactKeys = [
			'addressLabel',
			'address',
			'phoneLabel',
			'phone',
			'emailLabel',
			'email',
			'hoursLabel',
			'hours',
			'mapEmbedUrl',
			'mapsLink',
			'quoteText',
			'quoteCite',
			'formHeading',
			'mapsLinkLabel',
		] as const

		for (const key of contactKeys) {
			const value = seed.contactContent[key]
			if (value != null && next[key] == null) {
				next[key] = value
				groupChanged = true
			}
		}

		if (groupChanged) data.contactContent = next
	}

	const keys = Object.keys(data)
	if (keys.length === 0) {
		console.log(`Page déjà conforme : ${seed.title}`)
		return
	}

	await payload.update({
		collection: 'pages',
		id: page.id,
		data: data as unknown as Page,
	})
	console.log(`Page mise à jour (${keys.join(', ')}) : ${seed.title}`)
}

const payload = await getPayload({ config })

for (const page of pages) {
	const existing = await payload.find({
		collection: 'pages',
		where: {
			slug: {
				equals: page.slug,
			},
		},
		limit: 1,
	})

	if (existing.docs[0]) {
		const currentPage = existing.docs[0]
		const missingSections = (page.sections ?? []).filter(
			(section) => !currentPage.sections?.some((currentSection) => currentSection.label === section.label),
		)

		if (missingSections.length > 0) {
			await payload.update({
				collection: 'pages',
				id: currentPage.id,
				data: {
					sections: [...(currentPage.sections ?? []), ...missingSections],
				},
			})
			console.log(`Sections ajoutées : ${page.title}`)
		} else {
			console.log(`Page déjà présente : ${page.title}`)
		}

		const refreshed = await payload.findByID({ collection: 'pages', id: currentPage.id })
		await ensurePageContent(payload, page, refreshed)
		continue
	}

	await payload.create({
		collection: 'pages',
		data: page,
	})
	console.log(`Page créée : ${page.title}`)
}

process.exit(0)
