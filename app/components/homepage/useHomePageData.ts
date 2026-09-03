import { useMemo } from 'react'

export function useHomePageData() {
  return useMemo(
    () => ({
      navItems: [
        { label: 'Office', href: '#office', active: true },
        { label: 'Services', href: '#services' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
      ],
      serviceCards: [
        { title: 'Famille', description: 'Accompagnement sur-mesure pour les familles, les successions et les transmissions.', icon: '✦' },
        { title: 'Immobilier', description: 'Sécurisation des transactions et conseils juridiques pour vos investissements.', icon: '◈' },
        { title: 'Transmission', description: 'Conseils et accompagnement pour la transmission patrimoniale et les donations.', icon: '◎' },
        { title: 'Droit international privé', description: 'Réglementation et sécurisation des situations transfrontalières et internationales.', icon: '◍' },
      ],
      footerLinks: {
        navigation: ['Accueil', 'Services', 'Bio', 'Blog'],
        legal: ['Mentions légales', 'Politique de confidentialité', 'CGV'],
      },
    }),
    [],
  )
}
