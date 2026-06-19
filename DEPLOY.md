# Déploiement — Site Arsheo

Le site est hébergé sur **Clever Cloud** (app `arsheo-website`, ID `app_f914f2ee-c71a-4d46-8b5f-3b9353bbe10b`).

Ce repo a 3 remotes :

| Remote | Rôle |
|---|---|
| `origin` | GitHub (`aaudelin/arsheo-website`) — **source de vérité** |
| `clever` / `arsheo-website` | Endpoint git Clever Cloud — **déploiement** |

> ⚠️ Ce repo est un **submodule** de BOS (`projects/arsheo/Website`). Voir [« Mise à jour du pointeur BOS »](#mise-à-jour-du-pointeur-bos) en bas.

---

## Déployer (workflow recommandé)

Depuis le dossier du site :

```bash
# 1. Committer + pousser sur GitHub (source de vérité)
git add -A
git commit -m "..."
git push origin main

# 2. Déployer sur Clever Cloud
clever deploy
```

`clever deploy` lit `.clever.json` (déjà présent dans le repo, app liée via `clever link`) et pousse l'état courant de `main` vers le déploiement Clever. C'est l'équivalent moderne de l'ancien `git push clever main:master` — **mais en plus sûr** : il ne touche pas au tracking de ta branche.

### Flags utiles
- `clever deploy -f` — force le push (si l'historique Clever a divergé)
- `clever deploy -q` — sortie silencieuse
- `clever logs` — suivre les logs après déploiement
- `clever status` — état de l'app

---

## Ancien workflow (git push manuel)

Toujours valable si la CLI Clever n'est pas dispo :

```bash
git push clever main:master
```

**Refspec `main:master` OBLIGATOIRE** (le repo travaille sur `main`, Clever déploie depuis `master`).

🚫 **NE JAMAIS faire** `git push clever main` tout court, ni `git push -u clever ...`, ni `git pull clever` → ça dévie le tracking de `main` vers Clever et casse `git submodule update --remote`. La branche `main` doit **toujours** suivre `origin/main`.

Vérif : `git branch -vv` doit afficher `[origin/main]`.

`clever deploy` n'a PAS ce problème (il ne définit pas d'upstream), c'est pourquoi il est recommandé.

---

## Mise à jour du pointeur BOS

Le site est un submodule : BOS ne stocke qu'un pointeur de commit. Après chaque déploiement, faire avancer le pointeur côté BOS :

```bash
# depuis la racine BOS
git add projects/arsheo/Website
git commit -m "Update Arsheo website pointer"
```

**Au clone :** `git clone --recurse-submodules`.
