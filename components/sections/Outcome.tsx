/* Arsheo one-pager — Pour quoi. */

import { Section, SectionHead } from "@/components/sections/_shared";

const OUTCOMES = [
  "Maintenir votre SaaS au quotidien",
  "Faire tourner le back-office interne",
  "Corriger les workflows critiques",
  "Dépanner les automatisations",
  "Réparer les intégrations qui lâchent",
  "Absorber le grunt work qui s'accumule",
];

export function Outcome() {
  return (
    <Section id="pour-quoi">
      <div
        className="arsheo-two-col"
        style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 56, alignItems: "start" }}
      >
        <div>
          <SectionHead
            eyebrow="Notre mission"
            title="Vos équipes restent sur le core produit."
            intro="L'idée est simple : on décharge tout ce qui pollue la tech sans faire avancer le produit principal. Vos devs gardent leur énergie pour la roadmap."
            maxTitle="18ch"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div>
          <ul
            className="arsheo-outcome-grid"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px 28px",
            }}
          >
            {OUTCOMES.map((o) => (
              <li
                key={o}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontFamily: "var(--font-body)",
                  fontSize: "1.06rem",
                  lineHeight: 1.4,
                  color: "var(--text-body)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--terracotta)",
                    flex: "none",
                    marginTop: 9,
                  }}
                />
                {o}
              </li>
            ))}
          </ul>
          <p
            style={{
              margin: "30px 0 0",
              paddingLeft: 20,
              borderLeft: "3px solid var(--terracotta)",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "1.3rem",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: "44ch",
            }}
          >
            Tout ce qui n&apos;est pas une feature de votre produit, mais qui mange quand même du temps
            d&apos;ingénieur.
          </p>
        </div>
      </div>

      <a
        href="#pour-qui"
        className="arsheo-mission-cue"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "fit-content",
          margin: "52px auto 0",
          textDecoration: "none",
        }}
      >
        <span
          className="hand-note"
          style={{ fontSize: "1.55rem", color: "var(--terracotta)", lineHeight: 1.1 }}
        >
          … mais pour qui, au juste ?
        </span>
        <svg width="44" height="58" viewBox="0 0 44 58" fill="none" aria-hidden="true">
          <path
            d="M22 3C13 16 31 28 22 44"
            stroke="var(--terracotta)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M13 36 22 48 31 36"
            stroke="var(--terracotta)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Section>
  );
}
