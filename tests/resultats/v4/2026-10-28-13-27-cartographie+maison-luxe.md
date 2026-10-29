# Prompt v4 · 28/10/2026 14:27:08

- Version : **v4** — Reprend la v3 et demande de décrire d'abord ce qui devient possible avec l'IA, puis la liste des actions. 4 exemples (ajout de « Préparer un rendez-vous client »).
- Modèle : claude-opus-5-5 · effort medium
- Jeux : cartographie, maison-luxe

## Synthèse de consommation

- Durée moyenne : 14 s par cas
- Tokens moyens par cas : entrée 325, cache écrit 861, cache lu 3159, sortie 1524 (dont réflexion 943)
- Coût estimé : ~0.514 $ au total, ~0.0367 $ par cas (tarifs indicatifs)

## Faire des devis

`cartographie / devis` · 13 s

Tokens : entrée 288 · cache écrit 4020 · cache lu 0 · sortie 1310 (dont réflexion 738) · ~0.0475 $

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (332 caractères)

Je colle la demande du client, je joins mon fichier Excel de chiffrage et un ancien devis du même type, puis je demande à l'IA de calculer le chiffrage (quantités, prix unitaires, total HT et TTC) et de rédiger le descriptif du devis à recopier dans mon logiciel de devis. Je vérifie chaque ligne et chaque prix avant de l'utiliser.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (473 caractères)

J'ai enregistré dans la solution IA :
- mon fichier Excel de chiffrage avec la grille de prix et les marges minimales
- mes devis types par catégorie de prestation
- les remises autorisées, la durée de validité et les conditions de paiement
- les mentions obligatoires et nos conditions générales de vente
L'IA choisit le bon modèle, chiffre toujours de la même façon, et me signale une marge trop faible, une remise hors règle ou une information manquante dans la demande.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (634 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de chiffrage, au logiciel de devis et au CRM :
- il repère les demandes de devis reçues par email et note les informations manquantes
- il envoie automatiquement au client un accusé de réception, avec une demande de précisions si besoin
- il fait le chiffrage dans Excel et crée le brouillon du devis dans le logiciel à partir du bon modèle
- il me le soumet : le devis part seulement après ma validation
- il relance automatiquement le client 7 jours après l'envoi, sauf pour les gros devis où il me prépare la relance à valider
- il met à jour le suivi des devis dans le CRM

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 13 s

Tokens : entrée 241 · cache écrit 4020 · cache lu 0 · sortie 1462 (dont réflexion 903) · ~0.0503 $

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (283 caractères)

Je joins mon fichier Excel des affaires en cours, et je demande à l'IA de repérer les affaires sans nouvelles depuis plus de 15 jours. Je lui demande ensuite de rédiger pour chacune un email de relance personnalisé, selon l'étape de l'affaire (devis envoyé, en attente de décision…).

### Niveau 2 · Compétences

**Obtenu** (470 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des affaires (client, montant, étape, date du dernier contact)
- les règles de relance : délai selon l'étape, nombre maximum de relances
- des modèles d'emails de relance (1re, 2e, dernière relance)
- le ton à employer et notre signature
L'IA rédige des relances homogènes adaptées à l'étape de chaque affaire. Elle me signale les affaires oubliées ou à forts enjeux qui méritent plutôt un appel.

### Niveau 3 · Agent

**Obtenu** (625 caractères)

L'agent IA est connecté au fichier Excel des affaires, à la messagerie et à l'agenda :
- chaque matin, il repère les affaires dont la date de relance est atteinte
- pour les affaires que j'ai marquées « relance auto », il envoie automatiquement un email de relance simple
- pour les devis importants ou les négociations de prix, il prépare un brouillon, qui part seulement après ma validation
- il détecte les réponses des clients et arrête alors les relances
- il met à jour le fichier Excel (date, nombre de relances, statut)
- il crée un rappel dans mon agenda pour appeler les clients restés sans réponse après 3 relances

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 15 s

Tokens : entrée 336 · cache écrit 4020 · cache lu 0 · sortie 1568 (dont réflexion 983) · ~0.0528 $

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (298 caractères)

Je joins mon fichier Excel des paiements, ou je copie les lignes des affaires en retard, et je demande à l'IA de lister les acomptes et soldes échus non réglés. Pour chacun, elle rédige un email de relance courtois avec le nom du client, la référence de l'affaire, le montant et la date d'échéance.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (485 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des paiements (acompte, solde, échéances)
- nos conditions de paiement et pénalités de retard (CGV)
- trois modèles de relance : rappel courtois à J+7, relance ferme à J+21, mise en demeure à J+45
- les clients sensibles à ne pas relancer sans mon accord
L'IA choisit le bon niveau de relance, rédige des emails homogènes et signale les écarts (paiement partiel, affaire réglée dans le CRM mais pas dans Excel).

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (638 caractères)

L'agent IA est connecté au fichier Excel des paiements, à la messagerie, au CRM et à la banque :
- chaque matin, il rapproche les virements reçus sur le compte bancaire avec les échéances du fichier Excel et met à jour les paiements
- il repère les acomptes et soldes échus non réglés
- il envoie automatiquement le rappel courtois à J+7, puis la relance ferme à J+21
- il prépare la mise en demeure et les relances des clients importants, qui partent seulement après ma validation
- quand tout est réglé, il passe l'affaire en « affaire réglée » dans le CRM
- chaque lundi, il m'envoie la liste des retards et le montant total en attente

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 15 s

Tokens : entrée 323 · cache écrit 0 · cache lu 4020 · sortie 1596 (dont réflexion 1053) · ~0.0340 $

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (275 caractères)

Je copie l'email de demande de congés et je joins mon fichier Excel de suivi. Je demande à l'IA de vérifier si les dates se chevauchent avec d'autres absences, de me donner une recommandation (accepter, refuser ou proposer d'autres dates) et de rédiger la réponse au salarié.

### Niveau 2 · Compétences

**Obtenu** (476 caractères)

J'ai enregistré dans la solution IA :
- nos règles de congés : délai de prévenance, périodes de forte activité, nombre maximum d'absents par équipe
- les soldes de congés payés et de RTT de chaque salarié
- la structure de mon fichier Excel de suivi
- trois modèles de réponse : accord, refus motivé, proposition d'autres dates
L'IA applique toujours les mêmes règles et me donne une recommandation argumentée. Elle me signale les conflits de dates et les soldes insuffisants.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (592 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel des congés et à l'agenda partagé :
- il repère chaque email de demande de congés et envoie automatiquement au salarié un accusé de réception
- il vérifie le solde, les chevauchements avec les autres absences et nos règles
- il me transmet sa recommandation (accord, refus ou autres dates) avec un brouillon de réponse
- il envoie la réponse au salarié uniquement après ma validation
- il met à jour le fichier Excel et inscrit l'absence dans l'agenda partagé
- il me relance si une demande attend ma réponse depuis plus de trois jours

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 14 s

Tokens : entrée 317 · cache écrit 0 · cache lu 4020 · sortie 1454 (dont réflexion 859) · ~0.0312 $

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (343 caractères)

Je décris le poste (missions, compétences, salaire, lieu, type de contrat) et je demande à l'IA de rédiger l'annonce, puis une grille d'entretien avec des questions et des critères notés. Je colle ensuite chaque CV, sans le nom, la photo, l'âge ni l'adresse, et je lui demande de le comparer aux critères du poste. La décision reste la mienne.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (474 caractères)

J'ai enregistré dans la solution IA :
- la présentation de la société, nos valeurs et un modèle d'annonce
- les fiches de poste et les grilles de salaire
- les critères de sélection objectifs par poste, sans critère discriminatoire (âge, sexe, origine, situation familiale…)
- une grille d'entretien type avec une notation de 1 à 4
L'IA rédige des annonces conformes, analyse chaque CV avec la même grille, et me signale les mentions à risque ou les informations manquantes.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (640 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et à un dossier partagé de recrutement :
- il publie l'annonce sur notre site et les sites d'emploi, après mon accord
- il range chaque CV reçu et envoie automatiquement un accusé de réception
- il remplit un tableau de suivi avec la note de chaque candidat selon la grille, que je relis
- il envoie automatiquement les invitations aux candidats que j'ai retenus, sur mes créneaux libres
- il prépare la fiche d'entretien et reporte ensuite mes notes dans le tableau comparatif
- il prépare les réponses négatives, envoyées après ma validation
Le choix du candidat reste toujours le mien.

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 15 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 1663 (dont réflexion 1048) · ~0.0353 $

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (357 caractères)

Je décris à l'IA une réalisation récente : le client, son besoin, ce que nous avons fait et le résultat obtenu. Je joins une ou deux photos du projet et je lui demande de rédiger trois versions d'un post LinkedIn de 150 à 200 mots, avec une accroche et une question finale. Je lui demande aussi une liste de 12 idées de sujets pour les trois prochains mois.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (485 caractères)

J'ai enregistré dans la solution IA :
- notre présentation, nos offres et nos clients cibles
- nos réalisations récentes et les clients qui acceptent d'être cités
- le ton à adopter, des exemples de nos meilleurs posts et les formulations à éviter
- un calendrier éditorial : une semaine réalisation, une semaine conseil, une semaine coulisses
L'IA rédige des posts dans notre style, homogènes d'une semaine à l'autre, et me signale un client cité sans accord ou un chiffre à vérifier.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (659 caractères)

L'agent IA est connecté à la page LinkedIn de l'entreprise, au dossier partagé des projets, à la messagerie et au CRM :
- chaque lundi, il repère dans le dossier les projets terminés et les photos disponibles
- il rédige le post de la semaine selon le calendrier éditorial et me l'envoie par email
- après ma validation, il le publie automatiquement le mardi à 9 h
- il répond automatiquement aux simples remerciements en commentaire
- il me signale les messages de prospects et prépare une réponse, envoyée seulement après ma relecture
- il enregistre ces nouveaux contacts dans le CRM
- chaque mois, il me fait un bilan des posts qui ont le mieux fonctionné

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 15 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 1555 (dont réflexion 979) · ~0.0331 $

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (360 caractères)

Je joins les devis PDF reçus pour un même achat, et je demande à l'IA de les reprendre dans un seul tableau comparatif : prix HT unitaire et total, frais de port, délai de livraison, conditions de paiement et garantie. Je lui demande de signaler les informations absentes ou ambiguës, puis je vérifie les montants clés directement sur les PDF avant de décider.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (481 caractères)

J'ai enregistré dans la solution IA :
- notre grille de critères (prix HT, frais de port, délai, paiement, garantie)
- le poids de chaque critère et nos exigences minimales
- nos conditions attendues (délai de paiement, garantie minimale, pénalités de retard)
- les prix payés lors des derniers achats
L'IA remplit toujours le même tableau et classe les offres selon nos critères. Elle signale les écarts avec nos exigences et les prix anormaux, puis propose des points à négocier.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (658 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des achats et au fichier Excel de comparaison :
- il repère les devis reçus par email et les range dans le dossier de la consultation
- il extrait les données et met à jour le tableau Excel comparatif
- il relance automatiquement les fournisseurs qui n'ont pas répondu ou dont le devis est incomplet
- il me présente un classement avec ses recommandations et des arguments de négociation
- il prépare l'email de contre-proposition, qui part seulement après ma validation
- une fois mon choix fait, il prépare la commande et les réponses aux fournisseurs non retenus, qui partent après ma validation

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 14 s

Tokens : entrée 318 · cache écrit 0 · cache lu 4020 · sortie 1512 (dont réflexion 934) · ~0.0323 $

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (263 caractères)

Je joins les factures du mois (PDF reçus par email, photos des factures papier) et je demande à l'IA d'en extraire un tableau : fournisseur, date, numéro, montant HT, TVA, TTC et échéance. Je vérifie les montants avant de coller le tableau dans mon fichier Excel.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (436 caractères)

J'ai enregistré dans la solution IA :
- les colonnes de mon fichier Excel de suivi, dans l'ordre
- la liste de mes fournisseurs habituels et leur catégorie de dépense
- les taux de TVA et les contrôles à faire (HT + TVA = TTC, facture déjà saisie)
- le format demandé par mon expert-comptable
L'IA remplit toujours les mêmes colonnes et catégories, et me signale doublons, erreurs de calcul, mentions manquantes ou montants inhabituels.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (682 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures, au fichier Excel de suivi et à la banque :
- il repère les factures reçues par email ; les factures papier, je les scanne dans le dossier
- il lit chaque facture, la renomme (date_fournisseur_montant) et la classe par mois
- il ajoute la ligne dans le fichier Excel et la rapproche du paiement sur le relevé bancaire
- il me signale les doublons, les écarts et les factures à payer bientôt
- il demande automatiquement au fournisseur une facture manquante ou illisible, avec un message type
- en fin de mois, il prépare l'email à l'expert-comptable avec le fichier et les factures, envoyé après ma validation

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 14 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 1520 (dont réflexion 898) · ~0.0324 $

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (399 caractères)

Je joins le contrat en PDF, depuis une version professionnelle de l'assistant qui n'utilise pas mes données. Je précise si je suis client ou fournisseur et l'enjeu (montant, durée). Je demande à l'IA de lister les clauses à risque (responsabilité, pénalités, reconduction tacite, résiliation, paiement, juridiction) avec le risque, une reformulation à proposer, et si l'avis de l'avocat se justifie.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (494 caractères)

J'ai enregistré dans la solution IA :
- nos conditions générales de vente et d'achat
- nos positions de négociation : plafond de responsabilité, délais de paiement, pénalités acceptables, durée maximale
- une grille de risque par clause (vert, orange, rouge)
- les critères pour consulter l'avocat : montant, durée, exclusivité, droit étranger
L'IA produit toujours la même fiche d'analyse, compare le contrat à nos règles, signale chaque écart et me dit clairement si l'avocat doit intervenir.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (663 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats et à l'agenda :
- il repère les contrats reçus en pièce jointe et les range dans le dossier du client ou du fournisseur
- il produit la fiche d'analyse avec les clauses rouges et orange
- il prépare un email de contre-propositions à l'interlocuteur. Cet email part seulement après ma validation.
- si un critère avocat est atteint, il prépare l'email à l'avocat avec le contrat et les questions précises. Cet email part aussi après ma validation.
- il tient un registre des contrats signés et me rappelle les dates de préavis avant reconduction tacite
La décision de signer reste la mienne.

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 13 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 1326 (dont réflexion 736) · ~0.0286 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (339 caractères)

Je donne à l'IA le poste, le service et la date d'arrivée du nouveau salarié, et je lui demande une checklist d'accueil complète : avant l'arrivée, premier jour, première semaine, premier mois (DPAE, mutuelle, visite médicale, accès, matériel, documents à signer). Je lui demande aussi le planning du premier jour et un email de bienvenue.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (467 caractères)

J'ai enregistré dans la solution IA :
- notre checklist d'accueil type, avec qui fait quoi et quand
- la liste des accès et du matériel nécessaires par poste
- le livret d'accueil, le règlement intérieur et les consignes de sécurité à remettre
- un modèle d'email de bienvenue et de planning du premier jour
L'IA prépare pour chaque arrivée le même parcours adapté au poste, avec des échéances datées, et me signale les démarches obligatoires manquantes ou en retard.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (638 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au logiciel de paie et au dossier partagé RH :
- dès que je saisis une arrivée, il crée la checklist datée dans le dossier
- il envoie automatiquement les demandes d'accès et de matériel aux personnes concernées, et les relance si rien n'est confirmé à J-3
- il prépare la DPAE et le dossier administratif, envoyés seulement après ma validation
- il envoie au nouveau, après ma validation, l'email de bienvenue avec le planning et le livret
- il planifie les rendez-vous de la première semaine et le point de fin de période d'essai
- chaque vendredi, il me signale ce qui reste à faire

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 11 s

Tokens : entrée 401 · cache écrit 0 · cache lu 4020 · sortie 1237 (dont réflexion 682) · ~0.0271 $

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (303 caractères)

Je colle la fiche produit rédigée en italien et je joins deux ou trois fiches déjà publiées dont le style me plaît. Je demande à l'IA de l'adapter pour chaque pays (français, anglais, allemand…) au lieu de la traduire mot à mot, en gardant exactement les noms de lignes, matières, dimensions et coloris.

### Niveau 2 · Compétences

**Obtenu** (492 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale et le ton de la maison
- le glossaire multilingue des matières, coloris et savoir-faire, avec les noms de lignes à ne jamais traduire
- des fiches de référence validées par chaque pays
- les règles par marché : tailles, unités, mentions légales, termes à éviter
L'IA produit des fiches homogènes d'une collection à l'autre, garde les informations techniques exactes et signale les termes incertains ou les écarts avec l'italien.

### Niveau 3 · Agent

**Obtenu** (610 caractères)

L'agent IA est connecté au back-office du site e-commerce, au dossier partagé des collections et à la messagerie :
- dès qu'une fiche italienne est validée, il rédige les versions de chaque pays selon les règles enregistrées
- il les dépose dans le back-office en brouillon, non publiées
- il envoie automatiquement à chaque équipe locale un email avec les fiches à valider et les points signalés
- il intègre leurs corrections et complète le glossaire
- il relance automatiquement les équipes en retard avant la date de lancement
- la mise en ligne n'a lieu qu'après validation de l'équipe locale et la mienne

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 14 s

Tokens : entrée 390 · cache écrit 0 · cache lu 4020 · sortie 1542 (dont réflexion 1040) · ~0.0332 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (227 caractères)

Je joins le chapitre du classeur sur les matières (cuirs, toiles, finitions). Je demande à l'IA d'en tirer une fiche d'une page à garder en boutique, puis un quiz de 10 questions avec les réponses pour les nouveaux conseillers.

### Niveau 2 · Compétences

**Obtenu** (442 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation de 150 pages
- les fiches produits : matières, origine, entretien, savoir-faire
- les codes du service et les procédures boutique (retouches, réparations, retours)
- la consigne de répondre uniquement à partir de ces documents, en citant la page
Chaque conseiller obtient une réponse fiable et identique. L'IA propose des quiz par thème et signale quand une information manque.

### Niveau 3 · Agent

**Obtenu** (578 caractères)

L'agent IA est connecté au logiciel RH, à la messagerie interne et au dossier partagé des fiches produits :
- à l'arrivée d'un conseiller, il lui envoie automatiquement un message de bienvenue avec l'accès à l'assistant
- il répond aux questions des conseillers à partir des fiches produits à jour
- pendant 2 mois, il envoie automatiquement un quiz court chaque semaine et enregistre les résultats
- il signale les thèmes mal maîtrisés et me propose une remise à niveau, que je valide avant l'envoi
- il me transmet les questions restées sans réponse pour compléter le classeur

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 16 s

Tokens : entrée 416 · cache écrit 0 · cache lu 4020 · sortie 1741 (dont réflexion 1122) · ~0.0373 $

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (407 caractères)

Je joins les certificats et rapports d'audit reçus d'un fournisseur (PDF), avec un extrait de notre tableau Excel de suivi. Je demande à l'IA d'extraire pour chaque document le type, l'organisme émetteur, le site concerné et les dates de validité, puis de lister ce qui manque ou expire dans les 90 jours. Je lui fais rédiger l'email de relance, et je vérifie les dates sur les originaux avant de l'envoyer.

### Niveau 2 · Compétences

**Obtenu** (453 caractères)

J'ai enregistré dans la solution IA :
- les documents exigés par type de fournisseur (tannerie, atelier, accessoires)
- les certificats acceptés (LWG, CITES, tests REACH, audits sociaux) et leur durée de validité
- les colonnes de notre tableau Excel de suivi
- nos modèles de relance en français, italien et anglais
L'IA remplit le tableau toujours au même format, et signale les documents manquants, expirés ou incohérents (raison sociale, site, lot).

### Niveau 3 · Agent

**Obtenu** (665 caractères)

L'agent IA est connecté à la messagerie achats, aux dossiers partagés fournisseurs et au tableau Excel de suivi :
- il repère les documents reçus par email, les renomme et les range dans le dossier du fournisseur
- il lit chaque document et met à jour le tableau (type, organisme, dates, statut)
- chaque lundi, il liste les documents manquants et ceux qui expirent dans les 90 jours
- il envoie automatiquement la première relance à 90 jours de l'échéance, et les relances suivantes seulement après ma validation
- si un certificat est expiré ou douteux chez un fournisseur stratégique, il m'alerte aussitôt : la décision de suspendre les commandes reste la mienne

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 15 s

Tokens : entrée 285 · cache écrit 0 · cache lu 4020 · sortie 1854 (dont réflexion 1226) · ~0.0390 $

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (386 caractères)

Je joins les fichiers Excel de ventes de la semaine (boutiques et site e-commerce), et je demande à l'IA un résumé d'une page : chiffre d'affaires par pays, par canal et par catégorie (maroquinerie, prêt-à-porter, accessoires), une comparaison avec la semaine précédente et les points d'alerte. Je lui demande aussi de me signaler les totaux qui ne correspondent pas entre les fichiers.

### Niveau 2 · Compétences

**Obtenu** (489 caractères)

J'ai enregistré dans la solution IA :
- la structure de nos fichiers Excel (colonnes, devises, codes boutiques et pays)
- les indicateurs suivis : CA par canal, pays et catégorie, panier moyen
- les budgets par boutique et par pays
- les seuils d'alerte (écart au budget, baisse vs N-1, rupture sur un modèle phare)
- un modèle de synthèse d'une page
L'IA produit chaque lundi la même synthèse, en euros, comparée au budget et à N-1, et signale les écarts, anomalies et fichiers manquants.

### Niveau 3 · Agent

**Obtenu** (602 caractères)

L'agent IA est connecté au dossier partagé des ventes, au logiciel de caisse des boutiques, à la plateforme e-commerce et à la messagerie :
- le lundi à 7 h, il récupère les ventes de la semaine de tous les pays et canaux
- il vérifie que rien ne manque et relance automatiquement par email les boutiques dont les chiffres ne sont pas arrivés
- il convertit les montants en euros, met à jour le tableau de suivi et rédige la synthèse avec les alertes
- il me l'envoie automatiquement par email à 8 h
- il prépare un email aux directeurs pays concernés par une alerte, qui ne part qu'après ma validation

**Vos remarques** :

