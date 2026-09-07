import type { CollectionConfig } from 'payload'

const isHexColor = (value: unknown) =>
  typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)
    ? true
    : 'Utilisez une couleur hexadécimale au format #RRGGBB.'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Contenus éditables des pages publiques du site.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nom de la page',
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      options: [
        { label: 'Accueil', value: 'home' },
        { label: 'Qui suis-je', value: 'qui-suis-je' },
        { label: 'Services', value: 'services' },
        { label: 'Blog', value: 'blog' },
        { label: 'Contact', value: 'contact' },
      ],
      label: 'Page publique',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections de la page',
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Petit titre',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Titre',
        },
        {
          name: 'body',
          type: 'richText',
          label: 'Texte',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#FCF9F5',
          validate: isHexColor,
          admin: {
            description: 'Format attendu : #RRGGBB',
          },
          label: 'Couleur de fond',
        },
        {
          name: 'textColor',
          type: 'text',
          defaultValue: '#1B1B1B',
          validate: isHexColor,
          admin: {
            description: 'Format attendu : #RRGGBB',
          },
          label: 'Couleur du texte',
        },
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Section visible',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Référencement',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Titre SEO',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Description SEO',
        },
      ],
    },
  ],
}
