import { after, before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createTestContext, type TestContext } from './helpers/payload-context'
import { SECTION_LABELS } from '../lib/content-keys'
import type { Page } from '../payload-types'

describe('Accès Payload — pages publiques', () => {
  let ctx: TestContext

  before(async () => {
    ctx = await createTestContext()
  })

  after(async () => {
    await ctx.cleanup()
  })

  it('retourne la page d’accueil avec ses sections', async () => {
    const page = await ctx.lib.getPageBySlug('home')
    assert.ok(page, 'la page home doit exister')
    assert.equal(page.title, 'Accueil')
    assert.ok(page.sections?.length, 'la page doit contenir des sections')
  })

  it('retourne les pages services et contact par leur slug', async () => {
    const services = await ctx.lib.getPageBySlug('services')
    const contact = await ctx.lib.getPageBySlug('contact')

    assert.equal(services?.title, 'Services')
    assert.equal(contact?.title, 'Contact')
  })

  it('retourne null pour un slug inconnu', async () => {
    const page = await ctx.lib.getPageBySlug('page-inexistante' as Page['slug'])
    assert.equal(page, null)
  })

  it('récupère une section par son libellé canonique', async () => {
    const page = await ctx.lib.getPageBySlug('services')
    const hero = ctx.lib.getPageSection(page, SECTION_LABELS.servicesHero)
    const tools = ctx.lib.getPageSection(page, SECTION_LABELS.servicesToolsBand)

    assert.equal(hero?.heading, 'Nos services')
    assert.equal(tools?.heading, 'Outils et Simulateurs')
  })

  it('retourne null pour une section inconnue', async () => {
    const page = await ctx.lib.getPageBySlug('contact')
    const section = ctx.lib.getPageSection(page, 'Section introuvable')
    assert.equal(section, null)
  })

  it('ignore les sections désactivées', async () => {
    const page = await ctx.lib.getPageBySlug('contact')
    assert.ok(page, 'la page contact doit exister')
    const hero = ctx.lib.getPageSection(page, SECTION_LABELS.contactHero)

    assert.ok(hero, 'la section doit exister')
    assert.notEqual(hero?.enabled, false)

    // Simule une section désactivée : l'API Payload la renvoie, le helper doit la filtrer.
    const disabled = ctx.lib.getPageSection(
      { ...page, sections: [{ ...(page.sections?.[0] ?? {}), enabled: false }] },
      SECTION_LABELS.contactHero,
    )
    assert.equal(disabled, null)
  })

  it('renvoie l’URL d’image d’une section média', () => {
    const section = { image: { url: '/media/hero.png' } }
    assert.equal(ctx.lib.getSectionImageUrl(section as never), '/media/hero.png')
  })

  it('renvoie undefined si la section n’a pas d’image exploitable', () => {
    assert.equal(ctx.lib.getSectionImageUrl(null), undefined)
    assert.equal(ctx.lib.getSectionImageUrl({ image: null } as never), undefined)
    assert.equal(ctx.lib.getSectionImageUrl({ image: 42 } as never), undefined)
  })
})
