import { getPageBySlug, getPageSection, getSectionImageFocalPoint, getSectionImageUrl } from '../../../lib/payload-server'
import { AboutSection } from './AboutSection'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { QuoteSection } from './QuoteSection'
import { ValuesSection } from './ValuesSection'
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
    <div className="min-h-screen w-full bg-[#fdfcf7] text-ink">
      <HomeHeader
        navItems={navItems}
        heroHeading={hero?.heading ?? undefined}
        heroImage={heroImage}
        heroImagePosition={heroImagePosition}
      />
      <main>
        <AboutSection
          heading={about?.heading ?? undefined}
          image={getSectionImageUrl(about)}
          imagePosition={aboutImagePosition}
        />
        <ServicesSection
          serviceCards={serviceCards}
          heading={expertise?.heading ?? undefined}
          familyImage={getSectionImageUrl(expertise) ?? heroImage}
          familyImagePosition={expertiseImagePosition ?? heroImagePosition}
        />
        <ValuesSection content={page?.valuesContent} />
        <QuoteSection content={page?.methodologyContent} />
      </main>
      <HomeFooter/>
    </div>
  )
}
