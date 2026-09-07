import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Résumé',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image principale',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Famille', value: 'famille' },
        { label: 'Immobilier', value: 'immobilier' },
        { label: 'Patrimoine', value: 'patrimoine' },
        { label: 'International', value: 'international' },
      ],
      label: 'Catégorie',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      label: 'Statut',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      label: 'Date de publication',
    },
  ],
}