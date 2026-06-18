/* Arsheo one-pager — Le problème · Ce qu'on dépile · Pour quoi. */

/* Graphic "résultat" : la même situation de départ, projetée sur 6 mois.
   Sans Arsheo, le backlog grossit (terracotta) ; avec Arsheo, il fond (vert
   calme). Deux courbes qui divergent depuis un même point — une différence de
   couleur claire raconte toute l'histoire, sans chiffres. */
function ResultGraphic() {
  // Aire de tracé : x de 64→346, y de 26 (haut) à 150 (axe du bas).
  // Départ commun au point d'origine (64, 88). Sans Arsheo grimpe, avec Arsheo fond.
  const X0 = 64,Y0 = 88,AX_B = 150,AX_R = 346;
  const sans = `M${X0} ${Y0} C 132 76, 196 54, 248 42 C 296 31, 326 27, ${AX_R} 24`;
  const avec = `M${X0} ${Y0} C 132 100, 196 120, 248 130 C 300 140, 326 144, ${AX_R} 146`;
  return (
    <div style={{
      position: "relative", borderRadius: "var(--r-panel)", padding: "24px 26px 22px",
      background: "linear-gradient(180deg, rgba(255,252,247,.78), rgba(255,248,238,.55))",
      WebkitBackdropFilter: "blur(18px) saturate(140%)", backdropFilter: "blur(18px) saturate(140%)",
      border: "1px solid rgba(255,255,255,.78)", boxShadow: "var(--glass-shadow), var(--glass-inset)"
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--terracotta)" }}>Votre backlog, projeté</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-faint)" }}>sur 6 mois</span>
      </div>

      <svg viewBox="0 0 372 196" preserveAspectRatio="xMidYMid meet" style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}>
        {/* lignes de repère discrètes */}
        {[50, 88, 126].map((y) =>
        <line key={y} x1={X0} y1={y} x2={AX_R} y2={y} stroke="var(--border-hair)" strokeWidth="1" />
        )}

        {/* aire "avec Arsheo" (calme, dessous) */}
        <path d={`${avec} L${AX_R} ${AX_B} L${X0} ${AX_B} Z`} fill="var(--success)" opacity="0.10" />
        {/* aire "sans Arsheo" (l'écart que vous évitez) */}
        <path d={`${sans} L${AX_R} ${AX_B} L${X0} ${AX_B} Z`} fill="var(--terracotta)" opacity="0.09" />

        {/* axes */}
        <line x1={X0} y1="18" x2={X0} y2={AX_B} stroke="var(--border-default)" strokeWidth="1.5" />
        <line x1={X0} y1={AX_B} x2={AX_R} y2={AX_B} stroke="var(--border-default)" strokeWidth="1.5" />
        {/* têtes de flèche */}
        <path d={`M${X0} 14 l-3.4 6 l3.4 -2.2 l3.4 2.2 Z`} fill="var(--ink-soft)" />
        <path d={`M${AX_R + 4} ${AX_B} l-6 -3.4 l2.2 3.4 l-2.2 3.4 Z`} fill="var(--ink-soft)" />

        {/* légende axe Y (verticale) */}
        <text transform={`rotate(-90 18 ${(18 + AX_B) / 2})`} x="18" y={(18 + AX_B) / 2} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.06em" fill="var(--text-muted)">VOLUME DU BACKLOG</text>

        {/* courbes */}
        <path d={sans} fill="none" stroke="var(--terracotta)" strokeWidth="3.4" strokeLinecap="round" />
        <path d={avec} fill="none" stroke="var(--success)" strokeWidth="3.4" strokeLinecap="round" />

        {/* point de départ commun */}
        <circle cx={X0} cy={Y0} r="5" fill="#FFFDF9" stroke="var(--ink-soft)" strokeWidth="2.4" />
        {/* points d'arrivée */}
        <circle cx={AX_R} cy="24" r="5.5" fill="var(--terracotta)" />
        <circle cx={AX_R} cy="146" r="5.5" fill="var(--success)" />

        {/* graduations + labels axe X (horizontale) */}
        {[[X0, "Aujourd'hui"], [(X0 + AX_R) / 2, "+3 mois"], [AX_R, "+6 mois"]].map(([x, label], i) =>
        <g key={i}>
            <line x1={x} y1={AX_B} x2={x} y2={AX_B + 4} stroke="var(--border-default)" strokeWidth="1.5" />
            <text x={x} y={AX_B + 16} textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.04em" fill="var(--text-muted)">{label}</text>
          </g>
        )}
        {/* légende axe X */}
        <text x={(X0 + AX_R) / 2} y={AX_B + 34} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.06em" fill="var(--text-faint)">TEMPS →</text>
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 14, flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-body)" }}>
          <span style={{ width: 22, height: 3, borderRadius: 2, background: "var(--terracotta)" }} />Sans Arsheo
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-body)" }}>
          <span style={{ width: 22, height: 3, borderRadius: 2, background: "var(--success)" }} />Avec Arsheo
        </span>
      </div>
    </div>);

}

function Problem() {
  return (
    <Section id="probleme" halo={[HALOS.honey("92% 12%")]} style={{ paddingTop: 0 }}>
      <div className="arsheo-two-col" style={{ display: "grid", gridTemplateColumns: "0.98fr 1.02fr", gap: 56, alignItems: "center" }}>
        <ResultGraphic />
        <div>
          <div className="mono-label" style={{ marginBottom: 16 }}>Le problème</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em",
            fontSize: "clamp(1.95rem, 1.25rem + 2.1vw, 2.95rem)", lineHeight: 1.08, color: "var(--ink)", margin: 0
          }}>
            Le backlog que personne ne priorise grossit pendant que la roadmap tourne.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.18rem", lineHeight: 1.62, color: "var(--text-muted)", margin: "24px 0 0", maxWidth: "46ch" }}>
            Les bugs non-urgents s'empilent. La dette technique s'accumule. Les montées
            de version prennent du retard, les failles attendent, les tests pourrissent.
            Jamais assez grave pour interrompre la roadmap, jamais assez prioritaire pour
            être traité.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 22 }}>
            <span style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.45rem", letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Et tout ralentit,{" "}
              <span style={{ position: "relative", color: "var(--terracotta)", whiteSpace: "nowrap" }}>
                en silence<DrawnUnderline />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Section>);

}

const DEPILE = [
{ icon: AIcons.bug, eyebrow: "Dette & bugs", title: "On dépile le backlog", body: "Bugs non-urgents, incidents qui traînent, dette technique. On vide la file, demande après demande." },
{ icon: AIcons.version, eyebrow: "Montées de version", title: "On reste à jour", body: "Dépendances, frameworks, runtimes en fin de support. On monte les versions avant que ça devienne urgent." },
{ icon: AIcons.shieldCheck, eyebrow: "Sécurité applicative", title: "On bouche les failles", body: "Dépendances vulnérables, CVE, durcissement auth et secrets. La sécurité applicative, traitée au fil de l'eau." },
{ icon: AIcons.tests, eyebrow: "Tests", title: "On entretient le filet", body: "Couverture à compléter, tests flaky à réparer, suite à maintenir. Le filet de sécurité reste tendu." }];


function Depile() {
  return (
    <Section id="depile" halo={[HALOS.terracotta("8% 18%"), HALOS.honey("96% 86%")]}>
      <SectionHead
        eyebrow="Notre périmètre"
        title="Le travail que personne ne priorise. C'est exactement le nôtre."
        maxTitle="42ch" />
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))", gap: 22 }}>
        {DEPILE.map((f) =>
        <GlassCard key={f.title} icon={f.icon} eyebrow={f.eyebrow} title={f.title}>{f.body}</GlassCard>
        )}
      </div>
      <SectionCta label="Voyez ce qu'on peut dépiler pour vous" align="center" marginTop={40} />
    </Section>);

}

const OUTCOMES = [
"Maintenir votre SaaS au quotidien",
"Faire tourner le back-office interne",
"Corriger les workflows critiques",
"Dépanner les automatisations",
"Réparer les intégrations qui lâchent",
"Absorber le grunt work qui s'accumule"];


function Outcome() {
  return (
    <Section id="pour-quoi">
      <div className="arsheo-two-col" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 56, alignItems: "start" }}>
        <div>
          <SectionHead
            eyebrow="Notre mission"
            title="Vos équipes restent sur le core produit."
            intro="L'idée est simple : on décharge tout ce qui pollue la tech sans faire avancer le produit principal. Vos devs gardent leur énergie pour la roadmap."
            maxTitle="18ch"
            style={{ marginBottom: 0 }} />
          
        </div>
        <div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 28px" }} className="arsheo-outcome-grid">
            {OUTCOMES.map((o) =>
            <li key={o} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: "var(--font-body)", fontSize: "1.06rem", lineHeight: 1.4, color: "var(--text-body)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--terracotta)", flex: "none", marginTop: 9 }} />
                {o}
              </li>
            )}
          </ul>
          <p style={{
            margin: "30px 0 0", paddingLeft: 20, borderLeft: "3px solid var(--terracotta)",
            fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.3rem", lineHeight: 1.4,
            letterSpacing: "-0.01em", color: "var(--ink)", maxWidth: "44ch"
          }}>
            Tout ce qui n'est pas une feature de votre produit, mais qui mange quand même du temps d'ingénieur.
          </p>
        </div>
      </div>

      <a href="#pour-qui" className="arsheo-mission-cue" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: "fit-content", margin: "52px auto 0", textDecoration: "none" }}>
        <span className="hand-note" style={{ fontSize: "1.55rem", color: "var(--terracotta)", lineHeight: 1.1 }}>… mais pour qui, au juste ?</span>
        <svg width="44" height="58" viewBox="0 0 44 58" fill="none" aria-hidden="true">
          <path d="M22 3C13 16 31 28 22 44" stroke="var(--terracotta)" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M13 36 22 48 31 36" stroke="var(--terracotta)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </Section>);

}

Object.assign(window, { ArsheoProblem: Problem, ArsheoDepile: Depile, ArsheoOutcome: Outcome });