/* Arsheo one-pager, Footer. */

import { Badge } from "@/components/ui/Badge";
import { ArsheoSymbol } from "@/components/ui/Wordmark";
import { Container } from "@/components/sections/_shared";

const COLS: { h: string; items: [string, string][] }[] = [
  {
    h: "Produit",
    items: [
      ["Notre périmètre", "/#depile"],
      ["Comment ça marche", "/#methode"],
      ["Tarifs", "/#tarifs"],
    ],
  },
  {
    h: "Confiance",
    items: [
      ["Souveraineté", "/#souverainete"],
      ["FAQ", "/#faq"],
      ["Blog", "/blog"],
    ],
  },
];

export function Footer() {
  return (
    <footer data-screen-label="footer" style={{ background: "#2B231C", color: "var(--text-on-dark)" }}>
      <Container style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div
          className="arsheo-footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 40 }}
        >
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <ArsheoSymbol size={24} color="#FBF6EE" />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 26,
                  letterSpacing: "-0.02em",
                  color: "#FFF7F1",
                }}
              >
                Arsheo
              </span>
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15.5,
                lineHeight: 1.6,
                color: "rgba(251,246,238,.74)",
                margin: "18px 0 20px",
                maxWidth: "34ch",
              }}
            >
              Le service géré qui dépile le backlog technique de vos équipes. Sereinement.
            </p>
            <Badge variant="eu">🇪🇺 Hébergé en UE</Badge>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--honey)",
                  marginBottom: 16,
                }}
              >
                {c.h}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {c.items.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15.5,
                        color: "rgba(251,246,238,.78)",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(251,246,238,.14)",
            marginTop: 44,
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "rgba(251,246,238,.55)",
              letterSpacing: "0.04em",
            }}
          >
            <span>© 2026 Arsheo · On vient en renfort.</span>
            <a
              href="/mentions-legales"
              style={{ color: "rgba(251,246,238,.7)", textDecoration: "none" }}
            >
              Mentions légales
            </a>
            <a
              href="/confidentialite"
              style={{ color: "rgba(251,246,238,.7)", textDecoration: "none" }}
            >
              Confidentialité
            </a>
          </div>
          <span
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: 24,
              color: "var(--honey)",
              whiteSpace: "nowrap",
            }}
          >
            à votre rythme
          </span>
        </div>
      </Container>
    </footer>
  );
}
