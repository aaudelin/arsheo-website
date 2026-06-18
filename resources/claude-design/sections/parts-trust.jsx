/* Arsheo one-pager — Souveraineté EU · Tarifs. */

const EU_POINTS = [
{ t: "Hébergement 100% UE", d: "Vos données et votre code restent sur des infrastructures européennes. Toujours. Aucun transfert hors-UE." },
{ t: "RGPD by default", d: "Conformité intégrée, pas en option. Sous-traitance documentée, DPA fourni sur demande." },
{ t: "Souveraineté opérationnelle", d: "Pas de Cloud Act, pas de dépendance hors-UE. La sérénité côté juridique aussi." }];


function Sovereignty() {
  const { Badge } = window.ArsheoDesignSystem_8085c4;
  return (
    <section id="souverainete" data-screen-label="souverainete" style={{ position: "relative", overflowX: "clip", overflowY: "visible" }}>
      <Container style={{ position: "relative", paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
        {/* Une grande card flottante en verre dépoli BLEU (la charte EU, le seul
            froid autorisé), posée par-dessus le fond crème commun du site. */}
        <div className="arsheo-eu-glass" style={{
          position: "relative",
          borderRadius: "calc(var(--r-panel) + 8px)",
          padding: "48px 52px",
          background: "linear-gradient(150deg, rgba(208,223,235,.50), rgba(182,205,223,.34))",
          WebkitBackdropFilter: "blur(28px) saturate(120%)", backdropFilter: "blur(28px) saturate(120%)",
          border: "1px solid rgba(255,255,255,.5)",
          boxShadow: "0 38px 84px -34px rgba(52,85,110,.42), inset 0 1px 0 rgba(255,255,255,.66)"
        }}>
          <div className="arsheo-two-col" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 18 }}><Badge variant="eu">🇪🇺 Souveraineté</Badge></div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", fontSize: "clamp(1.95rem, 1.25rem + 2.1vw, 2.8rem)", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 18px" }}>
                Hébergé en UE.<br />RGPD <span style={{ color: "var(--eu-ink)" }}>by default</span>.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.18rem", lineHeight: 1.55, color: "var(--ink-soft)", margin: 0, maxWidth: "36ch" }}>
                Le seul moment où l'on sort le bleu : la souveraineté de vos données. Posément, mais sans compromis.
              </p>
            </div>

            {/* Les 3 petites cards, nichées dans la grande card en verre. */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EU_POINTS.map((p) =>
              <div key={p.t} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                padding: "18px 20px", borderRadius: "var(--r-card)",
                background: "linear-gradient(180deg, rgba(255,255,255,.62), rgba(248,251,253,.46))",
                border: "1px solid rgba(255,255,255,.7)",
                boxShadow: "0 12px 26px -18px rgba(52,85,110,.5), inset 0 1px 0 rgba(255,255,255,.65)"
              }}>
                  <span style={{
                  width: 42, height: 42, flex: "none", borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,.7)", color: "var(--eu-ink)",
                  boxShadow: "inset 0 0 0 1px rgba(52,85,110,.14)"
                }}>
                    <span style={{ width: 22, height: 22, display: "inline-flex" }}>{AIcons.shield}</span>
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, color: "var(--ink)", marginBottom: 4 }}>{p.t}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>{p.d}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>);

}

/* Coche dessinée à la main (signature DS). */
function PlanCheck({ color }) {
  return (
    <svg width="20" height="16" viewBox="0 0 50 40" fill="none" style={{ flex: "none", marginTop: 3 }}>
      <path d="M5 20c6 5 11 10 14 15C24 20 33 9 45 3" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function PlanCard({ name, discount, price, full, tagline, features, cta, note, featured }) {
  const { Button } = window.ArsheoDesignSystem_8085c4;
  const dark = featured;
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      background: dark ? "#2B231C" : "var(--surface-card)",
      color: dark ? "var(--text-on-dark)" : "var(--text-body)",
      border: dark ? "1px solid #4A3B2D" : "1px solid var(--border-default)",
      borderRadius: "var(--r-panel)", padding: "32px 30px",
      boxShadow: dark ? "var(--shadow-xl)" : "var(--shadow-card)", width: "100%"
    }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: dark ? "var(--honey)" : "var(--text-faint)" }}>Abonnement mensuel</span>
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 26, color: dark ? "#FFF7F1" : "var(--ink)", margin: "0 0 14px" }}>{name}</h3>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em", color: dark ? "#FFF7F1" : "var(--terracotta)", lineHeight: 1 }}>{price}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: dark ? "rgba(251,246,238,.7)" : "var(--text-muted)" }}>/ mois</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, letterSpacing: "-0.01em", textDecoration: "line-through", textDecorationThickness: "2px", color: dark ? "rgba(251,246,238,.5)" : "var(--text-faint)" }}>{full}</span>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 7, alignSelf: "flex-start", marginBottom: 2,
        padding: "4px 11px", borderRadius: 999, background: dark ? "rgba(233,162,59,.18)" : "var(--honey-tint)",
        border: dark ? "1px solid rgba(233,162,59,.4)" : "1px solid rgba(233,162,59,.5)" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--honey)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: dark ? "var(--honey)" : "#9A6B16" }}>{discount} · Design Partner</span>
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.5, color: dark ? "rgba(251,246,238,.82)" : "var(--text-muted)", margin: "16px 0 22px" }}>{tagline}</p>

      <div style={{ height: 1, background: dark ? "rgba(251,246,238,.16)" : "var(--border-hair)", margin: "0 0 22px" }} />

      <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
        {features.map((f) =>
        <li key={f} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.45, color: dark ? "rgba(251,246,238,.92)" : "var(--text-body)" }}>
            <PlanCheck color={dark ? "var(--honey)" : "var(--success)"} />
            {f}
          </li>
        )}
      </ul>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <Button variant={dark ? "secondary" : "primary"} as="a" href="#tarifs">{cta}</Button>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, textAlign: "center", color: dark ? "rgba(251,246,238,.6)" : "var(--text-faint)" }}>{note}</span>
      </div>
    </div>);

}

function Pricing() {
  return (
    <Section id="tarifs" halo={[HALOS.terracotta("10% 14%"), HALOS.honey("90% 90%")]}>
      <SectionHead
        eyebrow="Tarifs"
        title="Un prix clair. Pause ou annulation quand vous voulez."
        intro="Abonnement mensuel, sans engagement. Hébergement UE et RGPD by default inclus, sans surcoût."
        align="center"
        maxTitle="24ch"
        maxIntro="56ch" />
      

      {/* Programme Design Partner — énoncé une seule fois, clairement. */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 34 }}>
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 12,
          padding: "12px 22px", borderRadius: 999,
          background: "var(--honey-tint)", border: "1px solid rgba(233,162,59,.5)", boxShadow: "var(--shadow-sm)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--text-body)" }}>
            <strong style={{ color: "#9A6B16" }}>Programme Design Partner</strong> : −50% pendant 3 mois pour nos 3 premiers clients
          </span>
          <DoodleArrow w={52} color="var(--honey)" style={{ position: "absolute", left: -60, top: 4 }} />
          <DoodleArrow w={52} color="var(--honey)" style={{ position: "absolute", right: -60, top: 4, transform: "scaleX(-1)" }} />
        </div>
      </div>

      <div className="arsheo-pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch", maxWidth: 940, margin: "0 auto" }}>
        <PlanCard
          name="Standard"
          discount="−50%"
          price="3 450 €" full="6 900 €"
          tagline="Un flux continu pour dépiler votre backlog au fur et à mesure."
          features={["Une demande à la fois", "Stock historique + flux en continu", "PR draft prêtes à merger (vous gardez la main)", "Dashboard & reporting mensuel", "Hébergé en UE, RGPD by default"]}
          cta="Réserver un appel"
          note="Pause ou annulation à tout moment, calibrage à l'onboarding"
          featured />
        
        <PlanCard
          name="Débit double"
          discount="−50%"
          price="5 950 €" full="11 900 €"
          tagline="Deux fois plus de débit, pour un gros backlog ou une échéance réglementaire."
          features={["Deux demandes traitées en parallèle", "Stock historique + flux en continu", "PR draft prêtes à merger (vous gardez la main)", "Dashboard & reporting mensuel", "Hébergé en UE, RGPD by default"]}
          cta="Réserver un appel"
          note="Pause ou annulation à tout moment, calibrage à l'onboarding" />
        
      </div>
    </Section>);

}

Object.assign(window, { ArsheoSovereignty: Sovereignty, ArsheoPricing: Pricing });