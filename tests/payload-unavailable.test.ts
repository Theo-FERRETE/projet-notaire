import { after, before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createTestContext } from './helpers/payload-context'

describe('Payload indisponible — repli des fonctions', () => {
  let lib: typeof import('../lib/payload.ts')
  let originalWarn: typeof console.warn

  before(async () => {
    // On démarre Payload sur une base jetable, puis on la détruit (connexion
    // fermée + fichier supprimé). Les appels suivants à lib/payload.ts
    // échouent donc à l'exécution — comme si Payload tombait en cours de
    // route — et doivent retomber sur null.
    //
    // (On évite volontairement une base « impossible à ouvrir » : l'init
    // échouée de Payload laisse des promesses internes rejetées qui font
    // échouer le fichier sous le runner node:test.)
    const ctx = await createTestContext()
    await ctx.cleanup()

    // Silence des warnings de repli attendus (connexion détruite).
    originalWarn = console.warn
    console.warn = () => {}

    lib = ctx.lib
  })

  after(() => {
    console.warn = originalWarn
  })

  it('getPageBySlug retombe sur null', async () => {
    assert.equal(await lib.getPageBySlug('home'), null)
  })

  it('getPublishedArticles retombe sur null', async () => {
    assert.equal(await lib.getPublishedArticles(), null)
  })

  it('getPublishedArticleBySlug retombe sur null', async () => {
    assert.equal(await lib.getPublishedArticleBySlug('n-importe-quel-slug'), null)
  })
})
