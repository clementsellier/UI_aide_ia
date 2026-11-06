# Décisions et écarts par rapport au cahier des charges « authentification »

## Version de test : authentification simulée (stub), sans base de données (2026-11-06)

En attendant Better Auth et la base D1, l'application fonctionne entièrement en local :

- **Stub d'authentification** (`src/lib/auth-stub/`) : comptes, jetons et session dans le localStorage du navigateur. Il reproduit les parcours prévus (lien magique 15 min à usage unique, confirmation d'adresse, mot de passe oublié, limites de demandes, messages qui ne révèlent pas si une adresse existe). **Aucune sécurité réelle** : tout est modifiable dans le navigateur. Mots de passe stockés sous forme d'empreinte PBKDF2, jamais en clair.
- **Point de bascule unique** : les pages n'importent que `src/lib/auth-client.ts`, qui expose les mêmes noms de méthodes que le client Better Auth (`signIn.email`, `signIn.magicLink`, `signUp.email`, `useSession`, `requestPasswordReset`…) et la même forme de réponse `{ data, error }`. Pour passer à Better Auth, remplacer ce fichier, `src/proxy.ts` (`getSessionCookie`) et le contrôle de `/api/niveaux` (`auth.api.getSession`).
- **E-mails** : remplacés par une « Boîte e-mail de test » affichée dans la page (et dans la console du navigateur).
- **Données par compte** : le store zustand enregistre sous `aide-ia:<id utilisateur>`. Les données saisies avant l'arrivée des comptes (clé `aide-ia`) sont reprises sans question par le premier compte qui se connecte, au lieu du bandeau d'import prévu à l'étape 7.
- **Organisation** : une organisation par compte (pas de plugin `organization` ni d'invitations dans le stub).
- **`/api/niveaux`** : refuse sans cookie de session (401) ; quota en mémoire du serveur (`QUOTA_GENERATIONS_JOUR`, 10 par défaut, et 10 s entre deux générations), remis à zéro au redémarrage. Toute génération lancée compte, réussie ou non.
- **Modèle** : Claude Haiku 5.5 pour toute la version de test (`MODELE` dans `src/lib/ia/generer-niveaux.ts`), à repasser sur Opus 5.5 ensuite.
- **`export const runtime = "nodejs"`** non ajouté : Next 16 le refuse avec `cacheComponents`, et Node.js est de toute façon le moteur par défaut des routes.
- Le quota en mémoire ne tient pas sur Cloudflare (plusieurs instances, redémarrages fréquents) : si cette version est mise en ligne, la protéger par Cloudflare Access et fixer une limite de dépenses sur la clé Anthropic. Le quota définitif sera calculé dans D1.

## Hébergement : Cloudflare Workers (offre payante à 5 $/mois) et base D1 (2026-11-06)

Remplace PostgreSQL et l'idée d'un serveur Node classique.

- **Next.js sur Workers** via l'adaptateur OpenNext (`@opennextjs/cloudflare`), configuration dans `wrangler.jsonc` et `open-next.config.ts`. Next mis à jour de 16.4.2 à 16.4.5 (version minimale exigée par l'adaptateur).
- **Cache** : `static-assets-incremental-cache` (pages pré-rendues servies depuis les fichiers statiques). Aucune revalidation dans l'application, donc ni R2 ni KV. Si un jour des pages sont revalidées, passer au cache R2.
- **Base** : Cloudflare D1 (SQLite), liaison `DB`. `src/lib/db/index.ts` expose `obtenirDb()`, créé à chaque requête (la liaison n'existe que pendant une requête) : Better Auth suivra le même modèle (`obtenirAuth()`), avec `drizzleAdapter(db, { provider: "sqlite" })`.
- **Migrations** : générées par `drizzle-kit generate` (dialecte `sqlite`) dans `drizzle/`, appliquées par Wrangler (`npm run db:migrate:local` / `db:migrate:remote`). Le script `migrer.mts` et `docker-compose.dev.yml` sont supprimés, ainsi que `pg`.
- **À prévoir dans les tables (étape 2)** : identifiants en texte (pas de `uuid`), énumérations en texte validées par zod, dates en entiers `{ mode: "timestamp" }`, booléens en entiers. Pas de transactions interactives sur D1 : l'import des données locales utilisera `db.batch()` (tout ou rien).
- **E-mails** : nodemailer (SMTP) retiré, peu fiable sur Workers. L'envoi passera par l'API HTTP de Brevo (`fetch`).
- **Secrets** : `ANTHROPIC_API_KEY` via `wrangler secret put` en production, `.dev.vars` pour `npm run preview`, `.env.local` pour `npm run dev`. `QUOTA_GENERATIONS_JOUR` est une variable de `wrangler.jsonc`.
- **Types** : `cloudflare-env.d.ts` généré par `npm run cf-typegen` (à relancer après chaque modification de `wrangler.jsonc`) ; il ne contient que des noms de variables, aucune valeur.
- **Validation « instant navigation »** de Next limitée aux pages qui exportent `instant` (`experimental.instantInsights.validationLevel: "manual-warning"`) : les pages internes, affichées après lecture de la session dans le navigateur, étaient signalées à tort en développement.
- **Build sous Windows** : `opennextjs-cloudflare build` crée des liens symboliques ; il faut activer le Mode développeur de Windows (ou construire sous WSL, ou laisser Cloudflare construire depuis GitHub avec Workers Builds).

## Connexion par mot de passe en plus du lien magique

Le cahier des charges prévoyait uniquement le lien magique. À la demande du porteur du projet, la connexion par e-mail et mot de passe est ajoutée, en plus du lien magique :

- `emailAndPassword` activé, vérification de l'e-mail obligatoire avant la première connexion, 10 caractères minimum ;
- pages `/inscription`, `/mot-de-passe-oublie`, `/reinitialiser-mot-de-passe` ; lien « Pas encore de compte ? Créer un compte » sur `/connexion` ;
- `/compte` permet de définir ou de changer son mot de passe (compte créé par lien magique) ;
- limites : 5 tentatives de connexion et 3 demandes de réinitialisation par 10 minutes ;
- les messages ne révèlent jamais si une adresse a déjà un compte.

## Schéma Better Auth généré à l'étape 3

`npx @better-auth/cli generate` lit la configuration `src/lib/auth.ts` (plugins compris) pour produire `auth-schema.ts`. Cette configuration n'existe qu'à l'étape 3 : le schéma est donc généré à ce moment-là, et la première migration est créée une fois les tables Better Auth et métier en place.
