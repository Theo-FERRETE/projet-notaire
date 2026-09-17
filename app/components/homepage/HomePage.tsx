import { getPageBySlug, getPageSection, getSectionImageFocalPoint, getSectionImageUrl } from '../../../lib/payload-server'
import { AboutSection } from './AboutSection'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { QuoteSection } from './QuoteSection'
import { ValuesSection } from './ValuesSection'
import { ServicesSection } from './ServicesSection'
import { getHomePageData } from './useHomePageData'

export async function HomePage() {
  const { navItems, serviceCards } = getHomePageData()
  const page = await getPageBySlug('home')
  const hero = getPageSection(page, 'Excellence juridique')
  const about = getPageSection(page, 'À propos')
  const expertise = getPageSection(page, 'Domaines d’expertise')
  const heroImage = getSectionImageUrl(hero)
  const heroImagePosition = getSectionImageFocalPoint(hero)
  const aboutImagePosition = getSectionImageFocalPoint(about)
  const expertiseImagePosition = getSectionImageFocalPoint(expertise)
  const cmsServiceCards = page?.expertiseContent?.cards
  const services =
    cmsServiceCards && cmsServiceCards.length > 0
      ? cmsServiceCards.map((card) => ({ title: card.title, description: card.description, icon: card.icon ?? '✦' }))
      : serviceCards

  return (
    <div className="min-h-screen w-full bg-[#fdfcf7] text-ink">
      <HomeHeader
        navItems={navItems}
        heroHeading={hero?.heading ?? undefined}
        heroIntro={hero?.intro ?? undefined}
        heroImage={heroImage}
        heroImagePosition={heroImagePosition}
      />
      <main>
        <AboutSection
          heading={about?.heading ?? undefined}
          intro={about?.intro ?? undefined}
          body={about?.body ?? undefined}
          image={getSectionImageUrl(about)}
          imagePosition={aboutImagePosition}
          backgroundColor={about?.backgroundColor ?? undefined}
          textColor={about?.textColor ?? undefined}
        />
        <ServicesSection
          serviceCards={services}
          heading={expertise?.heading ?? undefined}
          intro={expertise?.intro ?? undefined}
          body={expertise?.body ?? undefined}
          familyImage={getSectionImageUrl(expertise) ?? heroImage}
          familyImagePosition={expertiseImagePosition ?? heroImagePosition}
          backgroundColor={expertise?.backgroundColor ?? undefined}
          textColor={expertise?.textColor ?? undefined}
        />
        <ValuesSection content={page?.valuesContent} />
        <QuoteSection content={page?.methodologyContent} />
      </main>
      <HomeFooter/>
    </div>
  )
}
