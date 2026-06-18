import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Serveur Node minimal et léger pour le déploiement conteneurisé (CleverCloud).
  output: "standalone",
  // Les fichiers .md / .mdx deviennent des pages routables (app/blog/<slug>/page.mdx).
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
