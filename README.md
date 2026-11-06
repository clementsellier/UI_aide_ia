# Aide IA · Cas d'usage

Interface web (surcouche de l'API Claude) qui aide un dirigeant à décrire son entreprise et ses cas d'usage, puis lui propose trois niveaux d'utilisation de l'IA : conversation simple, conversation enrichie (compétences et documents), agent connecté aux outils.

Phase actuelle : visuels uniquement (écrans 1 à 5 de la maquette Figma). Le backend Claude viendra ensuite.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (composants dans `src/components/ui`)
- **Zustand** : état et sauvegarde locale (`src/lib/store.ts`)
- **React Hook Form + Zod** : formulaires
- **ExcelJS** : export « Exporter en Excel » au format de la cartographie

## Démarrer

Prérequis : Node 22.18 ou plus, et Docker (ou un PostgreSQL 16 installé localement).

```bash
npm install
cp .env.example .env.local          # puis renseigner les valeurs
docker compose -f docker-compose.dev.yml up -d   # PostgreSQL sur le port 5432
npm run db:migrate
npm run dev
```

Puis ouvrir http://localhost:3000.

## Base de données

PostgreSQL + Drizzle ORM. Code dans `src/lib/db/`, migrations SQL dans `drizzle/`.

| Commande | Rôle |
| --- | --- |
| `npm run db:generate` | crée une migration après un changement de schéma |
| `npm run db:migrate` | applique les migrations (sans drizzle-kit, utilisable en production) |
| `npm run db:studio` | explore la base dans le navigateur |

Arrêter la base : `docker compose -f docker-compose.dev.yml down` (ajouter `-v` pour effacer ses données).

## Organisation

```
src/
  app/            pages (App Router) et styles globaux
  components/ui/  composants shadcn/ui
  lib/types.ts    modèle de données (organisation, contexte, cas d'usage, niveaux)
  lib/store.ts    état de l'application, persistant dans le navigateur
```

## Charte

Couleurs définies dans `src/app/globals.css`, utilisables en classes Tailwind : `bg-coral`, `bg-teal`, `bg-urgent`, `bg-important`, `bg-souhaitable`, `bg-inactive`, `bg-card`, `border-border`… Le thème sombre est préparé (classe `.dark`) et sera finalisé plus tard.

## Variables d'environnement

Copier `.env.example` en `.env.local`. La clé `ANTHROPIC_API_KEY` ne servira que côté serveur.
