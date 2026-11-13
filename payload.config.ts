import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Articles } from './collections/Articles'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * L'adaptateur email n'est branché que si un serveur SMTP est configuré. Sans
 * `SMTP_HOST`, Payload conserve son comportement actuel (emails écrits dans la
 * console) : appelé sans arguments, `nodemailerAdapter` créerait un compte de
 * test Ethereal, donc un appel réseau à chaque démarrage.
 * Sert à la fois au formulaire de contact et aux emails de connexion Payload.
 */
const smtpHost = process.env.SMTP_HOST

const email = smtpHost
  ? nodemailerAdapter({
      defaultFromAddress: process.env.SMTP_FROM || 'no-reply@localhost',
      defaultFromName: process.env.SMTP_FROM_NAME || 'Étude Laïla Gssime',
      transportOptions: {
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        // Port 465 : TLS implicite. 587 : STARTTLS, donc `secure` reste false.
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
          : undefined,
      },
    })
  : undefined

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
      // Priorité à l'URL cloud (Turso), sinon repli automatique sur le fichier local
      url: process.env.DATABASE_URI || process.env.DATABASE_URL || 'file:./payload.db',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  editor: lexicalEditor(),
  email,
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