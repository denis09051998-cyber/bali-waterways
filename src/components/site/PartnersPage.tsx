import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useI18n, type Lang } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { SectionEyebrow } from "@/components/site/CTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PARTNER_TYPES = [
  "nanny", "villa_manager", "villa_staff", "concierge", "hotel",
  "relocation", "school", "family_service", "freelance", "other",
] as const;
const AREAS = ["bukit", "canggu", "sanur", "ubud", "other"] as const;

type Copy = {
  heroEyebrow: string; heroTitle: string; heroSub: string; heroFor: string; heroHighlight: string; heroCta: string;
  howEyebrow: string; howTitle: string; steps: { t: string; d: string }[]; flow: string[];
  whoEyebrow: string; whoTitle: string; who: string[]; whoNote: string;
  progEyebrow: string; progTitle: string; programs: string[]; locLabel: string;
  comTitle: string; comText: string; exClient: string; exCommission: string; comFine: string;
  bizTitle: string; bizSub: string; bizText: string; bizCta: string;
  formTitle: string; f: { name: string; wa: string; email: string; company: string; type: string; area: string; ig: string; network: string };
  types: Record<(typeof PARTNER_TYPES)[number], string>; areas: Record<(typeof AREAS)[number], string>;
  submit: string; sending: string; success: string; error: string; required: string;
  faqEyebrow: string; faqTitle: string; faq: { q: string; a: string }[];
};

const COPY: Record<Lang, Copy> = {
  en: {
    heroEyebrow: "Partner Program",
    heroTitle: "Become a UNITY Referral Partner",
    heroSub: "Help families in Bali find professional swimming lessons and earn commission for every new client you refer.",
    heroFor: "For nannies • villa managers • concierge • relocation agencies • schools • family services",
    heroHighlight: "Earn 10% commission on the first package purchased by every new client you refer.",
    heroCta: "Become a Partner",
    howEyebrow: "How it works", howTitle: "Three simple steps",
    steps: [
      { t: "Join UNITY", d: "Apply to become a UNITY Referral Partner. Registration is free and there are no monthly targets." },
      { t: "Refer a Client", d: "Share your personal UNITY referral link or partner code with families looking for swimming lessons in Bali." },
      { t: "Earn Commission", d: "When your referred client purchases their first swimming package, you receive 10% commission." },
    ],
    flow: ["Partner", "Client", "UNITY", "Payment", "Commission"],
    whoEyebrow: "Who can join", whoTitle: "Who can become a partner?",
    who: ["Nannies & Babysitters", "Villa Managers & Villa Staff", "Concierge & Hotels", "Relocation Agencies", "Schools & Kids Clubs", "Family Services", "Freelance Referral Partners"],
    whoNote: "Have another business or network that works with families or expats in Bali? You can apply too.",
    progEyebrow: "What you recommend", progTitle: "UNITY programs",
    programs: ["Kids Swimming", "Adult Swimming", "Private Lessons", "Group Lessons", "Ocean & Freediving"],
    locLabel: "Locations",
    comTitle: "Earn with every successful referral",
    comText: "Receive 10% of the first qualifying swimming package purchased by every new client you refer.",
    exClient: "Client purchase", exCommission: "Your commission",
    comFine: "Commission applies to the first qualifying purchase made by a new UNITY client. The referral must be registered before purchase. Terms apply.",
    bizTitle: "Business Partnerships", bizSub: "Villa Management • Hotels • Concierge • Relocation • Schools",
    bizText: "Looking to offer UNITY Swimming School to your guests or clients? We create referral partnerships for businesses and hospitality partners in Bali.",
    bizCta: "Become a Business Partner",
    formTitle: "Become a UNITY Partner",
    f: { name: "Full Name", wa: "WhatsApp Number", email: "Email", company: "Company / Business Name", type: "Partner Type", area: "Area in Bali", ig: "Instagram / Website", network: "Tell us briefly about your clients/network" },
    types: { nanny: "Nanny / Babysitter", villa_manager: "Villa Manager", villa_staff: "Villa Staff", concierge: "Concierge", hotel: "Hotel", relocation: "Relocation Agency", school: "School / Kids Club", family_service: "Family Service", freelance: "Freelance Referral Partner", other: "Other" },
    areas: { bukit: "Bukit", canggu: "Canggu", sanur: "Sanur", ubud: "Ubud", other: "Other" },
    submit: "Apply to Become a Partner", sending: "Sending…",
    success: "Thank you! We have received your application. The UNITY team will contact you on WhatsApp with your partner details and referral information.",
    error: "Something went wrong. Please try again or message us on WhatsApp.",
    required: "Please fill in all required fields correctly.",
    faqEyebrow: "FAQ", faqTitle: "Partner questions",
    faq: [
      { q: "Does it cost anything to become a partner?", a: "No. Joining the UNITY Referral Partner Program is completely free, with no fees and no monthly targets." },
      { q: "How much commission do I receive?", a: "You receive 10% of the first qualifying swimming package purchased by each new client you refer. Terms for larger businesses may be agreed individually." },
      { q: "When do I receive my commission?", a: "Commission is paid after your referred client has paid for their first qualifying package. The UNITY team will confirm payout details with you on WhatsApp." },
      { q: "How do you know that I referred the client?", a: "Once approved, you receive a personal referral link or partner code. The client uses it, or mentions it when booking, and the referral must be registered before the purchase." },
      { q: "Can businesses become partners?", a: "Yes. Villa management companies, hotels, concierge services, relocation agencies and schools are welcome — we agree business partnership terms individually." },
      { q: "Do I work for UNITY?", a: "No. Participation in the UNITY Referral Partner Program does not create an employment relationship with UNITY." },
    ],
  },
  ru: {
    heroEyebrow: "Партнёрская программа",
    heroTitle: "Станьте партнёром UNITY",
    heroSub: "Помогайте семьям на Бали находить профессиональные уроки плавания и получайте комиссию за каждого нового клиента по вашей рекомендации.",
    heroFor: "Для нянь • управляющих виллами • консьержей • релокационных агентств • школ • семейных сервисов",
    heroHighlight: "10% комиссии с первого пакета, который купит каждый приведённый вами новый клиент.",
    heroCta: "Стать партнёром",
    howEyebrow: "Как это работает", howTitle: "Три простых шага",
    steps: [
      { t: "Присоединяйтесь", d: "Оставьте заявку на участие в партнёрской программе UNITY. Регистрация бесплатная, никаких ежемесячных планов." },
      { t: "Рекомендуйте", d: "Делитесь своей персональной ссылкой или партнёрским кодом UNITY с семьями, которые ищут уроки плавания на Бали." },
      { t: "Получайте комиссию", d: "Когда приведённый вами клиент покупает свой первый пакет занятий, вы получаете 10% комиссии." },
    ],
    flow: ["Партнёр", "Клиент", "UNITY", "Оплата", "Комиссия"],
    whoEyebrow: "Кто может участвовать", whoTitle: "Кто может стать партнёром?",
    who: ["Няни и бебиситтеры", "Управляющие и персонал вилл", "Консьержи и отели", "Релокационные агентства", "Школы и детские клубы", "Семейные сервисы", "Независимые партнёры"],
    whoNote: "У вас другой бизнес или сообщество, связанное с семьями или экспатами на Бали? Тоже можно подать заявку.",
    progEyebrow: "Что вы рекомендуете", progTitle: "Программы UNITY",
    programs: ["Детское плавание", "Плавание для взрослых", "Персональные занятия", "Групповые занятия", "Океан и фридайвинг"],
    locLabel: "Локации",
    comTitle: "Зарабатывайте с каждой успешной рекомендации",
    comText: "Вы получаете 10% от первого подходящего пакета занятий, который купит каждый приведённый вами новый клиент.",
    exClient: "Покупка клиента", exCommission: "Ваша комиссия",
    comFine: "Комиссия начисляется за первую подходящую покупку нового клиента UNITY. Рекомендация должна быть зарегистрирована до покупки. Действуют условия программы.",
    bizTitle: "Партнёрство для бизнеса", bizSub: "Управление виллами • Отели • Консьерж • Релокация • Школы",
    bizText: "Хотите предложить своим гостям или клиентам занятия в UNITY Swimming School? Мы выстраиваем партнёрства с бизнесом и гостиничными партнёрами на Бали.",
    bizCta: "Стать бизнес-партнёром",
    formTitle: "Заявка на партнёрство UNITY",
    f: { name: "Имя и фамилия", wa: "Номер WhatsApp", email: "Email", company: "Компания / бизнес", type: "Тип партнёра", area: "Район на Бали", ig: "Instagram / сайт", network: "Кратко расскажите о ваших клиентах или сообществе" },
    types: { nanny: "Няня / бебиситтер", villa_manager: "Управляющий виллой", villa_staff: "Персонал виллы", concierge: "Консьерж", hotel: "Отель", relocation: "Релокационное агентство", school: "Школа / детский клуб", family_service: "Семейный сервис", freelance: "Независимый партнёр", other: "Другое" },
    areas: { bukit: "Букит", canggu: "Чангу", sanur: "Санур", ubud: "Убуд", other: "Другое" },
    submit: "Отправить заявку", sending: "Отправляем…",
    success: "Спасибо! Мы получили вашу заявку. Команда UNITY свяжется с вами в WhatsApp и пришлёт данные партнёра и информацию о рекомендациях.",
    error: "Что-то пошло не так. Попробуйте ещё раз или напишите нам в WhatsApp.",
    required: "Пожалуйста, корректно заполните обязательные поля.",
    faqEyebrow: "Вопросы", faqTitle: "Частые вопросы партнёров",
    faq: [
      { q: "Нужно ли платить за участие?", a: "Нет. Участие в партнёрской программе UNITY полностью бесплатное — без взносов и ежемесячных планов." },
      { q: "Какую комиссию я получу?", a: "10% от первого подходящего пакета занятий, который купит каждый приведённый вами новый клиент. Для крупных компаний условия могут обсуждаться индивидуально." },
      { q: "Когда выплачивается комиссия?", a: "После того как приведённый клиент оплатит свой первый подходящий пакет. Детали выплаты команда UNITY согласует с вами в WhatsApp." },
      { q: "Как вы узнаете, что клиента привёл я?", a: "После одобрения вы получаете персональную ссылку или партнёрский код. Клиент использует его или называет при записи — рекомендация должна быть зарегистрирована до покупки." },
      { q: "Может ли бизнес стать партнёром?", a: "Да. Мы рады управляющим компаниям вилл, отелям, консьерж-сервисам, релокационным агентствам и школам — условия для бизнеса обсуждаются индивидуально." },
      { q: "Я становлюсь сотрудником UNITY?", a: "Нет. Участие в партнёрской программе UNITY не создаёт трудовых отношений с UNITY." },
    ],
  },
  id: {
    heroEyebrow: "Program Partner",
    heroTitle: "Jadi Partner Referral UNITY",
    heroSub: "Bantu keluarga di Bali menemukan les renang profesional dan dapatkan komisi untuk setiap klien baru yang Anda rekomendasikan.",
    heroFor: "Untuk nanny • villa manager • concierge • agen relokasi • sekolah • layanan keluarga",
    heroHighlight: "Dapatkan komisi 10% dari paket pertama yang dibeli setiap klien baru yang Anda rekomendasikan.",
    heroCta: "Jadi Partner",
    howEyebrow: "Cara kerja", howTitle: "Tiga langkah mudah",
    steps: [
      { t: "Bergabung", d: "Daftar sebagai Partner Referral UNITY. Pendaftaran gratis dan tanpa target bulanan." },
      { t: "Rekomendasikan", d: "Bagikan link referral atau kode partner UNITY Anda kepada keluarga yang mencari les renang di Bali." },
      { t: "Dapatkan Komisi", d: "Saat klien yang Anda rekomendasikan membeli paket renang pertamanya, Anda menerima komisi 10%." },
    ],
    flow: ["Partner", "Klien", "UNITY", "Pembayaran", "Komisi"],
    whoEyebrow: "Siapa yang bisa", whoTitle: "Siapa yang bisa menjadi partner?",
    who: ["Nanny & Babysitter", "Villa Manager & Staf Villa", "Concierge & Hotel", "Agen Relokasi", "Sekolah & Kids Club", "Layanan Keluarga", "Partner Referral Lepas"],
    whoNote: "Punya bisnis atau jaringan lain yang melayani keluarga atau ekspat di Bali? Anda juga bisa mendaftar.",
    progEyebrow: "Yang Anda rekomendasikan", progTitle: "Program UNITY",
    programs: ["Renang Anak", "Renang Dewasa", "Kelas Privat", "Kelas Grup", "Laut & Freediving"],
    locLabel: "Lokasi",
    comTitle: "Dapatkan penghasilan dari setiap referral yang berhasil",
    comText: "Terima 10% dari paket renang pertama yang memenuhi syarat, yang dibeli setiap klien baru yang Anda rekomendasikan.",
    exClient: "Pembelian klien", exCommission: "Komisi Anda",
    comFine: "Komisi berlaku untuk pembelian pertama yang memenuhi syarat oleh klien baru UNITY. Referral harus terdaftar sebelum pembelian. Syarat berlaku.",
    bizTitle: "Kemitraan Bisnis", bizSub: "Manajemen Villa • Hotel • Concierge • Relokasi • Sekolah",
    bizText: "Ingin menawarkan UNITY Swimming School kepada tamu atau klien Anda? Kami membangun kemitraan referral dengan bisnis dan mitra hospitality di Bali.",
    bizCta: "Jadi Partner Bisnis",
    formTitle: "Daftar Partner UNITY",
    f: { name: "Nama Lengkap", wa: "Nomor WhatsApp", email: "Email", company: "Nama Perusahaan / Bisnis", type: "Jenis Partner", area: "Area di Bali", ig: "Instagram / Website", network: "Ceritakan singkat tentang klien/jaringan Anda" },
    types: { nanny: "Nanny / Babysitter", villa_manager: "Villa Manager", villa_staff: "Staf Villa", concierge: "Concierge", hotel: "Hotel", relocation: "Agen Relokasi", school: "Sekolah / Kids Club", family_service: "Layanan Keluarga", freelance: "Partner Referral Lepas", other: "Lainnya" },
    areas: { bukit: "Bukit", canggu: "Canggu", sanur: "Sanur", ubud: "Ubud", other: "Lainnya" },
    submit: "Kirim Pendaftaran", sending: "Mengirim…",
    success: "Terima kasih! Pendaftaran Anda sudah kami terima. Tim UNITY akan menghubungi Anda via WhatsApp dengan detail partner dan informasi referral.",
    error: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.",
    required: "Mohon isi semua kolom wajib dengan benar.",
    faqEyebrow: "FAQ", faqTitle: "Pertanyaan partner",
    faq: [
      { q: "Apakah ada biaya untuk menjadi partner?", a: "Tidak. Bergabung dengan Program Partner Referral UNITY sepenuhnya gratis, tanpa biaya dan tanpa target bulanan." },
      { q: "Berapa komisi yang saya terima?", a: "Anda menerima 10% dari paket renang pertama yang memenuhi syarat dari setiap klien baru yang Anda rekomendasikan. Syarat untuk bisnis besar dapat disepakati secara individual." },
      { q: "Kapan saya menerima komisi?", a: "Komisi dibayarkan setelah klien yang Anda rekomendasikan membayar paket pertama yang memenuhi syarat. Tim UNITY akan mengonfirmasi detail pembayaran via WhatsApp." },
      { q: "Bagaimana Anda tahu bahwa klien itu dari saya?", a: "Setelah disetujui, Anda menerima link referral atau kode partner pribadi. Klien menggunakannya atau menyebutkannya saat booking — referral harus terdaftar sebelum pembelian." },
      { q: "Apakah bisnis bisa menjadi partner?", a: "Ya. Perusahaan manajemen villa, hotel, concierge, agen relokasi, dan sekolah dipersilakan — syarat kemitraan bisnis disepakati secara individual." },
      { q: "Apakah saya bekerja untuk UNITY?", a: "Tidak. Partisipasi dalam Program Partner Referral UNITY tidak menciptakan hubungan kerja dengan UNITY." },
    ],
  },
};

const schema = z.object({
  full_name: z.string().trim().min(1).max(120),
  whatsapp: z.string().trim().min(5).max(40).regex(/^[+\d\s()-]+$/),
  email: z.union([z.literal(""), z.string().trim().email().max(255)]),
  company_name: z.string().trim().max(160),
  partner_type: z.enum(PARTNER_TYPES),
  area: z.enum(AREAS),
  instagram_website: z.string().trim().max(255),
  network_description: z.string().trim().max(2000),
});

const inputCls = "mt-1.5 w-full rounded-xl border border-ocean/15 bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-pool focus:ring-2 focus:ring-pool/30";
const labelCls = "text-[11px] font-semibold tracking-widest uppercase text-tropical";

function scrollToForm() {
  document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PartnersPage() {
  const { lang } = useI18n();
  const c = COPY[lang];
  const [form, setForm] = useState({
    full_name: "", whatsapp: "", email: "", company_name: "",
    partner_type: "" as string, area: "" as string, instagram_website: "", network_description: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "invalid">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { setStatus("invalid"); return; }
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("partner_applications").insert({
      full_name: d.full_name,
      whatsapp: d.whatsapp,
      email: d.email || null,
      company_name: d.company_name || null,
      partner_type: d.partner_type,
      area: d.area,
      instagram_website: d.instagram_website || null,
      network_description: d.network_description || null,
      language: lang,
    });
    if (error) { setStatus("error"); return; }
    setStatus("done");
    const msg = [
      `${c.formTitle} — UNITY Swimming Bali`,
      `${c.f.name}: ${d.full_name}`,
      `${c.f.wa}: ${d.whatsapp}`,
      d.email && `${c.f.email}: ${d.email}`,
      d.company_name && `${c.f.company}: ${d.company_name}`,
      `${c.f.type}: ${c.types[d.partner_type]}`,
      `${c.f.area}: ${c.areas[d.area]}`,
      d.instagram_website && `${c.f.ig}: ${d.instagram_website}`,
      d.network_description && `${c.f.network}: ${d.network_description}`,
    ].filter(Boolean).join("\n");
    const waUrl = waLink(msg);
    const gtag = typeof window !== "undefined" ? (window as any).gtag : undefined;
    const sendPartnerEvent = (name: string) => {
      if (typeof gtag !== "function") return;
      gtag("event", name, {
        event_category: "partner",
        partner_type: d.partner_type,
        area: d.area,
        language: lang,
        partner_language: lang,
      });
    };
    sendPartnerEvent("partner_application");
    const waWindow = window.open(waUrl, "_blank");
    if (waWindow) sendPartnerEvent("partner_whatsapp_open");
  };

  const btnPrimary = "inline-flex items-center justify-center rounded-full bg-pool px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ocean";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ocean/10 bg-gradient-to-br from-ocean via-ocean to-pool text-surface">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white,transparent_45%),radial-gradient(circle_at_80%_60%,#f43f5e,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-20 sm:py-28">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-surface/70 uppercase">{c.heroEyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">{c.heroTitle}</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-surface/80 text-pretty">{c.heroSub}</p>
          <p className="mt-4 max-w-2xl text-sm text-surface/70">{c.heroFor}</p>
          <p className="mt-6 max-w-2xl rounded-2xl border border-surface/25 bg-surface/10 px-5 py-4 font-display text-lg sm:text-xl">{c.heroHighlight}</p>
          <button type="button" onClick={scrollToForm} className="mt-8 inline-flex items-center justify-center rounded-full bg-surface px-6 py-3 text-sm font-semibold text-ocean transition-colors hover:bg-sand">
            {c.heroCta}
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16 sm:py-20">
        <SectionEyebrow>{c.howEyebrow}</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{c.howTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {c.steps.map((s, i) => (
            <div key={s.t} className="rounded-2xl border border-ocean/10 bg-white p-6">
              <div className="font-display text-3xl font-semibold text-pool">0{i + 1}</div>
              <h3 className="mt-3 font-display text-xl text-ocean">{s.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
          {c.flow.map((f, i) => (
            <span key={f} className="flex items-center gap-2">
              <span className="rounded-full border border-ocean/15 bg-sand/40 px-4 py-2 font-medium text-ocean">{f}</span>
              {i < c.flow.length - 1 && <span aria-hidden className="text-pool">→</span>}
            </span>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="bg-sand/40 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 sm:py-20">
          <SectionEyebrow>{c.whoEyebrow}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{c.whoTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.who.map((w) => (
              <div key={w} className="rounded-2xl border border-ocean/10 bg-white p-5 font-medium text-ocean">{w}</div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink/70">{c.whoNote}</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16 sm:py-20">
        <SectionEyebrow>{c.progEyebrow}</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{c.progTitle}</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {c.programs.map((p) => (
            <span key={p} className="rounded-full border border-ocean/15 bg-white px-5 py-2.5 text-sm font-medium text-ocean">{p}</span>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/70"><span className="font-semibold text-ocean">{c.locLabel}:</span> Bukit • Sanur • Canggu • Ubud</p>
      </section>

      {/* COMMISSION */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-ocean to-pool p-8 sm:p-12 text-surface">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">{c.comTitle}</h2>
          <p className="mt-4 max-w-2xl text-surface/85">{c.comText}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl">
            <div className="rounded-2xl bg-surface/10 border border-surface/20 p-5">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-surface/70">{c.exClient}</div>
              <div className="mt-1 font-display text-2xl">2,500,000 IDR</div>
            </div>
            <div className="rounded-2xl bg-surface p-5 text-ocean">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{c.exCommission}</div>
              <div className="mt-1 font-display text-2xl font-semibold">250,000 IDR</div>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-surface/70">{c.comFine}</p>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-16 sm:pb-20">
        <div className="rounded-3xl border border-ocean/10 bg-white p-8 sm:p-12">
          <h2 className="font-display text-3xl font-semibold text-ocean">{c.bizTitle}</h2>
          <p className="mt-2 text-sm font-medium text-pool">{c.bizSub}</p>
          <p className="mt-4 max-w-2xl text-ink/70">{c.bizText}</p>
          <button type="button" onClick={scrollToForm} className={`mt-6 ${btnPrimary}`}>{c.bizCta}</button>
        </div>
      </section>

      {/* FORM */}
      <section id="partner-form" className="scroll-mt-24 mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 pb-16 sm:pb-20">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ocean text-center">{c.formTitle}</h2>
        {status === "done" ? (
          <div role="status" className="mt-8 rounded-2xl border border-pool/30 bg-sand/40 p-6 text-center text-ocean">{c.success}</div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8 rounded-2xl border border-ocean/10 bg-white p-4 sm:p-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div><label className={labelCls} htmlFor="p-name">{c.f.name}*</label>
                <input id="p-name" name="full_name" value={form.full_name} onChange={onChange} required maxLength={120} className={inputCls} /></div>
              <div><label className={labelCls} htmlFor="p-wa">{c.f.wa}*</label>
                <input id="p-wa" name="whatsapp" type="tel" value={form.whatsapp} onChange={onChange} required maxLength={40} placeholder="+62…" className={inputCls} /></div>
              <div><label className={labelCls} htmlFor="p-email">{c.f.email}</label>
                <input id="p-email" name="email" type="email" value={form.email} onChange={onChange} maxLength={255} className={inputCls} /></div>
              <div><label className={labelCls} htmlFor="p-company">{c.f.company}</label>
                <input id="p-company" name="company_name" value={form.company_name} onChange={onChange} maxLength={160} className={inputCls} /></div>
              <div><label className={labelCls} htmlFor="p-type">{c.f.type}*</label>
                <select id="p-type" name="partner_type" value={form.partner_type} onChange={onChange} required className={inputCls}>
                  <option value="" disabled>—</option>
                  {PARTNER_TYPES.map((v) => <option key={v} value={v}>{c.types[v]}</option>)}
                </select></div>
              <div><label className={labelCls} htmlFor="p-area">{c.f.area}*</label>
                <select id="p-area" name="area" value={form.area} onChange={onChange} required className={inputCls}>
                  <option value="" disabled>—</option>
                  {AREAS.map((v) => <option key={v} value={v}>{c.areas[v]}</option>)}
                </select></div>
            </div>
            <div><label className={labelCls} htmlFor="p-ig">{c.f.ig}</label>
              <input id="p-ig" name="instagram_website" value={form.instagram_website} onChange={onChange} maxLength={255} className={inputCls} /></div>
            <div><label className={labelCls} htmlFor="p-net">{c.f.network}</label>
              <textarea id="p-net" name="network_description" value={form.network_description} onChange={onChange} rows={4} maxLength={2000} className={inputCls} /></div>
            {status === "invalid" && <p className="text-sm text-destructive">{c.required}</p>}
            {status === "error" && <p className="text-sm text-destructive">{c.error}</p>}
            <button type="submit" disabled={status === "sending"} className={`w-full ${btnPrimary} disabled:opacity-60`}>
              {status === "sending" ? c.sending : c.submit}
            </button>
          </form>
        )}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-8">
        <SectionEyebrow>{c.faqEyebrow}</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ocean">{c.faqTitle}</h2>
        <Accordion type="single" collapsible className="mt-6">
          {c.faq.map((f, i) => (
            <AccordionItem key={f.q} value={`f${i}`}>
              <AccordionTrigger className="text-left text-ocean">{f.q}</AccordionTrigger>
              <AccordionContent className="text-ink/70">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export function partnersHead(lang: Lang) {
  const meta = {
    en: { title: "UNITY Referral Partner Program | Swimming School Bali", desc: "Become a UNITY Swimming School referral partner in Bali. Refer new swimming clients and earn commission on successful referrals.", locale: "en_US" },
    ru: { title: "Партнёрская программа UNITY | Школа плавания на Бали", desc: "Станьте партнёром школы плавания UNITY на Бали. Рекомендуйте новых клиентов и получайте комиссию за успешные рекомендации.", locale: "ru_RU" },
    id: { title: "Program Partner Referral UNITY | Sekolah Renang Bali", desc: "Jadi partner referral UNITY Swimming School di Bali. Rekomendasikan klien renang baru dan dapatkan komisi dari setiap referral yang berhasil.", locale: "id_ID" },
  }[lang];
  const B = "https://unityswimmingbali.com";
  const url = lang === "en" ? `${B}/partners` : `${B}/${lang}/partners`;
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.desc },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.desc },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: meta.locale },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: `${B}/partners` },
      { rel: "alternate", hrefLang: "ru", href: `${B}/ru/partners` },
      { rel: "alternate", hrefLang: "id", href: `${B}/id/partners` },
      { rel: "alternate", hrefLang: "x-default", href: `${B}/partners` },
    ],
  };
}
