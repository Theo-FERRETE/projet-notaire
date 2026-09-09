import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HomeFooter } from "@/app/components/homepage/HomeFooter";
import { getSiteNavItems, HomeHeader } from "@/app/components/homepage/HomeHeader";
import { getPageBySlug, getPageSection } from "@/lib/payload-server";

export const metadata: Metadata = {
  title: "Qui suis-je — Maître Laïla GSSIME",
  description:
    "Plus de vingt années d'expertise juridique dédiées à la protection et à la transmission de votre patrimoine.",
};

const expertises = [
  {
    titre: "Droit patrimonial",
    texte:
      "Optimisation de la transmission, structuration d'actifs et protection du conjoint. Une vision long-termiste de vos intérêts.",
  },
  {
    titre: "International",
    texte:
      "Expertise pointue en successions internationales et régimes matrimoniaux transfrontaliers, gérant la complexité avec sérénité.",
  },
];

const motsCles = ["Patrimoine", "Famille", "Avenir", "Sérénité"];

export default async function QuiSuisJePage() {
  const page = await getPageBySlug("qui-suis-je");
  const hero = getPageSection(page, "L’excellence au service de l’humain");

  return (
    <div className="flex flex-1 flex-col bg-cream text-ink">
      <HomeHeader compact navItems={getSiteNavItems("Qui-suis-je")} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-8 pb-[120px] pt-[119px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-[10%] -right-[10%] opacity-5"
          >
            <Image
              src="/qui-suis-je/hero-decor.svg"
              alt=""
              fill
              unoptimized
              className="object-fill"
            />
          </div>

          <div className="relative flex w-full max-w-[896px] flex-col items-center gap-[23.4px]">
            <p className="text-center font-bold uppercase leading-[16.8px] tracking-[2.4px] text-gold text-[12px]">
              L&apos;excellence au service de l&apos;humain
            </p>
            <h1 className="text-center font-serif text-[40px] leading-tight tracking-[-1.28px] text-black sm:text-[52px] lg:text-[64px] lg:leading-[80px]">
              {hero?.heading ?? "Maître Laïla GSSIME"}
            </h1>
            <span aria-hidden className="h-px w-24 bg-gold" />
            <p className="max-w-[672px] text-center text-[18px] leading-[28.8px] text-slate-muted">
              Plus de vingt années d&apos;expertise juridique dédiées à la
              protection et à la transmission de votre patrimoine.
            </p>
          </div>
        </section>

        {/* Un parcours de rigueur */}
        <section className="bg-sand px-8 py-[120px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-6 self-start lg:col-span-4">
              <h2 className="font-serif text-[40px] leading-[1.2] text-black lg:text-[48px] lg:leading-[57.6px]">
                Un Parcours de
                <br />
                Rigueur.
              </h2>

              <div
                aria-hidden
                className="hidden justify-end pr-[22px] pt-12 opacity-20 lg:flex"
              >
                <div className="flex h-[715px] w-48 items-center justify-center">
                  <p className="rotate-90 whitespace-nowrap font-serif text-[120px] leading-[192px] text-gold">
                    EXPERTISE
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-16 lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col gap-6">
                <blockquote className="border-l-2 border-[rgba(118,90,38,0.3)] py-4 pl-8 text-[18px] leading-[29.25px] text-black">
                  «&nbsp;Mon rôle dépasse la simple rédaction d&apos;actes ; il
                  s&apos;agit de bâtir une relation de confiance durable, ancrée
                  dans la clarté et la compréhension profonde de vos
                  enjeux.&nbsp;»
                </blockquote>

                <p className="text-base leading-[25.6px] text-black">
                  Spécialisée en droit patrimonial de la famille et en droit
                  international privé, j&apos;accompagne mes clients dans les
                  moments charnières de leur vie. Mon approche se distingue par
                  une volonté farouche de rendre le droit accessible, sans
                  jamais en sacrifier la précision technique.
                </p>
              </div>

              <div className="flex flex-col gap-16 pt-[23px] sm:flex-row sm:justify-center">
                {expertises.map((expertise) => (
                  <div
                    key={expertise.titre}
                    className="flex flex-1 flex-col gap-[6.89px]"
                  >
                    <h3 className="text-xs font-bold uppercase leading-[16.8px] tracking-[1.2px] text-gold">
                      {expertise.titre}
                    </h3>
                    <p className="text-base leading-[25.6px] text-black">
                      {expertise.texte}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="relative w-full overflow-hidden rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                style={{ aspectRatio: "696 / 494.81" }}
              >
                <Image
                  src="/qui-suis-je/expertise-notariale.png"
                  alt="Illustration de l'expertise notariale"
                  width={1792}
                  height={2390}
                  className="absolute left-0 top-0 h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Engagement */}
        <section className="px-8 py-[120px] lg:px-[192px]">
          <div className="mx-auto flex w-full max-w-[896px] flex-col items-center gap-[23px] border-y border-line py-[65px]">
            <h2 className="text-center font-serif text-[28px] italic leading-[41.6px] text-black lg:text-[32px]">
              L&apos;Engagement de l&apos;Étude
            </h2>
            <p className="max-w-[768px] pb-10 text-center text-[18px] leading-[29.25px] text-slate-muted">
              Sous l&apos;impulsion de Maître Laïla GSSIME, notre étude
              s&apos;engage sur trois piliers fondamentaux : la{" "}
              <strong className="font-bold">Rigueur</strong> absolue du conseil,
              la <strong className="font-bold">Disponibilité</strong> de
              l&apos;écoute et la <strong className="font-bold">Modernité</strong>{" "}
              de nos outils de gestion pour un service fluide et transparent.
            </p>
            <Link
              href="/contact"
              className="border border-gold px-[49px] py-[17px] text-center text-xs font-bold uppercase leading-[16.8px] tracking-[1.2px] text-gold transition-colors hover:bg-gold hover:text-cream"
            >
              Prendre rendez-vous avec Maître Gssime
            </Link>
          </div>
        </section>

        {/* Bandeau de texture */}
        <div
          aria-hidden
          className="relative h-[168px] overflow-hidden opacity-10"
        >
          <div className="absolute left-1/2 top-16 flex -translate-x-1/2 items-center gap-24">
            <span className="h-10 w-[407.28px] shrink-0" />
            {motsCles.map((mot) => (
              <span
                key={mot}
                className="whitespace-nowrap font-serif text-[36px] uppercase leading-10 tracking-[36px] text-ink-soft"
              >
                {mot}
              </span>
            ))}
            <span className="h-10 w-[422.94px] shrink-0" />
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
