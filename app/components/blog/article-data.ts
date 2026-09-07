export type ArticleSection = {
  numero: string;
  titre: string;
  paragraphes: string[];
};

export type RelatedArticle = {
  categorie: string;
  titre: string;
  date: string;
  duree: string;
  image: string;
  alt: string;
  href: string;
};

export type ArticleDetail = {
  slug: string;
  categorie: string;
  filAriane: string;
  badge: string;
  titre: string;
  auteur: string;
  date: string;
  dateIso: string;
  duree: string;
  image: string;
  imageAlt: string;
  legende: string;
  chapo: string;
  introduction: string;
  sections: ArticleSection[];
  citation: { texte: string; auteur: string };
  conseil: { titre: string; texte: string; note: string };
  outils: { titre: string; texte: string }[];
};

export const articleDetails: ArticleDetail[] = [
  {
    slug: "anticipation-successorale-contexte-international",
    categorie: "International",
    filAriane: "International",
    badge: "À la une • International",
    titre:
      "L'anticipation successorale en contexte international : sécuriser son patrimoine transfrontalier",
    auteur: "Par Maître L. Gssime",
    date: "18 Mars 2024",
    dateIso: "2024-03-18",
    duree: "5 min de lecture",
    image: "/blog/hero-successions-international.jpg",
    imageAlt:
      "Consultation juridique patrimoniale dans un cabinet notarial européen",
    legende:
      "Fig. 1 — Cohérence des régimes matrimoniaux et dévolution légale en Europe",
    chapo:
      "« Naviguer entre plusieurs législations nationales et harmoniser conventions bilatérales avec dévolutions familiales requiert une anticipation méticuleuse. Sans structuration préalable, la loi applicable peut désunir les volontés les plus affirmées. »",
    introduction:
      "Dans un monde marqué par la mobilité croissante des familles et l'internationalisation des investissements privés, la succession ne se cantonne plus aux frontières nationales. Qu'il s'agisse d'une résidence secondaire acquise sur le bassin méditerranéen, d'un compte financier transfrontalier ou d'héritiers domiciliés à l'étranger, chaque élément d'extranéité complexifie la transmission successorale.",
    sections: [
      {
        numero: "01.",
        titre: "Le principe d'universalité : Le Règlement Européen",
        paragraphes: [
          "Depuis l'entrée en vigueur du Règlement Européen n°650/2012 le 17 août 2015, une révolution juridique a simplifié la donne au sein de l'Union Européenne. Le texte pose le principe de l'unité de la succession : c'est la loi de la résidence habituelle du défunt au moment de son décès qui régit l'ensemble de sa succession mobilière et immobilière.",
          "Toutefois, cette règle par défaut peut engendrer des effets pervers majeurs, notamment l'application involontaire d'une réserve héréditaire restrictive ou, au contraire, l'éviction involontaire de certains héritiers protégés en droit français.",
        ],
      },
      {
        numero: "02.",
        titre: "La Professio Juris : Choisir sa loi successorale",
        paragraphes: [
          "Pour se prémunir des aléas géographiques et d'un changement imprévu de résidence, l'anticipation par testament permet de stipuler expressément la loi applicable : c'est la Professio Juris. Le disposant a le pouvoir de choisir la loi de sa nationalité pour régir l'intégralité de sa dévolution.",
          "Cette option offre une prévisibilité fondamentale pour l'attribution des droits du conjoint survivant et le respect des pactes familiaux formalisés en France ou à l'étranger.",
        ],
      },
    ],
    citation: {
      texte:
        "Le droit n'est pas seulement une règle, c'est un langage de protection et une architecture de liberté.",
      auteur: "— Maître Laïla Gssime",
    },
    conseil: {
      titre: "Le conseil du notaire",
      texte:
        "Le règlement européen harmonise les règles civiles, mais ne s'applique aucunement à la fiscalité. Chaque État souverain conserve son pouvoir d'imposition. Il est impératif d'analyser les conventions fiscales franco-étrangères pour éviter les doubles prélèvements de droits de mutation.",
      note: "Audit patrimonial préventif recommandé auprès de votre office notarial.",
    },
    outils: [
      {
        titre: "Le testament international :",
        texte:
          "formalisé selon la Convention de Washington de 1973, garant d'une validité formelle sans contestation de validité locale.",
      },
      {
        titre: "Le démembrement de propriété :",
        texte:
          "protection sur-mesure pour le conjoint avec exonération ciblée et maîtrise de l'usufruit successoral.",
      },
      {
        titre: "La structuration sociétaire (SCI transfrontalière) :",
        texte:
          "conversion d'immeubles physiques en parts mobilières sous conditions conventionnelles favorables.",
      },
    ],
  },
];

export const relatedArticles: RelatedArticle[] = [
  {
    categorie: "Immobilier",
    titre: "Investir dans l'immobilier ancien : les pièges juridiques à éviter",
    date: "02 Mars 2024",
    duree: "4 min de lecture",
    image: "/blog/card-immobilier-ancien.jpg",
    alt: "Salon d'un appartement ancien avec boiseries et cheminée",
    href: "/blog",
  },
  {
    categorie: "Famille",
    titre: "La protection du conjoint survivant : solutions sur-mesure",
    date: "21 Février 2024",
    duree: "6 min de lecture",
    image: "/blog/card-conjoint-survivant.jpg",
    alt: "Couple signant des actes notariés de protection mutuelle",
    href: "/blog",
  },
  {
    categorie: "Entreprise & Pacte Dutreil",
    titre: "Transmission d'entreprise : pérenniser le capital économique",
    date: "12 Février 2024",
    duree: "7 min de lecture",
    image: "/blog/card-transmission-entreprise.jpg",
    alt: "Immeuble d'affaires moderne représentant la transmission d'entreprise",
    href: "/blog",
  },
];

export function getArticleDetail(slug: string) {
  return articleDetails.find((article) => article.slug === slug);
}
