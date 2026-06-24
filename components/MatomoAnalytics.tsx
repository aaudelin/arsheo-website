import Script from "next/script";

/**
 * Mesure d'audience Matomo en mode "sans cookie" (cookieless).
 *
 * Configuration conforme à l'exemption de consentement CNIL :
 *  - disableCookies()         → aucun cookie déposé, donc aucune bannière requise
 *  - setDoNotTrack(true)      → respecte le Do Not Track du navigateur
 *  - anonymisation de l'IP    → à activer aussi côté serveur Matomo (2 octets masqués)
 *
 * Renseigner les variables d'environnement (sans guillemets) :
 *  NEXT_PUBLIC_MATOMO_URL=https://votre-instance-matomo.tld/
 *  NEXT_PUBLIC_MATOMO_SITE_ID=1
 *
 * Si l'une des deux est absente, le composant ne charge rien (utile en local).
 */
export default function MatomoAnalytics() {
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
  const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

  if (!matomoUrl || !siteId) return null;

  // Garantit le slash final pour construire les URL matomo.js / matomo.php.
  const base = matomoUrl.endsWith("/") ? matomoUrl : `${matomoUrl}/`;

  return (
    <Script id="matomo-analytics" strategy="afterInteractive">
      {`
        var _paq = window._paq = window._paq || [];
        _paq.push(['disableCookies']);
        _paq.push(['setDoNotTrack', true]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="${base}";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '${siteId}']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `}
    </Script>
  );
}
