import type { MetadataRoute } from "next";

const BASE_URL = "https://arsheo.com";

/**
 * Servi sur /robots.txt — autorise tous les crawlers sur tout le site et
 * pointe vers le sitemap pour accélérer la découverte des URLs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
