/* Données structurées Schema.org (JSON-LD) du site.
   Lues par Google pour enrichir les résultats : panneau entreprise,
   barre de recherche du site, accordéon FAQ, balisage du service.
   Source de vérité unique pour l'entité Arsheo et son offre. */

import { FAQS } from "@/components/sections/faq-data";

const BASE_URL = "https://arsheo.com";

/** L'entité Arsheo — référencée par toutes les autres entités via @id. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Arsheo",
  url: BASE_URL,
  logo: `${BASE_URL}/icon-512.png`,
  image: `${BASE_URL}/arsheo-og.png`,
  description:
    "Service géré qui dépile le backlog technique des équipes : bugs, dette technique, montées de version, failles de sécurité, tests. Hébergé en UE, RGPD by default.",
  slogan: "On dépile votre backlog technique.",
  areaServed: "EU",
  knowsLanguage: ["fr-FR"],
};

/** Le site lui-même — active le sitelinks searchbox potentiel. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Arsheo",
  inLanguage: "fr-FR",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

/** Le service vendu — abonnement mensuel de dépile du backlog technique. */
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/#service`,
  name: "Dépile de backlog technique — service géré",
  serviceType: "Maintenance logicielle et réduction de dette technique",
  provider: { "@id": `${BASE_URL}/#organization` },
  areaServed: { "@type": "Place", name: "Union européenne" },
  description:
    "Abonnement mensuel sans engagement : on dépile bugs, dette technique, montées de version, failles de sécurité et tests. Livraison en PR draft, jamais d'accès en écriture sur votre prod. Hébergement 100% UE.",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/#tarifs`,
  },
};

/** FAQPage construite à partir de la source unique des Q/R (rich snippet FAQ). */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/** Tous les schémas de la page d'accueil, prêts à injecter en un seul bloc. */
export const homePageSchemas = [
  organizationSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
];
