// Clés de correspondance entre le code et le contenu Payload.
// ATTENTION : la correspondance est faite par libellé exact (décision D8).
// Renommer un libellé dans /admin déconnecte la section tant que ce fichier
// (et la donnée seedée) n'est pas mis à jour.

export const PAGE_SLUGS = {
  home: 'home',
  quiSuisJe: 'qui-suis-je',
  services: 'services',
  contact: 'contact',
} as const

export const SECTION_LABELS = {
  servicesHero: 'L’excellence au service de l’humain', // page Services, section 1
  servicesToolsBand: 'Expertise digitale', // page Services, section 2
  contactHero: 'Entrer en relation', // page Contact, section 1
  contactMapBand: 'Nous trouver', // page Contact, section 2
} as const

export const LEGACY_SEEDED_HEADINGS = {
  // Anciennes valeurs seedées à corriger une seule fois (§8.3).
  servicesToolsBand: 'Outils et simulateurs',
  contactMapBand: 'Le cabinet à Aix-en-Provence',
} as const

export const CANONICAL_HEADINGS = {
  // Valeurs cibles = texte visible actuel du site (à préserver).
  servicesToolsBand: 'Outils et Simulateurs',
  contactMapBand: 'Nous trouver',
} as const

export const SECTION_INTROS = {
  servicesHero:
    'Nous vous accompagnons à chaque étape de votre projet, en collaboration avec des professionnels complémentaires (avocats, experts-comptables, agents immobiliers, CGPI…), afin de sécuriser l’ensemble de votre opération.',
  servicesToolsBand:
    'Préparez vos projets avec nos outils de calcul en ligne pour une vision claire de votre patrimoine.',
  contactHero:
    'Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre projet.',
} as const
