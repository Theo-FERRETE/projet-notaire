export function getHomePageData() {
  return {
      navItems: [
        { label: 'Accueil', href: '/', active: true },
        { label: 'Services', href: '/services' },
        { label: 'Qui-suis-je', href: '/qui-suis-je' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
      serviceCards: [
        { title: 'Famille', description: 'Accompagnement sur-mesure pour les familles, les successions et les transmissions.', icon: '✦' },
        { title: 'Patrimoine', description: 'Structuration et organisation du patrimoine dans le respect des cadres juridique et fiscal.', icon: '▣' },
        { title: 'Immobilier', description: 'Sécurisation juridique des opérations immobilières, de la préparation à la réalisation.', icon: '▦' },
        { title: "Transmission d'entreprise", description: 'Conseil et accompagnement des entreprises à chaque étape de leur développement.', icon: '◈' },
        { title: 'Droit international privé', description: 'Réglementation et sécurisation des situations transfrontalières et internationales.', icon: '◍' },
      ],
      footerLinks: {
        navigation: ['Accueil', 'Services', 'Bio', 'Blog'],
        legal: ['Mentions légales', 'Politique de confidentialité', 'CGV'],
      },
  }
}
