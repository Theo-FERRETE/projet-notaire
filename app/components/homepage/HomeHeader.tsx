import Link from 'next/link'

import { ActionButton } from './ActionButton'
import { SectionLabel } from './SectionLabel'

type NavItem = { label: string; href: string; active?: boolean }

export function getSiteNavItems(active: string) {
  return [
    { label: 'Accueil', href: '/', active: active === 'Accueil' },
    { label: 'Services', href: '/services', active: active === 'Services' },
    { label: 'Qui-suis-je', href: '/qui-suis-je', active: active === 'Qui-suis-je' },
    { label: 'Blog', href: '/blog', active: active === 'Blog' },
    { label: 'Contact', href: '/contact', active: active === 'Contact' },
  ]
}

const heroImage = 'https://www.figma.com/api/mcp/asset/bc507d92-6017-4cda-ba85-4892fd8079f5.png'

export function HomeHeader({ navItems, compact = false }: { navItems: NavItem[]; compact?: boolean }) {
  return (
    <header className={`relative overflow-hidden text-[#1b1b1b] ${compact ? 'border-b border-black/10 bg-[#fdfcf7]' : 'min-h-screen'}`}>
      {!compact ? <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" /> : null}
      {!compact ? <div className="absolute inset-0 bg-white/5" /> : null}

      <div className="relative z-10 flex min-h-[70px] items-center justify-between gap-3 border-b border-white/20 bg-[#fdfcf7]/30 px-[4.6vw] backdrop-blur-sm sm:gap-6">
        <Link href="/" className="font-classic shrink-0 whitespace-nowrap text-[18px] font-medium uppercase tracking-[-.5px] text-[#77736b] sm:text-[25px] sm:tracking-[-1px]">Laila Gssime</Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Navigation principale" className="flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`transition-colors hover:text-[#0d0070] ${item.active ? 'text-[#716c61]' : 'text-[#8c877d]'}`}>
                <span className="text-[10px] font-bold uppercase tracking-[1.5px]">{item.label}</span>
                {item.active ? <span className="mx-auto mt-1.5 block h-1 w-1 rounded-full bg-[#c4a000]" /> : null}
              </a>
            ))}
          </nav>
          <ActionButton secondary href={compact ? '/contact' : '#contact'}>Consultation</ActionButton>
        </div>
        <div className="md:hidden">
          <details className="relative">
            <summary className="grid h-12 w-12 cursor-pointer list-none place-items-center border border-[#0d0070] text-[#0d0070]" aria-label="Ouvrir le menu">
              <span className="grid gap-1.5" aria-hidden="true">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 z-20 grid min-w-48 gap-1 border border-black/10 bg-[#fdfcf7]/95 p-2 text-right shadow-lg backdrop-blur-md">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-4 py-3 text-[11px] font-bold uppercase tracking-[1.5px] text-[#716c61]">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>

      {!compact ? <div className="relative z-10 mx-auto max-w-[1152px] px-[4.6vw] pb-32 pt-12 sm:pt-16">
        <div className="max-w-[760px] min-w-0 rounded-sm bg-[#fdfcf7]/45 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
          <div className="text-[#c4a000]"><SectionLabel>Excellence juridique</SectionLabel></div>
          <h1 className="font-classic mt-6 max-w-[700px] text-[clamp(38px,5.2vw,64px)] font-semibold leading-[1.12] tracking-[-1.5px] text-[#080808]">
            Un notariat humain et<br className="hidden sm:block" /> de proximité au cœur<br className="hidden sm:block" /> d’Aix
          </h1>
          <p className="mt-7 max-w-[570px] text-[16px] leading-[1.55] text-[#3c3a35]">
            Accompagnement sur-mesure et expertise rigoureuse pour sécuriser vos projets de vie et de transmission.
          </p>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <ActionButton href="#services">Nos services</ActionButton>
            <ActionButton secondary href="#contact">Prendre rendez-vous</ActionButton>
          </div>
        </div>
      </div> : null}

      {!compact ? <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 opacity-70" aria-hidden="true">
        <span className="rotate-90 text-[10px] uppercase tracking-[1px]">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-[#c4a000] to-transparent" />
      </div> : null}
    </header>
  )
}
