/* Arsheo one-pager — Ce qu'on dépile. */

import { Section, SectionHead, GlassCard, SectionCta, AIcons } from "@/components/sections/_shared";

const DEPILE = [
  {
    icon: AIcons.bug,
    eyebrow: "Dette & bugs",
    title: "On dépile le backlog",
    body: "Bugs, incidents qui traînent, dette technique. On vide la file, demande après demande.",
  },
  {
    icon: AIcons.version,
    eyebrow: "Montées de version",
    title: "On reste à jour",
    body: "Dépendances, frameworks, runtimes en fin de support. On monte les versions avant que ça devienne urgent.",
  },
  {
    icon: AIcons.shieldCheck,
    eyebrow: "Sécurité applicative",
    title: "On bouche les failles",
    body: "Dépendances vulnérables, CVE, durcissement auth et secrets. La sécurité applicative, traitée au fil de l'eau.",
  },
  {
    icon: AIcons.tests,
    eyebrow: "Tests",
    title: "On entretient le filet",
    body: "Couverture à compléter, tests flaky à réparer, suite à maintenir. Le filet de sécurité reste tendu.",
  },
];

export function Depile() {
  return (
    <Section id="depile">
      <SectionHead
        eyebrow="Notre périmètre"
        title="Le travail que personne ne priorise. C'est exactement le nôtre."
        maxTitle="42ch"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))",
          gap: 22,
        }}
      >
        {DEPILE.map((f) => (
          <GlassCard key={f.title} icon={f.icon} eyebrow={f.eyebrow} title={f.title}>
            {f.body}
          </GlassCard>
        ))}
      </div>
      <SectionCta label="Voyez ce qu'on peut dépiler pour vous" align="center" marginTop={40} />
    </Section>
  );
}
