import type { Metadata } from "next";

import {
  getPageBySlug,
  getPageSection,
  getPublishedArticles,
} from "../../lib/payload";
import BlogPage from "../components/blog/BlogPage";
import {
  getArticlesByCategory,
  getBlogCategory,
  toArticle,
  toPayloadCategory,
} from "../components/blog/blog-data";

export const metadata: Metadata = {
  title: "Blog juridique | Maître Laïla GSSIME — Notaire",
  description:
    "Retrouvez les éclairages juridiques de Maître Laïla GSSIME sur le droit de la famille, l'immobilier, les successions et la protection du patrimoine.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/blog",
    title: "Éclairages juridiques | Maître Laïla GSSIME",
    description:
      "Des analyses accessibles pour mieux comprendre vos enjeux familiaux, immobiliers et patrimoniaux.",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string | string[] }>;
}) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.categorie)
    ? params.categorie[0]
    : params.categorie;
  const activeCategory = getBlogCategory(categoryParam);

  const [documents, page] = await Promise.all([
    getPublishedArticles(toPayloadCategory(activeCategory)),
    getPageBySlug("blog"),
  ]);

  // `null` = Payload injoignable, on retombe sur le contenu de secours.
  // Un tableau vide reste un résultat valide : aucun article publié.
  const articles = documents
    ? documents.map(toArticle)
    : getArticlesByCategory(activeCategory);

  const hero = getPageSection(page, "Actualités & analyses");
  const newsletter = getPageSection(page, "Restez informé");

  return (
    <BlogPage
      activeCategory={activeCategory}
      articles={articles}
      hero={hero}
      newsletter={newsletter}
    />
  );
}
