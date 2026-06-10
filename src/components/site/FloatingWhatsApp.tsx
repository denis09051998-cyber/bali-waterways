import { SITE, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <a
      href={waLink(t("wa.msg.default"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.book")}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-sm font-semibold text-white shadow-xl ring-4 ring-white/60 transition-transform hover:scale-105"
    >
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/15">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11 11 0 0 0 3.6 17.4L2 22l4.7-1.5a11 11 0 0 0 13.8-17ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 1 1 12 20Zm4.6-6c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5 0-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.2.2 2.1 3.2 5.1 4.5l1 .4c.5.2.9.1 1.2.1.4-.1 1.1-.5 1.3-1 .2-.4.2-.8.1-1l-.4-.3Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{t("wa.float")}</span>
    </a>
  );
}