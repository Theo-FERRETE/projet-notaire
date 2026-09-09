import Link from 'next/link'
import Image from 'next/image'

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

const heroImage = '/qui-suis-je/expertise-notariale.png'

export function HomeHeader({ navItems, compact = false, heroHeading, heroImage: cmsHeroImage, backgroundColor, textColor }: { navItems: NavItem[]; compact?: boolean; heroHeading?: string; heroImage?: string; backgroundColor?: string | null; textColor?: string | null }) {
  const heading = heroHeading ?? 'Un notariat humain et de proximité au cœur d’Aix En Provence'
  const image = cmsHeroImage ?? heroImage

  return (
    <header
      className={`relative text-[#1b1b1b] ${compact ? 'overflow-visible border-b border-black/10 bg-[#fdfcf7]' : 'min-h-screen overflow-visible'}`}
      style={{ backgroundColor: backgroundColor ?? undefined, color: textColor ?? undefined }}
    >
      {!compact ? <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" /> : null}
      {!compact ? <div className="absolute inset-0 bg-white/5" /> : null}

      <div className="relative z-50 flex min-h-[70px] items-center justify-between gap-3 border-b border-white/20 bg-[#fdfcf7]/30 px-[4.6vw] backdrop-blur-sm sm:gap-6">
        <Link href="/" className="font-classic shrink-0 whitespace-nowrap text-[18px] font-medium uppercase tracking-[-.5px] text-[#77736b] sm:text-[25px] sm:tracking-[-1px]">Laila Gssime</Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Navigation principale" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={`transition-colors hover:text-[#0d0070] ${item.active ? 'text-[#716c61]' : 'text-[#8c877d]'}`}>
                <span className="text-[10px] font-bold uppercase tracking-[1.5px]">{item.label}</span>
                {item.active ? <span className="mx-auto mt-1.5 block h-1 w-1 rounded-full bg-[#c4a000]" /> : null}
              </Link>
            ))}
          </nav>
          <ActionButton header href="/contact">Consultation</ActionButton>
        </div>
        <div className="relative z-[100] md:hidden">
          <details className="relative z-[100]">
            <summary className="grid h-12 w-12 cursor-pointer list-none place-items-center border border-[#c9b287] bg-[#fdfcf7] transition-colors hover:bg-[#f4f1e6] [&::-webkit-details-marker]:hidden" aria-label="Ouvrir le menu">
              <Image
                src="/services-icons/exact/landmark.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="h-7 w-7"
              />
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 z-[110] grid min-w-[min(14rem,calc(100vw-2rem))] gap-1 border border-black/10 bg-[#fdfcf7] p-2 text-right shadow-[0_14px_35px_rgba(27,27,27,0.18)]">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={`block px-4 py-3 text-[11px] font-bold uppercase tracking-[1.5px] ${item.active ? 'bg-[#f4f1e6] text-[#1b1b1b]' : 'text-[#716c61]'}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>

      {!compact ? <div className="relative z-10 w-full px-[4.6vw] pb-32 pt-12 sm:pt-16">
        <div className="w-full max-w-[760px] min-w-0">
          <div className="text-[#c4a000]"><SectionLabel>Excellence juridique</SectionLabel></div>
          <h1 className="font-display mt-6 max-w-[700px] text-[clamp(38px,5.2vw,64px)] font-semibold leading-[1.12] tracking-[-1.5px]">{heading}</h1>
          {/* <p className="mt-7 max-w-[570px] text-[16px] font-semibold leading-[1.55] text-[#252525]">
            Accompagnement sur-mesure et expertise rigoureuse pour sécuriser vos projets de vie et de transmission.
          </p> */}
          <div className="mt-16 flex flex-col items-start gap-3 sm:mt-20 sm:flex-row sm:flex-wrap sm:gap-5">
            <ActionButton filled href="/services">Nos services</ActionButton>
            <ActionButton secondary href="/contact">Prendre rendez-vous</ActionButton>
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
