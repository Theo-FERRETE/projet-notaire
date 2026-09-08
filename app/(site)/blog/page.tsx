import type { Metadata } from "next";

import BlogPage from "@/app/components/blog/BlogPage";
import { getPublishedArticles } from "@/lib/payload-server";
import {
  getArticlesByCategory,
  getBlogCategory,
} from "@/app/components/blog/blog-data";

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
  const payloadArticles = await getPublishedArticles(activeCategory);

  return (
    <BlogPage
      activeCategory={activeCategory}
      articles={payloadArticles ?? getArticlesByCategory(activeCategory)}
    />
  );
}