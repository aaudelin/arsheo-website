"use client";

import { useState, type ReactNode, type CSSProperties } from "react";

/**
 * Arsheo — Card
 * Carte chaude posée sur le crème : surface presque blanche, rayon 18,
 * bordure douce, ombre brune. Lift léger et calme au survol si interactive.
 */
interface CardProps {
  children?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
  interactive?: boolean;
  padding?: string;
  style?: CSSProperties;
}

export function Card({
  children,
  eyebrow = null,
  title = null,
  icon = null,
  interactive = false,
  padding = "28px",
  style = {},
}: CardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--r-card)",
        boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        padding,
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition:
          "transform var(--t-base) var(--ease-calm), box-shadow var(--t-base) var(--ease-calm)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
    >
      {icon ? (
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--terracotta-tint)",
            color: "var(--terracotta)",
            marginBottom: 18,
          }}
        >
          <span style={{ width: 24, height: 24, display: "inline-flex" }}>{icon}</span>
        </div>
      ) : null}
      {eyebrow ? (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: 22,
            lineHeight: 1.15,
            color: "var(--text-strong)",
            margin: "0 0 10px",
          }}
        >
          {title}
        </h3>
      ) : null}
      {children ? (
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--text-muted)",
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
