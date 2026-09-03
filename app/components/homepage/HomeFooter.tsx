type FooterLinks = { navigation: string[]; legal: string[] }

const assets = {
  portrait: 'https://www.figma.com/api/mcp/asset/40875862-0fac-457e-a94f-45ac0be4dab8.png',
  location: 'https://www.figma.com/api/mcp/asset/9f21c261-c427-498f-bfe7-6d6ea0859e5f.svg',
  mail: 'https://www.figma.com/api/mcp/asset/1048e99d-d620-4dc6-8fad-5f01e463e32d.svg',
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div><h3 className="mb-5 text-[11px] font-bold uppercase tracking-[1.2px] text-black/50">{title}</h3><ul className="grid gap-3 text-[15px] text-[var(--gold-accessible)]">{links.map((link) => <li key={link}><a href="#contact">{link}</a></li>)}</ul></div>
}

export function HomeFooter({ footerLinks }: { footerLinks: FooterLinks }) {
  return (
    <footer className="grid gap-14 border-t border-black/10 bg-[#f4f1e6] px-8 pb-20 pt-16 lg:grid-cols-[1.5fr_.7fr_.7fr]" id="contact">
      <div>
        <img src={assets.portrait} alt="" className="mb-5 h-16 w-16 rounded-full object-cover" />
        <p className="max-w-[320px] text-[16px] leading-[1.6] text-[var(--gold-accessible)]">Cabinet d’avocats indépendant situé au cœur d’Aix-en-Provence, dédié à l’excellence juridique et au conseil personnalisé.</p>
        <address className="mt-6 grid gap-3 text-[15px] not-italic text-[var(--gold-accessible)]">
          <span className="flex items-center gap-2"><img src={assets.location} alt="" className="h-3.5 w-3.5" />34 cours Mirabeau, Aix-en-Provence</span>
          <span className="flex items-center gap-2"><img src={assets.mail} alt="" className="h-3.5 w-3.5" />contact@gssime-avocat.fr</span>
        </address>
      </div>
      <FooterColumn title="Navigation" links={footerLinks.navigation} />
      <FooterColumn title="Légal" links={footerLinks.legal} />
    </footer>
  )
}
