/* Arsheo one-pager — FAQ (accordéon) · Footer. */

const FAQS = [
  { q: "C'est quoi une « demande » ?", a: "Une unité de travail qu'on dépile : un bug à corriger, une dépendance à monter, une faille à boucher, un test à réparer. On la diagnostique, on la traite, et on vous livre une PR draft (ou une analyse) prête à relire et merger." },
  { q: "Combien de demandes par mois ?", a: "Ça dépend de la taille de chaque demande. Sur le plan de base, comptez environ 30 demandes traitées par mois. Les grosses migrations consomment plus de capacité ; on les étale, ou on passe en Débit double." },
  { q: "C'est quoi le plan Design Partner ?", a: "Pour nos 3 premiers clients : -50% pendant 3 mois. En échange, on cale ensemble un point hebdo de 30 min et un retour d'expérience. C'est un tarif de lancement." },
  { q: "Qui merge le code ?", a: "Vous, toujours. On livre des PR draft prêtes à relire. On ne touche jamais à votre prod : pas d'auto-merge, pas d'accès en écriture." },
  { q: "Mes données sortent-elles d'Europe ?", a: "Non. Hébergement 100% UE, RGPD by default, aucun transfert hors-UE. DPA disponible sur demande." },
  { q: "Et si je veux arrêter ?", a: "Abonnement mensuel sans engagement. Pause ou annulation à tout moment." },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{ borderTop: "1px solid var(--border-default)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
          background: "none", border: "none", cursor: "pointer", textAlign: "left",
          padding: "24px 4px", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.015em",
          fontSize: "1.24rem", color: "var(--ink)",
        }}
      >
        {item.q}
        <span style={{
          width: 24, height: 24, flex: "none", color: "var(--terracotta)",
          display: "inline-flex", transform: open ? "rotate(180deg)" : "rotate(0)",
          transition: "transform var(--t-base) var(--ease-calm)",
        }}>{AIcons.chevron}</span>
      </button>
      {open ? (
        <p className="arsheo-faq-answer" style={{ margin: 0, padding: "0 48px 26px 4px", fontFamily: "var(--font-body)", fontSize: "1.06rem", lineHeight: 1.62, color: "var(--text-muted)", maxWidth: "62ch" }}>
          {item.a}
        </p>
      ) : null}
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq">
      <SectionHead eyebrow="FAQ" title="Les questions qu'on nous pose." align="center" maxTitle="20ch" />
      <div style={{ maxWidth: 800, margin: "0 auto", borderBottom: "1px solid var(--border-default)" }}>
        {FAQS.map((item, i) => (
          <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  const { Badge } = window.ArsheoDesignSystem_8085c4;
  const cols = [
    { h: "Produit", items: [["Notre périmètre", "#depile"], ["Comment ça marche", "#methode"], ["Tarifs", "#tarifs"]] },
    { h: "Confiance", items: [["Souveraineté", "#souverainete"], ["FAQ", "#faq"]] },
  ];
  return (
    <footer data-screen-label="footer" style={{ background: "#2B231C", color: "var(--text-on-dark)" }}>
      <Container style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="arsheo-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 40 }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, var(--coral), var(--terracotta) 70%)", flex: "none" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.02em", color: "#FFF7F1" }}>Arsheo</span>
            </span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "rgba(251,246,238,.74)", margin: "18px 0 20px", maxWidth: "34ch" }}>
              Le service géré qui dépile le backlog technique de vos équipes. Sereinement.
            </p>
            <Badge variant="eu">🇪🇺 Hébergé en UE</Badge>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--honey)", marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {c.items.map(([label, href]) => (
                  <li key={href}><a href={href} style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "rgba(251,246,238,.78)", textDecoration: "none" }}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(251,246,238,.14)", marginTop: 44, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(251,246,238,.55)", letterSpacing: "0.04em" }}>© 2026 Arsheo · On s'en occupe.</span>
          <span style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--honey)", whiteSpace: "nowrap" }}>à votre rythme</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { ArsheoFaq: Faq, ArsheoFooter: Footer });
