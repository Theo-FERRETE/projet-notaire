import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ServiceIcon,
  ToolIcon,
  type ServiceIconName,
  type ToolIconName,
} from "../components/icons/ServicesIcons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Nos services | Maître Laïla GSSIME — Notaire",
  description:
    "Découvrez les services de Maître Laïla GSSIME, notaire à Aix-en-Provence : immobilier, succession, divorce, couple, donation, transmission d'entreprise et droit international privé.",
  keywords: [
    "notaire Aix-en-Provence",
    "acheter vendre immobilier notaire",
    "succession Aix-en-Provence",
    "divorce notaire",
    "contrat de couple",
    "donation",
    "transmission d'entreprise",
    "droit international privé",
    "simulateur frais acte",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/services",
    title: "Nos services | Maître Laïla GSSIME — Notaire",
    description:
      "Un accompagnement notarial rigoureux pour vos projets immobiliers, familiaux, patrimoniaux et internationaux à Aix-en-Provence.",
  },
  twitter: {
    card: "summary",
    title: "Nos services | Maître Laïla GSSIME — Notaire",
    description:
      "Un accompagnement notarial rigoureux pour vos projets immobiliers, familiaux, patrimoniaux et internationaux.",
  },
};

type Service = {
  title: string;
  icon: ServiceIconName;
  paragraphs: string[];
  bullets?: string[];
  conclusion?: string;
};

const services: Service[] = [
  {
    title: "Acheter / Vendre",
    icon: "home",
    paragraphs: [
      "Vous projetez d’acheter ou de vendre un bien immobilier (appartement, maison, terrain constructible) ? Vous souhaitez discuter de votre projet avec notre équipe et obtenir des explications sur les étapes nécessaires à la constitution de votre dossier ?",
      "Nos experts vous accompagnent tout au long du processus :",
    ],
    bullets: [
      "Analyse des éléments essentiels à vérifier avant l’acquisition",
      "Sécurisation juridique de l’opération",
      "Estimation détaillée des frais liés à l’achat",
      "Évaluation et calcul de la plus-value potentielle en cas de revente",
    ],
    conclusion:
      "Nous mettons à votre disposition un accompagnement personnalisé, transparent et rigoureux afin de concrétiser votre projet immobilier en toute confiance.",
  },
  {
    title: "Succession",
    icon: "scroll",
    paragraphs: [
      "À la suite du décès d’un proche, de nombreuses questions peuvent se poser : quelles formalités accomplir ? Quels justificatifs fournir ? Quel sera le montant des frais liés à la succession ?",
      "Le notaire vous guide à chaque étape afin de vous apporter des réponses précises et d’assurer un règlement de la succession dans un cadre juridique sécurisé.",
    ],
  },
  {
    title: "Divorcer",
    icon: "heart-crack",
    paragraphs: [
      "Le notaire occupe une place centrale dans le cadre d’une procédure de divorce. Il vous conseille et vous accompagne pour répondre à vos questions, vous guider dans les démarches à entreprendre, préciser les pièces à fournir et vous éclairer sur les coûts liés à la procédure.",
      "À vos côtés, il garantit la sécurisation des enjeux patrimoniaux et veille à l’organisation équitable du partage des biens.",
    ],
  },
  {
    title: "Le Couple",
    icon: "heart",
    paragraphs: [
      "La vie de couple peut aujourd’hui s’organiser selon différentes formes juridiques. Quel que soit votre projet commun, il est essentiel d’anticiper et d’assurer votre protection, à la fois individuelle et partagée.",
      "Le notaire vous conseille et vous accompagne afin de déterminer la solution la plus appropriée à votre situation et à vos objectifs.",
    ],
  },
  {
    title: "Donation",
    icon: "gift",
    paragraphs: [
      "À un moment ou à un autre, la transmission anticipée d’une partie de son patrimoine à ses proches devient une question essentielle. Quels bénéfices peut-elle présenter sur les plans pratique, juridique et fiscal ?",
      "Le notaire vous conseille afin d’anticiper cette démarche et de structurer votre projet de transmission dans un cadre sécurisé, en adéquation avec votre situation personnelle et vos objectifs.",
    ],
  },
  {
    title: "Transmission d'Entreprise",
    icon: "building",
    paragraphs: [
      "La transmission d’une entreprise implique des enjeux juridiques, fiscaux et patrimoniaux majeurs.",
      "Le notaire vous accompagne dans l’anticipation et la structuration de votre projet afin de sécuriser les opérations, protéger vos intérêts et assurer la continuité de votre activité.",
    ],
  },
  {
    title: "Droit International Privé",
    icon: "globe",
    paragraphs: [
      "Le droit international privé encadre les situations présentant un élément d’extranéité, impliquant l’application de plusieurs systèmes juridiques.",
      "Le notaire vous accompagne pour analyser votre situation, déterminer les règles applicables et sécuriser vos projets dans un environnement international.",
    ],
  },
];

type Tool = {
  id: string;
  title: string;
  description: string;
  label: string;
  icon: ToolIconName;
};

const tools: Tool[] = [
  {
    id: "simulateur-pret",
    title: "Simulateur de prêt",
    description:
      "Estimez votre capacité d'emprunt et vos mensualités pour votre futur projet immobilier.",
    label: "Accéder au simulateur",
    icon: "simulateur-pret",
  },
  {
    id: "frais-mainlevee",
    title: "Calcul des frais de mainlevée",
    description:
      "Calculez le coût de la radiation d'une hypothèque suite au remboursement de votre crédit.",
    label: "Lancer le calcul",
    icon: "frais-mainlevee",
  },
  {
    id: "barometre",
    title: "Baromètre immobilier",
    description:
      "Consultez les tendances du marché et les prix au m² pour orienter votre transaction.",
    label: "Voir les statistiques",
    icon: "barometre",
  },
  {
    id: "frais-acte",
    title: "Calcul des frais d'acte",
    description:
      "Obtenez une estimation précise des frais d'acquisition pour votre achat immobilier.",
    label: "Estimer mes frais",
    icon: "frais-acte",
  },
  {
    id: "plus-value",
    title: "Simulateur impôts plus-value",
    description:
      "Anticipez l'imposition lors de la revente de votre bien immobilier hors résidence principale.",
    label: "Calculer l'impôt",
    icon: "plus-value",
  },
  {
    id: "droits-succession",
    title: "Calcul des droits de succession",
    description:
      "Évaluez le montant des droits à payer selon le lien de parenté et l'actif successoral.",
    label: "Simuler les droits",
    icon: "droits-succession",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${siteUrl}/#office`,
      name: "Maître Laïla GSSIME — Notaire",
      description:
        "Étude notariale à Aix-en-Provence accompagnant les particuliers et les entreprises dans leurs projets immobiliers, familiaux, patrimoniaux et internationaux.",
      url: `${siteUrl}/services`,
      image: `${siteUrl}/qui-suis-je/expertise-notariale.png`,
      areaServed: { "@type": "City", name: "Aix-en-Provence" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "34 cours Mirabeau",
        postalCode: "13100",
        addressLocality: "Aix-en-Provence",
        addressCountry: "FR",
      },
      telephone: "+33 4 22 58 01 80",
      email: "laila.gssime@notaires.fr",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services notariaux",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteUrl}/services`,
        },
      ],
    },
  ],
};

function SiteHeader() {
  const navigation = [
    { label: "Office", href: "/" },
    { label: "Services", href: "/services", active: true },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-cream/95 backdrop-blur-sm">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-8 py-6 transition-all md:py-8"
      >
        <Link
          className="font-serif text-2xl uppercase tracking-tight text-ink md:text-3xl"
          href="/"
        >
          Laïla Gssime
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                aria-current={item.active ? "page" : undefined}
                className={`relative font-ui text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-gold ${
                  item.active ? "text-ink after:absolute after:-bottom-2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-gold" : "text-slate-muted"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="border border-[#c7c7bf] px-6 py-2.5 font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white md:px-8"
          href="/contact"
        >
          Consultation
        </Link>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#c7c7bf]/50 bg-[#f2eee2] pt-20">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-8 pb-20 md:grid-cols-3">
        <div className="space-y-6">
          <Image
            src="/qui-suis-je/logo-gssime.png"
            alt="Logo de Maître Laïla Gssime"
            width={65}
            height={65}
            className="size-[65px] object-cover"
          />
          <p className="max-w-xs font-sans text-base italic leading-relaxed text-slate-muted">
            Excellence, Transparence &amp; Tradition Juridique. Une étude
            engagée pour votre patrimoine.
          </p>
        </div>

        <div>
          <h2 className="mb-8 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h2>
          <address className="space-y-4 not-italic font-sans text-base text-slate-muted">
            <p>34 cours Mirabeau</p>
            <p>13100 Aix-En-Provence</p>
            <p>
              <a className="transition-colors hover:text-gold" href="tel:+33422580180">
                +33 (0)4 22 58 01 80
              </a>
            </p>
            <p>
              <a
                className="underline underline-offset-4 transition-colors hover:text-gold"
                href="mailto:laila.gssime@notaires.fr"
              >
                laila.gssime@notaires.fr
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="mb-8 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            Mentions
          </h2>
          <nav aria-label="Navigation légale">
            <ul className="space-y-4 font-sans text-base">
              <li>
                <Link className="text-slate-muted transition-colors hover:text-gold" href="/mentions-legales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className="text-slate-muted transition-colors hover:text-gold" href="/confidentialite">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link className="text-slate-muted transition-colors hover:text-gold" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 border-t border-[#c7c7bf]/20 px-8 py-8 md:flex-row">
        <p className="font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-slate-muted opacity-60">
          © 2024 L&amp;E Notaires. Tous droits réservés.
        </p>
        <div aria-hidden="true" className="flex gap-6 text-[#c7c7bf]">
          <span className="text-xl">◈</span>
          <span className="text-xl">✓</span>
        </div>
      </div>
    </footer>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-cream text-ink selection:bg-[#fcd353] selection:text-[#725a00]">
        <SiteHeader />

        <main id="content" className="pt-40">
          <section
            aria-labelledby="services-title"
            className="relative mx-auto max-w-[1280px] px-8 py-16 text-center md:py-20"
          >
            <div className="mb-8">
              <p className="mb-4 block font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                L&apos;excellence au service de l&apos;humain
              </p>
              <h1
                id="services-title"
                className="mx-auto mb-8 max-w-4xl font-serif text-[40px] leading-[1.2] tracking-[-0.02em] text-ink md:text-[64px] md:leading-[1.1]"
              >
                Nos Services
              </h1>
              <div aria-hidden="true" className="mx-auto mb-8 h-px w-16 bg-[#c7c7bf]" />
              <p className="mx-auto max-w-3xl font-sans text-lg italic leading-relaxed text-slate-muted">
                Nous vous accompagnons à chaque étape de votre projet, en
                collaboration avec des professionnels complémentaires
                (avocats, experts-comptables, agents immobiliers, CGPI…), afin
                de sécuriser l’ensemble de votre opération.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="service-list-title"
            className="mx-auto max-w-[1280px] space-y-24 px-8 pb-[120px]"
          >
            <h2 id="service-list-title" className="sr-only">
              Les services de l&apos;étude
            </h2>

            {services.map((service, index) => {
              const titleId = `service-title-${index}`;
              const isReversed = index % 2 === 1;

              return (
                <article
                  aria-labelledby={titleId}
                  className={`flex flex-col items-center gap-12 md:flex-row md:gap-24 ${isReversed ? "md:flex-row-reverse" : ""}`}
                  key={service.title}
                >
                  <div
                    className={`w-full flex-1 py-4 ${isReversed ? "md:border-l md:border-[#c7c7bf] md:pl-12" : "md:border-r md:border-[#c7c7bf] md:pr-12"}`}
                  >
                    <h2 id={titleId} className="mb-8 font-serif text-4xl font-normal text-gold">
                      {service.title}
                    </h2>
                    <div className="space-y-6 font-sans text-base leading-relaxed text-slate-muted">
                      {service.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {service.bullets ? (
                        <ul className="list-none space-y-2 pl-2" aria-label={`Points clés — ${service.title}`}>
                          {service.bullets.map((bullet) => (
                            <li className="flex items-start gap-2" key={bullet}>
                              <span aria-hidden="true">—</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {service.conclusion ? (
                        <p className="font-medium italic text-ink">{service.conclusion}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex w-full flex-1 items-center justify-center" aria-hidden="true">
                    <div className="relative flex size-64 items-center justify-center">
                      <ServiceIcon name={service.icon} size={160} className="opacity-30" />
                      <div className="absolute inset-0 scale-110 rounded-full border border-gold/20" />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <section
            aria-labelledby="tools-title"
            className="border-t border-[#c7c7bf] bg-[#f2eee2] py-[120px]"
          >
            <div className="mx-auto max-w-[1280px] px-8">
              <div className="mb-16 text-center md:mb-20">
                <p className="mb-4 block font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                  Expertise digitale
                </p>
                <h2
                  id="tools-title"
                  className="mb-6 font-serif text-[40px] leading-[1.2] text-ink md:text-5xl"
                >
                  Outils et Simulateurs
                </h2>
                <div aria-hidden="true" className="mx-auto mb-6 h-px w-12 bg-[#c7c7bf]" />
                <p className="mx-auto max-w-xl font-sans text-base leading-relaxed text-slate-muted">
                  Préparez vos projets avec nos outils de calcul en ligne pour
                  une vision claire de votre patrimoine.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {tools.map((tool) => (
                  <article
                    className="flex h-full flex-col items-center border border-[#c7c7bf] bg-cream p-8 text-center"
                    id={tool.id}
                    key={tool.id}
                  >
                    <div className="mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-[#f8f3e8]">
                      <ToolIcon name={tool.icon} size={180} className="size-3/4 object-contain opacity-60" />
                    </div>
                    <h3 className="mb-4 font-serif text-xl uppercase tracking-tight text-ink">
                      {tool.title}
                    </h3>
                    <p className="mb-8 flex-1 font-sans text-base leading-relaxed text-slate-muted">
                      {tool.description}
                    </p>
                    <Link
                      aria-label={`${tool.label} — ${tool.title}`}
                      className="inline-flex w-full items-center justify-center bg-ink px-6 py-3 font-ui text-[10px] font-bold uppercase tracking-widest text-cream transition-colors hover:bg-gold"
                      href="/contact"
                    >
                      {tool.label}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </main>

        <SiteFooter />
      </div>
    </>
  );
}
