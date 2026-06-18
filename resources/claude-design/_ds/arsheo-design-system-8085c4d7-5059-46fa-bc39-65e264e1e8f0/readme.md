# Arsheo — Design System

> **« Le calme de l'artisan »** — Le design system de marque pour Arsheo, le service géré qui dépile le backlog technique des équipes d'ingénierie.

Thème clair chaud uniquement. L'anti-outil-US-froid : là où Sentry / Datadog crient « INCIDENT ! » en rouge néon sur fond noir, Arsheo dit calmement « on s'en occupe » sur du crème chaud. Confiance tranquille, craft visible, retenue = luxe.

---

## 1. Le produit

**Arsheo** est un service géré (abonnement mensuel) qui dépile le backlog technique des équipes d'ingénierie — **bugs non-urgents, dette technique & montées de version, failles de sécurité applicative, tests à maintenir** — pour qu'elles restent concentrées sur leur roadmap. Hébergé en UE (RGPD by default), serein : zéro pompier, zéro astreinte.

**Acheteur :** CTO / VP Engineering / Head of Platform de scale-ups et boîtes tech européennes.

### Sources d'entrée
- **`aaudelin/arsheo-website`** — https://github.com/aaudelin/arsheo-website — le site Next.js d'origine (positionnement consulting ERP/CRM/automatisation). Composants shadcn/ui, copy produit en français, structure hero → benefits → méthodologie → services → pricing → contact. Explorez-le pour le ton et la structure marketing.
- **`aaudelin/BOS-self-healing`** — https://github.com/aaudelin/BOS-self-healing — Business Operating System orienté self-healing code (recherche, principes business, knowledge). Contexte sur le positionnement « code qui se répare tout seul » / maintenance par agents.
- **`aaudelin/self-healing-code`** & **`aaudelin/ai-ops-research`** — contexte marché supplémentaire (pipelines, veille).

> Le présent design system **réinterprète** ces sources sous la nouvelle direction artistique « calme de l'artisan » : il ne copie pas le visuel shadcn d'origine, il le remplace par un système chaud, éditorial et propriétaire.

---

## 2. Content fundamentals (la voix)

**Persona :** un associé technique serein qui a déjà tout vu. Chaud, direct, concret.

- **Langue :** français. Vouvoiement de l'équipe cliente (« vos équipes », « votre roadmap »), « on » pour Arsheo (« on dépile », « on s'en occupe »). Jamais « je ».
- **Verbes calmes et concrets :** « on dépile », « ça fond », « à votre rythme », « on s'en occupe », « on bouche les failles ».
- **Zéro hype, zéro jargon corporate, zéro point d'exclamation anxiogène.** Pas de « révolutionnaire », « disruptif », « game-changer ».
- **Casse :** phrases en casse normale. Les **labels mono** sont en MAJUSCULES avec tracking (`.14em`). Titres en casse de phrase, pas de Title Case.
- **Les erreurs se disent calmement** — en terracotta, jamais en rouge alarme. « On ne reconnaît pas cet email. » plutôt que « ERREUR ».
- **Annotations manuscrites (Caveat) :** une touche d'humain, l'aparté. « zéro pompier, zéro astreinte », « à votre rythme », « promis ». **1 à 2 par écran maximum.**
- **Emoji :** uniquement le drapeau **🇪🇺** sur les signaux de souveraineté. Aucun autre emoji.

**Exemples de copy maison :**
- Titre hero : « On dépile votre *backlog technique*. Vous gardez la roadmap. »
- Sous-titre : « Bugs non-urgents, dette technique, montées de version, failles de sécurité, tests à maintenir. On s'en occupe — calmement, à votre rythme. »
- Pricing : « Un prix clair. Pause ou annulation quand vous voulez. »
- EU : « Hébergé en UE. RGPD by default. »

---

## 3. Visual foundations

### Couleurs
Thème **clair chaud uniquement**. Palette complète et usages dans `tokens/colors.css`.
- **Surfaces :** crème `#FBF6EE` (fond) · sable `#F4EADB` (panneaux) · carte `#FFFDF9` · bordures `#EADBC6`.
- **Encre :** `#26201A` (texte, **jamais #000**) · secondaire `#6E6052` · faint `#9A8B79`.
- **Primaire :** terracotta `#C75D3A` (hover `#A8472A`).
- **Secondaire / highlight :** miel `#E9A23B` · corail `#E27053`.
- **Succès :** olive `#7C9A55` (coches). **Pas de rouge alarme** — les erreurs se disent en terracotta.
- **Le seul froid :** bleu encre `#34556E` sur `#E3EAEF`, **réservé EXCLUSIVEMENT** aux signaux EU / RGPD / sécurité, à dose homéopathique.

### Typographie
- **Display / titres :** **Fraunces** 600–700, `letter-spacing: -.02em`. Chaud, éditorial, « craft ».
- **Texte / UI :** **Hanken Grotesk** 400 / 500 / 600.
- **Données / code / labels :** **JetBrains Mono** — labels en MAJUSCULES, `letter-spacing: .14em`.
- **Annotations manuscrites :** **Caveat** — l'épice, 1–2 par écran max.
- Toutes via Google Fonts (`tokens/fonts.css`). Échelle dans `tokens/typography.css`.

### Espacement & formes
- Échelle base-4 douce (`tokens/spacing.css`). **Beaucoup d'air** : `--section-y` = `clamp(64px, 8vw, 144px)`.
- **Rayons :** 14px boutons · 18px cartes · 26px grands panneaux · 999 pills.
- Largeur de lecture confortable `--measure: 66ch`.

### Ombres, fonds & verre
- **Ombres chaudes et douces**, teinte brune — jamais grises ni dures. Ex. `0 20px 50px -24px rgba(90,55,25,.5)`. Voir `tokens/effects.css`.
- **Fonds :** crème uni + **halos radiaux chauds très subtils** (terracotta/miel) en haut de page. Pas d'images stock, pas de gradients criards.
- **Verre dépoli (signature) :** `rgba(255,250,243,.66)` + `backdrop-filter: blur(16px) saturate(135%)` + bordure claire + inset highlight. **~66 %** d'opacité (jamais < 55 %). À n'utiliser QUE posé sur un fond coloré chaud (halos). Composant `GlassPanel`.

### Accents dessinés à la main (signature)
Soulignés SVG terracotta sous un mot clé, flèches manuscrites, cercles autour d'un chiffre, coches dessinées, notes en Caveat. **Dosage strict : 1–2 par écran maximum.** Voir la carte « Accents dessinés à la main ».

### Animation & états
- **Easing calme** `cubic-bezier(.22,.61,.36,1)`, durées 140–380 ms. Jamais de bounce nerveux ni de boucle décorative infinie.
- **Hover :** boutons → teinte plus sombre + ombre douce ; cartes → lift de −3px + ombre renforcée.
- **Press :** enfoncement de 1px (`translateY(1px)`).
- **Focus :** anneau terracotta `0 0 0 3px rgba(199,93,58,.30)`.

### Cartes
Surface `#FFFDF9`, rayon 18, bordure `#EADBC6`, ombre brune douce. Optionnellement une pastille d'icône terracotta en haut.

---

## 4. Iconography

- **Système :** icônes au trait, style **Lucide** (stroke `2`, `linecap`/`linejoin: round`) — cohérent avec le site d'origine qui utilise `lucide-react`. Inlinées en SVG `currentColor` pour hériter de la couleur du contexte (terracotta, bleu encre EU, etc.).
- **Pastilles d'icône :** carré arrondi (rayon ~12px) en `terracotta-tint` avec icône terracotta, ou `eu-bg` + bleu encre pour les signaux souveraineté.
- **Accents dessinés à la main :** SVG sur mesure (soulignés, flèches, cercles, coches) — la signature, à doser (1–2/écran).
- **Emoji :** uniquement **🇪🇺** sur les pills EU. Aucun autre.
- **Logo / wordmark :** « Arsheo » en Fraunces 600 précédé d'une pastille ronde terracotta→corail. Composant `Wordmark` (dans `components/navbar/`).

> Pour de la production, charger Lucide depuis un CDN ou `lucide-react`. Aucune police d'icône n'est embarquée — les SVG sont inlinés dans les composants.

---

## 5. Index / manifeste

### Fondations (`tokens/`)
- `styles.css` (racine) — point d'entrée global, **uniquement des `@import`**.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`.

### Composants (`components/`) — `window.ArsheoDesignSystem_8085c4`
| Composant | Dossier | Rôle |
|---|---|---|
| `Button` | `buttons/` | primary terracotta · secondary miel · ghost · link |
| `Badge` | `badges/` | statuts + pill EU 🇪🇺 (seul froid) |
| `Card` | `cards/` | carte feature chaude, lift au survol |
| `GlassPanel` | `glass/` | verre dépoli signature |
| `Input` | `forms/` | champ : label mono, focus terracotta, erreur calme |
| `Navbar` + `Wordmark` | `navbar/` | barre éditoriale + logo |
| `PricingCard` | `pricing/` | abonnement mensuel, coches dessinées |
| `BacklogMelt` | `backlog/` | motif signature « le backlog qui fond » |

### Cartes du Design System (`guidelines/`)
Colors (6), Type (5), Spacing (3), Brand (3 : verre, accents dessinés, do/don't). Plus une carte par composant.

### UI kit (`ui_kits/marketing/`)
Landing Arsheo complète (hero, features, souveraineté EU, pricing, footer). Voir son `README.md`.

### Autres
- `SKILL.md` — rend ce système utilisable comme Agent Skill (Claude Code).

---

## 6. Garde-fous (à bannir absolument)
Dégradés violet/indigo · dark mode néon · glassmorphism généralisé · blobs 3D flottants · police Inter générique · illustrations stock corporate · ton hype/alarmiste · rouge alarme · #000 pur · plus de 2 accents manuscrits par écran.
