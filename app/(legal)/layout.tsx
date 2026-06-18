import type { ReactNode } from "react";
import { PageBackdrop } from "@/components/sections/_shared";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* Chrome partagé des pages légales (/mentions-legales, /confidentialite) :
   même fond crème à halos, même nav, même footer que la landing et le blog.
   Le contenu de chaque page s'insère dans une colonne de lecture étroite
   stylée par `.arsheo-prose` (cf. globals.css). */
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PageBackdrop />
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <article
            className="arsheo-prose"
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 760,
              margin: "0 auto",
              padding: "clamp(40px, 6vw, 80px) 28px clamp(64px, 8vw, 112px)",
            }}
          >
            <a
              href="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--terracotta)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: 28,
              }}
            >
              ← Retour à l&apos;accueil
            </a>
            {children}
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
