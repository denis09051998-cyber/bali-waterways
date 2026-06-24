import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingWhatsApp } from "../components/site/FloatingWhatsApp";
import { SITE } from "../lib/site";
import { I18nProvider } from "../lib/i18n";
import faviconAsset from "../assets/favicon.png.asset.json";
import logoAsset from "../assets/logo_unity.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Swimming Lessons Bali — Kids, Adults & Private Coach | UNITY Swimming School" },
      { name: "description", content: "UNITY Swimming School Bali — kids and adult swimming lessons with a private swimming coach in Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud and Canggu. Open water swimming and freediving in Bali. Book on WhatsApp." },
      { name: "author", content: "UNITY Swimming School Bali" },
      { property: "og:site_name", content: "UNITY Swimming School Bali" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Swimming Lessons Bali — Kids, Adults & Private Coach | UNITY Swimming School" },
      { name: "twitter:title", content: "Swimming Lessons Bali — Kids, Adults & Private Coach | UNITY Swimming School" },
      { property: "og:description", content: "Kids and adult swimming lessons with a private coach in Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud and Canggu. Open water swimming and freediving Bali." },
      { name: "twitter:description", content: "Kids and adult swimming lessons with a private coach in Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud and Canggu. Open water swimming and freediving Bali." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2a2bf54-3ded-426b-b4ca-1c5a22d1b4bb/id-preview-e6745d63--553d2965-bf71-4830-a209-f602a54ab4a1.lovable.app-1781353941097.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2a2bf54-3ded-426b-b4ca-1c5a22d1b4bb/id-preview-e6745d63--553d2965-bf71-4830-a209-f602a54ab4a1.lovable.app-1781353941097.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: faviconAsset.url },
      { rel: "apple-touch-icon", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "SportsActivityLocation", "SportsClub"],
          "@id": "https://unityswimmingbali.com/#business",
          name: SITE.name,
          alternateName: "UNITY Swimming Bali",
          description:
            "Swimming school in Bali offering kids and adult swimming lessons, private swimming coach services, open water swimming and freediving in Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud and Canggu.",
          url: "https://unityswimmingbali.com",
          telephone: SITE.whatsappNumber,
          image: "https://unityswimmingbali.com/favicon.png",
          priceRange: "$$",
          address: { "@type": "PostalAddress", addressRegion: "Bali", addressCountry: "ID" },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Bali" },
            ...["Jimbaran", "Ungasan", "Nusa Dua", "Sanur", "Ubud", "Canggu", "Bukit", "Pecatu", "Uluwatu", "Kutuh"].map(
              (a) => ({ "@type": "Place", name: `${a}, Bali` }),
            ),
          ],
          knowsAbout: [
            "Swimming lessons",
            "Kids swimming lessons",
            "Adult swimming lessons",
            "Private swimming coach",
            "Open water swimming",
            "Freediving",
          ],
          sameAs: [SITE.instagramUrl],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: SITE.whatsappNumber,
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["en", "id", "ru"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Analytics (GA4) — hardcoded to guarantee it ships in SSR HTML */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KG89N6QTYW"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KG89N6QTYW');`,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '4546105889004940');\nfbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4546105889004940&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function isWhatsAppLink(href: string | null): boolean {
  if (!href) return false;
  const lower = href.toLowerCase();
  return (
    lower.startsWith("https://wa.me/") ||
    lower.includes("wa.me") ||
    lower.includes("whatsapp") ||
    lower.includes("api.whatsapp.com")
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-KG89N6QTYW", {
        page_path: pathname,
      });
    }
    if (typeof window !== "undefined" && typeof (window as any).__unityGa4Fallback === "function") {
      (window as any).__unityGa4Fallback("page_view", { page_path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      let el: Element | null = event.target as Element | null;
      while (el && el !== document.body) {
        const tag = el.tagName;
        if (tag === "A" || tag === "BUTTON") {
          // Lead: lesson booking / signup buttons (explicit marker)
          if (el.hasAttribute("data-fbq-lead")) {
            const fbq = (window as any).fbq;
            if (typeof fbq === "function") {
              fbq("track", "Lead");
            }
            return;
          }
          // Contact: WhatsApp links
          if (tag === "A") {
            const anchor = el as HTMLAnchorElement;
            const href = anchor.getAttribute("href") || anchor.href;
            if (isWhatsAppLink(href)) {
              const fbq = (window as any).fbq;
              if (typeof fbq === "function") {
                fbq("track", "Contact");
              }
              const gtag = (window as any).gtag;
              if (gtag) {
                gtag("event", "whatsapp_click", {
                  event_category: "contact",
                  event_label: "whatsapp",
                  link_url: anchor.href,
                });
              }
              const ga4Fallback = (window as any).__unityGa4Fallback;
              if (typeof ga4Fallback === "function") {
                ga4Fallback("whatsapp_click", {
                  event_category: "contact",
                  event_label: "whatsapp",
                  link_url: anchor.href,
                });
              }
              break;
            }
          }
          break;
        }
        el = el.parentElement;
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col bg-surface text-ink">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
