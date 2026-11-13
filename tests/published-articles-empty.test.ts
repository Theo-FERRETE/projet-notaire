import { after, before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createTestContext, type TestContext } from './helpers/payload-context'

describe('Articles publiés — base sans article', () => {
  let ctx: TestContext

  before(async () => {
    // Pages seedées, mais aucune collection « articles » remplie.
    ctx = await createTestContext()
  })

  after(async () => {
    await ctx.cleanup()
  })

  it('renvoie null quand aucun article n’est publié', async () => {
    assert.equal(await ctx.lib.getPublishedArticles(), null)
    assert.equal(await ctx.lib.getPublishedArticleBySlug('n-importe-quel-slug'), null)
  })
})
