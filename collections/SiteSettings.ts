import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Réglages du site',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    description: 'Contenu commun affiché sur toutes les pages (pied de page).',
  },
  fields: [
    {
      name: 'footerDescription',
      type: 'textarea',
      defaultValue:
        'Cabinet d’avocats indépendant situé au cœur d’Aix-en-Provence, dédié à l’excellence juridique et au conseil personnalisé.',
      label: 'Description (pied de page)',
    },
    {
      name: 'footerAddress',
      type: 'text',
      label: 'Adresse (pied de page)',
    },
    {
      name: 'footerEmail',
      type: 'text',
      label: 'E-mail (pied de page)',
    },
  ],
}
