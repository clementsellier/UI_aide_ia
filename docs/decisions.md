# Décisions et écarts par rapport au cahier des charges « authentification »

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
