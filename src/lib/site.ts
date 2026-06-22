import type { Lang } from "./i18n";

export const SITE = {
  name: "UNITY Swimming School Bali",
  shortName: "UNITY Swimming",
  whatsappNumber: "+62 821-4723-2648",
  whatsappHref: "https://wa.me/6282147232648",
  instagramHandle: "@swimming.unity.bali",
  instagramUrl: "https://www.instagram.com/swimming.unity.bali/",
  email: "hello@unityswimming.bali",
  areas: [
    "Bukit",
    "Sanur",
    "Ubud",
    "Canggu",
    "Ungasan",
    "Pecatu",
    "Jimbaran",
    "Uluwatu",
    "Kutuh",
    "Nusa Dua",
  ],
} as const;

export const INSTAGRAM_URLS: Record<Lang, string> = {
  en: "https://www.instagram.com/unity.swimming.school/",
  ru: "https://www.instagram.com/swimming.unity.bali/",
  id: "https://www.instagram.com/unity.swimming.school/",
} as const;

export function waLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}