import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionEyebrow } from "@/components/site/CTA";
import { SITE, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UNITY Swimming School Bali — WhatsApp & Booking" },
      { name: "description", content: "Book a swimming lesson in Bali. WhatsApp +62 821-4723-2648, Instagram @swimming.unity.bali, or use our contact form." },
      { property: "og:title", content: "Contact UNITY Swimming School Bali" },
      { property: "og:description", content: "WhatsApp, Instagram and contact form to book swimming lessons in Bali." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const LOCATIONS = ["Bukit", "Sanur", "Ubud", "Canggu", "Ungasan", "Pecatu", "Jimbaran", "Uluwatu", "Kutuh", "Nusa Dua"];

function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    location: "Bukit",
    age: "",
    level: "beginner",
    format: "private",
    time: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `${t("ct.heading")} — UNITY Swimming Bali`,
      `${t("ct.line.name")}: ${form.name}`,
      `${t("ct.line.whatsapp")}: ${form.whatsapp}`,
      `${t("ct.line.location")}: ${form.location}`,
      `${t("ct.line.age")}: ${form.age}`,
      `${t("ct.line.level")}: ${t(`ct.lvl.${form.level}`)}`,
      `${t("ct.line.format")}: ${t(`ct.fmt.${form.format}`)}`,
      `${t("ct.line.time")}: ${form.time}`,
      form.message && `${t("ct.line.message")}: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  const levels = [
    { v: "beginner", k: "ct.lvl.beginner" },
    { v: "fear", k: "ct.lvl.fear" },
    { v: "improver", k: "ct.lvl.improver" },
    { v: "confident", k: "ct.lvl.confident" },
    { v: "advanced", k: "ct.lvl.advanced" },
  ];
  const formats = [
    { v: "private", k: "ct.fmt.private" },
    { v: "group", k: "ct.fmt.group" },
  ];

  return (
    <>
      <PageHero eyebrow={t("ct.eyebrow")} title={t("ct.title")} subtitle={t("ct.sub")} />
      <section className="mx-auto max-w-6xl px-5 lg:px-10 py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-ocean/10 bg-white p-6">
            <SectionEyebrow>{t("ct.whatsapp")}</SectionEyebrow>
            <p className="mt-2 font-display text-xl text-ocean">{SITE.whatsappNumber}</p>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-pool px-5 py-2.5 text-sm font-semibold text-surface hover:bg-ocean">
              {t("ct.chatNow")}
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-white p-6">
            <SectionEyebrow>{t("ct.instagram")}</SectionEyebrow>
            <p className="mt-2 font-display text-xl text-ocean">{SITE.instagramHandle}</p>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full border border-ocean/20 px-5 py-2.5 text-sm font-semibold text-ocean hover:bg-ocean hover:text-surface">
              {t("ct.followUs")}
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-6">
            <SectionEyebrow>{t("ct.areas")}</SectionEyebrow>
            <p className="mt-2 text-sm text-ink/70">{SITE.areas.join(" · ")}</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="rounded-3xl border border-ocean/10 bg-white p-6 sm:p-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t("ct.f.name")} name="name" value={form.name} onChange={onChange} required />
            <Field label={t("ct.f.whatsapp")} name="whatsapp" value={form.whatsapp} onChange={onChange} required placeholder={t("ct.f.ph.whatsapp")} />
            <Select label={t("ct.f.location")} name="location" value={form.location} onChange={onChange} options={LOCATIONS.map(o => ({ v: o, label: o }))} />
            <Field label={t("ct.f.age")} name="age" value={form.age} onChange={onChange} placeholder={t("ct.f.ph.age")} />
            <Select label={t("ct.f.level")} name="level" value={form.level} onChange={onChange} options={levels.map(l => ({ v: l.v, label: t(l.k) }))} />
            <Select label={t("ct.f.format")} name="format" value={form.format} onChange={onChange} options={formats.map(l => ({ v: l.v, label: t(l.k) }))} />
            <Field label={t("ct.f.time")} name="time" value={form.time} onChange={onChange} placeholder={t("ct.f.ph.time")} />
          </div>
          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("ct.f.message")}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              maxLength={1000}
              className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30"
              placeholder={t("ct.f.ph.message")}
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-pool py-3.5 text-sm font-semibold text-surface hover:bg-ocean transition-colors">
            {t("ct.f.submit")}
          </button>
          <p className="text-xs text-ink/50 text-center">{t("ct.f.note")}</p>
        </form>
      </section>
    </>
  );
}

function Field(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <input type="text" name={props.name} value={props.value} onChange={props.onChange} required={props.required} placeholder={props.placeholder} maxLength={200}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30" />
    </div>
  );
}

function Select(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: { v: string; label: string }[] }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <select name={props.name} value={props.value} onChange={props.onChange}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30">
        {props.options.map((o) => <option key={o.v} value={o.v}>{o.label}</option>)}
      </select>
    </div>
  );
}
