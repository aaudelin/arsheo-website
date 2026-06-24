import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Arsheo",
  description:
    "Mentions légales du site arsheo.com : éditeur, directeur de la publication, hébergeur.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <h1>Mentions légales</h1>

      <p>
        Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
        l&apos;économie numérique (LCEN), voici les informations relatives à l&apos;éditeur et à
        l&apos;hébergeur du site <a href="https://arsheo.com">arsheo.com</a>.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        Le site arsheo.com est édité par&nbsp;:
      </p>
      <ul>
        <li>
          <strong>Arsheo</strong>, société par actions simplifiée unipersonnelle (SASU)
        </li>
        <li>Capital social&nbsp;: 500&nbsp;€</li>
        <li>Siège social&nbsp;: 14 rue Bausset, 75015 Paris, France</li>
        <li>SIREN&nbsp;: 987&nbsp;934&nbsp;007 — immatriculée au RCS de Paris</li>
        <li>Numéro de TVA intracommunautaire&nbsp;: FR13&nbsp;987&nbsp;934&nbsp;007</li>
        <li>
          Contact&nbsp;: <a href="mailto:arsheocontact@gmail.com">arsheocontact@gmail.com</a>
        </li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        Le directeur de la publication est <strong>Aurélien Audelin</strong>, en sa qualité de
        président de la SASU Arsheo.
      </p>

      <h2>Hébergeur</h2>
      <p>Le site est hébergé au sein de l&apos;Union européenne par&nbsp;:</p>
      <ul>
        <li>
          <strong>Clever Cloud SAS</strong>, société par actions simplifiée au capital de
          22&nbsp;952&nbsp;€
        </li>
        <li>RCS Nantes&nbsp;: B&nbsp;524&nbsp;172&nbsp;699</li>
        <li>Siège social&nbsp;: 4 rue Voltaire, 44000 Nantes, France</li>
        <li>Numéro de TVA intracommunautaire&nbsp;: FR&nbsp;87&nbsp;524&nbsp;172&nbsp;699</li>
        <li>
          Site&nbsp;: <a href="https://www.clever-cloud.com">clever-cloud.com</a>
        </li>
      </ul>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur le site arsheo.com (textes, éléments graphiques,
        logo, charte visuelle, code) est la propriété exclusive d&apos;Arsheo, sauf mention
        contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans
        autorisation écrite préalable d&apos;Arsheo est interdite et susceptible de constituer une
        contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Arsheo s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
        publiées sur ce site, mais ne peut en garantir l&apos;exhaustivité ni l&apos;absence
        d&apos;erreurs. Les liens vers des sites tiers sont fournis à titre indicatif&nbsp;: Arsheo
        n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur
        contenu.
      </p>

      <p>
        <em>Dernière mise à jour&nbsp;: 15 juin 2026.</em>
      </p>
    </>
  );
}
