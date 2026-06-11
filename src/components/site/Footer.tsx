import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-ocean/10 bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ocean">
              <Logo size={36} />
              {t("brand.short")}
            </div>
            <p className="mt-4 max-w-[30ch] text-sm text-ink/60">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-ocean/15 px-3 py-1.5 text-xs font-medium hover:bg-pool/10">Instagram</a>
              <Link to="/contact" className="rounded-md bg-pool px-3 py-1.5 text-xs font-medium text-surface">{t("cta.bookLesson")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-ink/50 uppercase">{t("footer.programs")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><Link to="/kids-swimming" className="hover:text-pool">{t("prog.kids.t")}</Link></li>
              <li><Link to="/adult-swimming" className="hover:text-pool">{t("prog.adults.t")}</Link></li>
              <li><Link to="/ocean-swimming" className="hover:text-pool">{t("prog.ocean.t")}</Link></li>
              <li><Link to="/freediving" className="hover:text-pool">{t("prog.freedive.t")}</Link></li>
              <li><Link to="/coaches" className="hover:text-pool">{t("nav.coaches")}</Link></li>
              <li><Link to="/programs" className="hover:text-pool">{t("cta.allPrograms")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-ink/50 uppercase">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><Link to="/locations" className="hover:text-pool">{t("nav.locations")}</Link></li>
              <li><Link to="/faq" className="hover:text-pool">{t("nav.faq")}</Link></li>
              <li><Link to="/contact" className="hover:text-pool">{t("nav.contact")}</Link></li>
              <li><a href={SITE.whatsappHref} className="hover:text-pool">WhatsApp: {SITE.whatsappNumber}</a></li>
              <li><a href={SITE.instagramUrl} className="hover:text-pool">{SITE.instagramHandle}</a></li>
              <li className="text-ink/50">Bukit · Sanur · Ubud · Canggu</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-ocean/10 pt-6">
          <p className="text-xs text-ink/50">© {new Date().getFullYear()} UNITY Swimming School Bali. {t("footer.rights")}</p>
          <p className="text-xs text-ink/50">{t("footer.sub")}</p>
        </div>
      </div>
    </footer>
  );
}