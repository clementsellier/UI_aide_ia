# Prompt v4 · 28/10/2026 13:51:31

- Version : **v4** — Reprend la v3 avec les fautes corrigées et les longueurs en caractères (niveau 2 : 400 à 500, niveau 3 : 400 à 750). Niveau 3 : l'agent envoie lui-même, automatiquement ou après validation selon le risque de l'envoi.
- Modèle : claude-opus-5-5
- Jeux : cartographie, maison-luxe

## Faire des devis

`cartographie / devis` · 12 s

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (271 caractères)

Je joins mon fichier Excel de chiffrage et un ancien devis similaire, et je demande à l'IA de rédiger le devis : descriptif des prestations, quantités, prix unitaires, total HT et TTC, conditions. Je vérifie chaque montant avant de le reporter dans mon logiciel de devis.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (457 caractères)

J'ai enregistré dans la solution IA :
- mes modèles de devis types par catégorie de prestation
- ma grille de prix, mes coefficients de marge et les remises autorisées
- la structure de mon fichier Excel de chiffrage
- nos conditions générales de vente, délais et conditions de paiement
L'IA produit un devis complet à partir d'une simple demande client, avec des prix conformes à ma grille. Elle me signale les lignes oubliées ou les marges sous mon seuil.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (600 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de chiffrage, au logiciel de devis et au CRM :
- il repère les demandes de devis reçues par email et en extrait les besoins du client
- il fait le chiffrage dans Excel à partir de ma grille de prix et choisit le modèle type adapté
- il crée le devis en brouillon dans le logiciel de devis
- il me soumet le devis : il ne part au client qu'après ma validation
- 7 jours après l'envoi, il relance automatiquement le client par un email simple, et me prévient dès qu'il répond ou négocie
- il met à jour le CRM (montant, statut, date de relance)

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 12 s

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (300 caractères)

Je copie dans la conversation les lignes de mon fichier Excel des affaires en cours (client, objet, montant, date du devis, dernier contact). Je demande à l'IA de classer les affaires à relancer en priorité et de rédiger un email de relance personnalisé pour chacune, que je relis et envoie moi-même.

### Niveau 2 · Compétences

**Obtenu** (451 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des affaires (colonnes, étapes)
- mes règles de relance : délai après le devis, nombre de relances, affaires exclues
- des modèles d'emails de relance par étape (devis envoyé, sans réponse, avant échéance)
- notre offre et le ton à employer
L'IA rédige des relances homogènes et adaptées à l'étape. Elle me signale aussi les affaires oubliées ou qui ont dépassé le délai prévu.

### Niveau 3 · Agent

**Obtenu** (651 caractères)

L'agent IA est connecté à mon fichier Excel des affaires, à la messagerie et à l'agenda :
- chaque matin, il repère les affaires à relancer selon mes règles (date du devis, dernier contact)
- pour les affaires marquées « relance auto » dans le fichier, il envoie lui-même la relance simple (suivi de devis, demande de retour)
- pour les gros montants, les clients importants ou toute question de prix, il prépare un brouillon qui part seulement après ma validation
- il détecte les réponses des clients, met à jour le fichier (date, statut) et arrête les relances
- chaque lundi, il m'envoie la liste des affaires bloquées que je dois appeler moi-même

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 14 s

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (325 caractères)

Je copie dans la conversation les lignes de mon fichier Excel concernant les paiements en retard (client, affaire, acompte ou solde, montant, date d'échéance). Je demande à l'IA de rédiger pour chaque client un email de relance courtois et précis, adapté au nombre de jours de retard. Je joins si besoin la facture concernée.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (497 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel de paiements (acompte, puis soldes après livraison)
- nos conditions de paiement et les pénalités légales de retard
- un calendrier de relance : rappel à J+7, relance ferme à J+21, mise en demeure à J+45
- un modèle d'email pour chaque étape
L'IA rédige des relances homogènes, au bon niveau de fermeté. Elle me signale les écarts, par exemple un montant incohérent ou une affaire déjà notée « affaire réglée » dans le CRM.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (670 caractères)

L'agent IA est connecté au fichier Excel des paiements, au CRM, à la messagerie et à la banque :
- chaque matin, il rapproche les virements reçus avec les échéances du fichier Excel et met à jour les paiements
- il arrête les relances dès qu'un paiement arrive, et passe l'affaire en « affaire réglée » dans le CRM quand tout est soldé
- il envoie automatiquement le rappel courtois à J+7 et la deuxième relance à J+21
- pour une mise en demeure, un litige ou un client important, il prépare le brouillon et attend ma validation avant l'envoi
- il note chaque relance dans le fichier Excel et me prépare chaque lundi la liste des retards avec le montant total en attente

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 12 s

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (284 caractères)

Je copie l'email de demande de congés dans la conversation et je joins mon fichier Excel des congés. Je demande à l'IA de vérifier si les dates chevauchent d'autres absences et si le solde du salarié suffit, de me recommander une réponse, puis de rédiger l'email d'accord ou de refus.

### Niveau 2 · Compétences

**Obtenu** (470 caractères)

J'ai enregistré dans la solution IA :
- nos règles : délai de prévenance, congés d'été, nombre maximum d'absents en même temps
- les périodes de forte activité où les congés sont limités
- la structure de mon fichier Excel (colonnes, soldes, types d'absence)
- des modèles d'emails d'accord, de refus et de proposition d'autres dates
L'IA applique toujours les mêmes critères, me donne une recommandation argumentée et me signale les conflits ou les soldes insuffisants.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (564 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel des congés et à l'agenda partagé :
- il repère les emails de demande de congés et en extrait les dates
- il vérifie le solde du salarié et les absences déjà prévues sur la période
- il m'envoie une synthèse avec sa recommandation (accord, refus ou autres dates) et le brouillon de réponse
- après ma validation, il envoie la réponse au salarié
- il met à jour le fichier Excel et l'agenda partagé
- il envoie automatiquement un rappel aux salariés qui n'ont pas posé leurs congés d'été avant la date limite

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 15 s

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (354 caractères)

Je décris le poste à l'IA (missions, compétences attendues, type de contrat, salaire, lieu), et je lui demande de rédiger l'annonce. Je joins ensuite les CV reçus, en masquant le nom, la photo et les coordonnées, et je lui demande de les comparer à mes critères dans un tableau. Enfin, je lui demande une liste de questions d'entretien adaptées au poste.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (469 caractères)

J'ai enregistré dans la solution IA :
- la présentation de la société et nos avantages salariés
- un modèle d'annonce et nos fiches de poste
- les critères de tri (indispensables, souhaités), sans aucun critère discriminatoire : âge, sexe, origine, photo
- une grille d'entretien notée avec des questions types
L'IA rédige des annonces homogènes et note chaque CV selon les mêmes critères en justifiant sa note. Elle signale les informations manquantes ou incohérentes.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (676 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et à un dossier partagé de recrutement :
- il prépare l'annonce et la publie sur les sites d'emploi après ma validation
- il range chaque CV reçu dans le dossier et envoie automatiquement un accusé de réception
- il remplit un tableau de suivi avec la note de chaque candidat selon la grille, et me propose une présélection
- une fois les candidats choisis par moi, il envoie les invitations d'entretien avec des créneaux de mon agenda
- il prépare une fiche par entretien avec des questions ciblées, puis met en forme mes notes
- il prépare les réponses négatives, envoyées après ma validation. Le choix final reste le mien

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 13 s

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (338 caractères)

Je décris en quelques lignes une réalisation récente (le client, son besoin, ce que nous avons fait, le résultat) et je joins deux ou trois photos. Je demande à l'IA de rédiger un post LinkedIn de 150 à 200 mots, avec une accroche et une question finale. Je lui demande aussi une liste de 12 idées de sujets pour les trois prochains mois.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (469 caractères)

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise, nos offres et nos clients cibles
- le ton à employer et 3 à 5 de nos meilleurs posts
- nos règles : longueur, emojis, hashtags, aucun nom de client sans son accord
- un calendrier éditorial par thème (réalisation, savoir-faire, équipe, conseil)
L'IA rédige chaque semaine un post dans notre style, varie les thèmes, et me signale ce qui pose problème (accord client manquant, chiffre à vérifier).

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (592 caractères)

L'agent IA est connecté à LinkedIn, au dossier partagé des réalisations (photos, fiches projet) et à la messagerie :
- chaque lundi, il repère les réalisations récentes déposées dans le dossier
- il rédige le post de la semaine avec le visuel et me l'envoie par email pour validation
- il publie automatiquement le post validé le mardi à 8 h 30
- si un client est cité, il prépare la demande d'accord, envoyée après ma validation
- il repère les commentaires et messages de prospects et prépare une réponse que je valide
- chaque mois, il me fait un bilan (vues, réactions, contacts entrants)

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 16 s

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (320 caractères)

Je joins les devis PDF des fournisseurs et je demande à l'IA de comparer dans un tableau le prix HT, les frais de port, le délai, les conditions de paiement et la garantie, en signalant les informations manquantes ou ambiguës (HT ou TTC, quantités différentes). Je vérifie les montants clés sur les PDF avant de décider.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (490 caractères)

J'ai enregistré dans la solution IA :
- nos critères de comparaison (prix HT, frais de port, délai, conditions de paiement, garantie) et leur poids
- notre modèle de tableau Excel comparatif
- nos exigences minimales (délai de paiement, durée de garantie, délai de livraison)
- les prix obtenus lors des derniers achats
L'IA remplit toujours le même tableau et classe les offres. Elle signale aussi les écarts : frais cachés, hausse de prix, conditions hors règles, informations manquantes.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (657 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des achats et au logiciel de gestion :
- il repère les devis reçus par email et les range dans le dossier de la consultation
- il complète le tableau Excel comparatif et signale les écarts avec nos prix habituels
- il relance automatiquement les fournisseurs qui n'ont pas répondu ou dont le devis est incomplet
- il prépare des arguments de négociation et un brouillon d'email au fournisseur, envoyé seulement après ma validation
- une fois mon choix fait, il prépare le bon de commande, envoyé après ma validation
- il envoie automatiquement un email de remerciement aux fournisseurs non retenus

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 14 s

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (300 caractères)

Je joins les PDF reçus par email et les photos ou scans des factures papier, et je demande à l'IA d'extraire pour chacune le fournisseur, la date, le numéro, les montants HT, TVA et TTC et l'échéance, sous forme de tableau à coller dans mon fichier Excel. Je vérifie les montants avant de les copier.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (449 caractères)

J'ai enregistré dans la solution IA :
- les colonnes de mon fichier Excel de suivi et leur ordre
- la liste de mes fournisseurs habituels et leur catégorie de dépense
- les taux de TVA et les mentions obligatoires d'une facture
- les règles de nommage et de classement de l'expert-comptable
L'IA présente chaque facture dans le même format, prêt à coller, et signale les anomalies : TVA mal calculée, doublon, mention manquante, fournisseur inconnu.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (644 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures, au fichier Excel de suivi et à la banque :
- il repère les factures reçues par email et lit les factures papier que je scanne dans le dossier
- il renomme et classe chaque PDF par mois et par fournisseur
- il ajoute la ligne dans le fichier Excel et rapproche la facture du paiement en banque
- il me signale les doublons, les écarts de montant et les échéances proches
- il relance automatiquement le fournisseur quand une facture manque ou est illisible
- en fin de mois, il prépare l'envoi des factures et du fichier à l'expert-comptable, qui part après ma validation

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 15 s

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (439 caractères)

Je joins le contrat en PDF, et je demande à l'IA de lister les clauses à risque pour mon entreprise : responsabilité, pénalités, durée, résiliation, reconduction tacite, paiement, exclusivité et tribunal compétent. Pour chaque clause, je lui demande d'expliquer le risque simplement, de proposer une reformulation plus équilibrée et de dire si le contrat justifie l'avis de l'avocat. Je vérifie ensuite chaque point dans le texte original.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (502 caractères)

J'ai enregistré dans la solution IA :
- nos conditions générales de vente et d'achat
- nos limites acceptables : responsabilité plafonnée, délais de paiement, durée, pénalités
- nos clauses types et les reformulations déjà obtenues
- les critères pour consulter l'avocat (montant, durée, exclusivité, contrat étranger)
L'IA relit chaque contrat avec la même grille. Elle signale les écarts à nos règles et les clauses inhabituelles, propose des reformulations et indique si l'avocat doit être consulté.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (688 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats et à l'agenda :
- il repère les contrats reçus par email et les enregistre dans le dossier
- il les analyse avec notre grille et me prépare une fiche de risques avec les clauses à négocier
- si un critère avocat est atteint, il prépare l'email à l'avocat avec le contrat et les questions, envoyé après ma validation
- il prépare la réponse au client ou au fournisseur avec nos contre-propositions, envoyée seulement après ma validation
- il note les échéances, les préavis de résiliation et les reconductions dans un tableau de suivi, et me les rappelle dans l'agenda
La décision de signer reste toujours la mienne.

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 14 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (413 caractères)

Je donne à l'IA le poste, le service et la date d'arrivée du nouveau salarié, et je lui demande une checklist complète : avant l'arrivée, premier jour, première semaine, premier mois. Elle doit couvrir les démarches administratives (DPAE, registre du personnel, mutuelle, visite d'information et de prévention), les accès et le matériel. Je lui demande aussi le programme du premier jour et un email de bienvenue.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (455 caractères)

J'ai enregistré dans la solution IA :
- notre checklist d'accueil type (avant l'arrivée, jour J, première semaine, premier mois)
- les démarches obligatoires et leurs délais : DPAE, registre du personnel, mutuelle, visite médicale
- les accès et le matériel à prévoir selon le poste
- notre livret d'accueil et le règlement intérieur
L'IA produit pour chaque arrivée le même parcours adapté au poste. Elle me signale les démarches manquantes ou en retard.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (701 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au logiciel de paie et au dossier RH partagé :
- dès la signature du contrat, il crée la checklist d'accueil du salarié dans le dossier RH
- il envoie automatiquement aux collègues concernés les demandes d'accès et de matériel, puis les relance si besoin
- il prépare la DPAE et l'affiliation mutuelle, qui partent seulement après ma validation
- il planifie dans l'agenda le programme de la première semaine et les points de suivi (1 semaine, 1 mois, fin de période d'essai)
- il prépare l'email de bienvenue au salarié, envoyé après ma validation
- il m'alerte sur chaque démarche non faite. La décision en fin de période d'essai reste la mienne.

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 15 s

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (303 caractères)

Je colle la fiche produit en italien et deux ou trois fiches que je trouve réussies dans la langue visée. Je demande à l'IA de l'adapter pour ce pays dans le ton de la maison, sans rien changer aux matières, dimensions ni prix. Je fais relire le résultat par l'équipe locale avant de le mettre en ligne.

### Niveau 2 · Compétences

**Obtenu** (474 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale et des fiches modèles validées dans chaque langue
- le glossaire des noms de modèles, matières et savoir-faire, avec leur traduction imposée
- les spécificités de chaque pays (tailles, unités, mentions obligatoires)
- la structure type d'une fiche
L'IA produit des fiches homogènes d'une collection à l'autre et fidèles à l'original. Elle signale les termes absents du glossaire et les informations manquantes.

### Niveau 3 · Agent

**Obtenu** (647 caractères)

L'agent IA est connecté au back-office du site e-commerce, au dossier partagé des collections et à la messagerie :
- il repère les nouvelles fiches validées en italien
- il prépare les versions pour chaque pays et les dépose en brouillon dans le back-office, sans les publier
- il envoie automatiquement à chaque équipe locale un email avec le lien des fiches à valider
- il relance automatiquement les équipes après 3 jours sans réponse
- il intègre les corrections demandées et ne complète le glossaire qu'après mon accord
- il publie les fiches seulement après validation de l'équipe locale
- chaque semaine, il me signale l'avancement par pays

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 14 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (267 caractères)

Je joins le chapitre du classeur de formation sur les matières (cuirs, toiles, finitions) et je demande à l'IA de répondre aux questions d'un nouveau conseiller. Je lui demande aussi de préparer un quiz de 10 questions avec les corrigés, à partir de ce seul document.

### Niveau 2 · Compétences

**Obtenu** (481 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation de 150 pages (histoire, matières, codes du service)
- les fiches produits et le guide d'entretien des matières
- les procédures boutique : retours, réparations, garanties, détaxe
- la règle de ne répondre qu'à partir de ces documents, sans inventer de prix ni de délai
L'IA répond en citant la page du classeur. Elle propose des quiz par thème et par niveau, et signale les questions sans réponse dans les documents.

### Niveau 3 · Agent

**Obtenu** (654 caractères)

L'agent IA est connecté à la messagerie interne (Teams), au dossier partagé de formation, au catalogue produits et au planning des boutiques :
- il répond aux questions des conseillers dans Teams, en citant la source
- dès qu'un nouveau conseiller apparaît au planning, il lui envoie automatiquement son parcours de quiz pour les premières semaines
- il envoie automatiquement les quiz hebdomadaires et les rappels
- à chaque nouvelle collection, il prépare les fiches mises à jour et me les soumet avant publication
- chaque mois, il m'envoie un bilan des scores et des questions fréquentes, et les décisions concernant un conseiller restent les miennes

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 16 s

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (382 caractères)

Je joins les documents reçus d'un fournisseur (certificat LWG, rapport d'audit, fiche de traçabilité du cuir) et je demande à l'IA d'en extraire le fournisseur, le type de document, l'organisme émetteur, le périmètre et les dates de validité, sous forme de ligne à coller dans mon tableau Excel. Si un document manque ou expire bientôt, je lui demande de rédiger l'email de relance.

### Niveau 2 · Compétences

**Obtenu** (492 caractères)

J'ai enregistré dans la solution IA :
- les documents exigés par type de fournisseur (tannerie : certificat LWG et traçabilité du cuir jusqu'à l'élevage ; atelier : audit social, conformité REACH)
- les colonnes de notre tableau Excel de suivi
- l'alerte à 60 jours avant expiration
- nos modèles de relance en italien, français et anglais
L'IA remplit chaque ligne de façon homogène, signale les documents manquants, expirés ou incohérents (nom, site, périmètre) et propose la bonne relance.

### Niveau 3 · Agent

**Obtenu** (660 caractères)

L'agent IA est connecté à la messagerie achats, aux dossiers partagés fournisseurs et au tableau Excel de suivi :
- il repère les documents reçus par email et les range dans le dossier du fournisseur
- il lit chaque document et met à jour le tableau (type, organisme, dates, périmètre)
- chaque semaine, il liste les documents manquants et ceux qui expirent sous 60 jours
- il envoie automatiquement la première relance standard au fournisseur
- les relances suivantes et les cas sensibles (certificat expiré sur un cuir en production, audit non conforme) partent seulement après ma validation
- la décision de suspendre un fournisseur reste toujours la mienne

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 16 s

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (370 caractères)

Je joins les fichiers Excel de ventes de la semaine (boutiques par pays et site e-commerce), et je demande à l'IA un résumé d'une page : chiffre d'affaires par pays, par canal et par catégorie (maroquinerie, prêt-à-porter, accessoires), comparaison avec la semaine précédente et points d'alerte. Je lui demande aussi de préciser les chiffres qu'elle n'a pas pu vérifier.

### Niveau 2 · Compétences

**Obtenu** (481 caractères)

J'ai enregistré dans la solution IA :
- la structure de nos fichiers Excel (boutiques, e-commerce, pays, devises)
- les indicateurs suivis : CA par pays, canal et catégorie, panier moyen, remises
- les objectifs hebdomadaires par boutique et les seuils d'alerte
- un modèle de synthèse d'une page
L'IA produit chaque lundi la même synthèse, convertie en euros, comparée aux objectifs et à l'an dernier, et signale les écarts, les ruptures de best-sellers et les données manquantes.

### Niveau 3 · Agent

**Obtenu** (654 caractères)

L'agent IA est connecté au dossier partagé des fichiers de ventes, au logiciel de caisse des boutiques, à la plateforme e-commerce et à la messagerie :
- le lundi à 7 h, il récupère les ventes de la semaine de chaque pays
- il vérifie que toutes les données sont arrivées et relance automatiquement les responsables de boutique en retard
- il met à jour le tableau de suivi Excel et rédige la synthèse avec les alertes
- il me l'envoie automatiquement par email avant 9 h
- il prépare un email aux directeurs pays concernés par une alerte, envoyé seulement après ma validation
- les décisions (réassort, remises, actions commerciales) restent les miennes

**Vos remarques** :

