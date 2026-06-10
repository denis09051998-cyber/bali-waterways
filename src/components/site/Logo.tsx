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
 * Brand wordmark — renders "UNITY" in the standard display typography
 * used across the site. Kept as a component so we can adjust globally later.
 */
export function BrandText({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      UNITY
    </span>
  );
}