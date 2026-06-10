import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ocean/10 bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ocean">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-pool text-surface text-sm font-bold">U</span>
              Unity Swimming
            </div>
            <p className="mt-4 max-w-[30ch] text-sm text-ink/60">
              Professional swimming education for the international community in Bali. Safety, technique, confidence.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-ocean/15 px-3 py-1.5 text-xs font-medium hover:bg-pool/10">Instagram</a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-md bg-pool px-3 py-1.5 text-xs font-medium text-surface">WhatsApp</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-ink/50 uppercase">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><Link to="/kids-swimming" className="hover:text-pool">Kids Swimming</Link></li>
              <li><Link to="/adult-swimming" className="hover:text-pool">Adult Lessons</Link></li>
              <li><Link to="/ocean-swimming" className="hover:text-pool">Ocean Swimming</Link></li>
              <li><Link to="/programs" className="hover:text-pool">All Programs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-ink/50 uppercase">Service Areas</h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-ink/70">
              {SITE.areas.map((a) => (
                <li key={a}><Link to="/locations" className="hover:text-pool">{a}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-ink/50 uppercase">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><a href={SITE.whatsappHref} className="hover:text-pool">WhatsApp: {SITE.whatsappNumber}</a></li>
              <li><a href={SITE.instagramUrl} className="hover:text-pool">{SITE.instagramHandle}</a></li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-ocean/10 pt-6">
          <p className="text-xs text-ink/50">© {new Date().getFullYear()} Unity Swimming School Bali. All rights reserved.</p>
          <p className="text-xs text-ink/50">Private and group lessons across Bukit, Sanur, and Ubud.</p>
        </div>
      </div>
    </footer>
  );
}