/* Arsheo one-pager — shared layout helpers + Lucide-style icons (export Claude Design shared.jsx). */

import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/Button";

/** Lien de réservation Cal.com — cible des CTA « Réserver un appel ». */
export const CAL_URL = "https://cal.com/aurelien-audelin/arsheo-rencontre-30-min";

/* ---- Lucide-style icons (stroke 2, round), currentColor ---- */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const AIcons: Record<string, ReactNode> = {
  bug: (
    <Svg>
      <path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </Svg>
  ),
  version: (
    <Svg>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </Svg>
  ),
  shieldCheck: (
    <Svg>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  tests: (
    <Svg>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </Svg>
  ),
  rocket: (
    <Svg>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </Svg>
  ),
  server: (
    <Svg>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </Svg>
  ),
  clock: (
    <Svg>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Svg>
  ),
  plug: (
    <Svg>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </Svg>
  ),
  filter: (
    <Svg>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </Svg>
  ),
  search: (
    <Svg>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Svg>
  ),
  pr: (
    <Svg>
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </Svg>
  ),
  checkCircle: (
    <Svg>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </Svg>
  ),
  merge: (
    <Svg>
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </Svg>
  ),
  lock: (
    <Svg>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Svg>
  ),
  shield: (
    <Svg>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </Svg>
  ),
  arrow: (
    <Svg>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  ),
  chevron: (
    <Svg>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  ),
};

/* ---- Layout primitives ---- */
export function Container({
  children,
  max = 1180,
  style = {},
}: {
  children: ReactNode;
  max?: number;
  style?: CSSProperties;
}) {
  return (
    <div style={{ maxWidth: max, margin: "0 auto", padding: "0 28px", position: "relative", ...style }}>
      {children}
    </div>
  );
}

/* Page-wide colour field — ONE continuous cream background with a handful of
   soft circular warm forms scattered freely down the page. */
const BACKDROP_BLOBS = [
  { at: "79% 3%", size: 620, color: "rgba(233,162,59,.16)" },
  { at: "21% 12%", size: 540, color: "rgba(199,93,58,.12)" },
  { at: "57% 23%", size: 500, color: "rgba(226,112,83,.10)" },
  { at: "91% 39%", size: 560, color: "rgba(233,162,59,.13)" },
  { at: "13% 50%", size: 580, color: "rgba(199,93,58,.11)" },
  { at: "65% 63%", size: 540, color: "rgba(226,112,83,.10)" },
  { at: "33% 78%", size: 560, color: "rgba(233,162,59,.13)" },
  { at: "84% 92%", size: 520, color: "rgba(199,93,58,.10)" },
];

export function PageBackdrop() {
  const bg = BACKDROP_BLOBS.map(
    (b) => `radial-gradient(${b.size}px ${b.size}px at ${b.at}, ${b.color}, transparent 68%)`,
  ).join(",");
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", background: bg, zIndex: 0 }}
    />
  );
}

export function Section({
  id,
  children,
  style = {},
}: {
  id?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      data-screen-label={id}
      style={{ position: "relative", overflowX: "clip", overflowY: "visible", ...style }}
    >
      <Container style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)", zIndex: 1 }}>
        {children}
      </Container>
    </section>
  );
}

/* Eyebrow + heading block used at the top of most sections. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  maxTitle = "20ch",
  maxIntro = "52ch",
  color,
  style = {},
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  maxTitle?: string;
  maxIntro?: string;
  color?: "honey";
  style?: CSSProperties;
}) {
  const center = align === "center";
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        margin: center ? "0 auto" : 0,
        marginBottom: 52,
        ...style,
      }}
    >
      <div
        className="mono-label"
        style={{ marginBottom: 16, color: color === "honey" ? "var(--honey)" : undefined }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize: "clamp(1.95rem, 1.25rem + 2.1vw, 2.95rem)",
          lineHeight: 1.08,
          color: "var(--ink)",
          margin: 0,
          maxWidth: maxTitle,
          marginLeft: center ? "auto" : 0,
          marginRight: center ? "auto" : 0,
        }}
      >
        {title}
      </h2>
      {intro ? (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.22rem",
            lineHeight: 1.55,
            color: "var(--text-muted)",
            margin: "22px 0 0",
            maxWidth: maxIntro,
            marginLeft: center ? "auto" : 0,
            marginRight: center ? "auto" : 0,
          }}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* Signature frosted-glass card — sits on a warm halo, per the DS rule. */
export function GlassCard({
  icon,
  eyebrow,
  title,
  children,
  style = {},
}: {
  icon?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="arsheo-glasscard"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "28px 26px 30px",
        borderRadius: "var(--r-card)",
        background: "linear-gradient(180deg, rgba(255,252,247,.82), rgba(255,249,240,.60))",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        backdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,.78)",
        boxShadow: "var(--glass-shadow), var(--glass-inset)",
        ...style,
      }}
    >
      {icon ? (
        <span
          style={{
            width: 50,
            height: 50,
            borderRadius: 14,
            marginBottom: 18,
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(246,229,220,.75)",
            color: "var(--terracotta)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.6)",
          }}
        >
          <span style={{ width: 25, height: 25, display: "inline-flex" }}>{icon}</span>
        </span>
      ) : null}
      {eyebrow ? (
        <div className="mono-label" style={{ marginBottom: 10, fontSize: 10.5 }}>
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: 20,
            color: "var(--ink)",
            margin: "0 0 9px",
          }}
        >
          {title}
        </h3>
      ) : null}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.55,
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/* CTA contextuel — chaque section peut pousser vers la même réservation
   (#tarifs), avec un libellé calibré sur son propre contexte. Par défaut le
   discret variant "link" terracotta : un nudge éditorial, pas une pile de
   boutons criards. Passer variant="primary" pour un moment clé. */
export function SectionCta({
  label,
  variant = "link",
  align = "left",
  href = "#tarifs",
  marginTop = 34,
  style = {},
}: {
  label: ReactNode;
  variant?: "link" | "primary";
  align?: "left" | "center" | "right";
  href?: string;
  marginTop?: number;
  style?: CSSProperties;
}) {
  const justify = align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";
  return (
    <div style={{ display: "flex", justifyContent: justify, marginTop, ...style }}>
      <Button variant={variant} size="md" as="a" href={href} iconRight={AIcons.arrow}>
        {label}
      </Button>
    </div>
  );
}
