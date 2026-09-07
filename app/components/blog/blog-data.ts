import type { ArticleCategory } from "../../../lib/payload";
import type { Article as PayloadArticle } from "../../../payload-types";

export const blogCategories = [
  "Tous",
  "Famille",
  "Immobilier",
  "Patrimoine",
  "International",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type ArticleImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Article = {
  category: Exclude<BlogCategory, "Tous">;
  date: string;
  title: string;
  excerpt: string;
  slug?: string;
  image?: ArticleImage | null;
};

/** Contenu de secours, utilisé uniquement si Payload est injoignable. */
export const articles: Article[] = [
  {
    category: "Famille",
    date: "14 mars 2024",
    title: "Réforme du droit de la famille : ce qui change en 2024",
    excerpt:
      "Analyse des nouvelles dispositions législatives concernant l'autorité parentale et les procédures familiales.",
  },
  {
    category: "Immobilier",
    date: "02 mars 2024",
    title: "Investir dans l'immobilier ancien : les pièges à éviter",
    excerpt:
      "Expertise sur les audits juridiques nécessaires avant l'acquisition d'un bien historique ou à rénover.",
  },
  {
    category: "Patrimoine",
    date: "22 février 2024",
    title: "La protection du conjoint survivant : solutions sur mesure",
    excerpt:
      "Optimiser la transmission entre époux grâce aux aménagements matrimoniaux et aux libéralités.",
  },
];

export function getBlogCategory(value: string | undefined): BlogCategory {
  const category = blogCategories.find(
    (item) => item.toLowerCase() === value?.toLowerCase(),
  );

  return category ?? "Tous";
}

export function getArticlesByCategory(category: BlogCategory) {
  return category === "Tous"
    ? articles
    : articles.filter((article) => article.category === category);
}

/** Libellé affiché (« Famille ») vers la valeur stockée par Payload (« famille »). */
export function toPayloadCategory(
  category: BlogCategory,
): ArticleCategory | undefined {
  return category === "Tous"
    ? undefined
    : (category.toLowerCase() as ArticleCategory);
}

function toBlogCategory(category: ArticleCategory): Exclude<BlogCategory, "Tous"> {
  const match = blogCategories.find(
    (item) => item !== "Tous" && item.toLowerCase() === category,
  );

  return (match ?? "Patrimoine") as Exclude<BlogCategory, "Tous">;
}

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function formatArticleDate(value: PayloadArticle["publishedAt"]) {
  if (!value) return "";

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? "" : dateFormatter.format(date);
}

/** Convertit un article Payload vers le modèle attendu par les composants. */
export function toArticle(document: PayloadArticle): Article {
  const media =
    document.image && typeof document.image === "object" ? document.image : null;

  return {
    category: toBlogCategory(document.category),
    date: formatArticleDate(document.publishedAt),
    title: document.title,
    excerpt: document.excerpt ?? "",
    slug: document.slug,
    image:
      media?.url && media.width && media.height
        ? {
            url: media.url,
            alt: media.alt,
            width: media.width,
            height: media.height,
          }
        : null,
  };
}
