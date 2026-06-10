import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionEyebrow } from "@/components/site/CTA";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Unity Swimming School Bali — WhatsApp & Booking" },
      { name: "description", content: "Book a swimming lesson in Bali. WhatsApp +62 821-4723-2648, Instagram @swimming.unity.bali, or use our contact form." },
      { property: "og:title", content: "Contact Unity Swimming School Bali" },
      { property: "og:description", content: "WhatsApp, Instagram and contact form to book swimming lessons in Bali." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    location: "Bukit",
    age: "",
    level: "Beginner",
    format: "Private",
    time: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi Unity! New booking request:`,
      `Name: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      `Location: ${form.location}`,
      `Student age: ${form.age}`,
      `Level: ${form.level}`,
      `Format: ${form.format}`,
      `Preferred time: ${form.time}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a lesson — message us directly."
        subtitle="To help us recommend the best lesson format, please tell us your area, student's age, swimming level, preferred time, and whether you prefer private or group lessons."
      />
      <section className="mx-auto max-w-6xl px-5 lg:px-10 py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-ocean/10 bg-white p-6">
            <SectionEyebrow>WhatsApp</SectionEyebrow>
            <p className="mt-2 font-display text-xl text-ocean">{SITE.whatsappNumber}</p>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-pool px-5 py-2.5 text-sm font-semibold text-surface hover:bg-ocean"
            >
              Chat now
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-white p-6">
            <SectionEyebrow>Instagram</SectionEyebrow>
            <p className="mt-2 font-display text-xl text-ocean">{SITE.instagramHandle}</p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-ocean/20 px-5 py-2.5 text-sm font-semibold text-ocean hover:bg-ocean hover:text-surface"
            >
              Follow us
            </a>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-6">
            <SectionEyebrow>Areas</SectionEyebrow>
            <p className="mt-2 text-sm text-ink/70">{SITE.areas.join(" · ")}</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="rounded-3xl border border-ocean/10 bg-white p-6 sm:p-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={onChange} required />
            <Field label="WhatsApp number" name="whatsapp" value={form.whatsapp} onChange={onChange} required placeholder="+62 ..." />
            <Select label="Location" name="location" value={form.location} onChange={onChange} options={["Bukit", "Sanur", "Ubud", "Ungasan", "Pecatu", "Jimbaran", "Uluwatu", "Kutuh", "Nusa Dua"]} />
            <Field label="Student age" name="age" value={form.age} onChange={onChange} placeholder="e.g. 6 or Adult" />
            <Select label="Swimming level" name="level" value={form.level} onChange={onChange} options={["Beginner", "Fear of water", "Improver", "Confident", "Advanced"]} />
            <Select label="Preferred format" name="format" value={form.format} onChange={onChange} options={["Private", "Group"]} />
            <Field label="Preferred time" name="time" value={form.time} onChange={onChange} placeholder="e.g. Weekday mornings" />
          </div>
          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              maxLength={1000}
              className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30"
              placeholder="Anything else we should know?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-pool py-3.5 text-sm font-semibold text-surface hover:bg-ocean transition-colors"
          >
            Send via WhatsApp
          </button>
          <p className="text-xs text-ink/50 text-center">Your request opens WhatsApp with a pre-filled message.</p>
        </form>
      </section>
    </>
  );
}

function Field(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        maxLength={200}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30"
      />
    </div>
  );
}

function Select(props: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{props.label}</label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-4 py-3 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30"
      >
        {props.options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}