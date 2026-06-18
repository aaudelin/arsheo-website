/* Arsheo blog — enveloppe de lecture d'un article MDX.
   Colonne centrée étroite (mesure de lecture confortable) + classe prose
   du design system. Appliquée automatiquement à chaque page.mdx via mdx-components. */

import type { ReactNode } from "react";
import { BackToBlog } from "@/components/blog/BackToBlog";

export function PostShell({ children }: { children: ReactNode }) {
  return (
    <article
      className="arsheo-prose"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 720,
        margin: "0 auto",
        padding: "clamp(40px, 6vw, 80px) 28px clamp(64px, 8vw, 112px)",
      }}
    >
      <BackToBlog />
      {children}
    </article>
  );
}
