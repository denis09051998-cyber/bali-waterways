import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/kids-swimming", key: "nav.kids" },
  { to: "/adult-swimming", key: "nav.adults" },
  { to: "/ocean-swimming", key: "nav.ocean" },
  { to: "/freediving", key: "nav.freediving" },
  { to: "/coaches", key: "nav.coaches" },
  { to: "/locations", key: "nav.locations" },
  { to: "/faq", key: "nav.faq" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ocean">
          <Logo size={36} />
          <span className="hidden sm:inline">{t("brand.short")}</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-pool" }}
              inactiveProps={{ className: "text-ink/70 hover:text-pool" }}
              className="text-sm font-medium transition-colors"
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-xs font-medium text-ink/60 hover:text-pool"
          >
            Instagram
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex rounded-full bg-pool px-4 py-2 text-xs font-semibold text-surface shadow-sm hover:bg-ocean transition-colors"
          >
            {t("cta.bookLesson")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("menu.toggle")}
            className="xl:hidden inline-flex size-9 items-center justify-center rounded-md border border-ocean/15 text-ocean"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden border-t border-ocean/10 bg-surface px-5 py-3">
          <div className="grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 hover:bg-pool/10 hover:text-pool"
              >
                {t(n.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}