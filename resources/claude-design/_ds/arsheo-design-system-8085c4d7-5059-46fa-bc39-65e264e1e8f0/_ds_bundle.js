/* @ds-bundle: {"format":3,"namespace":"ArsheoDesignSystem_8085c4","components":[{"name":"BacklogMelt","sourcePath":"components/backlog/BacklogMelt.jsx"},{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"GlassPanel","sourcePath":"components/glass/GlassPanel.jsx"},{"name":"Navbar","sourcePath":"components/navbar/Navbar.jsx"},{"name":"Wordmark","sourcePath":"components/navbar/Navbar.jsx"},{"name":"PricingCard","sourcePath":"components/pricing/PricingCard.jsx"}],"sourceHashes":{"assets/arsheo-boot.js":"657ffcd2630a","components/backlog/BacklogMelt.jsx":"4019d959a22e","components/badges/Badge.jsx":"29334f9a8b7d","components/buttons/Button.jsx":"9ac42aafa337","components/cards/Card.jsx":"4d06652488aa","components/forms/Input.jsx":"51f376bd42d9","components/glass/GlassPanel.jsx":"9ab8e6564bfa","components/navbar/Navbar.jsx":"5033925014f8","components/pricing/PricingCard.jsx":"0178b86bf8dc","ui_kits/marketing/Features.jsx":"acd8488c43a8","ui_kits/marketing/Hero.jsx":"68c5c4c02021","ui_kits/marketing/Pricing.jsx":"5a88de0ade00","ui_kits/marketing/Sovereignty.jsx":"d705804e4699"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArsheoDesignSystem_8085c4 = window.ArsheoDesignSystem_8085c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/arsheo-boot.js
try { (() => {
/* ============================================================
   Arsheo — DS boot / fallback runtime
   Charge les composants sur window.ArsheoDesignSystem_8085c4.
   - Si le bundle compilé (_ds_bundle.js) est déjà chargé, court-circuite.
   - Sinon, récupère les sources .jsx et les compile côté client (Babel),
     pour que les cartes & le UI kit rendent dans TOUS les contextes
     (aperçu direct, vérificateur, onglet Design System).
   Chargé en <script src> APRÈS React, ReactDOM et Babel standalone.
   ============================================================ */
(function () {
  var NS = "ArsheoDesignSystem_8085c4";

  // Ordre sans importance (déclarations de fonctions hoistées dans un même scope)
  var COMPONENT_FILES = ["buttons/Button.jsx", "badges/Badge.jsx", "cards/Card.jsx", "glass/GlassPanel.jsx", "forms/Input.jsx", "navbar/Navbar.jsx", "pricing/PricingCard.jsx", "backlog/BacklogMelt.jsx"];
  var EXPORT_NAMES = ["Button", "Badge", "Card", "GlassPanel", "Input", "Navbar", "Wordmark", "PricingCard", "BacklogMelt"];
  function stripModuleSyntax(src) {
    return src.replace(/^[ \t]*import[^\n]*\n/gm, "") // retire les imports
    .replace(/^[ \t]*export[ \t]+default[ \t]+/gm, "") // export default X
    .replace(/^[ \t]*export[ \t]+/gm, ""); // export function/const
  }

  /**
   * @param {string} baseHref  chemin (avec / final) de la page vers le dossier components/
   * @param {(ns:object)=>void} cb  reçoit le namespace une fois prêt
   */
  window.ArsheoLoadDS = function (baseHref, cb) {
    var ready = window[NS];
    if (ready && ready.Button) {
      cb(ready);
      return;
    }
    if (typeof window.React === "undefined" || typeof window.ReactDOM === "undefined") {
      console.error("[Arsheo] React/ReactDOM doivent être chargés avant arsheo-boot.js");
      return;
    }
    if (typeof window.Babel === "undefined") {
      console.error("[Arsheo] Babel standalone doit être chargé avant arsheo-boot.js");
      return;
    }
    Promise.all(COMPONENT_FILES.map(function (f) {
      return fetch(baseHref + f, {
        cache: "no-store"
      }).then(function (r) {
        if (!r.ok) throw new Error("fetch " + f + " -> " + r.status);
        return r.text();
      });
    })).then(function (sources) {
      var combined = sources.map(stripModuleSyntax).join("\n\n");
      var assigns = EXPORT_NAMES.map(function (n) {
        return "if (typeof " + n + " !== 'undefined') __ns." + n + " = " + n + ";";
      }).join("\n");
      var wrapped = "(function (React, __ns) {\n" + combined + "\n" + assigns + "\n" + "return __ns;\n})";
      var transpiled = window.Babel.transform(wrapped, {
        presets: ["react"]
      }).code;
      var factory = (0, eval)(transpiled); // eslint-disable-line no-eval
      var ns = window[NS] = window[NS] || {};
      factory(window.React, ns);
      cb(ns);
    }).catch(function (err) {
      console.error("[Arsheo] échec du fallback DS:", err);
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/arsheo-boot.js", error: String((e && e.message) || e) }); }

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arsheo — Badge / Pill
 * Petites étiquettes calmes. La variante "eu" porte le seul froid autorisé
 * (bleu encre) et sert aux signaux EU / RGPD / sécurité.
 */
function Badge({
  children,
  variant = "neutral",
  icon = null,
  dot = false,
  ...rest
}) {
  const palettes = {
    neutral: {
      bg: "var(--sand)",
      color: "var(--ink-soft)",
      border: "var(--border-default)"
    },
    terracotta: {
      bg: "var(--terracotta-tint)",
      color: "var(--terracotta-hover)",
      border: "#EBC9BB"
    },
    honey: {
      bg: "var(--honey-tint)",
      color: "#9A6A14",
      border: "#EAD3A0"
    },
    success: {
      bg: "var(--success-tint)",
      color: "#54702F",
      border: "#CFE0B5"
    },
    eu: {
      bg: "var(--eu-bg)",
      color: "var(--eu-ink)",
      border: "#CBD8E1"
    },
    solid: {
      bg: "var(--terracotta)",
      color: "#FFF7F1",
      border: "transparent"
    }
  };
  const p = palettes[variant] || palettes.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 12px",
      background: p.bg,
      color: p.color,
      border: `1px solid ${p.border}`,
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: "11.5px",
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      opacity: 0.8
    }
  }) : null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 13,
      height: 13
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/backlog/BacklogMelt.jsx
try { (() => {
/** Coche dessinée à la main. */
function BacklogDrawnCheck() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "18",
    viewBox: "0 0 50 40",
    fill: "none",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 20c6 5 11 10 14 15C24 20 33 9 45 3",
    stroke: "var(--success)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/**
 * Arsheo — BacklogMelt (motif signature « votre backlog qui fond »)
 * Items résolus barrés + coche dessinée, items en cours, items en file.
 * Chaque ligne porte une catégorie en mono (dette, bug, sécurité, version, tests).
 */
function BacklogMelt({
  items = DEFAULT_ITEMS,
  title = "Votre backlog, qui fond"
}) {
  const done = items.filter(i => i.status === "done").length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--r-panel)",
      boxShadow: "var(--shadow-card)",
      padding: "26px 28px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Backlog technique"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--success)"
    }
  }, done, "/", items.length, " d\xE9pil\xE9s")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: 22,
      color: "var(--ink)",
      margin: "0 0 18px"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement(BacklogRow, {
    key: idx,
    item: it
  }))));
}
function BacklogRow({
  item
}) {
  const done = item.status === "done";
  const active = item.status === "active";
  const cats = {
    dette: {
      label: "Dette",
      variant: "terracotta"
    },
    bug: {
      label: "Bug",
      variant: "honey"
    },
    securite: {
      label: "Sécurité",
      variant: "eu"
    },
    version: {
      label: "Version",
      variant: "neutral"
    },
    tests: {
      label: "Tests",
      variant: "neutral"
    }
  };
  const cat = cats[item.cat] || cats.dette;
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "11px 12px",
      borderRadius: 12,
      background: done ? "var(--success-tint)" : active ? "var(--terracotta-tint)" : "transparent",
      opacity: done ? 0.78 : 1,
      transition: "background var(--t-slow) var(--ease-calm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      display: "inline-flex",
      justifyContent: "center",
      flex: "none"
    }
  }, done ? /*#__PURE__*/React.createElement(BacklogDrawnCheck, null) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      flex: "none",
      background: active ? "var(--terracotta)" : "var(--border-strong)",
      boxShadow: active ? "0 0 0 4px rgba(199,93,58,.18)" : "none"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      color: "var(--text-body)",
      textDecoration: done ? "line-through" : "none",
      textDecorationColor: "var(--success)",
      textDecorationThickness: "2px"
    }
  }, item.label), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: done ? "success" : active ? "terracotta" : "neutral"
  }, done ? "Dépilé" : active ? "En cours" : "En file"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 78,
      textAlign: "right",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: cat.variant
  }, cat.label)));
}
const DEFAULT_ITEMS = [{
  label: "Migrer vers Node 20 (fin de support)",
  cat: "version",
  status: "done"
}, {
  label: "Corriger la fuite mémoire du worker",
  cat: "bug",
  status: "done"
}, {
  label: "Patcher la dépendance vulnérable (CVE)",
  cat: "securite",
  status: "done"
}, {
  label: "Réécrire les tests flaky du checkout",
  cat: "tests",
  status: "active"
}, {
  label: "Refactor du module de facturation",
  cat: "dette",
  status: "queued"
}, {
  label: "Nettoyer les feature flags morts",
  cat: "dette",
  status: "queued"
}];
Object.assign(__ds_scope, { BacklogMelt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/backlog/BacklogMelt.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arsheo — Button
 * Primaire terracotta plein, secondaire miel, ghost discret.
 * Survol = terracotta plus sombre (jamais d'effet nerveux), press = léger enfoncement.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  disabled = false,
  as = "button",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: "14px",
      gap: "7px",
      icon: 15
    },
    md: {
      padding: "13px 22px",
      fontSize: "16px",
      gap: "9px",
      icon: 18
    },
    lg: {
      padding: "16px 30px",
      fontSize: "17px",
      gap: "10px",
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? "var(--terracotta-hover)" : "var(--terracotta)",
      color: "#FFF7F1",
      border: "1px solid transparent",
      shadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    secondary: {
      bg: hover ? "#DC9326" : "var(--honey)",
      color: "#3A2A10",
      border: "1px solid transparent",
      shadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    ghost: {
      bg: hover ? "var(--sand)" : "transparent",
      color: "var(--ink)",
      border: "1px solid var(--border-strong)",
      shadow: "none"
    },
    link: {
      bg: "transparent",
      color: hover ? "var(--terracotta-hover)" : "var(--terracotta)",
      border: "1px solid transparent",
      shadow: "none"
    }
  };
  const p = palettes[variant] || palettes.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: Tag === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap",
      color: p.color,
      background: p.bg,
      border: p.border,
      borderRadius: "var(--r-button)",
      boxShadow: p.shadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      textDecoration: variant === "link" && hover ? "underline" : "none",
      textUnderlineOffset: "3px",
      transform: active && !disabled ? "translateY(1px)" : "translateY(0)",
      transition: "background var(--t-base) var(--ease-calm), box-shadow var(--t-base) var(--ease-calm), transform var(--t-fast) var(--ease-calm)",
      WebkitTapHighlightColor: "transparent"
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arsheo — Card
 * Carte chaude posée sur le crème : surface presque blanche, rayon 18,
 * bordure douce, ombre brune. Lift léger et calme au survol si interactive.
 */
function Card({
  children,
  eyebrow = null,
  title = null,
  icon = null,
  interactive = false,
  padding = "28px",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--r-card)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      padding,
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--t-base) var(--ease-calm), box-shadow var(--t-base) var(--ease-calm)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 13,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--terracotta-tint)",
      color: "var(--terracotta)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, icon)) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: 10
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: 22,
      lineHeight: 1.15,
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arsheo — Input (champ de formulaire)
 * Label mono optionnel, surface chaude, anneau de focus terracotta.
 */
function Input({
  label = null,
  hint = null,
  type = "text",
  placeholder = "",
  icon = null,
  error = null,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || "in-" + Math.random().toString(36).slice(2, 7);
  const borderColor = error ? "var(--terracotta)" : focus ? "var(--terracotta)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--surface-card)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--r-button)",
      padding: "0 14px",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-xs)",
      transition: "border-color var(--t-base) var(--ease-calm), box-shadow var(--t-base) var(--ease-calm)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      color: "var(--text-faint)",
      display: "inline-flex",
      flex: "none"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)",
      padding: "13px 0",
      minWidth: 0
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--terracotta-hover)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arsheo — GlassPanel (verre dépoli, signature)
 * À n'utiliser QUE posé sur un fond coloré chaud (halos terracotta/miel).
 * ~66% d'opacité, blur + saturate, bordure claire et inset highlight.
 */
function GlassPanel({
  children,
  padding = "28px 30px",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--glass-bg)",
      WebkitBackdropFilter: "blur(16px) saturate(135%)",
      backdropFilter: "blur(16px) saturate(135%)",
      border: "1px solid rgba(255,255,255,.7)",
      boxShadow: "var(--glass-shadow), var(--glass-inset)",
      borderRadius: "var(--r-panel)",
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/navbar/Navbar.jsx
try { (() => {
/**
 * Arsheo — Navbar
 * Barre éditoriale : wordmark Fraunces, liens calmes, signal EU et CTA terracotta.
 * Peut être posée sur une barre de verre (glass) sur fond chaud.
 */
function Navbar({
  links = ["Méthode", "Ce qu'on dépile", "Souveraineté", "Tarifs"],
  glass = false,
  cta = "Réserver un appel"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "14px 22px",
      borderRadius: "var(--r-panel)",
      background: glass ? "var(--glass-bg)" : "var(--surface-card)",
      WebkitBackdropFilter: glass ? "blur(16px) saturate(135%)" : "none",
      backdropFilter: glass ? "blur(16px) saturate(135%)" : "none",
      border: glass ? "1px solid rgba(255,255,255,.7)" : "1px solid var(--border-default)",
      boxShadow: glass ? "var(--glass-shadow), var(--glass-inset)" : "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 26
    },
    className: "arsheo-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--text-body)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arsheo-nav-eu"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "eu"
  }, "\uD83C\uDDEA\uD83C\uDDFA UE")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, cta)));
}

/** Wordmark Arsheo : pastille terracotta + nom en Fraunces. */
function Wordmark({
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.82,
      height: size * 0.82,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%, var(--coral), var(--terracotta) 70%)",
      boxShadow: "inset 0 1px 1px rgba(255,255,255,.5)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "-0.02em",
      color: "var(--ink)",
      lineHeight: 1
    }
  }, "Arsheo"));
}
Object.assign(__ds_scope, { Navbar, Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navbar/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingCard.jsx
try { (() => {
/** Coche dessinée à la main (signature). */
function PricingDrawnCheck({
  color = "var(--success)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "16",
    viewBox: "0 0 50 40",
    fill: "none",
    style: {
      flex: "none",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 20c6 5 11 10 14 15C24 20 33 9 45 3",
    stroke: color,
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/**
 * Arsheo — PricingCard
 * Carte d'abonnement calme. La variante "featured" est posée en sombre chaud
 * (le seul fond foncé toléré) pour ancrer le plan recommandé.
 */
function PricingCard({
  name = "Standard",
  eyebrow = "Abonnement mensuel",
  price = "2 700 €",
  period = "/ mois",
  tagline = "Idéal pour un accompagnement au long cours",
  features = [],
  cta = "Réserver un appel",
  note = "Pause ou annulation à tout moment",
  featured = false
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: dark ? "#2B231C" : "var(--surface-card)",
      color: dark ? "var(--text-on-dark)" : "var(--text-body)",
      border: dark ? "1px solid #4A3B2D" : "1px solid var(--border-default)",
      borderRadius: "var(--r-panel)",
      padding: "32px 30px",
      boxShadow: dark ? "var(--shadow-xl)" : "var(--shadow-card)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: dark ? "var(--honey)" : "var(--text-faint)"
    }
  }, eyebrow), featured ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "solid"
  }, "Recommand\xE9") : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: 26,
      color: dark ? "#FFF7F1" : "var(--ink)",
      margin: "0 0 14px"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: dark ? "#FFF7F1" : "var(--terracotta)",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: dark ? "rgba(251,246,238,.7)" : "var(--text-muted)"
    }
  }, period)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.5,
      color: dark ? "rgba(251,246,238,.82)" : "var(--text-muted)",
      margin: "10px 0 22px"
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: dark ? "rgba(251,246,238,.16)" : "var(--border-hair)",
      margin: "0 0 22px"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "0 0 26px",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.4,
      color: dark ? "rgba(251,246,238,.92)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(PricingDrawnCheck, {
    color: dark ? "var(--honey)" : "var(--success)"
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "secondary" : "primary"
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      textAlign: "center",
      color: dark ? "rgba(251,246,238,.6)" : "var(--text-faint)"
    }
  }, note)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
/* Arsheo marketing — Section features */
function FeatIcon({
  d,
  paths
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths);
}
const FEATURES = [{
  eyebrow: "Dette & bugs",
  title: "On dépile le backlog",
  body: "Les bugs non-urgents et la dette s'accumulent sans jamais devenir prioritaires. On les traite en continu, à votre rythme.",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"
  }))
}, {
  eyebrow: "Montées de version",
  title: "On reste à jour",
  body: "Frameworks, runtimes, dépendances en fin de support. On gère les migrations avant qu'elles ne deviennent un mur.",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16h5v5"
  }))
}, {
  eyebrow: "Sécurité applicative",
  title: "On bouche les failles",
  body: "CVE, dépendances vulnérables, correctifs en attente. On les corrige sereinement, sans dramatiser l'incident.",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }))
}, {
  eyebrow: "Tests",
  title: "On entretient le filet",
  body: "Tests flaky, couverture qui s'effrite, suites lentes. On maintient le filet de sécurité qui laisse vos équipes livrer vite.",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 11l3 3L22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }))
}];
function Features() {
  const {
    Card
  } = window.ArsheoDesignSystem_8085c4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--sand)",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "var(--section-y) 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "44ch",
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      marginBottom: 16
    }
  }, "Ce qu'on d\xE9pile"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 1.3rem + 2vw, 3rem)",
      lineHeight: 1.1,
      color: "var(--ink)",
      margin: 0
    }
  }, "Le travail que personne ne priorise. C'est exactement le n\xF4tre.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 22
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    icon: f.icon,
    eyebrow: f.eyebrow,
    title: f.title,
    interactive: true
  }, f.body)))));
}
window.ArsheoFeatures = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Arsheo marketing — Hero éditorial */
function Hero() {
  const {
    Navbar,
    Button,
    Badge,
    BacklogMelt
  } = window.ArsheoDesignSystem_8085c4;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(45% 50% at 12% 8%, rgba(199,93,58,.16), transparent 60%)," + "radial-gradient(40% 45% at 88% 4%, rgba(233,162,59,.18), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    glass: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center",
      padding: "72px 0 28px"
    },
    className: "arsheo-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    dot: true
  }, "Service g\xE9r\xE9 \xB7 abonnement mensuel")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2.6rem, 1.4rem + 3.4vw, 4.1rem)",
      lineHeight: 1.04,
      color: "var(--ink)",
      margin: 0
    }
  }, "On d\xE9pile votre", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      whiteSpace: "nowrap",
      color: "var(--terracotta)"
    }
  }, "backlog technique", /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      left: "-2%",
      right: "-2%",
      bottom: "-0.32em",
      width: "104%"
    },
    height: "16",
    viewBox: "0 0 320 16",
    fill: "none",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10C70 4 230 3 316 8",
    stroke: "var(--terracotta)",
    strokeWidth: "4",
    strokeLinecap: "round"
  }))), ".", /*#__PURE__*/React.createElement("br", null), "Vous gardez la roadmap."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.28rem",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: "26px 0 0",
      maxWidth: "32ch"
    }
  }, "Bugs non-urgents, dette technique, mont\xE9es de version, failles de s\xE9curit\xE9, tests \xE0 maintenir. On s'en occupe \u2014 calmement, \xE0 votre rythme."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "R\xE9server un appel"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "Voir comment on d\xE9pile")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hand-note",
    style: {
      fontSize: "1.6rem"
    }
  }, "z\xE9ro pompier, z\xE9ro astreinte"), /*#__PURE__*/React.createElement("svg", {
    width: "62",
    height: "40",
    viewBox: "0 0 62 40",
    fill: "none",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 8c10 18 28 24 50 20",
    stroke: "var(--terracotta)",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 30c5-1 9-3 11-6M55 24c0 4 0 7-2 10",
    stroke: "var(--terracotta)",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(BacklogMelt, null)))));
}
window.ArsheoHero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
/* Arsheo marketing — Section pricing + footer */
function PricingSection() {
  const {
    PricingCard
  } = window.ArsheoDesignSystem_8085c4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--sand)",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto",
      padding: "var(--section-y) 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: "40ch",
      margin: "0 auto 52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      marginBottom: 16
    }
  }, "Tarifs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 1.3rem + 2vw, 3rem)",
      lineHeight: 1.1,
      color: "var(--ink)",
      margin: 0
    }
  }, "Un prix clair. Pause ou annulation quand vous voulez.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      alignItems: "stretch"
    },
    className: "arsheo-pricing-grid"
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Service g\xE9r\xE9",
    eyebrow: "Abonnement mensuel",
    price: "2 700 \u20AC",
    period: "/ mois",
    tagline: "Id\xE9al pour un accompagnement au long cours.",
    features: ["Backlog dépilé en continu", "Visibilité sur la roadmap", "Suivi du temps passé", "Hébergé en UE — RGPD by default"],
    featured: true
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "\xC0 la t\xE2che",
    eyebrow: "Forfait ponctuel",
    price: "Sur mesure",
    period: "/ projet",
    tagline: "Id\xE9al pour une mont\xE9e de version ou un audit urgent.",
    features: ["Montée de version majeure", "Audit de sécurité", "Refonte de tests", "Sans engagement"],
    cta: "D\xE9crire mon besoin",
    note: "Devis sous 48 h"
  }))));
}
function Footer() {
  const {
    Badge
  } = window.ArsheoDesignSystem_8085c4;
  const cols = [{
    h: "Produit",
    items: ["Méthode", "Ce qu'on dépile", "Souveraineté", "Tarifs"]
  }, {
    h: "Entreprise",
    items: ["À propos", "Sérénité", "Carrières", "Contact"]
  }, {
    h: "Légal",
    items: ["RGPD", "Mentions légales", "Sous-traitance", "Sécurité"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#2B231C",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 28px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40
    },
    className: "arsheo-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      filter: "saturate(1.05)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%, var(--coral), var(--terracotta) 70%)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: "-0.02em",
      color: "#FFF7F1"
    }
  }, "Arsheo"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "rgba(251,246,238,.72)",
      margin: "18px 0 18px",
      maxWidth: "30ch"
    }
  }, "Le service g\xE9r\xE9 qui d\xE9pile le backlog technique de vos \xE9quipes. Sereinement."), /*#__PURE__*/React.createElement(Badge, {
    variant: "eu"
  }, "\uD83C\uDDEA\uD83C\uDDFA H\xE9berg\xE9 en UE")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--honey)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "rgba(251,246,238,.78)",
      textDecoration: "none"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(251,246,238,.14)",
      marginTop: 44,
      paddingTop: 22,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(251,246,238,.55)",
      letterSpacing: "0.04em"
    }
  }, "\xA9 2026 Arsheo \u2014 On s'en occupe."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: 22,
      color: "var(--honey)"
    }
  }, "\xE0 votre rythme"))));
}
window.ArsheoPricingSection = PricingSection;
window.ArsheoFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sovereignty.jsx
try { (() => {
/* Arsheo marketing — Section souveraineté EU (le seul froid) */
const EU_POINTS = [{
  t: "Hébergement en UE",
  d: "Vos données et votre code restent sur des infrastructures européennes. Toujours."
}, {
  t: "RGPD by default",
  d: "Conformité intégrée, pas en option. Sous-traitance documentée, DPA fourni."
}, {
  t: "Souveraineté opérationnelle",
  d: "Pas de Cloud Act, pas de transfert hors-UE. La sérénité côté juridique aussi."
}];
function Sovereignty() {
  const {
    Badge,
    GlassPanel
  } = window.ArsheoDesignSystem_8085c4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(40% 60% at 18% 30%, rgba(199,93,58,.20), transparent 60%)," + "radial-gradient(45% 65% at 84% 72%, rgba(233,162,59,.22), transparent 62%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "var(--section-y) 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "arsheo-eu-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "eu"
  }, "\uD83C\uDDEA\uD83C\uDDFA Souverainet\xE9")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 1.3rem + 2vw, 2.9rem)",
      lineHeight: 1.1,
      color: "var(--ink)",
      margin: "0 0 18px"
    }
  }, "H\xE9berg\xE9 en UE.", /*#__PURE__*/React.createElement("br", null), "RGPD ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--eu-ink)"
    }
  }, "by default"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.18rem",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "36ch"
    }
  }, "Le seul moment o\xF9 l'on sort le bleu : la souverainet\xE9 de vos donn\xE9es. Pos\xE9ment, mais sans compromis.")), /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "30px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, EU_POINTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: 11,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--eu-bg)",
      color: "var(--eu-ink)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--ink)",
      marginBottom: 3
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--ink-soft)"
    }
  }, p.d)))))))));
}
window.ArsheoSovereignty = Sovereignty;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sovereignty.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BacklogMelt = __ds_scope.BacklogMelt;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.PricingCard = __ds_scope.PricingCard;

})();
