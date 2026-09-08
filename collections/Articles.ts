import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const Articles: CollectionConfig = {
  slug: 'articles',
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        status: {
          equals: 'published',
        },
      }
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
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
      hooks: {
        beforeValidate: [
          ({ value }) => (typeof value === 'string' ? slugify(value) : value),
        ],
      },
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
      editor: lexicalEditor(),
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