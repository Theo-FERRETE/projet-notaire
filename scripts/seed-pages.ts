import config from '../payload.config'
import { getPayload } from 'payload'
import type { Page } from '../payload-types'

const pages: Array<Pick<Page, 'title' | 'slug' | 'sections' | 'seo'>> = [
  {
    title: 'Accueil',
    slug: 'home',
    sections: [
      {
        label: 'Excellence juridique',
        heading: 'Un notariat humain et de proximité au cœur d’Aix En Provence',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: 'À propos',
        heading: 'La rigueur du droit, l’élégance du service.',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: 'Domaines d’expertise',
        heading: 'Sécuriser vos projets avec rigueur et clarté.',
        backgroundColor: '#101527',
        textColor: '#F5EEE2',
        enabled: true,
      },
    ],
    seo: {
      metaTitle: 'Maître Laïla GSSIME | Étude notariale à Aix-en-Provence',
      metaDescription:
        'Un accompagnement humain et rigoureux pour vos projets de vie, votre patrimoine et vos transmissions.',
    },
  },
  {
    title: 'Qui suis-je',
    slug: 'qui-suis-je',
    sections: [
      {
        label: 'L’excellence au service de l’humain',
        heading: 'Maître Laïla GSSIME',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: 'Un parcours de rigueur',
        heading: 'Une expertise dédiée à vos projets.',
        backgroundColor: '#F6F3EF',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
    seo: {
      metaTitle: 'Qui suis-je | Maître Laïla GSSIME',
      metaDescription:
        'Découvrez le parcours et l’approche de Maître Laïla GSSIME, notaire à Aix-en-Provence.',
    },
  },
  {
    title: 'Services',
    slug: 'services',
    sections: [
      {
        label: 'L’excellence au service de l’humain',
        heading: 'Nos services',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: 'Expertise digitale',
        heading: 'Outils et simulateurs',
        backgroundColor: '#F2EEE2',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
    seo: {
      metaTitle: 'Nos services | Maître Laïla GSSIME',
      metaDescription:
        'Découvrez les services notariaux proposés par Maître Laïla GSSIME à Aix-en-Provence.',
    },
  },
  {
    title: 'Contact',
    slug: 'contact',
    sections: [
      {
        label: 'Entrer en relation',
        heading: 'Contactez-nous',
        backgroundColor: '#FCF9F5',
        textColor: '#1B1B1B',
        enabled: true,
      },
      {
        label: 'Nous trouver',
        heading: 'Le cabinet à Aix-en-Provence',
        backgroundColor: '#F6F3EF',
        textColor: '#1B1B1B',
        enabled: true,
      },
    ],
    seo: {
      metaTitle: 'Contact | Maître Laïla GSSIME',
      metaDescription:
        'Contactez l’étude notariale de Maître Laïla GSSIME à Aix-en-Provence.',
    },
  },
]

const payload = await getPayload({ config })

for (const page of pages) {
  const existing = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: page.slug,
      },
    },
    limit: 1,
  })

  if (existing.docs[0]) {
    const currentPage = existing.docs[0]
    const missingSections = (page.sections ?? []).filter(
      (section) => !currentPage.sections?.some((currentSection) => currentSection.label === section.label),
    )

    if (missingSections.length > 0) {
      await payload.update({
        collection: 'pages',
        id: currentPage.id,
        data: {
          sections: [...(currentPage.sections ?? []), ...missingSections],
        },
      })
      console.log(`Sections ajoutées : ${page.title}`)
    } else {
      console.log(`Page déjà présente : ${page.title}`)
    }
    continue
  }

  await payload.create({
    collection: 'pages',
    data: page,
  })
  console.log(`Page créée : ${page.title}`)
}

process.exit(0)
