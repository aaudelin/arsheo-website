/* Arsheo one-pager — Pourquoi nous. */

import { Section, SectionHead, SectionCta } from "@/components/sections/_shared";

const REASONS = [
  {
    n: "01",
    t: "Payé au résultat, sans risque",
    b: "Abonnement sans engagement, pause ou annulation quand vous voulez. Vous nous gardez parce qu'on livre, pas parce qu'un contrat vous y oblige.",
  },
  {
    n: "02",
    t: "Un service, pas un outil",
    b: "On vend un résultat : votre backlog qui fond. Pas un dashboard de plus à brancher et à faire vivre.",
  },
  {
    n: "03",
    t: "On s'adapte à votre stack",
    b: "Tool-agnostic par design. On se branche sur ce que vous avez déjà, on ne vous enferme nulle part.",
  },
  {
    n: "04",
    t: "Souveraineté EU",
    b: "Hébergement UE, RGPD inclus, sans surcoût. Souveraineté renforcée possible.",
    eu: true,
  },
];

export function WhyUs() {
  return (
    <Section id="pourquoi-nous">
      <SectionHead eyebrow="Pourquoi nous" title="Pourquoi nous, plutôt qu'un outil de plus." maxTitle="26ch" />
      <div className="arsheo-cards-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px" }}>
        {REASONS.map((r) => (
          <div
            key={r.n}
            style={{ display: "flex", gap: 22, padding: "30px 0", borderTop: "1px solid var(--border-default)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: r.eu ? "var(--eu-ink)" : "var(--terracotta)",
                flex: "none",
                paddingTop: 4,
              }}
            >
              {r.n}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  fontSize: 21,
                  color: "var(--ink)",
                  margin: "0 0 8px",
                }}
              >
                {r.eu ? <span style={{ marginRight: 8 }}>🇪🇺</span> : null}
                {r.t}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--text-muted)",
                  margin: 0,
                  maxWidth: "42ch",
                }}
              >
                {r.b}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SectionCta label="Parlons de votre backlog" align="left" marginTop={30} />
    </Section>
  );
}
