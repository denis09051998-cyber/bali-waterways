import { waLink } from "@/lib/site";

export function WhatsAppCTA({
  message,
  label = "Book via WhatsApp",
  variant = "primary",
}: {
  message: string;
  label?: string;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-pool text-surface hover:bg-ocean"
      : "border border-ocean/20 text-ocean hover:bg-ocean hover:text-surface";
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {label}
    </a>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-pool uppercase">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ocean/10 bg-gradient-to-br from-ocean via-ocean to-pool text-surface">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white,transparent_45%),radial-gradient(circle_at_80%_60%,#f43f5e,transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-20 sm:py-28">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-surface/70 uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-surface/80 text-pretty">{subtitle}</p>
        )}
      </div>
    </section>
  );
}