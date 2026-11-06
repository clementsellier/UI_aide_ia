# Aide IA · Cas d'usage

Interface web (surcouche de l'API Claude) qui aide un dirigeant à décrire son entreprise et ses cas d'usage, puis lui propose trois niveaux d'utilisation de l'IA : conversation simple, conversation enrichie (compétences et documents), agent connecté aux outils.

Phase actuelle : **version de test**. L'application est complète mais tourne en local : comptes et données sont enregistrés dans le navigateur, la connexion est simulée (voir ci-dessous) et l'IA utilise Claude Haiku 5.5.

## Connexion (version de test)

- Création de compte avec mot de passe (adresse à confirmer), connexion par mot de passe ou par lien reçu par e-mail, mot de passe oublié, page « Mon compte » (export et suppression des données).
- Aucun e-mail n'est envoyé : les messages apparaissent dans la **Boîte e-mail de test**, en bas à gauche de l'écran.
- Simulation sans sécurité réelle, prévue pour être remplacée par Better Auth : voir `docs/decisions.md`.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (composants dans `src/components/ui`)
- **Zustand** : état et sauvegarde locale (`src/lib/store.ts`)
- **React Hook Form + Zod** : formulaires
- **ExcelJS** : export « Exporter en Excel » au format de la cartographie

## Démarrer

Prérequis : Node 22.18 ou plus.

```bash
npm install
cp .env.example .env.local          # puis renseigner ANTHROPIC_API_KEY
cp .env.local .dev.vars             # pour npm run preview (moteur Cloudflare)
npm run dev
```

Puis ouvrir http://localhost:3000.

## Cloudflare (hébergement prévu)

L'application est prévue pour Cloudflare Workers (adaptateur OpenNext) avec une base D1 (SQLite), pas encore utilisée par la version de test.

| Commande | Rôle |
| --- | --- |
| `npm run dev` | développement (Next.js), avec une base D1 locale dans `.wrangler/` |
| `npm run preview` | construit pour Cloudflare et lance l'app dans le moteur Workers en local (http://localhost:8787) |
| `npm run deploy` | construit et déploie sur Cloudflare |
| `npm run cf-typegen` | régénère `cloudflare-env.d.ts` après une modification de `wrangler.jsonc` |
| `npm run db:generate` | crée une migration SQL après un changement de schéma Drizzle |
| `npm run db:migrate:local` / `db:migrate:remote` | applique les migrations sur la base locale / en ligne |

Pour `npm run preview`, copier `.env.local` en `.dev.vars`. Sous Windows, le build Cloudflare exige le **Mode développeur** (Paramètres › Système › Espace développeurs).

Premier déploiement :

```bash
npx wrangler login
npx wrangler d1 create aide-ia                 # copier l'identifiant dans wrangler.jsonc (database_id)
npx wrangler secret put ANTHROPIC_API_KEY
npm run deploy
```

## Organisation

```
src/
  app/            pages publiques (/, /connexion, /inscription…) et styles globaux
  app/(app)/      pages réservées aux personnes connectées (en-tête + garde de session)
  proxy.ts        renvoi vers /connexion sans cookie de session
  components/ui/  composants shadcn/ui
  components/auth/ formulaires de connexion, en-tête, garde de session, boîte e-mail de test
  lib/auth-client.ts  point d'entrée de l'authentification (stub aujourd'hui, Better Auth demain)
  lib/auth-stub/  authentification simulée de la version de test
  lib/types.ts    modèle de données (organisation, contexte, cas d'usage, niveaux)
  lib/store.ts    état de l'application, enregistré dans le navigateur par compte
```

## Charte

Couleurs définies dans `src/app/globals.css`, utilisables en classes Tailwind : `bg-coral`, `bg-teal`, `bg-urgent`, `bg-important`, `bg-souhaitable`, `bg-inactive`, `bg-card`, `border-border`… Le thème sombre est préparé (classe `.dark`) et sera finalisé plus tard.

## Variables d'environnement

Copier `.env.example` en `.env.local`. La clé `ANTHROPIC_API_KEY` ne servira que côté serveur.
