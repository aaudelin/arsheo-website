import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/app/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsheo | Vos apps métiers sur mesure",
  description: "L'IT au service de la croissance de votre entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
