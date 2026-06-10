import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const current = LANGS.find((l) => l.code === lang)!;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("lang.label")}
        className={`inline-flex items-center gap-1.5 rounded-full border border-ocean/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ocean hover:border-pool/40 transition-colors ${compact ? "" : ""}`}
      >
        <span aria-hidden>{current.flag}</span>
        <span>{current.label}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden><path d="M2 4l4 4 4-4z" /></svg>
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-ocean/10 bg-white shadow-lg">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => { setLang(l.code as Lang); setOpen(false); }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-pool/10 ${l.code === lang ? "bg-pool/5 font-semibold text-pool" : "text-ink/80"}`}
              >
                <span aria-hidden>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}