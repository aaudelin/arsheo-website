import type { ReactNode } from "react";

/**
 * Arsheo — Badge / Pill
 * Petites étiquettes calmes. La variante "eu" porte le seul froid autorisé
 * (bleu encre) et sert aux signaux EU / RGPD / sécurité.
 */
type BadgeVariant = "neutral" | "terracotta" | "honey" | "success" | "eu" | "solid";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  dot?: boolean;
}

export function Badge({ children, variant = "neutral", icon = null, dot = false }: BadgeProps) {
  const palettes: Record<BadgeVariant, { bg: string; color: string; border: string }> = {
    neutral: { bg: "var(--sand)", color: "var(--ink-soft)", border: "var(--border-default)" },
    terracotta: { bg: "var(--terracotta-tint)", color: "var(--terracotta-hover)", border: "#EBC9BB" },
    honey: { bg: "var(--honey-tint)", color: "#9A6A14", border: "#EAD3A0" },
    success: { bg: "var(--success-tint)", color: "#54702F", border: "#CFE0B5" },
    eu: { bg: "var(--eu-bg)", color: "var(--eu-ink)", border: "#CBD8E1" },
    solid: { bg: "var(--terracotta)", color: "#FFF7F1", border: "transparent" },
  };
  const p = palettes[variant] || palettes.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 12px",
        background: p.bg,
        color: p.color,
        border: `1px solid ${p.border}`,
        borderRadius: "var(--r-pill)",
        fontFamily: "var(--font-mono)",
        fontSize: "11.5px",
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {dot ? (
        <span
          style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", opacity: 0.8 }}
        />
      ) : null}
      {icon ? <span style={{ display: "inline-flex", width: 13, height: 13 }}>{icon}</span> : null}
      {children}
    </span>
  );
}
