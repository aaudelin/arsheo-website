import type { MetadataRoute } from "next";

/* Manifeste PWA (app web) — couleurs et icônes de marque Arsheo.
   Crème en fond, terracotta en thème. Icônes maskable terracotta. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arsheo",
    short_name: "Arsheo",
    description: "Le service géré qui dépile votre backlog technique.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EE",
    theme_color: "#C75D3A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
