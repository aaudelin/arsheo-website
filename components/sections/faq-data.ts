/* Source unique des questions/réponses FAQ.
   Partagée entre le composant d'affichage (Faq.tsx) et le balisage
   structuré FAQPage (données JSON-LD pour les rich snippets Google). */

export type FaqEntry = { q: string; a: string };

export const FAQS: FaqEntry[] = [
  {
    q: "C'est quoi une « demande » ?",
    a: "Une unité de travail qu'on dépile : un bug à corriger, une dépendance à monter, une faille à boucher, un test à réparer. On la diagnostique, on la traite, et on vous livre une PR draft (ou une analyse) prête à relire et merger.",
  },
  {
    q: "Combien de demandes par mois ?",
    a: "Ça dépend de la taille de chaque demande. Sur le plan de base, comptez environ 30 demandes traitées par mois. Les grosses migrations consomment plus de capacité ; on les étale, ou on passe en Débit double.",
  },
  {
    q: "C'est quoi le plan Design Partner ?",
    a: "Pour nos 3 premiers clients : -50% pendant 3 mois. En échange, on cale ensemble un point hebdo de 30 min et un retour d'expérience. C'est un tarif de lancement.",
  },
  {
    q: "Qui merge le code ?",
    a: "Vous, toujours. On livre des PR draft prêtes à relire. On ne touche jamais à votre prod : pas d'auto-merge, pas d'accès en écriture.",
  },
  {
    q: "Mes données sortent-elles d'Europe ?",
    a: "Non. Hébergement 100% UE, RGPD by default, aucun transfert hors-UE. DPA disponible sur demande.",
  },
  {
    q: "Et si je veux arrêter ?",
    a: "Abonnement mensuel sans engagement. Pause ou annulation à tout moment.",
  },
];
