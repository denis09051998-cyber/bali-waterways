import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo, BrandText } from "./Logo";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/kids-swimming", key: "nav.kids" },
  { to: "/adult-swimming", key: "nav.adults" },
  { to: "/freediving", key: "nav.freediving" },
  { to: "/coaches", key: "nav.coaches" },
  { to: "/prices", key: "nav.prices" },
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
          <span className="hidden sm:inline"><BrandText /> Swimming</span>
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
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:brightness-110 hover:shadow-md"
            style={{ background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)" }}
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1ebe57] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1c-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1s0-.4.1-.5l.4-.5.3-.4c.1-.2 0-.3 0-.5s-.7-1.6-.9-2.2-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3 2.1 3.2 5.1 4.4c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.6-.3zM12 .5C5.7.5.5 5.7.5 12c0 2.1.6 4.1 1.6 5.8L.5 23.5l5.9-1.5c1.7.9 3.6 1.4 5.6 1.4 6.3 0 11.5-5.2 11.5-11.5S18.3.5 12 .5zm0 21c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.6 15.4 2 13.7 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 9.5-10 9.5z"/>
            </svg>
            {t("cta.book")}
          </a>
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