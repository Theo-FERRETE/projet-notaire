import type { Metadata } from "next";
import { ServicesPage } from "@/app/components/services/ServicesPage";
import { buildServicesStructuredData } from "@/app/components/services/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
	title: "Nos services | Maître Laïla GSSIME — Notaire",
	description:
		"Découvrez les services de Maître Laïla GSSIME, notaire à Aix-en-Provence : immobilier, succession, divorce, couple, donation, transmission d'entreprise et droit international privé.",
	keywords: [
		"notaire Aix-en-Provence",
		"acheter vendre immobilier notaire",
		"succession Aix-en-Provence",
		"divorce notaire",
		"contrat de couple",
		"donation",
		"transmission d'entreprise",
		"droit international privé",
		"simulateur frais acte",
	],
	alternates: { canonical: "/services" },
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "/services",
		title: "Nos services | Maître Laïla GSSIME — Notaire",
		description:
			"Un accompagnement notarial rigoureux pour vos projets immobiliers, familiaux, patrimoniaux et internationaux à Aix-en-Provence.",
	},
	twitter: {
		card: "summary",
		title: "Nos services | Maître Laïla GSSIME — Notaire",
		description:
			"Un accompagnement notarial rigoureux pour vos projets immobiliers, familiaux, patrimoniaux et internationaux.",
	},
};

const structuredData = buildServicesStructuredData(siteUrl);

export default function Page() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<ServicesPage />
		</>
	);
}
