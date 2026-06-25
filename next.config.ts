import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Serveur Node minimal et léger pour le déploiement conteneurisé (CleverCloud).
  output: "standalone",
  // Les fichiers .md / .mdx deviennent des pages routables (app/blog/<slug>/page.mdx).
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  experimental: {
    // Le CSS (~7 KiB) est injecté directement dans le HTML au lieu d'un <link>
    // bloquant : plus de requête render-blocking, et les @font-face sont découverts
    // dès le parsing du HTML (raccourcit le chemin critique HTML → CSS → police).
    inlineCss: true,
  },

  // Cache long sur les assets statiques de /public (favicons, icônes, OG image,
  // SVG de marque). Ils changent rarement : on évite à PageSpeed de signaler
  // « Use efficient cache lifetimes ». (Les assets /_next/static hashés sont
  // déjà servis en immutable par Next.)
  async headers() {
    return [
      {
        source: "/:file(.*\\.(?:png|svg|ico|jpg|jpeg|webp|avif))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
