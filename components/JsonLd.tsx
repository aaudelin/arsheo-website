/**
 * Injecte un bloc de données structurées Schema.org (JSON-LD) dans le <head> rendu.
 * Server component pur — aucun JS expédié au client. Google lit ce balisage pour
 * enrichir les résultats (rich snippets : FAQ, fil d'Ariane, articles, entreprise).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Le contenu est généré côté serveur à partir de nos propres données — pas d'entrée utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}