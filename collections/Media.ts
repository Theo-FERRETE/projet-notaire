import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { CollectionConfig } from 'payload'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    staticDir: path.resolve(dirname, '../media'),
    mimeTypes: ['image/*'],
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texte alternatif',
      admin: {
        description: 'Description de l’image pour les lecteurs d’écran. Ce texte ne sera pas affiché comme légende.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Légende visible',
      admin: {
        description: 'Texte affiché sous l’image dans l’article. Facultatif.',
      },
    },
  ],
}