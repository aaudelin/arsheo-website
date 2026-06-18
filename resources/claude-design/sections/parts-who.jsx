/* Arsheo one-pager — Pour qui · Comment ça marche. */

const AUDIENCE = [
  { icon: AIcons.rocket, eyebrow: "Scale-up tech", title: "Vous construisez vite", body: "5 à 30 devs, une roadmap chargée. Le backlog technique passe toujours après la feature. On le prend en charge." },
  { icon: AIcons.server, eyebrow: "Équipe IT", title: "Une app critique à tenir", body: "Un ERP, un portail, une app interne au cœur de vos opérations, une petite équipe pour la maintenir. On vous épaule." },
  { icon: AIcons.clock, eyebrow: "Déjà en TMA", title: "Reprenez la main", body: "Vous payez une TMA au temps passé, qualité variable ? On remplace le TJM par un résultat : le backlog qui fond." },
];

/* Colonnes sans carte — volontairement différent du modèle "grille de cartes",
   séparées par de fines hairlines. */
function Audience() {
  return (
    <Section id="pour-qui">
      <SectionHead eyebrow="Pour qui" title="Trois équipes, le même soulagement." maxTitle="24ch" />
      <div className="arsheo-cards-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
        {AUDIENCE.map((f, i) => (
          <div key={f.title} style={{
            padding: i === 0 ? "4px 36px 4px 0" : "4px 36px",
            borderLeft: i === 0 ? "none" : "1px solid var(--border-default)",
          }} className="arsheo-aud-col">
            <span style={{
              width: 48, height: 48, borderRadius: 13, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--terracotta-tint)", color: "var(--terracotta)",
            }}>
              <span style={{ width: 24, height: 24, display: "inline-flex" }}>{f.icon}</span>
            </span>
            <div className="mono-label" style={{ marginBottom: 10, fontSize: 10.5 }}>{f.eyebrow}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 21, color: "var(--ink)", margin: "0 0 10px" }}>{f.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  { n: "01", icon: AIcons.plug, title: "Ingestion", body: "On se branche sur vos outils : observabilité, ticketing, mailbox." },
  { n: "02", icon: AIcons.filter, title: "Triage", body: "On priorise avec vous ce qui compte. Le reste attend sereinement." },
  { n: "03", icon: AIcons.search, title: "Diagnostic", body: "On creuse jusqu'à la cause. Pas de rustine, on comprend d'abord." },
  { n: "04", icon: AIcons.pr, title: "Correction", body: "Une PR draft (tests inclus) ou une analyse détaillée." },
  { n: "05", icon: AIcons.checkCircle, title: "Tests", body: "On vérifie que ça tient, sans rien casser autour." },
  { n: "06", icon: AIcons.merge, title: "Handoff", body: "Vous relisez, vous mergez. Vous gardez la maîtrise, toujours." },
];

function HowItWorks() {
  return (
    <Section id="methode" halo={[HALOS.terracotta("6% 22%"), HALOS.honey("94% 6%")]}>
      <SectionHead eyebrow="Comment ça marche" title="Un cycle calme, du backlog à la PR." maxTitle="22ch" />

      <div className="arsheo-timeline">
        <div className="arsheo-timeline-rail" aria-hidden="true" />
        {STEPS.map((s) => (
          <div key={s.n} className="arsheo-tl-step">
            <div className="arsheo-tl-node">
              <span style={{ width: 23, height: 23, display: "inline-flex", color: "var(--terracotta)" }}>{s.icon}</span>
              <span className="arsheo-tl-num">{s.n}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 18, color: "var(--ink)", margin: "0 0 6px" }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5, color: "var(--text-muted)", margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>

      <div className="arsheo-encadre" style={{
        marginTop: 48, display: "flex", alignItems: "center", gap: 20, maxWidth: 760, marginLeft: "auto", marginRight: "auto",
        borderRadius: "var(--r-panel)", padding: "22px 26px",
        background: "linear-gradient(180deg, rgba(255,252,247,.8), rgba(255,248,238,.55))",
        WebkitBackdropFilter: "blur(18px) saturate(140%)", backdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,.78)", boxShadow: "var(--glass-shadow), var(--glass-inset)",
      }}>
        <span style={{
          width: 48, height: 48, flex: "none", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(246,229,220,.8)", color: "var(--terracotta)",
        }}>
          <span style={{ width: 24, height: 24, display: "inline-flex" }}>{AIcons.lock}</span>
        </span>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "1.12rem", lineHeight: 1.5, color: "var(--text-body)" }}>
          Jamais d'auto-merge, jamais d'accès en écriture sur votre prod.<br />
          <strong style={{ color: "var(--ink)" }}>On dépile, vous décidez.</strong>
        </p>
      </div>

      <SectionCta label="Lancez votre premier cycle" variant="primary" align="center" marginTop={36} />
    </Section>
  );
}

Object.assign(window, { ArsheoAudience: Audience, ArsheoHowItWorks: HowItWorks });
