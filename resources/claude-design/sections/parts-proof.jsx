/* Arsheo one-pager — Comparables · Pourquoi nous. */

const COMPARES = [
  ["Un dev en CDI, coût chargé", "5 à 7 k€/mois"],
  ["Une TMA au forfait, qualité variable", "8 à 20 k€/mois"],
  ["Un SRE senior en interne, chargé", "9 à 11 k€/mois"],
];

function Comparables() {
  return (
    <Section id="comparables">
      <SectionHead
        eyebrow="Comparables"
        title="Premium, et pourtant moins cher qu'embaucher ou qu'une TMA."
        maxTitle="30ch"
      />
      <div className="arsheo-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
        <div style={{
          background: "var(--surface-card)", border: "1px solid var(--border-default)",
          borderRadius: "var(--r-card)", boxShadow: "var(--shadow-card)", padding: "8px 28px",
        }}>
          {COMPARES.map(([label, value], i) => (
            <div key={label} style={{
              display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20,
              padding: "22px 0", borderTop: i === 0 ? "none" : "1px solid var(--border-hair)",
            }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "1.06rem", lineHeight: 1.4, color: "var(--text-muted)", maxWidth: "22ch" }}>{label}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.32rem", letterSpacing: "-0.02em", color: "var(--ink-soft)", whiteSpace: "nowrap" }}>{value}</span>
            </div>
          ))}
        </div>

        <div style={{
          background: "#2B231C", borderRadius: "var(--r-card)", boxShadow: "var(--shadow-xl)",
          padding: "34px 34px", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--honey)", marginBottom: 16 }}>Le calcul Arsheo</span>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.5rem", lineHeight: 1.32, letterSpacing: "-0.015em", color: "#FFF7F1" }}>
            <span style={{ color: "var(--honey)" }}>Arsheo</span> : un flux continu, dépilé sereinement, pour le prix d'une dizaine de jours de presta.
          </p>
        </div>
      </div>
    </Section>
  );
}

const REASONS = [
  { n: "01", t: "Une grande expérience de la tech", b: "On a déjà vu passer ces backlogs, ces migrations, ces dettes. On sait où ça casse et comment le dépiler proprement." },
  { n: "02", t: "Un service, pas un outil", b: "On vend un résultat : votre backlog qui fond. Pas un dashboard de plus à brancher et à faire vivre." },
  { n: "03", t: "On s'adapte à votre stack", b: "Tool-agnostic par design. On se branche sur ce que vous avez déjà, on ne vous enferme nulle part." },
  { n: "04", t: "Souveraineté EU by default", b: "Hébergement UE, RGPD inclus, sans surcoût. Là où les solutions US vous demandent encore de cocher une case.", eu: true },
];

function WhyUs() {
  return (
    <Section id="pourquoi-nous">
      <SectionHead eyebrow="Pourquoi nous" title="Pourquoi nous, plutôt qu'un outil de plus." maxTitle="26ch" />
      <div className="arsheo-cards-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px" }}>
        {REASONS.map((r) => (
          <div key={r.n} style={{ display: "flex", gap: 22, padding: "30px 0", borderTop: "1px solid var(--border-default)" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em",
              color: r.eu ? "var(--eu-ink)" : "var(--terracotta)", flex: "none", paddingTop: 4,
            }}>{r.n}</span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 21, color: "var(--ink)", margin: "0 0 8px" }}>
                {r.eu ? <span style={{ marginRight: 8 }}>🇪🇺</span> : null}{r.t}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: "42ch" }}>{r.b}</p>
            </div>
          </div>
        ))}
      </div>
      <SectionCta label="Parlons de votre backlog" align="left" marginTop={30} />
    </Section>
  );
}

Object.assign(window, { ArsheoComparables: Comparables, ArsheoWhyUs: WhyUs });
