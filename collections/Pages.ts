import type { CollectionConfig } from 'payload'

const isHexColor = (value: unknown) =>
  typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)
    ? true
    : 'Utilisez une couleur hexadécimale au format #RRGGBB.'

const SERVICE_ICON_OPTIONS = [
  { label: 'Maison (acheter / vendre)', value: 'home' },
  { label: 'Parchemin (succession)', value: 'scroll' },
  { label: 'Cœur brisé (divorce)', value: 'heart-crack' },
  { label: 'Cœur (couple)', value: 'heart' },
  { label: 'Cadeau (donation)', value: 'gift' },
  { label: 'Immeuble (entreprise)', value: 'building' },
  { label: 'Globe (international)', value: 'globe' },
  { label: 'Balance', value: 'scale' },
  { label: 'Repère', value: 'landmark' },
  { label: 'Calculatrice', value: 'calculator' },
  { label: 'Pourcentage', value: 'percent' },
  { label: 'Tendance à la hausse', value: 'trending-up' },
  { label: 'Courbe (graphique)', value: 'line-chart' },
  { label: 'Document', value: 'file-text' },
]

const TOOL_ICON_OPTIONS = [
  { label: 'Calculatrice (prêt)', value: 'simulateur-pret' },
  { label: 'Cadenas (mainlevée)', value: 'frais-mainlevee' },
  { label: 'Sceau (baromètre)', value: 'barometre' },
  { label: "Document (frais d'acte)", value: 'frais-acte' },
  { label: 'Impôts (plus-value)', value: 'plus-value' },
  { label: 'Arbre généalogique (droits de succession)', value: 'droits-succession' },
]

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Contenus éditables des pages publiques du site.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nom de la page',
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      options: [
        { label: 'Accueil', value: 'home' },
        { label: 'Qui suis-je', value: 'qui-suis-je' },
        { label: 'Services', value: 'services' },
        { label: 'Contact', value: 'contact' },
      ],
      label: 'Page publique',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections de la page',
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Petit titre',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Titre',
        },
        {
          name: 'intro',
          type: 'textarea',
          label: "Introduction / texte d'accroche",
          admin: {
            description:
              "Courte description affichée sous le titre de la section (paragraphe d'introduction).",
          },
        },
        {
          name: 'body',
          type: 'richText',
          label: 'Texte',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#FCF9F5',
          validate: isHexColor,
          admin: {
            description: 'Format attendu : #RRGGBB',
          },
          label: 'Couleur de fond',
        },
        {
          name: 'textColor',
          type: 'text',
          defaultValue: '#1B1B1B',
          validate: isHexColor,
          admin: {
            description: 'Format attendu : #RRGGBB',
          },
          label: 'Couleur du texte',
        },
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Section visible',
        },
      ],
    },
    {
      name: 'servicesContent',
      type: 'group',
      label: 'Services de l’étude',
      admin: {
        condition: (data) => data?.slug === 'services',
        description:
          "Contenu propre à la page Services : les 7 domaines d'intervention et les outils & simulateurs.",
      },
      fields: [
        {
          name: 'serviceItems',
          type: 'array',
          labels: { singular: 'Domaine d’intervention', plural: 'Domaines d’intervention' },
          admin: {
            description: 'Chaque domaine peut être ajouté, supprimé et personnalisé par son contenu.',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Titre du service',
            },
            {
              name: 'icon',
              type: 'select',
              required: false,
              defaultValue: 'home',
              options: SERVICE_ICON_OPTIONS,
              label: 'Icône',
              admin: {
                description:
                  'Choix parmi les icônes SVG existantes du site (aucun upload).',
              },
            },
            {
              name: 'paragraphs',
              type: 'array',
              required: true,
              minRows: 1,
              labels: { singular: 'Paragraphe', plural: 'Paragraphes' },
              fields: [
                {
                  name: 'paragraph',
                  type: 'textarea',
                  required: true,
                  label: 'Texte',
                },
              ],
            },
            {
              name: 'bullets',
              type: 'array',
              labels: { singular: 'Point clé', plural: 'Points clés' },
              fields: [
                {
                  name: 'bullet',
                  type: 'text',
                  required: true,
                  label: 'Point',
                },
              ],
            },
            {
              name: 'conclusion',
              type: 'text',
              label: 'Conclusion (paragraphe final en italique)',
            },
          ],
        },
        {
          name: 'toolCards',
          type: 'array',
          labels: { singular: 'Outil / simulateur', plural: 'Outils & simulateurs' },
          admin: {
            description: 'Les cartes restent éditables par leur texte et peuvent être ajoutées sans remplacer les précédentes.',
          },
          fields: [
            {
              name: 'slug',
              type: 'text',
              required: true,
              label: 'Identifiant (ancre)',
              admin: {
                description: 'Identifiant stable utilisé comme ancre HTML, ex. simulateur-pret.',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Titre',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Description',
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Texte du bouton',
              admin: {
                description:
                  'Le bouton ouvre le lien externe de l\u2019outil (voir champ « Lien »).',
              },
            },
            {
              name: 'link',
              type: 'text',
              required: false,
              label: 'Lien externe',
              admin: {
                description:
                  'URL de l\u2019outil / simulateur externe. Si vide, le lien par défaut de l\u2019outil est utilisé.',
              },
            },
            {
              name: 'icon',
              type: 'select',
              required: true,
              options: TOOL_ICON_OPTIONS,
              label: 'Icône',
            },
          ],
        },
      ],
    },
    {
      name: 'contactContent',
      type: 'group',
      label: 'Contact — coordonnées, carte & citation',
      admin: {
        condition: (data) => data?.slug === 'contact',
        description:
          "Contenu propre à la page Contact : coordonnées, carte Google Maps et citation. Les titres des sections restent dans « Sections de la page ».",
      },
      fields: [
        {
          name: 'addressLabel',
          type: 'text',
          defaultValue: 'ADRESSE',
          label: 'Libellé adresse',
        },
        {
          name: 'address',
          type: 'text',
          defaultValue: '34 cours Mirabeau, 13100 Aix-en-Provence',
          label: 'Adresse',
        },
        {
          name: 'phoneLabel',
          type: 'text',
          defaultValue: 'TÉLÉPHONE',
          label: 'Libellé téléphone',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '04 22 58 01 80',
          label: 'Téléphone',
          admin: {
            description: 'Le lien tel: est dérivé automatiquement (chiffres uniquement).',
          },
        },
        {
          name: 'emailLabel',
          type: 'text',
          defaultValue: 'E-MAIL',
          label: 'Libellé e-mail',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'laila.gssime@notaires.fr',
          label: 'E-mail',
          admin: {
            description: 'Le lien mailto: est dérivé automatiquement.',
          },
        },
        {
          name: 'hoursLabel',
          type: 'text',
          defaultValue: "HORAIRES D'OUVERTURE",
          label: 'Libellé horaires',
        },
        {
          name: 'hours',
          type: 'text',
          defaultValue:
            'Lundi au Vendredi : 09h00 - 18h00. Samedi sur rendez-vous uniquement.',
          label: 'Horaires',
        },
        {
          name: 'mapEmbedUrl',
          type: 'text',
          defaultValue:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8390853931005!2d5.4495929!3d43.5265482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d962fff3b4b%3A0x73d8ad4ec13fce8b!2s34%20Cr%20Mirabeau%2C%2013100%20Aix-en-Provence!5e0!3m2!1sen!2sfr!4v1788527296384!5m2!1sen!2sfr',
          label: "URL d'intégration Google Maps (iframe)",
        },
        {
          name: 'mapsLink',
          type: 'text',
          defaultValue:
            'https://www.google.com/maps/search/?api=1&query=34+cours+Mirabeau+Aix-en-Provence',
          label: 'Lien « Ouvrir dans Google Maps »',
        },
        {
          name: 'quoteImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Photo (citation)',
          admin: {
            description:
              "Laisser vide pour utiliser l'image actuelle du site (/contact/status.png).",
          },
        },
        {
          name: 'quoteText',
          type: 'textarea',
          defaultValue:
            '“La précision dans la pratique, l’autorité dans le conseil. Notre étude reflète les normes rigoureuses que nous appliquons à chaque dossier juridique.”',
          label: 'Citation',
        },
        {
          name: 'quoteCite',
          type: 'text',
          defaultValue: 'Droit Notaires',
          label: 'Auteur de la citation',
        },
        {
          name: 'formHeading',
          type: 'text',
          defaultValue: 'Envoyer une demande',
          label: 'Titre du formulaire',
        },
        {
          name: 'mapsLinkLabel',
          type: 'text',
          defaultValue: 'Ouvrir dans Google Maps',
          label: 'Libellé du lien Google Maps',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Référencement',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Titre SEO',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Description SEO',
        },
      ],
    },
  ],
}
