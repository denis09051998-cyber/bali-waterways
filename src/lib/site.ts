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

export function waLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}