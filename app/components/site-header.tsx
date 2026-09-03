import Link from "next/link";

const navLinks = [
  { label: "Office", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ active = "Office" }: { active?: string }) {
  return (
    <header className="w-full border-b border-transparent bg-[rgba(253,252,247,0.8)]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-6 px-6 pb-[25px] pt-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-display text-[32px] font-medium uppercase leading-[44.8px] tracking-[-1.6px] text-ink"
        >
          Laila Gssime
        </Link>

        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-6 md:gap-10"
        >
          {navLinks.map((link) => {
            const isActive = link.label === active;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative font-ui text-xs font-bold leading-[14.4px] tracking-[1.8px] transition-colors hover:text-ink ${
                  isActive ? "text-ink" : "text-olive"
                }`}
              >
                {link.label}
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brass"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="border border-brass px-[25px] pb-[9.39px] pt-2 text-center font-ui text-xs font-bold uppercase leading-[14.4px] tracking-[1.8px] text-brass transition-colors hover:bg-brass hover:text-cream"
        >
          Consultation
        </Link>
      </div>
    </header>
  );
}
