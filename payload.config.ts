import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Articles } from './collections/Articles'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, 'app/(payload)/admin'),
    },
  },
  collections: [Users, Media, Articles, Pages],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'local-development-secret-change-me',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    // Évite la régénération automatique des types en tâche de fond pendant
    // les tests (processus isolés) : chaque processus écrirait payload-types.ts
    // en parallèle au lancement de Payload.
    autoGenerate: process.env.NODE_ENV !== 'test',
  },
})