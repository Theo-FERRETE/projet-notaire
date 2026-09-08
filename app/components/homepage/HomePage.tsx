import { getPageBySlug, getPageSection, getSectionImageUrl } from '../../../lib/payload'
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
  const about = getPageSection(page, 'À propos')
  const expertise = getPageSection(page, 'Domaines d’expertise')
  const heroImage = getSectionImageUrl(hero)

  return (
    <div className="min-h-screen w-full bg-[#fdfcf7] text-[#1b1b1b]">
      <HomeHeader
        navItems={navItems}
        heroHeading={hero?.heading ?? undefined}
        heroImage={heroImage}
        backgroundColor={hero?.backgroundColor ?? undefined}
        textColor={hero?.textColor ?? undefined}
      />
      <main>
        <AboutSection
          heading={about?.heading ?? undefined}
          image={getSectionImageUrl(about)}
          backgroundColor={about?.backgroundColor ?? undefined}
          textColor={about?.textColor ?? undefined}
        />
        <ServicesSection
          serviceCards={serviceCards}
          heading={expertise?.heading ?? undefined}
          familyImage={getSectionImageUrl(expertise) ?? heroImage}
          backgroundColor={expertise?.backgroundColor ?? undefined}
          textColor={expertise?.textColor ?? undefined}
        />
        <QuoteSection />
      </main>
      <HomeFooter footerLinks={footerLinks} />
    </div>
  )
}
