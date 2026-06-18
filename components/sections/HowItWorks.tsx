/* Arsheo one-pager — Comment ça marche (timeline). */

import { Section, SectionHead, SectionCta, AIcons } from "@/components/sections/_shared";

const STEPS = [
  { n: "01", icon: AIcons.plug, title: "Ingestion", body: "On se branche sur vos outils : observabilité, ticketing, mailbox." },
  { n: "02", icon: AIcons.filter, title: "Triage", body: "On priorise avec vous ce qui compte. Le reste attend sereinement." },
  { n: "03", icon: AIcons.search, title: "Diagnostic", body: "On creuse jusqu'à la cause. Pas de rustine, on comprend d'abord." },
  { n: "04", icon: AIcons.pr, title: "Correction", body: "Une PR draft (tests inclus) ou une analyse détaillée." },
  { n: "05", icon: AIcons.checkCircle, title: "Tests", body: "On vérifie que ça tient, sans rien casser autour." },
  { n: "06", icon: AIcons.merge, title: "Handoff", body: "Vous relisez, vous mergez. Vous gardez la maîtrise, toujours." },
];

export function HowItWorks() {
  return (
    <Section id="methode">
      <SectionHead eyebrow="Comment ça marche" title="Un cycle calme, du backlog à la PR." maxTitle="22ch" />

      <div className="arsheo-timeline">
        <div className="arsheo-timeline-rail" aria-hidden="true" />
        {STEPS.map((s) => (
          <div key={s.n} className="arsheo-tl-step">
            <div className="arsheo-tl-node">
              <span style={{ width: 23, height: 23, display: "inline-flex", color: "var(--terracotta)" }}>
                {s.icon}
              </span>
              <span className="arsheo-tl-num">{s.n}</span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: 18,
                color: "var(--ink)",
                margin: "0 0 6px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14.5,
                lineHeight: 1.5,
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="arsheo-encadre"
        style={{
          marginTop: 48,
          display: "flex",
          alignItems: "center",
          gap: 20,
          maxWidth: 760,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "var(--r-panel)",
          padding: "22px 26px",
          background: "linear-gradient(180deg, rgba(255,252,247,.8), rgba(255,248,238,.55))",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
          backdropFilter: "blur(18px) saturate(140%)",
          border: "1px solid rgba(255,255,255,.78)",
          boxShadow: "var(--glass-shadow), var(--glass-inset)",
        }}
      >
        <span
          style={{
            width: 48,
            height: 48,
            flex: "none",
            borderRadius: 13,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(246,229,220,.8)",
            color: "var(--terracotta)",
          }}
        >
          <span style={{ width: 24, height: 24, display: "inline-flex" }}>{AIcons.lock}</span>
        </span>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-body)",
            fontSize: "1.12rem",
            lineHeight: 1.5,
            color: "var(--text-body)",
          }}
        >
          Jamais d&apos;auto-merge, jamais d&apos;accès en écriture sur votre prod.
          <br />
          <strong style={{ color: "var(--ink)" }}>On dépile, vous décidez.</strong>
        </p>
      </div>

      <SectionCta label="Lancez votre premier cycle" variant="primary" align="center" marginTop={36} />
    </Section>
  );
}
