# Décisions et écarts par rapport au cahier des charges « authentification »

## Version de test : authentification simulée (stub), sans base de données (2026-11-06)

En attendant Better Auth et PostgreSQL, l'application fonctionne entièrement en local :

- **Stub d'authentification** (`src/lib/auth-stub/`) : comptes, jetons et session dans le localStorage du navigateur. Il reproduit les parcours prévus (lien magique 15 min à usage unique, confirmation d'adresse, mot de passe oublié, limites de demandes, messages qui ne révèlent pas si une adresse existe). **Aucune sécurité réelle** : tout est modifiable dans le navigateur. Mots de passe stockés sous forme d'empreinte PBKDF2, jamais en clair.
- **Point de bascule unique** : les pages n'importent que `src/lib/auth-client.ts`, qui expose les mêmes noms de méthodes que le client Better Auth (`signIn.email`, `signIn.magicLink`, `signUp.email`, `useSession`, `requestPasswordReset`…) et la même forme de réponse `{ data, error }`. Pour passer à Better Auth, remplacer ce fichier, `src/proxy.ts` (`getSessionCookie`) et le contrôle de `/api/niveaux` (`auth.api.getSession`).
- **E-mails** : remplacés par une « Boîte e-mail de test » affichée dans la page (et dans la console du navigateur).
- **Données par compte** : le store zustand enregistre sous `aide-ia:<id utilisateur>`. Les données saisies avant l'arrivée des comptes (clé `aide-ia`) sont reprises sans question par le premier compte qui se connecte, au lieu du bandeau d'import prévu à l'étape 7.
- **Organisation** : une organisation par compte (pas de plugin `organization` ni d'invitations dans le stub).
- **`/api/niveaux`** : refuse sans cookie de session (401) ; quota en mémoire du serveur (`QUOTA_GENERATIONS_JOUR`, 10 par défaut, et 10 s entre deux générations), remis à zéro au redémarrage. Toute génération lancée compte, réussie ou non.
- **Modèle** : Claude Haiku 5.5 pour toute la version de test (`MODELE` dans `src/lib/ia/generer-niveaux.ts`), à repasser sur Opus 5.5 ensuite.
- **`export const runtime = "nodejs"`** non ajouté : Next 16 le refuse avec `cacheComponents`, et Node.js est de toute façon le moteur par défaut des routes.
- Les fichiers de l'étape 1 (`src/lib/db/`, `drizzle.config.ts`, `docker-compose.dev.yml`) restent en place mais ne sont pas utilisés.

## Connexion par mot de passe en plus du lien magique

Le cahier des charges prévoyait uniquement le lien magique. À la demande du porteur du projet, la connexion par e-mail et mot de passe est ajoutée, en plus du lien magique :

- `emailAndPassword` activé, vérification de l'e-mail obligatoire avant la première connexion, 10 caractères minimum ;
- pages `/inscription`, `/mot-de-passe-oublie`, `/reinitialiser-mot-de-passe` ; lien « Pas encore de compte ? Créer un compte » sur `/connexion` ;
- `/compte` permet de définir ou de changer son mot de passe (compte créé par lien magique) ;
- limites : 5 tentatives de connexion et 3 demandes de réinitialisation par 10 minutes ;
- les messages ne révèlent jamais si une adresse a déjà un compte.

## Étape 1 : schéma Better Auth généré à l'étape 3

`npx @better-auth/cli generate` lit la configuration `src/lib/auth.ts` (plugins compris) pour produire `auth-schema.ts`. Cette configuration n'existe qu'à l'étape 3 : le schéma est donc généré à ce moment-là, et la première migration est créée une fois les tables Better Auth et métier en place.

## Migrations exécutées par Node sans outil supplémentaire

`npm run db:migrate` lance `node src/lib/db/migrer.mts` : Node (version 22.18 ou plus) exécute directement le TypeScript. Ni `drizzle-kit` ni `tsx` (dépendances de développement) ne sont nécessaires en production. Le fichier n'importe donc que des paquets, sans alias `@/`.
