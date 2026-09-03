import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bio", href: "/qui-suis-je" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Honoraires", href: "/honoraires" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-line bg-stone py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-12">
        <div className="flex flex-col gap-16 md:flex-row md:justify-center md:gap-16">
          <div className="flex w-full max-w-[362px] flex-col gap-[22.9px]">
            <Image
              src="/qui-suis-je/logo-gssime.png"
              alt="Logo de l'étude Laïla Gssime"
              width={65}
              height={65}
              className="size-[65px] object-cover"
            />
            <p className="max-w-[320px] text-base leading-[25.6px] text-slate-muted">
              Cabinet d&apos;avocats indépendant situé au cœur
              d&apos;Aix-en-Provence, dédié à l&apos;excellence juridique et au
              conseil personnalisé.
            </p>
            <address className="flex flex-col gap-2 not-italic">
              <span className="flex items-center gap-2 text-base leading-[25.6px] text-slate-muted">
                <Image
                  src="/qui-suis-je/icon-pin.svg"
                  alt=""
                  width={9.333}
                  height={11.667}
                  unoptimized
                  className="h-[11.667px] w-[9.333px] shrink-0"
                />
                34 cours Mirabeau, Aix-En-Provence
              </span>
              <a
                href="mailto:contact@gssime-avocat.fr"
                className="flex items-center gap-2 text-base leading-[25.6px] text-slate-muted transition-colors hover:text-ink"
              >
                <Image
                  src="/qui-suis-je/icon-mail.svg"
                  alt=""
                  width={11.667}
                  height={9.333}
                  unoptimized
                  className="h-[9.333px] w-[11.667px] shrink-0"
                />
                contact@gssime-avocat.fr
              </a>
            </address>
          </div>

          <div className="flex flex-1 gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-bold uppercase leading-[16.8px] tracking-[1.2px] text-ink-soft">
                Navigation
              </h2>
              <nav className="flex flex-col gap-2">
                {navigation.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base leading-6 text-slate-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-bold uppercase leading-[16.8px] tracking-[1.2px] text-ink-soft">
                Légal
              </h2>
              <nav className="flex flex-col gap-2">
                {legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base leading-6 text-slate-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-8">
          <p className="text-center text-xs font-bold uppercase leading-[16.8px] tracking-[1.2px] text-slate-muted opacity-60">
            © 2024 Maître Laïla Gssime. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
