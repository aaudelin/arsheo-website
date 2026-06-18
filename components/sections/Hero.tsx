/* Arsheo one-pager — Hero. */

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BacklogMelt } from "@/components/motifs/BacklogMelt";
import { DrawnUnderline } from "@/components/motifs/DrawnAccents";
import { Container, AIcons, CAL_URL } from "@/components/sections/_shared";

export function Hero() {
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden", paddingBottom: 8, marginTop: -84 }}>
      <div style={{ position: "relative" }}>
        <Container>
          {/* Bloc d'accroche centré, allégé */}
          <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", padding: "124px 0 8px" }}>
            <div style={{ marginBottom: 22 }}>
              <Badge variant="neutral" dot>
                Service géré · abonnement mensuel
              </Badge>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: "clamp(2.1rem, 1.2rem + 2.7vw, 3.3rem)",
                lineHeight: 1.07,
                color: "var(--ink)",
                margin: "0 auto",
                maxWidth: "20ch",
              }}
            >
              On dépile votre{" "}
              <span style={{ position: "relative", whiteSpace: "nowrap", color: "var(--terracotta)" }}>
                backlog technique
                <DrawnUnderline />
              </span>{" "}
              pendant que vous codez la roadmap.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.18rem",
                lineHeight: 1.55,
                color: "var(--text-muted)",
                margin: "22px auto 0",
                maxWidth: "52ch",
              }}
            >
              Bugs non-urgents, dette technique, montées de version, failles de sécurité. On s&apos;en
              occupe.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                marginTop: 32,
                flexWrap: "wrap",
              }}
            >
              <Button variant="primary" size="lg" as="a" href={CAL_URL} external>
                Réserver un appel
              </Button>
              <Button variant="ghost" size="lg" as="a" href="#methode" iconRight={AIcons.arrow}>
                Voir comment on dépile
              </Button>
            </div>
          </div>

          {/* Le backlog qui fond — sous le titre, plein cadre */}
          <div
            className="arsheo-hero-visual"
            style={{ position: "relative", maxWidth: 640, margin: "44px auto 0" }}
          >
            <BacklogMelt title="Votre backlog, qui fond" animate />
          </div>
        </Container>
      </div>
    </header>
  );
}
