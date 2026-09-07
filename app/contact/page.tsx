import type { Metadata } from "next";
import Image from "next/image";

import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Contactez l'étude de Maître Laïla GSSIME à Aix-en-Provence : adresse, téléphone, e-mail, horaires d'ouverture et formulaire de demande.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/contact",
    title: "Contactez-nous | Maître Laïla GSSIME",
    description:
      "Adresse, téléphone, e-mail et horaires de l'étude notariale Laïla GSSIME, 34 cours Mirabeau à Aix-en-Provence.",
  },
};

const coordonnees = [
  {
    titre: "Adresse",
    icone: "/contact/icon-adresse.svg",
    largeur: 16,
    hauteur: 24,
    lignes: ["34 cours Mirabeau, 13100 Aix-en-Provence"],
  },
  {
    titre: "Téléphone",
    icone: "/contact/icon-telephone.svg",
    largeur: 18,
    hauteur: 22,
    lignes: ["04 22 58 01 80"],
    lien: "tel:+33422580180",
  },
  {
    titre: "E-mail",
    icone: "/contact/icon-email.svg",
    largeur: 20,
    hauteur: 20,
    lignes: ["laila.gssime@notaires.fr"],
    lien: "mailto:laila.gssime@notaires.fr",
  },
  {
    titre: "Horaires d'ouverture",
    icone: "/contact/icon-horaires.svg",
    largeur: 20,
    hauteur: 24,
    lignes: [
      "Lundi au Vendredi : 09h00 - 18h00. Samedi sur rendez-vous",
      "uniquement.",
    ],
  },
];

const champLabel =
  "font-hanken text-[10px] uppercase leading-[15px] text-[#4b5563]";
const champInput =
  "h-[41px] w-full border-b border-graphite bg-field px-3 font-hanken text-sm text-noir";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-ivory text-noir">
      <SiteHeader active="Contact" />

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-20 bg-ivory px-6 py-20 sm:px-10 lg:px-16">
        {/* Titre */}
        <section className="flex flex-col gap-4">
          <p className="font-hanken text-base uppercase leading-6 tracking-[3.2px] text-graphite">
            Entrer en relation
          </p>
          <h1 className="pb-2 font-garamond text-[40px] leading-[1.15] tracking-[-1.28px] text-noir sm:text-[52px] lg:text-[64px] lg:leading-[72px]">
            Contactez-nous
          </h1>
          <span aria-hidden className="h-px w-24 bg-graphite" />
          <p className="max-w-[672px] pt-4 font-garamond text-base leading-6 text-champagne">
            Chez Angle Droit, nous accordons une importance primordiale à votre
            temps et à la gravité de vos dossiers. Notre équipe dédiée est prête
            à vous apporter l&apos;expertise sophistiquée dont vous avez besoin.
          </p>
        </section>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Colonne gauche : coordonnées + photo */}
          <section
            aria-label="Coordonnées de l'étude"
            className="flex flex-col gap-12 lg:col-span-5"
          >
            <div className="flex flex-col gap-8">
              {coordonnees.map((item) => (
                <div key={item.titre} className="flex items-start gap-4">
                  <Image
                    src={item.icone}
                    alt=""
                    width={item.largeur}
                    height={item.hauteur}
                    unoptimized
                    className="shrink-0"
                    style={{ width: item.largeur, height: item.hauteur }}
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="font-hanken text-base uppercase leading-6 text-noir">
                      {item.titre}
                    </h2>
                    <p className="font-garamond text-base leading-6 text-champagne">
                      {item.lien ? (
                        <a
                          href={item.lien}
                          className="transition-colors hover:text-noir"
                        >
                          {item.lignes[0]}
                        </a>
                      ) : (
                        item.lignes.map((ligne) => (
                          <span key={ligne} className="block">
                            {ligne}
                          </span>
                        ))
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <figure className="relative isolate m-0">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-white/10"
              />
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <Image
                  src="/contact/bureau-notarial.jpg"
                  alt="Statue de la Justice sur la façade d'un immeuble haussmannien"
                  width={341}
                  height={512}
                  className="absolute left-0 top-[-0.05%] h-[100.1%] w-full max-w-none object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-black mix-blend-saturation"
                />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 flex flex-col gap-4 border border-white/10 bg-[rgba(248,249,255,0.9)] p-[25px] backdrop-blur-[6px]">
                <p className="font-garamond text-base italic leading-6 text-noir">
                  «&nbsp;La précision dans la pratique, l&apos;autorité dans le
                  conseil. Notre étude reflète les normes rigoureuses que nous
                  appliquons à chaque dossier juridique.&nbsp;»
                </p>
                <p className="font-hanken text-base uppercase leading-6 text-graphite">
                  — Angle Droit Notaires
                </p>
              </figcaption>
            </figure>
          </section>

          {/* Colonne droite : formulaire */}
          <section
            aria-labelledby="titre-formulaire"
            className="flex flex-col gap-12 border border-white/10 bg-white p-6 sm:p-[49px] lg:col-span-7"
          >
            <h2
              id="titre-formulaire"
              className="font-garamond text-base leading-6 text-noir"
            >
              Envoyer une demande
            </h2>

            <form className="flex flex-col gap-10">
              <div className="flex flex-col gap-10 sm:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="prenom" className={champLabel}>
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={champInput}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="nom" className={champLabel}>
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={champInput}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10 sm:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="telephone" className={champLabel}>
                    Numéro de téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    className={champInput}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="email" className={champLabel}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={champInput}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projet" className={champLabel}>
                  Description du projet...
                </label>
                <textarea
                  id="projet"
                  name="projet"
                  required
                  className="h-[113px] w-full resize-y border-b border-black/30 bg-transparent px-3 py-2 font-hanken text-sm text-noir"
                />
              </div>

              <div className="flex items-start gap-3 py-4">
                <input
                  id="consentement"
                  name="consentement"
                  type="checkbox"
                  required
                  className="mt-0.5 size-4 shrink-0 appearance-none border border-black/30 bg-field checked:bg-graphite"
                />
                <label
                  htmlFor="consentement"
                  className="font-garamond text-xs leading-[15px] text-[#4b5563]"
                >
                  J&apos;accepte que mes données soient traitées conformément à
                  la politique de confidentialité pour la gestion de ma demande.
                </label>
              </div>

              <button
                type="submit"
                className="self-start bg-graphite px-12 py-4 font-hanken text-base uppercase leading-6 tracking-[1.6px] text-field drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-noir"
              >
                Envoyer
              </button>
            </form>
          </section>
        </div>

        {/* Carte */}
        <section aria-labelledby="titre-carte" className="flex flex-col gap-8 pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="titre-carte"
              className="font-garamond text-base leading-6 text-noir"
            >
              Nous trouver
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=34+cours+Mirabeau+13100+Aix-en-Provence"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-graphite pb-[5px] font-hanken text-base leading-6 text-graphite transition-colors hover:text-noir"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          <div className="relative isolate h-[450px] w-full overflow-hidden border border-white/10 p-px">
            <Image
              src="/contact/carte-aix.jpg"
              alt="Plan du quartier du cours Mirabeau à Aix-en-Provence indiquant l'emplacement de l'étude"
              width={512}
              height={318}
              className="absolute left-0 top-[-24.17%] h-[148.34%] w-full max-w-none object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-black mix-blend-saturation"
            />
            <div className="absolute inset-[40.78%_44.38%] flex flex-col items-center">
              <div className="mb-1 flex items-center bg-noir p-3 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                <p className="whitespace-nowrap font-hanken text-[10px] uppercase leading-[15px] text-field">
                  Étude Laila Gssime
                </p>
              </div>
              <Image
                src="/contact/pin-carte.svg"
                alt=""
                width={24}
                height={30}
                unoptimized
                className="h-[30px] w-6 shrink-0"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
