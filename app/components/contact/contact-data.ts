/**
 * Contenu de repli de la page Contact, utilisé lorsque Payload est
 * indisponible ou lorsqu'un champ n'a pas encore été rempli dans /admin.
 * Les valeurs reflètent l'ancienne copie statique du site.
 */
export const CONTACT_FALLBACK = {
	hero: {
		eyebrow: 'ENTRER EN RELATION',
		heading: 'Contactez-nous',
		description:
			'Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre projet.',
	},
	info: {
		addressLabel: 'ADRESSE',
		address: '34 cours Mirabeau, 13100 Aix-en-Provence',
		phoneLabel: 'TÉLÉPHONE',
		phone: '04 22 58 01 80',
		emailLabel: 'E-MAIL',
		email: 'laila.gssime@notaires.fr',
		hoursLabel: "HORAIRES D'OUVERTURE",
		hours: 'Lundi au Vendredi : 09h00 - 18h00. Samedi sur rendez-vous uniquement.',
	},
	form: {
		heading: 'Envoyer une demande',
		privacyHref: '/confidentialite',
	},
	map: {
		heading: 'Nous trouver',
		embedUrl:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8390853931005!2d5.4495929!3d43.5265482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d962fff3b4b%3A0x73d8ad4ec13fce8b!2s34%20Cr%20Mirabeau%2C%2013100%20Aix-en-Provence!5e0!3m2!1sen!2sfr!4v1788527296384!5m2!1sen!2sfr',
		mapsLink:
			'https://www.google.com/maps/search/?api=1&query=34+cours+Mirabeau+Aix-en-Provence',
		mapsLinkLabel: 'Ouvrir dans Google Maps',
	},
	quote: {
		imageSrc: '/contact/status.png',
		imageAlt:
			"Statue de la justice devant la façade d’un bâtiment à Aix-en-Provence",
		text: '“La précision dans la pratique, l’autorité dans le conseil. Notre étude reflète les normes rigoureuses que nous appliquons à chaque dossier juridique.”',
		cite: 'Droit Notaires',
	},
} as const

/** Vue prête à l'emploi du bloc « Coordonnées, formulaire & citation ». */
export type ContactInfoView = {
	addressLabel: string
	address: string
	phoneLabel: string
	phone: string
	emailLabel: string
	email: string
	hoursLabel: string
	hours: string
	formHeading: string
	privacyHref: string
	quote: {
		imageSrc: string
		imageAlt: string
		imagePosition?: string
		text: string
		cite: string
	}
}

/** Vue prête à l'emploi du bloc carte (lien + iframe Google Maps). */
export type ContactMapView = {
	heading: string
	embedUrl: string
	mapsLink: string
	mapsLinkLabel: string
}

/** Forme brute du groupe Payload `contactContent` (tous champs optionnels). */
export type ContactContentRow = {
	addressLabel?: string | null
	address?: string | null
	phoneLabel?: string | null
	phone?: string | null
	emailLabel?: string | null
	email?: string | null
	hoursLabel?: string | null
	hours?: string | null
	formHeading?: string | null
	mapEmbedUrl?: string | null
	mapsLink?: string | null
	mapsLinkLabel?: string | null
	quoteImage?: { url?: string | null; alt?: string | null; focalX?: number | null; focalY?: number | null } | number | null
	quoteText?: string | null
	quoteCite?: string | null
}

/**
 * Construit la vue du bloc « Coordonnées, formulaire & citation » en
 * complétant chaque champ CMS par la valeur de repli du site statique.
 */
export function buildContactInfoView(
	content?: ContactContentRow | null,
	quoteImage: { src?: string; alt?: string; position?: string } | null = null,
): ContactInfoView {
	const fallback = CONTACT_FALLBACK
	return {
		addressLabel: content?.addressLabel ?? fallback.info.addressLabel,
		address: content?.address ?? fallback.info.address,
		phoneLabel: content?.phoneLabel ?? fallback.info.phoneLabel,
		phone: content?.phone ?? fallback.info.phone,
		emailLabel: content?.emailLabel ?? fallback.info.emailLabel,
		email: content?.email ?? fallback.info.email,
		hoursLabel: content?.hoursLabel ?? fallback.info.hoursLabel,
		hours: content?.hours ?? fallback.info.hours,
		formHeading: content?.formHeading ?? fallback.form.heading,
		privacyHref: fallback.form.privacyHref,
		quote: {
			imageSrc: quoteImage?.src ?? fallback.quote.imageSrc,
			imageAlt: quoteImage?.alt ?? fallback.quote.imageAlt,
			imagePosition: quoteImage?.position,
			text: content?.quoteText ?? fallback.quote.text,
			cite: content?.quoteCite ?? fallback.quote.cite,
		},
	}
}

/** Construit la vue du bloc carte à partir du CMS + valeurs de repli. */
export function buildContactMapView(content?: ContactContentRow | null, heading?: string | null): ContactMapView {
	const fallback = CONTACT_FALLBACK
	return {
		heading: heading ?? fallback.map.heading,
		embedUrl: content?.mapEmbedUrl ?? fallback.map.embedUrl,
		mapsLink: content?.mapsLink ?? fallback.map.mapsLink,
		mapsLinkLabel: content?.mapsLinkLabel ?? fallback.map.mapsLinkLabel,
	}
}

/** Données structurées (SEO) de la page Contact. */
export function buildContactStructuredData(siteUrl: string) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ContactPage',
				'@id': `${siteUrl}/contact#webpage`,
				name: CONTACT_FALLBACK.hero.heading,
				url: `${siteUrl}/contact`,
				description: CONTACT_FALLBACK.hero.description,
			},
			{
				'@type': 'LegalService',
				'@id': `${siteUrl}/#office`,
				name: 'Maître Laïla GSSIME — Notaire',
				url: siteUrl,
				telephone: '+33 4 22 58 01 80',
				email: CONTACT_FALLBACK.info.email,
				address: {
					'@type': 'PostalAddress',
					streetAddress: '34 cours Mirabeau',
					postalCode: '13100',
					addressLocality: 'Aix-en-Provence',
					addressCountry: 'FR',
				},
				areaServed: { '@type': 'City', name: 'Aix-en-Provence' },
				openingHours: 'Mo-Fr 09:00-18:00',
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Accueil',
						item: `${siteUrl}/`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: 'Contact',
						item: `${siteUrl}/contact`,
					},
				],
			},
		],
	}
}
