import type { Metadata } from 'next'
import { ContactPage } from '@/app/components/contact/ContactPage'
import {
	buildContactStructuredData,
	CONTACT_FALLBACK,
} from '@/app/components/contact/contact-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
	title: 'Contact',
	description: CONTACT_FALLBACK.hero.description,
	keywords: [
		'contact notaire Aix-en-Provence',
		'rendez-vous notaire Aix-en-Provence',
		'Maître Laïla GSSIME',
		'34 cours Mirabeau',
	],
	alternates: { canonical: '/contact' },
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: '/contact',
		title: 'Contact | Maître Laïla GSSIME — Notaire',
		description: CONTACT_FALLBACK.hero.description,
	},
	twitter: {
		card: 'summary',
		title: 'Contact | Maître Laïla GSSIME — Notaire',
		description: CONTACT_FALLBACK.hero.description,
	},
}

const structuredData = buildContactStructuredData(siteUrl)

export default function Page() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<ContactPage />
		</>
	)
}
