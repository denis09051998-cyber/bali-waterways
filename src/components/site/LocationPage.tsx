import { Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const LOCATION_SLUGS = [
  "canggu",
  "ubud",
  "nusa-dua",
  "sanur",
  "jimbaran-ungasan",
] as const;

export type LocationSlug = (typeof LOCATION_SLUGS)[number];

export const LOCATION_ROUTES: Record<LocationSlug, string> = {
  canggu: "/locations/canggu",
  ubud: "/locations/ubud",
  "nusa-dua": "/locations/nusa-dua",
  sanur: "/locations/sanur",
  "jimbaran-ungasan": "/locations/jimbaran-ungasan",
};

export function locKey(slug: LocationSlug) {
  return slug.replace(/-/g, "");
}

export function LocationPage({ slug }: { slug: LocationSlug }) {
  const { t } = useI18n();
  const k = locKey(slug);
  const name = t(`lx.${k}.name`);
  const others = LOCATION_SLUGS.filter((s) => s !== slug);

  return (
    <>
      <PageHero eyebrow={t("lx.eyebrow")} title={t(`lx.${k}.h1`)} subtitle={t(`lx.${k}.hero`)} />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16 sm:py-20 space-y-12">
        <div>
          <WhatsAppCTA message={`Hi UNITY! I'd like to book a swimming lesson in ${name}.`} trackLead />
        </div>

        <div>
          <SectionEyebrow>{name}</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("lx.sec.area")}</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">{t(`lx.${k}.area`)}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.kids")}</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">{t(`lx.${k}.kids`)}</p>
          <Link
            to="/kids-swimming-lessons-bali"
            className="mt-3 inline-block text-sm font-semibold text-pool hover:text-ocean underline underline-offset-4"
          >
            {t("lx.moreKids")}
          </Link>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.adults")}</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">{t(`lx.${k}.adults`)}</p>
          <Link
            to="/adult-swimming-lessons-bali"
            className="mt-3 inline-block text-sm font-semibold text-pool hover:text-ocean underline underline-offset-4"
          >
            {t("lx.moreAdults")}
          </Link>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.private")}</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">{t(`lx.${k}.private`)}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.why")}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-ocean/10 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ocean">{t(`home.why.${i}.t`)}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t(`home.why.${i}.d`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.explore")}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/programs" className="rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean hover:bg-ocean hover:text-surface transition-colors">{t("lx.link.programs")}</Link>
            <Link to="/prices" className="rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean hover:bg-ocean hover:text-surface transition-colors">{t("lx.link.prices")}</Link>
            <Link to="/coaches" className="rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean hover:bg-ocean hover:text-surface transition-colors">{t("lx.link.coaches")}</Link>
            <Link to="/contact" className="rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean hover:bg-ocean hover:text-surface transition-colors">{t("lx.link.contact")}</Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("lx.sec.other")}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((s) => (
              <Link
                key={s}
                to={LOCATION_ROUTES[s]}
                className="rounded-2xl border border-ocean/10 bg-white p-5 transition-colors hover:border-pool/40"
              >
                <span className="font-display text-lg font-semibold text-ocean">{t(`lx.${locKey(s)}.name`)}</span>
                <span className="mt-1 block text-sm text-ink/70">{t(`lx.${locKey(s)}.card`)}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/locations"
            className="mt-5 inline-block text-sm font-semibold text-pool hover:text-ocean underline underline-offset-4"
          >
            {t("lx.viewAll")}
          </Link>
        </div>

        <div className="rounded-3xl border border-ocean/10 bg-gradient-to-br from-pool/10 via-white to-tropical/10 p-8 sm:p-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("lx.cta.title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70 leading-relaxed">{t("lx.cta.sub")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA message={`Hi UNITY! I'd like to book a swimming lesson in ${name}.`} trackLead />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-ocean/20 px-5 py-3 text-sm font-semibold text-ocean hover:bg-ocean hover:text-surface transition-colors"
            >
              {t("lx.link.contact")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
