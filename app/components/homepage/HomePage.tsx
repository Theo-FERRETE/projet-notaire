'use client'

import { AboutSection } from './AboutSection'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { QuoteSection } from './QuoteSection'
import { ServicesSection } from './ServicesSection'
import { useHomePageData } from './useHomePageData'

export function HomePage() {
  const { navItems, serviceCards, footerLinks } = useHomePageData()

  return (
    <div className="min-h-screen w-full bg-[#fdfcf7] text-[#1b1b1b]">
      <HomeHeader navItems={navItems} />
      <main>
        <AboutSection />
        <ServicesSection serviceCards={serviceCards} />
        <QuoteSection />
      </main>
      <HomeFooter footerLinks={footerLinks} />
    </div>
  )
}
