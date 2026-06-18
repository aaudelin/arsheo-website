/* Arsheo one-pager — Nav (sticky glass) + Hero. */

function Nav() {
  const { Wordmark, Badge, Button } = window.ArsheoDesignSystem_8085c4;
  const links = [
  ["Notre périmètre", "#depile"],
  ["Comment ça marche", "#methode"],
  ["Notre mission", "#pour-quoi"],
  ["Tarifs", "#tarifs"]];

  return (
    <div className="arsheo-nav-sticky" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <Container style={{ paddingTop: 16, paddingBottom: 8 }}>
        <nav className="arsheo-glass" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, padding: "13px 14px 13px 22px"
        }}>
          <a href="#top" style={{ textDecoration: "none" }}><Wordmark /></a>
          <div className="arsheo-nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map(([label, href]) =>
            <a key={href} href={href} style={{
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
              color: "var(--text-body)", textDecoration: "none", whiteSpace: "nowrap"
            }}>{label}</a>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="#souverainete" className="arsheo-nav-eu" style={{ textDecoration: "none" }} title="Souveraineté & hébergement UE"><Badge variant="eu">🇪🇺 UE</Badge></a>
            <Button variant="primary" size="sm" as="a" href="#tarifs">Réserver un appel</Button>
          </div>
        </nav>
      </Container>
    </div>);

}

const HERO_BACKLOG = [
{ label: "Migrer vers Node 20 (fin de support)", cat: "version", status: "done" },
{ label: "Corriger la fuite mémoire du worker", cat: "bug", status: "done" },
{ label: "Patcher la dépendance vulnérable (CVE)", cat: "securite", status: "done" },
{ label: "Réécrire les tests flaky du checkout", cat: "tests", status: "active" },
{ label: "Refactor du module de facturation", cat: "dette", status: "queued" },
{ label: "Nettoyer les feature flags morts", cat: "dette", status: "queued" }];


function Hero() {
  const { Badge, Button, BacklogMelt } = window.ArsheoDesignSystem_8085c4;
  const total = HERO_BACKLOG.length;
  // Animation : on dépile les éléments un à un (1 actif à la fois), puis on
  // marque une pause une fois la file vide avant de repartir de zéro.
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setStep(total); return; }
    const atEnd = step >= total;
    const t = setTimeout(() => setStep(atEnd ? 0 : step + 1), atEnd ? 3400 : 1150);
    return () => clearTimeout(t);
  }, [step, total]);
  const heroItems = HERO_BACKLOG.map((it, i) => ({
    ...it,
    status: i < step ? "done" : i === step ? "active" : "queued"
  }));
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden", paddingBottom: 8, marginTop: -84 }}>
      <div style={{ position: "relative" }}>
        <Container>
          {/* Bloc d'accroche centré, allégé */}
          <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", padding: "124px 0 8px" }}>
            <div style={{ marginBottom: 22 }}>
              <Badge variant="neutral" dot>Service géré · abonnement mensuel</Badge>
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em",
              fontSize: "clamp(2.1rem, 1.2rem + 2.7vw, 3.3rem)", lineHeight: 1.07,
              color: "var(--ink)", margin: "0 auto", maxWidth: "20ch"
            }}>
              On dépile votre{" "}
              <span style={{ position: "relative", whiteSpace: "nowrap", color: "var(--terracotta)" }}>
                backlog technique<DrawnUnderline />
              </span>{" "}
              pendant que vous codez la roadmap.
            </h1>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.18rem", lineHeight: 1.55,
              color: "var(--text-muted)", margin: "22px auto 0", maxWidth: "52ch"
            }}>
              Bugs non-urgents, dette technique, montées de version, failles de sécurité.
              On s'en occupe, calmement, à votre rythme.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" as="a" href="#tarifs">Réserver un appel</Button>
              <Button variant="ghost" size="lg" as="a" href="#methode" iconRight={AIcons.arrow}>Voir comment on dépile</Button>
            </div>
          </div>

          {/* Le backlog qui fond — sous le titre, plein cadre */}
          <div className="arsheo-hero-visual" style={{ position: "relative", maxWidth: 860, margin: "44px auto 0" }}>
            <BacklogMelt key={step} items={heroItems} title="Votre backlog, qui fond" />
          </div>
        </Container>
      </div>
    </header>);

}

Object.assign(window, { ArsheoNav: Nav, ArsheoHero: Hero });