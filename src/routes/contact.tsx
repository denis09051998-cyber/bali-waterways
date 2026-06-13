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
    locationOther: "",
    studentType: "child",
    age: "",
    level: "beginner",
    format: "private",
    time: "",
    message: "",
  });
  const [kidsLoc, setKidsLoc] = useState<"nusadua" | "sanur" | "canggu">("nusadua");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const isGroup = form.format === "group";
  const isAdultGroup = isGroup && form.studentType === "adult";
  const isKidGroup = isGroup && form.studentType === "child";

  const scheduleSummary = () => {
    if (isAdultGroup) {
      return `${t("ct.adult.sched.title")}: ${t("ct.adult.sched.m")}, ${t("ct.adult.sched.w")}, ${t("ct.adult.sched.f")}`;
    }
    if (isKidGroup) {
      const locLabel = t(`ct.loc.${kidsLoc}`);
      if (kidsLoc === "nusadua") {
        return `${locLabel} — ${t("kids.sched.adv")} (${t("kids.sched.m1")}, ${t("kids.sched.w1")}, ${t("kids.sched.f1")}); ${t("kids.sched.int")} (${t("kids.sched.m2")}, ${t("kids.sched.th2")}); ${t("kids.sched.beg")} (${t("kids.sched.w3")}, ${t("kids.sched.f3")})`;
      }
      if (kidsLoc === "sanur") {
        return `${locLabel} — ${t("ct.sanur.title")}: ${t("ct.sanur.t")}, ${t("ct.sanur.th")}`;
      }
      return `${locLabel} — ${t("ct.canggu.note")}`;
    }
    return form.time;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const locationValue = isKidGroup
      ? t(`ct.loc.${kidsLoc}`)
      : (form.location === "Other" ? (form.locationOther || t("ct.loc.other")) : form.location);
    const msg = [
      `${t("ct.heading")} — UNITY Swimming Bali`,
      `${t("ct.line.name")}: ${form.name}`,
      `${t("ct.line.whatsapp")}: ${form.whatsapp}`,
      `${t("ct.line.location")}: ${locationValue}`,
      `${t("ct.line.studentType")}: ${t(`ct.student.${form.studentType}`)}`,
      `${t("ct.line.age")}: ${form.age}`,
      `${t("ct.line.level")}: ${t(`ct.lvl.${form.level}`)}`,
      `${t("ct.line.format")}: ${t(`ct.fmt.${form.format}`)}`,
      `${t("ct.line.time")}: ${scheduleSummary()}`,
      form.message && `${t("ct.line.message")}: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  const levels = [
    { v: "beginner", k: "ct.lvl.beginner" },
    { v: "fear", k: "ct.lvl.fear" },
    { v: "confident", k: "ct.lvl.confident" },
    { v: "advanced", k: "ct.lvl.advanced" },
  ];
  const formats = [
    { v: "private", k: "ct.fmt.private" },
    { v: "group", k: "ct.fmt.group" },
    { v: "freediving", k: "ct.fmt.freediving" },
  ];
  const studentTypes = [
    { v: "child", k: "ct.student.child" },
    { v: "adult", k: "ct.student.adult" },
  ];
  const locationOptions = [
    ...LOCATIONS.map((o) => ({ v: o, label: o })),
    { v: "Other", label: t("ct.loc.other") },
  ];

  return (
    <>
      <PageHero eyebrow={t("ct.eyebrow")} title={t("ct.title")} subtitle={t("ct.sub")} />

      {/* Booking form — primary focus */}
      <section className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 pt-6 pb-8 sm:pt-8 sm:pb-10">
        <form onSubmit={onSubmit} className="rounded-2xl border border-ocean/10 bg-white p-4 sm:p-6 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select label={t("ct.f.studentType")} name="studentType" value={form.studentType} onChange={onChange} options={studentTypes.map(s => ({ v: s.v, label: t(s.k) }))} />
            <Field label={t("ct.f.name")} name="name" value={form.name} onChange={onChange} required />
            <Field label={t("ct.f.whatsapp")} name="whatsapp" value={form.whatsapp} onChange={onChange} required placeholder={t("ct.f.ph.whatsapp")} />
            <Field label={t("ct.f.age")} name="age" value={form.age} onChange={onChange} placeholder={t("ct.f.ph.age")} />
            <Select label={t("ct.f.level")} name="level" value={form.level} onChange={onChange} options={levels.map(l => ({ v: l.v, label: t(l.k) }))} />
            <Select label={t("ct.f.format")} name="format" value={form.format} onChange={onChange} options={formats.map(l => ({ v: l.v, label: t(l.k) }))} />
            {!isGroup && (
              <Field label={t("ct.f.time")} name="time" value={form.time} onChange={onChange} placeholder={t("ct.f.ph.time")} />
            )}
          </div>

          {isAdultGroup && (
            <ScheduleBlock eyebrow={t("ct.adult.sched.eyebrow")} title={t("ct.adult.sched.title")}
              items={[t("ct.adult.sched.m"), t("ct.adult.sched.w"), t("ct.adult.sched.f")]} />
          )}

          {isKidGroup && (
            <div className="space-y-3">
              <Select label={t("ct.kids.loc.label")} name="kidsLoc" value={kidsLoc}
                onChange={(e) => setKidsLoc(e.target.value as typeof kidsLoc)}
                options={[
                  { v: "nusadua", label: t("ct.loc.nusadua") },
                  { v: "sanur", label: t("ct.loc.sanur") },
                  { v: "canggu", label: t("ct.loc.canggu") },
                ]} />
              {kidsLoc === "nusadua" && (
                <div className="space-y-2">
                  <ScheduleBlock eyebrow={t("ct.sched.eyebrow")} title={t("kids.sched.adv")}
                    items={[t("kids.sched.m1"), t("kids.sched.w1"), t("kids.sched.f1")]} />
                  <ScheduleBlock title={t("kids.sched.int")}
                    items={[t("kids.sched.m2"), t("kids.sched.th2")]} />
                  <ScheduleBlock title={t("kids.sched.beg")}
                    items={[t("kids.sched.w3"), t("kids.sched.f3")]} />
                </div>
              )}
              {kidsLoc === "sanur" && (
                <ScheduleBlock eyebrow={t("ct.sched.eyebrow")} title={t("ct.sanur.title")}
                  items={[t("ct.sanur.t"), t("ct.sanur.th")]} />
              )}
              {kidsLoc === "canggu" && (
                <ScheduleBlock eyebrow={t("ct.sched.eyebrow")} title={t("ct.canggu.title")}
                  items={[t("ct.canggu.note")]} />
              )}
            </div>
          )}

          {!isKidGroup && (
            <div className="grid gap-3 sm:grid-cols-2">
              <Select label={t("ct.f.location")} name="location" value={form.location} onChange={onChange} options={locationOptions} />
              {form.location === "Other" && (
                <Field label={t("ct.loc.other")} name="locationOther" value={form.locationOther} onChange={onChange} placeholder={t("ct.f.ph.location.other")} required />
              )}
            </div>
          )}

          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("ct.f.message")}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={3}
              maxLength={1000}
              className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30"
              placeholder={t("ct.f.ph.message")}
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-pool py-3 text-sm font-semibold text-surface hover:bg-ocean transition-colors">
            {t("ct.f.submit")}
          </button>
          <p className="text-xs text-ink/50 text-center">{t("ct.f.note")}</p>
        </form>
      </section>

      {/* Google Maps — compact, below form */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-10 pb-6 sm:pb-8">
        <div className="overflow-hidden rounded-2xl border border-ocean/10 bg-white shadow-sm">
          <iframe
            title="UNITY Swimming School Bali — Google Maps"
            src="https://www.google.com/maps?q=UNITY+Swimming+School+Bali&z=12&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[200px] w-full sm:h-[280px]"
          />
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 text-xs sm:text-sm">
            <span className="font-semibold text-ocean">{t("ct.map.heading")}</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=UNITY+Swimming+School+Bali"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pool hover:text-ocean"
            >
              {t("ct.map.open")} →
            </a>
          </div>
        </div>
      </section>

      {/* Additional contact info */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-10 pb-12 sm:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-ocean/10 bg-white p-5">
            <SectionEyebrow>{t("ct.whatsapp")}</SectionEyebrow>
            <p className="mt-1.5 font-display text-lg text-ocean">{SITE.whatsappNumber}</p>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full bg-pool px-4 py-2 text-sm font-semibold text-surface hover:bg-ocean">
              {t("ct.chatNow")}
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-white p-5">
            <SectionEyebrow>{t("ct.instagram")}</SectionEyebrow>
            <p className="mt-1.5 font-display text-lg text-ocean">{SITE.instagramHandle}</p>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full border border-ocean/20 px-4 py-2 text-sm font-semibold text-ocean hover:bg-ocean hover:text-surface">
              {t("ct.followUs")}
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-5">
            <SectionEyebrow>{t("ct.areas")}</SectionEyebrow>
            <p className="mt-1.5 text-sm text-ink/70">{SITE.areas.join(" · ")}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <input type="text" name={props.name} value={props.value} onChange={props.onChange} required={props.required} placeholder={props.placeholder} maxLength={200}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30" />
    </div>
  );
}

function Select(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: { v: string; label: string }[] }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <select name={props.name} value={props.value} onChange={props.onChange}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30">
        {props.options.map((o) => <option key={o.v} value={o.v}>{o.label}</option>)}
      </select>
    </div>
  );
}

function ScheduleBlock(props: { eyebrow?: string; title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-ocean/10 bg-sand/40 p-3">
      {props.eyebrow && (
        <div className="text-[10px] font-semibold tracking-widest uppercase text-tropical">{props.eyebrow}</div>
      )}
      <div className="mt-0.5 font-display text-sm text-ocean">{props.title}</div>
      <ul className="mt-2 space-y-1">
        {props.items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-ink/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pool" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
