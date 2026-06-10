import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/kids-swimming", label: "Kids" },
  { to: "/adult-swimming", label: "Adults" },
  { to: "/locations", label: "Locations" },
  { to: "/ocean-swimming", label: "Ocean Swimming" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ocean">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-pool text-surface text-sm font-bold">U</span>
          <span>Unity Swimming</span>
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
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-xs font-medium text-ink/60 hover:text-pool"
          >
            Instagram
          </a>
          <a
            href={waLink("Hi! I'd like to book a swimming lesson.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pool px-4 py-2 text-xs font-semibold text-surface shadow-sm hover:bg-ocean transition-colors"
          >
            Book via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
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
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}