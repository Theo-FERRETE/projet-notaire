export const blogCategories = ["Tous", "Famille", "Immobilier", "Patrimoine", "International"] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type Article = {
  slug: string;
  category: Exclude<BlogCategory, "Tous">;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
  imagePosition?: string;
};

export const articles: Article[] = [
  {
    slug: "reforme-droit-famille-2024",
    category: "Famille",
    date: "14 mars 2024",
    title: "Réforme du droit de la famille : ce qui change en 2024",
    excerpt:
      "Analyse des nouvelles dispositions législatives concernant l'autorité parentale et les procédures familiales.",
  },
  {
    slug: "investir-immobilier-ancien",
    category: "Immobilier",
    date: "02 mars 2024",
    title: "Investir dans l'immobilier ancien : les pièges à éviter",
    excerpt:
      "Expertise sur les audits juridiques nécessaires avant l'acquisition d'un bien historique ou à rénover.",
  },
  {
    slug: "protection-conjoint-survivant",
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