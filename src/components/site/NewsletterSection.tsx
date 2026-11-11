import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useI18n } from "@/lib/i18n";
import { newsletterSubscriptionSchema } from "@/lib/newsletter";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";
import { SectionEyebrow } from "./CTA";

type Feedback = { kind: "success" | "error"; message: string } | null;

export function NewsletterSection() {
  const { t, lang } = useI18n();
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);
    const parsed = newsletterSubscriptionSchema.safeParse({ email, consent, source: "homepage", language: lang });
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      setFeedback({
        kind: "error",
        message: t(issue?.path[0] === "consent" ? "newsletter.consentError" : "newsletter.invalid"),
      });
      return;
    }

    setSubmitting(true);
    try {
      const result = await subscribe({ data: parsed.data });
      if (!result.ok) {
        setFeedback({ kind: "error", message: t(result.reason === "unsubscribed" ? "newsletter.unsubscribed" : "newsletter.error") });
      } else {
        setFeedback({ kind: "success", message: t(`newsletter.${result.state}`) });
        if (result.state === "subscribed") {
          setEmail("");
          setConsent(false);
        }
      }
    } catch {
      setFeedback({ kind: "error", message: t("newsletter.error") });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section aria-labelledby="newsletter-title" className="mx-auto max-w-7xl px-5 pb-4 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-ocean/10 bg-gradient-to-br from-ocean via-ocean to-pool px-6 py-10 text-surface shadow-xl sm:px-10 sm:py-12">
        <svg aria-hidden="true" viewBox="0 0 600 160" className="pointer-events-none absolute -right-16 -top-8 h-full w-2/3 text-surface/10" fill="none">
          <path d="M0 82C74 24 139 25 213 82s139 58 213 0 139-58 213 0" stroke="currentColor" strokeWidth="2" />
          <path d="M0 116c74-58 139-57 213 0s139 58 213 0 139-58 213 0" stroke="currentColor" strokeWidth="2" />
          <circle cx="480" cy="35" r="90" fill="currentColor" />
        </svg>
        <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionEyebrow>{t("newsletter.eyebrow")}</SectionEyebrow>
            <h2 id="newsletter-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t("newsletter.title")}</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-surface/80 sm:text-base">{t("newsletter.body")}</p>
          </div>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-surface/15 bg-surface/10 p-4 backdrop-blur-sm sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="homepage-newsletter-email">{t("newsletter.emailLabel")}</label>
              <input
                id="homepage-newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="min-w-0 flex-1 rounded-full border border-surface/25 bg-surface px-5 py-3 text-sm text-ink outline-none placeholder:text-ink/45 focus:border-tropical focus:ring-2 focus:ring-tropical/40"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="shrink-0 rounded-full bg-tropical px-6 py-3 text-sm font-semibold text-ocean transition-colors hover:bg-surface disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? t("newsletter.submitting") : t("newsletter.submit")}
              </button>
            </div>
            <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-surface/80">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-0.5 size-4 shrink-0 accent-tropical"
              />
              <span>{t("newsletter.consent")}</span>
            </label>
            <div aria-live="polite" className="min-h-5">
              {feedback && (
                <p role={feedback.kind === "error" ? "alert" : "status"} className={`mt-3 text-sm font-medium ${feedback.kind === "success" ? "text-surface" : "text-sand"}`}>
                  {feedback.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
