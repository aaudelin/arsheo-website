import Script from "next/script";

import { headers } from "next/headers";

const GoogleAnalytics = () => {
  const host = headers().get("host");
  if (host?.includes("localhost")) return;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JHV07XTZRZ`}
      />

      <Script id="" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JHV07XTZRZ');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
