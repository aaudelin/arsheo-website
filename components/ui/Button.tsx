import type { ReactNode, CSSProperties } from "react";

/**
 * Arsheo — Button (composant serveur, zéro JS).
 * Primaire terracotta plein, secondaire miel, ghost discret, link.
 * Survol/press gérés entièrement en CSS (.arsheo-btn*, cf. globals.css) :
 * aucun "use client", aucun état React — donc rien à hydrater (gain perf
 * direct dans le Hero, zone LCP).
 */
type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  as?: "button" | "a";
  href?: string;
  /** Ouvre le lien dans un nouvel onglet (CTA externes type Cal.com). */
  external?: boolean;
  style?: CSSProperties;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  disabled = false,
  as = "button",
  href,
  external = false,
  style,
}: ButtonProps) {
  const Tag = as;
  const externalProps =
    as === "a" && external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const className = `arsheo-btn arsheo-btn--${size} arsheo-btn--${variant}`;
  // Taille d'icône aussi en inline (et pas seulement via la classe) : le SVG est
  // en width/height 100%, il a donc TOUJOURS besoin d'un conteneur borné, même si
  // la feuille de styles n'est pas encore chargée (ex. recompilation HMR en dev).
  const iconPx = size === "sm" ? 15 : size === "lg" ? 20 : 18;
  const iconStyle = { display: "inline-flex", width: iconPx, height: iconPx } as const;

  return (
    <Tag
      href={as === "a" ? href : undefined}
      disabled={Tag === "button" ? disabled : undefined}
      {...externalProps}
      className={className}
      style={{
        ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : null),
        ...style,
      }}
    >
      {icon ? <span style={iconStyle}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={iconStyle}>{iconRight}</span> : null}
    </Tag>
  );
}
