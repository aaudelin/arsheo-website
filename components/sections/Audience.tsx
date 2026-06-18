/* Arsheo one-pager — Pour qui. */

import { Section, SectionHead, AIcons } from "@/components/sections/_shared";

const AUDIENCE = [
  {
    icon: AIcons.rocket,
    eyebrow: "Produit jeune",
    title: "Restez sur l'essentiel",
    body: "Vous devez shipper vite. Mais la dette, les bugs et la maintenance tirent déjà l'équipe en arrière. On prend tout ce reste en charge pour que vos devs ne lâchent jamais la core feature.",
  },
  {
    icon: AIcons.filter,
    eyebrow: "Backlog saturé",
    title: "Repassez devant",
    body: "Le backlog a gonflé jusqu'à devenir ingérable, et chaque sprint creuse l'écart. On vient en renfort pour le faire fondre et redonner de la vitesse à l'équipe.",
  },
  {
    icon: AIcons.clock,
    eyebrow: "Déjà en TMA",
    title: "Reprenez la main",
    body: "Vous payez une TMA au temps passé, qualité variable ? On remplace le TJM par un résultat : le backlog qui fond.",
  },
];

/* Colonnes sans carte — séparées par de fines hairlines. */
export function Audience() {
  return (
    <Section id="pour-qui">
      <SectionHead eyebrow="Pour qui" title="Trois situations, le même soulagement." maxTitle="24ch" />
      <div
        className="arsheo-cards-3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}
      >
        {AUDIENCE.map((f, i) => (
          <div
            key={f.title}
            className="arsheo-aud-col"
            style={{
              padding: i === 0 ? "4px 36px 4px 0" : "4px 36px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border-default)",
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: 13,
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--terracotta-tint)",
                color: "var(--terracotta)",
              }}
            >
              <span style={{ width: 24, height: 24, display: "inline-flex" }}>{f.icon}</span>
            </span>
            <div className="mono-label" style={{ marginBottom: 10, fontSize: 10.5 }}>
              {f.eyebrow}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: 21,
                color: "var(--ink)",
                margin: "0 0 10px",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15.5,
                lineHeight: 1.55,
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
