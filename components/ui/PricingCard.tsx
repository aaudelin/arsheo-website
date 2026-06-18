import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

/** Coche dessinée à la main (signature). */
function PricingDrawnCheck({ color = "var(--success)" }: { color?: string }) {
  return (
    <svg width="20" height="16" viewBox="0 0 50 40" fill="none" style={{ flex: "none", marginTop: 2 }}>
      <path
        d="M5 20c6 5 11 10 14 15C24 20 33 9 45 3"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Arsheo — PricingCard (générique DS)
 * Carte d'abonnement calme. La variante "featured" est posée en sombre chaud
 * (le seul fond foncé toléré) pour ancrer le plan recommandé.
 */
interface PricingCardProps {
  name?: string;
  eyebrow?: string;
  price?: string;
  period?: string;
  tagline?: string;
  features?: string[];
  cta?: string;
  note?: string;
  featured?: boolean;
  href?: string;
}

export function PricingCard({
  name = "Standard",
  eyebrow = "Abonnement mensuel",
  price = "2 700 €",
  period = "/ mois",
  tagline = "Idéal pour un accompagnement au long cours",
  features = [],
  cta = "Réserver un appel",
  note = "Pause ou annulation à tout moment",
  featured = false,
  href,
}: PricingCardProps) {
  const dark = featured;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: dark ? "#2B231C" : "var(--surface-card)",
        color: dark ? "var(--text-on-dark)" : "var(--text-body)",
        border: dark ? "1px solid #4A3B2D" : "1px solid var(--border-default)",
        borderRadius: "var(--r-panel)",
        padding: "32px 30px",
        boxShadow: dark ? "var(--shadow-xl)" : "var(--shadow-card)",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: dark ? "var(--honey)" : "var(--text-faint)",
          }}
        >
          {eyebrow}
        </span>
        {featured ? <Badge variant="solid">Recommandé</Badge> : null}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize: 26,
          color: dark ? "#FFF7F1" : "var(--ink)",
          margin: "0 0 14px",
        }}
      >
        {name}
      </h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 44,
            letterSpacing: "-0.02em",
            color: dark ? "#FFF7F1" : "var(--terracotta)",
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: dark ? "rgba(251,246,238,.7)" : "var(--text-muted)",
          }}
        >
          {period}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.5,
          color: dark ? "rgba(251,246,238,.82)" : "var(--text-muted)",
          margin: "10px 0 22px",
        }}
      >
        {tagline}
      </p>
      <div
        style={{
          height: 1,
          background: dark ? "rgba(251,246,238,.16)" : "var(--border-hair)",
          margin: "0 0 22px",
        }}
      />
      <ul
        style={{
          listStyle: "none",
          margin: "0 0 26px",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              gap: 11,
              alignItems: "flex-start",
              fontFamily: "var(--font-body)",
              fontSize: 15.5,
              lineHeight: 1.4,
              color: dark ? "rgba(251,246,238,.92)" : "var(--text-body)",
            }}
          >
            <PricingDrawnCheck color={dark ? "var(--honey)" : "var(--success)"} />
            {f}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <Button variant={dark ? "secondary" : "primary"} as="a" href={href} external={!!href}>
          {cta}
        </Button>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            textAlign: "center",
            color: dark ? "rgba(251,246,238,.6)" : "var(--text-faint)",
          }}
        >
          {note}
        </span>
      </div>
    </div>
  );
}
