/* Arsheo one-pager — Nav (sticky glass). */

import { Wordmark } from "@/components/ui/Wordmark";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container, CAL_URL } from "@/components/sections/_shared";

const LINKS: [string, string][] = [
  ["Notre périmètre", "/#depile"],
  ["Notre mission", "/#pour-quoi"],
  ["Comment ça marche", "/#methode"],
  ["Tarifs", "/#tarifs"],
  ["Blog", "/blog"],
];

export function Navbar() {
  return (
    <div className="arsheo-nav-sticky" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <Container style={{ paddingTop: 16, paddingBottom: 8 }}>
        <nav
          className="arsheo-glass"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            padding: "13px 14px 13px 22px",
          }}
        >
          <a href="/" style={{ textDecoration: "none" }}>
            <Wordmark />
          </a>
          <div className="arsheo-nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-body)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a
              href="/#souverainete"
              className="arsheo-nav-eu"
              style={{ textDecoration: "none" }}
              title="Souveraineté & hébergement UE"
            >
              <Badge variant="eu">🇪🇺 UE</Badge>
            </a>
            <Button variant="primary" size="sm" as="a" href={CAL_URL} external>
              Réserver un appel
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
