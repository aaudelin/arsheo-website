/* Arsheo one-pager — Souveraineté EU. */

import { Badge } from "@/components/ui/Badge";
import { Container, AIcons } from "@/components/sections/_shared";

const EU_POINTS = [
  {
    t: "Hébergement 100% UE",
    d: "Vos données et votre code restent sur des infrastructures européennes. Toujours. Aucun transfert hors-UE.",
  },
  {
    t: "RGPD by default",
    d: "Conformité intégrée, pas en option. Sous-traitance documentée, DPA fourni sur demande.",
  },
  {
    t: "Souveraineté opérationnelle",
    d: "Pas de Cloud Act, pas de dépendance hors-UE. La sérénité côté juridique aussi.",
  },
];

export function Sovereignty() {
  return (
    <section
      id="souverainete"
      data-screen-label="souverainete"
      style={{ position: "relative", overflowX: "clip", overflowY: "visible" }}
    >
      <Container style={{ position: "relative", paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
        {/* Une grande card flottante en verre dépoli BLEU (la charte EU, le seul
            froid autorisé), posée par-dessus le fond crème commun du site. */}
        <div
          className="arsheo-eu-glass"
          style={{
            position: "relative",
            borderRadius: "calc(var(--r-panel) + 8px)",
            padding: "48px 52px",
            background: "linear-gradient(150deg, rgba(208,223,235,.50), rgba(182,205,223,.34))",
            WebkitBackdropFilter: "blur(28px) saturate(120%)",
            backdropFilter: "blur(28px) saturate(120%)",
            border: "1px solid rgba(255,255,255,.5)",
            boxShadow: "0 38px 84px -34px rgba(52,85,110,.42), inset 0 1px 0 rgba(255,255,255,.66)",
          }}
        >
          <div
            className="arsheo-two-col"
            style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48, alignItems: "center" }}
          >
            <div>
              <div style={{ marginBottom: 18 }}>
                <Badge variant="eu">🇪🇺 Souveraineté</Badge>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  fontSize: "clamp(1.95rem, 1.25rem + 2.1vw, 2.8rem)",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  margin: "0 0 18px",
                }}
              >
                Hébergé en UE.
                <br />
                RGPD <span style={{ color: "var(--eu-ink)" }}>by default</span>.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.18rem",
                  lineHeight: 1.55,
                  color: "var(--ink-soft)",
                  margin: 0,
                  maxWidth: "36ch",
                }}
              >
                Le seul moment où l&apos;on sort le bleu : la souveraineté de vos données. Posément, mais
                sans compromis.
              </p>
            </div>

            {/* Les 3 petites cards, nichées dans la grande card en verre. */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EU_POINTS.map((p) => (
                <div
                  key={p.t}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "18px 20px",
                    borderRadius: "var(--r-card)",
                    background: "linear-gradient(180deg, rgba(255,255,255,.62), rgba(248,251,253,.46))",
                    border: "1px solid rgba(255,255,255,.7)",
                    boxShadow: "0 12px 26px -18px rgba(52,85,110,.5), inset 0 1px 0 rgba(255,255,255,.65)",
                  }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      flex: "none",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,.7)",
                      color: "var(--eu-ink)",
                      boxShadow: "inset 0 0 0 1px rgba(52,85,110,.14)",
                    }}
                  >
                    <span style={{ width: 22, height: 22, display: "inline-flex" }}>{AIcons.shield}</span>
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: 17,
                        color: "var(--ink)",
                        marginBottom: 4,
                      }}
                    >
                      {p.t}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15.5,
                        lineHeight: 1.5,
                        color: "var(--ink-soft)",
                      }}
                    >
                      {p.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
