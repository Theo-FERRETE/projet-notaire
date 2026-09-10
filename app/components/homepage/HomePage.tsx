import { getPageBySlug, getPageSection, getSectionImageFocalPoint, getSectionImageUrl } from '../../../lib/payload-server'
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
  const heroImagePosition = getSectionImageFocalPoint(hero)
  const aboutImagePosition = getSectionImageFocalPoint(about)
  const expertiseImagePosition = getSectionImageFocalPoint(expertise)

  return (
    <div className="min-h-screen w-full bg-[#fdfcf7] text-[#1b1b1b]">
      <HomeHeader
        navItems={navItems}
        heroHeading={hero?.heading ?? undefined}
        heroImage={heroImage}
        heroImagePosition={heroImagePosition}
        backgroundColor={hero?.backgroundColor ?? undefined}
        textColor={hero?.textColor ?? undefined}
      />
      <main>
        <AboutSection
          heading={about?.heading ?? undefined}
          image={getSectionImageUrl(about)}
          imagePosition={aboutImagePosition}
          backgroundColor={about?.backgroundColor ?? undefined}
          textColor={about?.textColor ?? undefined}
        />
        <ServicesSection
          serviceCards={serviceCards}
          heading={expertise?.heading ?? undefined}
          familyImage={getSectionImageUrl(expertise) ?? heroImage}
          familyImagePosition={expertiseImagePosition ?? heroImagePosition}
          backgroundColor={expertise?.backgroundColor ?? undefined}
          textColor={expertise?.textColor ?? undefined}
        />
        <QuoteSection content={page?.methodologyContent} />
      </main>
      <HomeFooter footerLinks={footerLinks} />
    </div>
  )
}
