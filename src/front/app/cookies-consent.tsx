"use client";

const CookieConsentBanner = () => {
  function showCookies() {
    let _hsp = (window["_hsp"] = window["_hsp"] || []);
    _hsp.push(["showBanner"]);
  }

  return (
    <button id="hs_show_banner_button" onClick={showCookies}>
      Paramètres cookies
    </button>
  );
};

export default CookieConsentBanner;
