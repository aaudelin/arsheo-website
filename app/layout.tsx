import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import MatomoAnalytics from "@/components/MatomoAnalytics";

// Fraunces (titres) n'est utilisée qu'en graisse 600 sur tout le site.
// On charge donc l'instance statique 600 plutôt que la police variable complète
// (axes optical-size + weight + slant) : ~3× plus légère sur le chemin critique LCP.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

// Mono (labels) et manuscrite (accents) : hors du chemin de rendu critique.
// preload: false évite de précharger leurs fichiers et de concurrencer le LCP.
// On charge aussi UNIQUEMENT les graisses réellement utilisées (instances
// statiques) au lieu de toute la plage variable : divise par ~4 le poids de
// ces deux polices, lourdes pour un usage minime (mono = labels, Caveat = 3 déco).
// Une SEULE graisse → next/font sert une instance statique légère (au lieu de la
// police variable complète qu'un tableau de graisses force à télécharger).
// Mono = graisse des labels (500) ; Caveat = graisse des accents (600).
// L'écart de graisse était imperceptible sur ces usages (labels mono, 2 mots déco).
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arsheo.com"),
  title: "Arsheo - On dépile votre backlog technique",
  description:
    "Service géré qui dépile le backlog technique de vos équipes : bugs non-urgents, dette technique & montées de version, failles de sécurité, tests. Hébergé en UE, RGPD by default. Abonnement mensuel sans engagement.",
  // app/icon.svg, app/apple-icon.png et app/favicon.ico sont auto-détectés par Next.
  // On ajoute les PNG de secours pour les navigateurs sans support SVG.
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
  },
  openGraph: {
    title: "Arsheo - On dépile votre backlog technique",
    description:
      "Le service géré qui dépile le backlog technique de vos équipes. Sereinement. Hébergé en UE, RGPD by default.",
    siteName: "Arsheo",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/arsheo-og.png", width: 1024, height: 1024, alt: "Arsheo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body>
        {children}
        <MatomoAnalytics />
      </body>
    </html>
  );
}
