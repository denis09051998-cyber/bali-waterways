import logoAsset from "@/assets/logo_unity.png.asset.json";

export function Logo({ size = 36, dark = false, className = "" }: { size?: number; dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-full ring-1 ${dark ? "bg-white/95 ring-white/30" : "bg-white ring-ocean/10"} ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={logoAsset.url} alt="UNITY Swimming School Bali" width={size} height={size} className="h-full w-full object-contain" />
    </span>
  );
}

/**
 * Brand wordmark — renders "UNITY" in the same slanted/italic style as the logo.
 * Use this anywhere the brand name UNITY appears in body or UI text.
 */
export function BrandText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold italic tracking-tight ${className}`}
      style={{ fontStyle: "italic", transform: "skewX(-6deg)", display: "inline-block" }}
    >
      UNITY
    </span>
  );
}