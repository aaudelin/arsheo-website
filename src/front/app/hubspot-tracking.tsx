import Script from "next/script";

const HubspotTracking = () => {
  return (
    <>
      <Script
        type="text/javascript"
        async
        defer
        strategy="lazyOnload"
        id="hs-script-loader"
        src={`//js-eu1.hs-scripts.com/145409266.js`}
      />
    </>
  );
};

export default HubspotTracking;
