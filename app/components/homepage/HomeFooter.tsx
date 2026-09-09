import Image from 'next/image'
import Link from 'next/link'

type FooterLinks = { navigation: string[]; legal: string[] }

const defaultFooterLinks: FooterLinks = {
	navigation: ['Accueil', 'Services', 'Bio', 'Blog', 'Contact'],
	legal: ['Mentions légales', 'Politique de confidentialité', 'CGV'],
}

function footerHref(label: string) {
	const links: Record<string, string> = {
		Accueil: '/',
		Services: '/services',
		Bio: '/qui-suis-je',
		Blog: '/blog',
		Contact: '/contact',
		'Mentions légales': '/mentions-legales',
		'Mentions Légales': '/mentions-legales',
		'Politique de confidentialité': '/confidentialite',
		Confidentialité: '/confidentialite',
		CGV: '/contact',
	}

	return links[label] ?? '/contact'
}

const portrait = '/logo-notaire.png';

function FooterColumn({ title, links }: { title: string; links: string[] }) {
	return <div><h3 className="mb-5 text-[11px] font-bold uppercase tracking-[1.2px] text-[#4d4732]">{title}</h3><ul className="grid gap-3 text-[15px] text-[var(--gold-accessible)]">{links.map((link) => <li key={link}><Link prefetch={false} href={footerHref(link)}>{link}</Link></li>)}</ul></div>
}

export function HomeFooter({ footerLinks = defaultFooterLinks }: { footerLinks?: FooterLinks }) {
	return (
		<footer className="grid gap-14 border-t border-black/10 bg-[#f4f1e6] px-8 pb-20 pt-16 lg:grid-cols-[1.5fr_.7fr_.7fr]" id="contact">
			<div>
				<Image src={portrait} alt="" width={64} height={64} className="mb-5 h-16 w-16 rounded-full object-cover" />
				<p className="max-w-[320px] text-[16px] leading-[1.6] text-[var(--gold-accessible)]">Cabinet d’avocats indépendant situé au cœur d’Aix-en-Provence, dédié à l’excellence juridique et au conseil personnalisé.</p>
				<address className="mt-6 grid gap-3 text-[15px] not-italic text-[var(--gold-accessible)]">
					{/* <span className="flex items-center gap-2"><img src={assets.location} alt="" className="h-3.5 w-3.5" />34 cours Mirabeau, Aix-en-Provence</span> */}
					{/* <span className="flex items-center gap-2"><img src={assets.mail} alt="" className="h-3.5 w-3.5" />contact@gssime-avocat.fr</span> */}
				</address>
			</div>
			<FooterColumn title="Navigation" links={footerLinks.navigation} />
			<FooterColumn title="Légal" links={footerLinks.legal} />
		</footer>
	)
}
