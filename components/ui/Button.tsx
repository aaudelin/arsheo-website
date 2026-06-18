"use client";

import { useState, type ReactNode, type CSSProperties } from "react";

/**
 * Arsheo — Button
 * Primaire terracotta plein, secondaire miel, ghost discret.
 * Survol = terracotta plus sombre (jamais d'effet nerveux), press = léger enfoncement.
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
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes: Record<ButtonSize, { padding: string; fontSize: string; gap: string; icon: number }> = {
    sm: { padding: "9px 16px", fontSize: "14px", gap: "7px", icon: 15 },
    md: { padding: "13px 22px", fontSize: "16px", gap: "9px", icon: 18 },
    lg: { padding: "16px 30px", fontSize: "17px", gap: "10px", icon: 20 },
  };
  const s = sizes[size] || sizes.md;

  const palettes: Record<ButtonVariant, { bg: string; color: string; border: string; shadow: string }> = {
    primary: {
      bg: hover ? "var(--terracotta-hover)" : "var(--terracotta)",
      color: "#FFF7F1",
      border: "1px solid transparent",
      shadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
    },
    secondary: {
      bg: hover ? "#DC9326" : "var(--honey)",
      color: "#3A2A10",
      border: "1px solid transparent",
      shadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
    },
    ghost: {
      bg: hover ? "var(--sand)" : "transparent",
      color: "var(--ink)",
      border: "1px solid var(--border-strong)",
      shadow: "none",
    },
    link: {
      bg: "transparent",
      color: hover ? "var(--terracotta-hover)" : "var(--terracotta)",
      border: "1px solid transparent",
      shadow: "none",
    },
  };
  const p = palettes[variant] || palettes.primary;

  const Tag = as;
  const externalProps =
    as === "a" && external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag
      href={as === "a" ? href : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={Tag === "button" ? disabled : undefined}
      {...externalProps}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.padding,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
        color: p.color,
        background: p.bg,
        border: p.border,
        borderRadius: "var(--r-button)",
        boxShadow: p.shadow,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        textDecoration: variant === "link" && hover ? "underline" : "none",
        textUnderlineOffset: "3px",
        transform: active && !disabled ? "translateY(1px)" : "translateY(0)",
        transition:
          "background var(--t-base) var(--ease-calm), box-shadow var(--t-base) var(--ease-calm), transform var(--t-fast) var(--ease-calm)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      {icon ? (
        <span style={{ display: "inline-flex", width: s.icon, height: s.icon }}>{icon}</span>
      ) : null}
      {children}
      {iconRight ? (
        <span style={{ display: "inline-flex", width: s.icon, height: s.icon }}>{iconRight}</span>
      ) : null}
    </Tag>
  );
}
