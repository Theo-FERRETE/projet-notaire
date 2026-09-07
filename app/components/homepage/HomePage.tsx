import { getPageBySlug, getPageSection } from '../../../lib/payload'
import { AboutSection } from './AboutSection'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { QuoteSection } from './QuoteSection'
import { ServicesSection } from './ServicesSection'
import { getHomePageData } from './useHomePageData'

export async function HomePage() {
  const { navItems, serviceCards, footerLinks } = getHomePageData()
  const page = await getPageBySlug('home')
  const hero = getPageSection(page, 'Excellence juridique')
  const expertise = getPageSection(page, 'Domaines d’expertise')

  return (
    <div className="min-h-screen w-full bg-[#fdfcf7] text-[#1b1b1b]">
      <HomeHeader navItems={navItems} heroHeading={hero?.heading ?? undefined} />
      <main>
        <AboutSection />
        <ServicesSection serviceCards={serviceCards} heading={expertise?.heading ?? undefined} />
        <QuoteSection />
      </main>
      <HomeFooter footerLinks={footerLinks} />
    </div>
  )
}
