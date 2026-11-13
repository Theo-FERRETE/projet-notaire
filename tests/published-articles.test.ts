import { after, before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createTestContext, type TestContext } from './helpers/payload-context'

describe('Articles publiés', () => {
  let ctx: TestContext

  before(async () => {
    ctx = await createTestContext({ withArticles: true })
  })

  after(async () => {
    await ctx.cleanup()
  })

  it('ne retourne que les articles publiés', async () => {
    const published = await ctx.lib.getPublishedArticles()

    assert.ok(published, 'au moins un article publié doit exister')
    assert.ok(published.length > 0)
    const slugs = published.map((article) => article.slug)

    assert.ok(slugs.includes('reforme-droit-famille'))
    assert.ok(slugs.includes('investir-immobilier-ancien'))
    assert.ok(!slugs.includes('brouillon-famille'), 'les brouillons doivent être exclus')
  })

  it('trie les articles du plus récent au plus ancien', async () => {
    const published = await ctx.lib.getPublishedArticles()
    const dates = (published ?? []).map((article) => article.date)

    assert.deepEqual(dates, [...dates].sort((a, b) => (a > b ? -1 : 1)))
    assert.equal(published?.[0].slug, 'reforme-droit-famille')
  })

  it('filtre par catégorie', async () => {
    const famille = await ctx.lib.getPublishedArticles('Famille')
    const immobilier = await ctx.lib.getPublishedArticles('Immobilier')

    assert.deepEqual(
      (famille ?? []).map((article) => article.slug),
      ['reforme-droit-famille'],
    )
    assert.deepEqual(
      (immobilier ?? []).map((article) => article.slug),
      ['investir-immobilier-ancien'],
    )
  })

  it('renvoie null pour une catégorie sans article publié', async () => {
    const empty = await ctx.lib.getPublishedArticles('International')
    assert.equal(empty, null)
  })

  it('mappe les champs attendus par le blog', async () => {
    const published = await ctx.lib.getPublishedArticles()
    const article = published?.find((item) => item.slug === 'reforme-droit-famille')

    assert.ok(article)
    assert.equal(article.title, 'Réforme du droit de la famille')
    assert.equal(article.category, 'Famille')
    assert.equal(article.excerpt, 'Ce qui change en 2024.')
    // Format fr-FR (le quantième peut varier selon le fuseau de la machine) :
    assert.match(article.date, /septembre 2026/i)
  })

  it('retourne l’article publié par slug', async () => {
    const article = await ctx.lib.getPublishedArticleBySlug('reforme-droit-famille')
    assert.ok(article)
    assert.equal(article?.slug, 'reforme-droit-famille')
    assert.equal(article?.status, 'published')
  })

  it('ne retourne pas un brouillon par slug', async () => {
    const article = await ctx.lib.getPublishedArticleBySlug('brouillon-famille')
    assert.equal(article, null)
  })

  it('retourne null pour un slug inconnu', async () => {
    const article = await ctx.lib.getPublishedArticleBySlug('article-inexistant')
    assert.equal(article, null)
  })
})
