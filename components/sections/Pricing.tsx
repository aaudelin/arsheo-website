/* Arsheo one-pager — Tarifs. */

import { Button } from "@/components/ui/Button";
import { Section, SectionHead, CAL_URL } from "@/components/sections/_shared";
import { DoodleArrow } from "@/components/motifs/DrawnAccents";

/* Coche dessinée à la main (signature DS). */
function PlanCheck({ color }: { color: string }) {
  return (
    <svg width="20" height="16" viewBox="0 0 50 40" fill="none" style={{ flex: "none", marginTop: 3 }}>
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

interface PlanProps {
  name: string;
  prefix: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  note: string;
  featured?: boolean;
}

function PlanCard({ name, prefix, price, tagline, features, cta, note, featured }: PlanProps) {
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
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: dark ? "var(--honey)" : "var(--text-faint)",
          }}
        >
          Abonnement mensuel
        </span>
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

      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: dark ? "rgba(251,246,238,.7)" : "var(--text-muted)",
          marginBottom: 2,
        }}
      >
        {prefix}
      </span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
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
          / mois
        </span>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.5,
          color: dark ? "rgba(251,246,238,.82)" : "var(--text-muted)",
          margin: "16px 0 22px",
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
          gap: 13,
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
              lineHeight: 1.45,
              color: dark ? "rgba(251,246,238,.92)" : "var(--text-body)",
            }}
          >
            <PlanCheck color={dark ? "var(--honey)" : "var(--success)"} />
            {f}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <Button variant={dark ? "secondary" : "primary"} as="a" href={CAL_URL} external>
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

export function Pricing() {
  return (
    <Section id="tarifs">
      <SectionHead
        eyebrow="Tarifs"
        title="Un prix clair. Pause ou annulation quand vous voulez."
        intro="Deux formules sans engagement : on met votre équipe en selle, ou on prend le relais sur le backlog. Souveraineté UE sans surcoût."
        align="center"
        maxTitle="24ch"
        maxIntro="60ch"
      />

      {/* Programme Design Partner — énoncé une seule fois, clairement. */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 34 }}>
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 22px",
            borderRadius: 999,
            background: "var(--honey-tint)",
            border: "1px solid rgba(233,162,59,.5)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--text-body)" }}>
            <strong style={{ color: "#9A6B16" }}>Programme Design Partner</strong> : −50% pendant 3 mois
            pour nos 3 premiers clients
          </span>
          <DoodleArrow w={52} color="var(--honey)" style={{ position: "absolute", left: -60, top: 4 }} />
          <DoodleArrow
            w={52}
            color="var(--honey)"
            style={{ position: "absolute", right: -60, top: 4, transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      <div
        className="arsheo-pricing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "stretch",
          maxWidth: 940,
          margin: "0 auto",
        }}
      >
        <PlanCard
          name="Done With You"
          prefix="À partir de"
          price="1 500 €"
          tagline="On met votre équipe en selle : votre chaîne d'agents tourne dans vos repos, vos devs la pilotent."
          features={[
            "Mise en place de votre chaîne d'agents",
            "Formation de vos équipes au pilotage",
            "Suivi et accompagnement en continu",
            "Vous gardez la main et la maîtrise",
            "Souveraineté UE",
          ]}
          cta="Réserver un appel"
          note="Pause ou annulation à tout moment, calibrage à l'onboarding"
        />
        <PlanCard
          name="Done For You"
          prefix="À partir de"
          price="6 900 €"
          tagline="On prend le relais sur votre backlog. Vos devs valident les merges, c'est tout."
          features={[
            "On traite vos demandes de bout en bout",
            "Stock historique + flux en continu",
            "PR draft prêtes à merger (vous gardez la main)",
            "Débit réglable selon votre backlog",
            "Souveraineté UE",
          ]}
          cta="Réserver un appel"
          note="Pause ou annulation à tout moment, calibrage à l'onboarding"
          featured
        />
      </div>
    </Section>
  );
}
