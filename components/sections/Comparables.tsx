/* Arsheo one-pager — Comparables. */

import { Section, SectionHead } from "@/components/sections/_shared";

const COMPARES: [string, string][] = [
  ["Un dev en CDI, coût chargé", "5 à 7 k€/mois"],
  ["Une TMA au forfait, qualité variable", "8 à 20 k€/mois"],
  ["Un SRE senior en interne, chargé", "9 à 11 k€/mois"],
];

export function Comparables() {
  return (
    <Section id="comparables">
      <SectionHead
        eyebrow="Comparables"
        title="Premium, et pourtant moins cher qu'embaucher ou qu'une TMA."
        maxTitle="30ch"
      />
      <div
        className="arsheo-two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}
      >
        <div
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--r-card)",
            boxShadow: "var(--shadow-card)",
            padding: "8px 28px",
          }}
        >
          {COMPARES.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                padding: "22px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--border-hair)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.06rem",
                  lineHeight: 1.4,
                  color: "var(--text-muted)",
                  maxWidth: "22ch",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.32rem",
                  letterSpacing: "-0.02em",
                  color: "var(--ink-soft)",
                  whiteSpace: "nowrap",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#2B231C",
            borderRadius: "var(--r-card)",
            boxShadow: "var(--shadow-xl)",
            padding: "34px 34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--honey)",
              marginBottom: 16,
            }}
          >
            Le calcul Arsheo
          </span>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "1.5rem",
              lineHeight: 1.32,
              letterSpacing: "-0.015em",
              color: "#FFF7F1",
            }}
          >
            <span style={{ color: "var(--honey)" }}>Arsheo : </span> un flux continu, dépilé sereinement,
            pour le prix d&apos;une dizaine de jours de prestation.
          </p>
        </div>
      </div>
    </Section>
  );
}
