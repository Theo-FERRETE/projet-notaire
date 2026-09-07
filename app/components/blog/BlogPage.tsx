import Image from "next/image";
import Link from "next/link";

import { HomeFooter } from "../homepage/HomeFooter";
import { getSiteNavItems, HomeHeader } from "../homepage/HomeHeader";
import {
  blogCategories,
  type Article,
  type ArticleImage as ArticleImageSource,
  type BlogCategory,
} from "./blog-data";

const featuredArticle = {
  category: "À la une · International",
  date: "",
  title: "L'anticipation successorale en contexte international",
  excerpt:
    "Naviguer entre les législations nationales et les conventions internationales requiert une expertise précise.",
};

/** Visuel de l'article : image Media si Payload en fournit une, sinon illustration par défaut. */
function ArticleImage({
  alt,
  source,
}: {
  alt: string;
  source?: ArticleImageSource | null;
}) {
  if (source) {
    return (
      <Image
        src={source.url}
        alt={source.alt || alt}
        width={source.width}
        height={source.height}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src="/qui-suis-je/expertise-notariale.png"
      alt={alt}
      width={640}
      height={420}
      className="h-full w-full object-cover"
    />
  );
}

/** Section éditable venant de la collection `Pages` de Payload. */
type PageSection = {
  label?: string | null;
  heading?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
} | null;

export default function BlogPage({
  articles,
  activeCategory,
  hero,
  newsletter,
}: {
  articles: Article[];
  activeCategory: BlogCategory;
  hero?: PageSection;
  newsletter?: PageSection;
}) {
  return (
    <div className="flex min-h-full flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems("Blog")} />

      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-16 lg:pt-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-gold sm:text-[11px] sm:tracking-[2.4px]">
                {hero?.label || "Actualités & analyses"}
              </p>
              <h1 className="font-serif text-[40px] leading-[1.08] tracking-[-1px] sm:text-[64px] sm:tracking-[-1.5px]">
                {hero?.heading || "Éclairages juridiques"}
              </h1>
            </div>
            <nav aria-label="Catégories des articles" className="-mx-1 flex max-w-full gap-6 overflow-x-auto border-b border-line px-1 pb-3 sm:gap-7">
              {blogCategories.map((category) => (
                <Link
                  key={category}
                  href={category === "Tous" ? "/blog" : `/blog?categorie=${category.toLowerCase()}`}
                  aria-current={activeCategory === category ? "page" : undefined}
                  className={`shrink-0 text-[10px] font-bold uppercase tracking-[1.2px] ${activeCategory === category ? "border-b border-gold pb-3 text-ink" : "text-slate-muted"}`}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          <article className="grid overflow-hidden bg-stone shadow-[0_12px_30px_rgba(27,27,27,0.06)] md:grid-cols-[1.25fr_0.9fr]">
            <div className="aspect-[1.25] bg-sand sm:aspect-[1.5] md:aspect-auto md:min-h-[430px]">
              <ArticleImage alt="Illustration de l'actualité successorale internationale" />
            </div>
            <div className="flex flex-col justify-center gap-5 p-6 sm:gap-6 sm:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[1.7px] text-gold">{featuredArticle.category}</p>
              <h2 className="max-w-[420px] font-serif text-[32px] leading-[1.08] sm:text-[43px]">
                {featuredArticle.title}
              </h2>
              <p className="max-w-[390px] text-[14px] leading-6 text-slate-muted">{featuredArticle.excerpt}</p>
              <Link href="#articles" className="w-fit border-b border-ink pb-1 text-[10px] font-bold uppercase tracking-[1.1px]">
                Lire l&apos;article <span className="ml-2 text-gold">→</span>
              </Link>
            </div>
          </article>

          <section id="articles" className="grid gap-10 pt-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 md:gap-8">
            {articles.map((article) => (
              <article key={article.slug ?? article.title} className="group">
                <div className="relative mb-6 aspect-[1.45] overflow-hidden bg-sand">
                  <ArticleImage
                    alt={`Illustration de l'article « ${article.title} »`}
                    source={article.image}
                  />
                  <span className="absolute left-4 top-4 bg-cream px-3 py-2 text-[9px] font-bold uppercase tracking-[1.1px] text-gold">
                    {article.category}
                  </span>
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.2px] text-slate-muted">{article.date}</p>
                <h2 className="font-serif text-[26px] leading-[1.12] transition-colors group-hover:text-gold">{article.title}</h2>
                <p className="mt-4 text-[13px] leading-6 text-slate-muted">{article.excerpt}</p>
                <span aria-hidden className="mt-6 block h-px w-12 bg-gold" />
              </article>
            ))}
            {articles.length === 0 ? (
              <p className="text-sm leading-6 text-slate-muted sm:col-span-2 md:col-span-3">
                Aucun article ne correspond à cette catégorie.
              </p>
            ) : null}
          </section>
        </section>

        <section className="border-y border-line bg-sand px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
          <div className="mx-auto grid w-full max-w-[1120px] gap-8 sm:gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-gold">
                {newsletter?.label || "Restez informé"}
              </p>
              <h2 className="max-w-[650px] font-serif text-[36px] leading-[1.12] sm:text-[48px]">
                {newsletter?.heading || "Veille juridique & pensée stratégique"}
              </h2>
              <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-slate-muted">
                Recevez une sélection mensuelle d&apos;analyses juridiques et d&apos;actualités législatives directement rédigées par le cabinet.
              </p>
            </div>
            <Link href="/contact" className="w-fit border border-gold px-5 py-3.5 text-[11px] font-bold uppercase tracking-[1.4px] text-gold transition-colors hover:bg-gold hover:text-cream sm:px-6 sm:py-4">
              S&apos;inscrire à la veille
            </Link>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}