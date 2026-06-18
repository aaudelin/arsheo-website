/* Marque Arsheo — symbole « L'A discret » (la pile qui s'effile vers le haut)
   + mot « Arsheo ». Le symbole est inliné en SVG pour rester net à toute taille
   et adopter la teinte passée (terracotta sur fond clair, crème sur fond foncé). */

interface ArsheoSymbolProps {
  size?: number;
  color?: string;
  title?: string;
}

/* Pile monochrome : l'allègement vers le haut est rendu par l'opacité.
   Une seule encre = `color`. Géométrie identique aux masters de marque. */
export function ArsheoSymbol({ size = 22, color = "#C75D3A", title = "Arsheo" }: ArsheoSymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill={color}
      role="img"
      aria-label={title}
      style={{ flex: "none", display: "block" }}
    >
      <rect x="43" y="15.5" width="14" height="9" rx="4.5" ry="4.5" opacity="0.42" />
      <rect x="36" y="28.5" width="28" height="9" rx="4.5" ry="4.5" opacity="0.66" />
      <rect x="27" y="42.5" width="46" height="9" rx="4.5" ry="4.5" opacity="0.86" />
      <rect x="23" y="56.5" width="22" height="9" rx="4.5" ry="4.5" />
      <rect x="55" y="56.5" width="22" height="9" rx="4.5" ry="4.5" />
      <rect x="19" y="71.5" width="22" height="9" rx="4.5" ry="4.5" />
      <rect x="59" y="71.5" width="22" height="9" rx="4.5" ry="4.5" />
    </svg>
  );
}

interface WordmarkProps {
  size?: number;
  /** Couleur du mot « Arsheo ». Défaut : encre. */
  textColor?: string;
  /** Couleur du symbole. Défaut : terracotta. */
  symbolColor?: string;
}

export function Wordmark({
  size = 26,
  textColor = "var(--ink)",
  symbolColor = "#C75D3A",
}: WordmarkProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <ArsheoSymbol size={size * 0.92} color={symbolColor} />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: size,
          letterSpacing: "-0.02em",
          color: textColor,
          lineHeight: 1,
        }}
      >
        Arsheo
      </span>
    </span>
  );
}
