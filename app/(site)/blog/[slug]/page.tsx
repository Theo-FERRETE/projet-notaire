import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  articleDetails,
  getArticleDetail,
  relatedArticles,
} from "@/app/components/blog/article-data";
import { HomeFooter } from "@/app/components/homepage/HomeFooter";
import {
  getSiteNavItems,
  HomeHeader,
} from "@/app/components/homepage/HomeHeader";

export function generateStaticParams() {
  return articleDetails.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleDetail(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  return {
    title: article.titre,
    description: article.chapo.replace(/[«»]/g, "").trim(),
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `/blog/${article.slug}`,
      title: article.titre,
      description: article.chapo.replace(/[«»]/g, "").trim(),
      publishedTime: article.dateIso,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleDetail(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems("Blog")} />

      <main className="flex-1">
        {/* Fil d'ariane et en-tête d'article */}
        <section className="border-b border-line pb-[33px] pt-10">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-6 sm:px-12">
            <nav
              aria-label="Fil d'ariane"
              className="flex w-full flex-wrap items-center gap-2 font-serif text-xs uppercase leading-4 tracking-[1.92px]"
            >
              <Link href="/" className="text-slate-muted hover:text-ink">
                Accueil
              </Link>
              <span aria-hidden className="text-gold">
                /
              </span>
              <Link href="/blog" className="text-slate-muted hover:text-ink">
                Éclairages
              </Link>
              <span aria-hidden className="text-gold">
                /
              </span>
              <span aria-current="page" className="font-bold text-ink">
                {article.filAriane}
              </span>
            </nav>

            <div className="flex w-full max-w-[896px] flex-col items-start gap-5">
              <p className="flex items-center gap-[10px] border border-line bg-sand px-[13px] py-[5px] font-serif text-[11px] uppercase leading-[16.5px] tracking-[2.42px] text-gold">
                <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                {article.badge}
              </p>

              <h1 className="font-serif text-[32px] leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
                {article.titre}
              </h1>

              <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-[21px]">
                <p className="font-serif text-base italic leading-6 text-ink">
                  {article.auteur}
                </p>
                <span aria-hidden className="size-1 rounded-full bg-gold/60" />
                <time
                  dateTime={article.dateIso}
                  className="text-sm leading-5 text-slate-muted"
                >
                  {article.date}
                </time>
                <span aria-hidden className="size-1 rounded-full bg-gold/60" />
                <p className="flex items-center gap-1.5 font-serif text-xs uppercase leading-4 tracking-[0.6px] text-slate-muted">
                  <Image
                    src="/blog/icon-duree.svg"
                    alt=""
                    width={14}
                    height={14}
                    unoptimized
                    className="size-[14px] shrink-0"
                  />
                  {article.duree}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corps de l'article */}
        <article className="mx-auto w-full max-w-[896px] px-6 py-16 sm:px-12 lg:px-0">
          <div className="flex flex-col gap-8">
            <figure className="m-0 flex flex-col gap-[14px]">
              <div className="border border-line bg-sand p-px">
                <div className="relative h-[440px] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="border-b border-line pb-[13px] text-center font-serif text-xs uppercase leading-4 tracking-[1.68px] text-slate-muted">
                {article.legende}
              </figcaption>
            </figure>

            <p className="border-l-2 border-gold bg-sand py-10 pl-[34px] pr-8 font-serif text-xl italic leading-7 text-ink">
              {article.chapo}
            </p>

            <p className="text-lg leading-7 text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[56px] first-letter:leading-[0.85] first-letter:text-ink">
              {article.introduction}
            </p>

            {/* Section 01 */}
            <Section section={article.sections[0]} />

            {/* Citation */}
            <blockquote className="m-0 flex flex-col items-center gap-3 border-y border-line bg-sand px-8 pb-[41px] pt-[57px]">
              <p aria-hidden className="font-serif text-4xl leading-9 text-gold">
                “
              </p>
              <p className="max-w-[672px] text-center font-serif text-2xl italic leading-9 text-ink lg:text-[30px]">
                {article.citation.texte}
              </p>
              <cite className="pt-2 text-center font-serif text-xs uppercase not-italic leading-4 tracking-[3px] text-gold">
                {article.citation.auteur}
              </cite>
            </blockquote>

            {/* Section 02 */}
            <div className="flex flex-col gap-[19px] pt-6">
              <SectionHeading section={article.sections[1]} />
              <div className="flex flex-col gap-[19px]">
                {article.sections[1].paragraphes.map((paragraphe) => (
                  <p
                    key={paragraphe}
                    className="text-[17px] font-light leading-[27.63px] text-ink/85"
                  >
                    {paragraphe}
                  </p>
                ))}
              </div>

              {/* Encadré conseil */}
              <aside className="flex flex-col gap-3 border border-gold/40 bg-sand px-[29px] pb-[29px] pt-[42px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <p className="flex items-center gap-[10px]">
                  <span
                    aria-hidden
                    className="grid size-5 shrink-0 place-items-center rounded-full bg-gold font-serif text-xs italic leading-4 text-white"
                  >
                    i
                  </span>
                  <span className="font-serif text-xs font-bold uppercase leading-4 tracking-[2.4px] text-ink">
                    {article.conseil.titre}
                  </span>
                </p>
                <p className="text-[15px] leading-[24.38px] text-ink/90">
                  <strong className="font-semibold">
                    Attention à la double imposition fiscale :
                  </strong>{" "}
                  {article.conseil.texte}
                </p>
                <p className="border-t border-line pt-[9px] font-serif text-xs italic leading-4 text-slate-muted">
                  {article.conseil.note}
                </p>
              </aside>
            </div>

            {/* Section 03 : les outils */}
            <div className="flex flex-col gap-6 py-6">
              <SectionHeading
                section={{
                  numero: "03.",
                  titre: "Les outils d'optimisation civile et fiscale",
                  paragraphes: [],
                }}
              />
              <ul className="flex list-none flex-col gap-4 p-0">
                {article.outils.map((outil) => (
                  <li key={outil.titre} className="flex items-start">
                    <span
                      aria-hidden
                      className="mr-[14px] mt-[10px] size-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <p className="text-[17px] leading-[27.63px]">
                      <span className="font-medium text-ink">
                        {outil.titre}
                      </span>{" "}
                      <span className="font-light text-ink/85">
                        {outil.texte}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Poursuivre la lecture */}
        <section
          aria-labelledby="titre-lecture"
          className="border-t border-line bg-sand py-16"
        >
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 sm:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-[17px]">
              <div className="flex flex-col gap-1">
                <p className="font-serif text-xs uppercase leading-4 tracking-[3px] text-gold">
                  Continuer l&apos;analyse
                </p>
                <h2
                  id="titre-lecture"
                  className="font-serif text-[28px] leading-10 text-ink lg:text-4xl"
                >
                  Poursuivre la lecture
                </h2>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 font-serif text-xs uppercase leading-4 tracking-[2.4px] text-slate-muted transition-colors hover:text-ink"
              >
                Tous les articles
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.titre}
                  href={related.href}
                  className="flex flex-col border border-line bg-cream p-px transition-colors hover:border-gold"
                >
                  <div className="relative h-[208px] w-full overflow-hidden bg-stone">
                    <Image
                      src={related.image}
                      alt={related.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 373px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-[23px]">
                    <div className="flex flex-col gap-2 pb-3">
                      <p className="font-serif text-[11px] uppercase leading-[16.5px] tracking-[2.2px] text-gold">
                        {related.categorie}
                      </p>
                      <h3 className="font-serif text-xl leading-[27.5px] text-ink">
                        {related.titre}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between border-t border-line pt-[17px] text-xs leading-4 text-slate-muted">
                      <span>{related.date}</span>
                      <span>{related.duree}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}

function SectionHeading({
  section,
}: {
  section: { numero: string; titre: string; paragraphes: string[] };
}) {
  return (
    <h2 className="flex items-baseline gap-3">
      <span className="font-serif text-lg leading-7 text-gold">
        {section.numero}
      </span>
      <span className="font-serif text-2xl leading-9 tracking-[-0.75px] text-ink lg:text-[30px]">
        {section.titre}
      </span>
    </h2>
  );
}

function Section({
  section,
}: {
  section: { numero: string; titre: string; paragraphes: string[] };
}) {
  return (
    <div className="flex flex-col gap-[19px] pt-6">
      <SectionHeading section={section} />
      <div className="flex flex-col gap-[19px]">
        {section.paragraphes.map((paragraphe) => (
          <p
            key={paragraphe}
            className="text-[17px] font-light leading-[27.63px] text-ink/85"
          >
            {paragraphe}
          </p>
        ))}
      </div>
    </div>
  );
}
