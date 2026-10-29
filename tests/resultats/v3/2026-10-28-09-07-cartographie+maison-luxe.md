# Prompt v3 · 28/10/2026 10:07:28

- Version : **v3** — Reprend la v2 avec les fautes corrigées et les longueurs en caractères (niveau 2 : 400 à 500, niveau 3 : 400 à 750). Niveau 3 : l'agent envoie lui-même, automatiquement ou après validation selon le risque de l'envoi.
- Modèle : claude-opus-5-5
- Jeux : cartographie, maison-luxe

## Faire des devis

`cartographie / devis` · 15 s

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (358 caractères)

Je colle la demande du client (son email ou mes notes d'appel) et je joins le fichier Excel de chiffrage d'un devis similaire déjà fait. Je demande à l'IA de proposer les lignes du devis (désignations, quantités, prix unitaires) et un court texte de présentation, que je reprends dans mon logiciel de devis après avoir vérifié chaque prix et chaque quantité.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (439 caractères)

J'ai enregistré dans la solution IA :
- mes modèles de devis types par prestation
- ma grille tarifaire et mes règles de chiffrage (marges, temps, remises maximales)
- mes conditions générales de vente et modalités de paiement
- les questions à poser si la demande est incomplète
L'IA prépare un devis complet, toujours construit de la même façon, et me signale les prix hors grille, les marges trop faibles ou les informations manquantes.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (599 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de chiffrage, au logiciel de devis et au CRM :
- il repère les demandes de devis reçues par email et envoie automatiquement un accusé de réception au client
- il fait le chiffrage dans Excel à partir du modèle type le plus proche
- il crée le devis en brouillon dans le logiciel de devis et me signale les points à vérifier
- après ma validation des prix, il envoie le devis au client et l'enregistre dans le CRM
- il relance automatiquement le client sans réponse à 7 jours, et me prévient pour les gros devis afin que je l'appelle moi-même

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 13 s

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (274 caractères)

Je joins mon fichier Excel des affaires en cours, et je demande à l'IA de repérer les affaires sans contact depuis plus de 15 jours. Pour chacune, je lui demande de rédiger un email de relance personnalisé selon l'étape (devis envoyé, rendez-vous fait, attente de décision).

### Niveau 2 · Compétences

**Obtenu** (477 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des affaires (client, montant, étape, date du dernier contact)
- les règles de relance : délai selon l'étape, nombre maximum de relances
- des modèles d'emails de relance avec notre ton
- les affaires à ne jamais relancer automatiquement (gros clients, négociation en cours)
L'IA propose des relances homogènes au bon moment, et me signale les affaires oubliées ou dont la date de décision est dépassée.

### Niveau 3 · Agent

**Obtenu** (626 caractères)

L'agent IA est connecté au fichier Excel des affaires, à la messagerie et à l'agenda :
- chaque matin, il repère dans le fichier les affaires que j'ai marquées « relance auto » et dont le délai est dépassé
- il envoie automatiquement les relances simples (premier rappel après devis, demande de nouvelles)
- pour les affaires importantes ou quand le prix est en jeu, il prépare un brouillon qu'il n'envoie qu'après ma validation
- il détecte les réponses des clients, met à jour le fichier (date, statut) et arrête les relances
- il inscrit dans mon agenda les appels à passer quand un client ne répond pas après deux relances

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

**Obtenu** (301 caractères)

Je joins mon fichier Excel des paiements, et je demande à l'IA de repérer les affaires dont l'acompte ou le solde est en retard. Je lui demande ensuite de rédiger pour chacune un email de relance qui précise le montant et l'échéance. Je relis chaque email et je l'envoie moi-même depuis ma messagerie.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (504 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des paiements (affaire, acompte, solde, échéances)
- nos conditions de paiement et pénalités de retard
- trois modèles de relance : rappel courtois, relance ferme, mise en demeure
- le calendrier de relance (J+7, J+15, J+30)
L'IA rédige des relances homogènes, au bon niveau de fermeté, avec le montant et l'échéance exacts. Elle me signale les écarts, par exemple un paiement partiel ou une affaire déjà notée réglée dans le CRM.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (585 caractères)

L'agent IA est connecté au fichier Excel des paiements, au CRM, à la messagerie et à la banque :
- chaque matin, il rapproche les virements reçus sur le compte bancaire avec les échéances du fichier Excel et met à jour les paiements
- il passe l'affaire en « affaire réglée » dans le CRM quand tout est payé
- il envoie automatiquement le rappel courtois à J+7, puis la relance ferme à J+15
- il me soumet pour validation la mise en demeure, ainsi que toute relance d'un client important ou en litige
- chaque lundi, il m'envoie la liste des retards et le total des montants en attente

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 13 s

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (248 caractères)

Je copie l'email de demande de congés dans la conversation et je joins mon fichier Excel des congés. Je demande à l'IA de vérifier si les dates chevauchent d'autres absences, de me recommander d'accepter ou non, et de rédiger la réponse au salarié.

### Niveau 2 · Compétences

**Obtenu** (476 caractères)

J'ai enregistré dans la solution IA :
- nos règles : délai de prévenance, fermetures annuelles, priorités l'été
- le nombre minimum de personnes présentes par équipe ou par poste
- la structure de mon fichier Excel de suivi et les soldes de chacun
- des modèles de réponse d'accord, de refus motivé et de proposition d'autres dates
L'IA analyse chaque demande selon les mêmes critères, recommande une réponse argumentée et signale les conflits de dates ou soldes insuffisants.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (578 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de suivi des congés et à l'agenda partagé :
- il repère les emails de demande de congés et envoie automatiquement un accusé de réception au salarié
- il vérifie les dates, le solde et les absences déjà prévues dans le fichier
- il m'envoie sa recommandation (accord, refus ou autres dates) avec un brouillon de réponse
- il envoie la réponse au salarié seulement après ma validation
- il met à jour le fichier Excel et ajoute l'absence dans l'agenda partagé
- il me signale les demandes en attente depuis plus de 5 jours

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 18 s

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (359 caractères)

Je décris le poste (missions, profil, salaire, lieu, type de contrat) et je demande à l'IA de rédiger l'annonce. Je joins ensuite les CV reçus, sans nom ni coordonnées, avec la fiche de poste. Je lui demande un tableau qui compare chaque candidat aux critères du poste et une grille d'entretien avec questions et notation, mais je décide moi-même qui retenir.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (471 caractères)

J'ai enregistré dans la solution IA :
- nos fiches de poste et la présentation de la société
- nos anciennes annonces et le ton à employer
- une grille d'évaluation commune (critères, note de 1 à 4)
- les règles de non-discrimination : aucun critère lié à l'âge, au sexe, à l'origine ou à la situation familiale
L'IA rédige des annonces homogènes et analyse chaque CV avec la même grille. Elle signale les informations manquantes ou incohérentes et me laisse la décision.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (655 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, à Indeed et au dossier partagé de recrutement :
- il publie l'annonce après ma validation
- il range les CV reçus et tient à jour le tableau de suivi des candidats
- il envoie automatiquement un accusé de réception à chaque candidat
- il me propose une présélection argumentée, et c'est moi qui choisis
- il envoie les invitations à l'entretien après mon accord, avec des créneaux libres de mon agenda
- après chaque entretien, il reporte mes notes dictées dans la grille et compare les candidats
- il prépare les refus, qui partent après ma validation
- il supprime les CV non retenus au bout de 2 ans

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

**Obtenu** (298 caractères)

Je décris en quelques lignes une réalisation récente (projet client, savoir-faire, nouveauté) et je joins une ou deux photos. Je demande à l'IA de rédiger trois versions d'un post LinkedIn de 150 à 200 mots, avec une accroche, puis de me proposer quatre idées de sujets pour les semaines suivantes.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (472 caractères)

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise, nos offres et nos clients cibles
- notre ligne éditoriale : 4 types de posts (réalisation, savoir-faire, coulisses, conseil) en rotation
- le ton, la longueur et 5 de nos posts qui ont le mieux marché
- les règles : aucun nom de client sans son accord, aucun prix
L'IA rédige des posts homogènes dans notre style, propose le calendrier du mois et me signale toute information sensible ou à vérifier.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (645 caractères)

L'agent IA est connecté à la page LinkedIn de l'entreprise, au dossier partagé des réalisations, à la messagerie et au CRM :
- chaque lundi, il repère les projets terminés et les photos ajoutées dans le dossier
- il rédige le post de la semaine et me l'envoie pour validation
- s'il cite un client, il prépare un email pour lui demander son accord, envoyé après ma validation
- une fois le post validé, il le publie automatiquement au jour et à l'heure prévus
- il relève les personnes qui réagissent et ajoute les prospects intéressants au CRM
- chaque mois, il me fait un bilan : vues, réactions, contacts obtenus, sujets qui marchent le mieux

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 13 s

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (373 caractères)

Je joins les devis PDF reçus pour un même achat, et je demande à l'IA de les reprendre dans un tableau comparatif sur les mêmes critères : prix HT unitaire et total, frais de port, délai, conditions de paiement, garantie et durée de validité. Je lui demande de signaler ce qui manque ou n'est pas comparable, puis je vérifie les montants clés dans les PDF avant de décider.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (451 caractères)

J'ai enregistré dans la solution IA :
- notre grille de critères et leur poids (prix, délai, paiement, garantie)
- notre modèle de tableau Excel comparatif
- nos conditions d'achat habituelles (paiement à 45 jours, franco de port…)
- l'historique des prix payés par fournisseur
L'IA remplit toujours le même tableau, en HT et frais inclus, classe les offres, signale les écarts avec nos conditions et nos prix passés, et propose les points à négocier.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (658 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des achats et au fichier Excel de comparaison :
- il repère les devis PDF reçus par email et les range dans le dossier de la demande
- il extrait les prix, délais, conditions de paiement et garanties dans le tableau Excel
- il relance automatiquement les fournisseurs qui n'ont pas répondu ou dont le devis est incomplet
- il me présente le classement des offres avec les points à négocier
- il prépare les emails de négociation et le bon de commande, envoyés seulement après ma validation
- une fois mon choix fait, il envoie automatiquement un message de remerciement aux fournisseurs non retenus

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 15 s

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (291 caractères)

Je joins les factures du mois (PDF reçus par email et photos des factures papier), et je demande à l'IA d'extraire pour chacune le fournisseur, la date, le numéro, le montant HT, la TVA et le TTC dans un tableau à coller dans mon fichier Excel. Je vérifie les montants avant de les reporter.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (465 caractères)

J'ai enregistré dans la solution IA :
- les colonnes de mon fichier Excel de suivi
- mes fournisseurs habituels et leur catégorie de dépense
- les taux de TVA et les contrôles à faire (HT + TVA = TTC, mentions obligatoires)
- les consignes de mon expert-comptable pour nommer et transmettre les factures
L'IA remplit le tableau toujours de la même façon, classe chaque dépense, et me signale doublons, erreurs de calcul, mentions manquantes ou montants inhabituels.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (698 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures, au fichier Excel de suivi et à la banque :
- il repère les factures reçues par email ; je dépose les scans des factures papier dans le dossier
- il lit chaque facture, la renomme et la classe par mois et par fournisseur
- il ajoute la ligne dans le fichier Excel et rapproche le paiement sur le relevé bancaire
- il me signale doublons, écarts de montant et factures non payées à échéance
- il prépare une demande de facture rectificative au fournisseur, envoyée après ma validation
- en fin de mois, il envoie automatiquement les factures et le fichier à l'expert-comptable, avec un récapitulatif des dépenses par catégorie

**Vos remarques** :


## Préparer un rendez-vous client

`cartographie / rendez-vous` · 14 s

> **Fonction** : Commercial · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Avant un rendez-vous, je cherche les informations sur le client sur internet et dans mes anciens emails. Je prends des notes pendant le rendez-vous et je fais rarement de compte rendu.  
> **Situation souhaitée** : Je souhaite arriver mieux préparé en rendez-vous, et que le compte rendu et les actions de suivi soient faits systématiquement.  
> **Gain espéré** : Rendez-vous plus efficaces. Meilleur taux de transformation. Aucune action de suivi oubliée.

### Niveau 1 · Chat

**Attendu**

Je donne à l'IA le nom de l'entreprise et du contact, et je lui demande de préparer une fiche de préparation avec des questions à poser. Après le rendez-vous, je lui dicte mes notes pour qu'elle rédige le compte rendu.

**Obtenu** (397 caractères)

Je donne à l'IA le nom de l'entreprise et de mon interlocuteur, je colle nos derniers emails, et je lui demande une fiche de préparation : activité, actualités récentes, historique avec nous, besoins probables et questions à poser. Je vérifie les informations trouvées sur internet. Après le rendez-vous, je lui dicte mes notes et je lui demande un compte rendu avec la liste des actions de suivi.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre offre et nos arguments par type de client
- les questions de découverte à poser
- un modèle de compte rendu
L'IA prépare une fiche adaptée au type de client, et rédige des comptes rendus homogènes avec les prochaines étapes.

**Obtenu** (467 caractères)

J'ai enregistré dans la solution IA :
- notre offre, nos tarifs et nos arguments par type de client
- un modèle de fiche de préparation (contexte, besoins probables, objections, questions, objectif du rendez-vous)
- un modèle de compte rendu avec actions, responsable et échéance
- nos critères de qualification d'une opportunité
L'IA prépare des fiches et comptes rendus toujours structurés pareil, et me signale les informations manquantes pour qualifier l'affaire.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à l'agenda, à la messagerie et au CRM :
- la veille du rendez-vous, il prépare la fiche avec l'historique des échanges et des devis
- après le rendez-vous, il enregistre le compte rendu dans le CRM
- il crée les tâches de suivi dans l'agenda
- il prépare le brouillon d'email de remerciement au client

**Obtenu** (573 caractères)

L'agent IA est connecté à l'agenda, à la messagerie et au CRM :
- la veille de chaque rendez-vous, il rassemble l'historique des emails, les devis en cours et les actualités du client, et m'envoie une fiche de préparation
- après le rendez-vous, il transforme mes notes ou ma dictée en compte rendu et l'enregistre dans le CRM
- il prépare l'email de compte rendu au client, envoyé seulement après ma validation
- il crée les tâches de suivi dans le CRM avec leurs échéances
- il m'envoie automatiquement un rappel avant chaque échéance et me signale toute action en retard

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 14 s

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (379 caractères)

Je joins le contrat en PDF, en précisant si je suis client ou fournisseur et le montant en jeu. Je demande à l'IA de lister les clauses à risque (responsabilité, pénalités, résiliation, reconduction tacite, délais de paiement, juridiction), de me les expliquer simplement et de me dire si l'avocat doit relire le contrat. Je vérifie moi-même dans le contrat chaque point signalé.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (492 caractères)

J'ai enregistré dans la solution IA :
- nos conditions générales de vente et d'achat
- nos limites : plafond de responsabilité, délais de paiement, préavis acceptables
- la liste des clauses sensibles (pénalités, exclusivité, reconduction tacite, juridiction)
- les critères pour consulter l'avocat (montant, durée, garantie, droit étranger)
L'IA analyse chaque contrat avec la même grille, signale les écarts avec nos règles, propose une reformulation et indique si l'avocat doit intervenir.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (613 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats et à l'agenda :
- il repère les contrats reçus en pièce jointe et les classe dans le dossier
- il les analyse avec notre grille et me remet une fiche des clauses à risque
- il prépare l'email de contre-proposition au client ou au fournisseur, envoyé seulement après ma validation
- si le contrat dépasse nos critères, il prépare l'email à l'avocat avec le contrat et les questions précises, envoyé après ma validation
- il note les échéances et dates de préavis dans l'agenda et me prévient à l'avance
La décision de signer reste la mienne.

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 12 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (297 caractères)

Je décris à l'IA le poste, la date d'arrivée et ce que je fais d'habitude, et je lui demande une checklist d'accueil complète : démarches administratives obligatoires, accès, matériel, planning de la première semaine. Je lui demande aussi un brouillon d'email de bienvenue pour le nouveau salarié.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (458 caractères)

J'ai enregistré dans la solution IA :
- notre checklist d'accueil (avant l'arrivée, jour 1, semaine 1, fin de période d'essai)
- les démarches obligatoires : DPAE, registre du personnel, mutuelle, visite médicale
- la liste des accès et du matériel selon le poste
- notre livret d'accueil et le modèle de planning de la première semaine
L'IA prépare pour chaque embauche le même parcours, adapté au poste, et me signale les démarches manquantes ou en retard.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (694 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au logiciel de paie et au dossier RH partagé :
- dès la signature du contrat, il crée le dossier du salarié et sa checklist d'accueil
- il m'alerte si la DPAE n'est pas faite avant la date d'arrivée
- il envoie automatiquement les demandes d'accès et de matériel à la personne ou au prestataire concerné
- il envoie au nouveau salarié un email de bienvenue avec les documents à fournir, après ma validation
- il réserve dans l'agenda les rendez-vous de la première semaine
- il relance automatiquement le salarié pour les documents manquants
- il me rappelle les points d'étape (1 mois, fin de période d'essai), la décision restant la mienne

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 16 s

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (360 caractères)

Je colle la fiche produit en italien, avec deux fiches déjà publiées dont le style me plaît. Je demande à l'IA de l'adapter en français, anglais et allemand, sans traduire mot à mot, en gardant le ton de la maison et les matières, dimensions et tailles exactes. Je lui demande aussi de lister les termes qu'elle a adaptés, pour que l'équipe locale les vérifie.

### Niveau 2 · Compétences

**Obtenu** (487 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale (ton, mots interdits, longueur des fiches)
- un glossaire par langue : matières, savoir-faire, noms de lignes à ne jamais traduire
- les adaptations par pays : tailles, unités, références culturelles à éviter
- des fiches validées par chaque équipe locale comme modèles
L'IA livre des fiches homogènes dans chaque langue, fidèles au style de la maison, et signale les informations manquantes ou les termes à faire vérifier.

### Niveau 3 · Agent

**Obtenu** (575 caractères)

L'agent IA est connecté au back-office du site e-commerce, au dossier partagé des collections et à la messagerie :
- il repère les nouvelles fiches italiennes dès qu'elles sont prêtes
- il rédige les versions de chaque pays selon la charte et le glossaire
- il envoie automatiquement à chaque équipe locale ses fiches à relire, avec les points à vérifier
- il relance automatiquement les équipes en retard avant la date de mise en ligne
- il publie sur le site uniquement les fiches validées par l'équipe locale
- il ajoute au glossaire les corrections faites par les équipes

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 15 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (309 caractères)

Je joins le classeur de formation en PDF, ou seulement les chapitres utiles, et je demande à l'IA de répondre à une question précise d'un conseiller en citant la page concernée. Je lui demande aussi de créer un quiz de 15 questions sur l'histoire de la maison ou sur les matières, avec les réponses corrigées.

### Niveau 2 · Compétences

**Obtenu** (475 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation de 150 pages, dans sa dernière version
- les fiches matières (cuirs, toiles, tannage, entretien, origine)
- les codes du service et le vocabulaire de la maison, avec les mots à éviter
- les procédures boutique : retours, réparations, commandes web
L'IA répond avec les mots de la maison et cite la page du classeur. Elle propose des quiz par thème et signale quand une réponse ne figure pas dans les documents.

### Niveau 3 · Agent

**Obtenu** (656 caractères)

L'agent IA est connecté à la messagerie interne (Teams), au logiciel RH, au catalogue produits et au dossier partagé de formation :
- il répond aux questions des conseillers depuis la boutique, en citant la source
- dès qu'un conseiller arrive dans le logiciel RH, il lui envoie automatiquement un parcours de quiz sur 4 semaines
- il relance automatiquement les quiz non faits
- il ajoute les fiches des nouvelles collections au fil des sorties du catalogue
- chaque semaine, il m'envoie un bilan des résultats et des questions restées sans réponse
- tout message au responsable de boutique sur le niveau d'un conseiller part seulement après ma validation

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 17 s

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (329 caractères)

Je joins les certificats et le rapport d'audit reçus d'un fournisseur (PDF), et je demande à l'IA d'en extraire pour chacun le type de document, l'organisme émetteur, le numéro, le site couvert et la date d'expiration, puis de lister ce qui manque. Je vérifie les dates sur l'original avant de les reporter dans le tableau Excel.

### Niveau 2 · Compétences

**Obtenu** (490 caractères)

J'ai enregistré dans la solution IA :
- les documents exigés par type de fournisseur (tanneries : LWG, ICEC, CITES pour les peaux exotiques, REACH ; ateliers : audit social, charte signée)
- les colonnes de notre tableau Excel de suivi
- la règle d'alerte : 90 jours avant expiration
- un modèle de relance en italien, anglais et français
L'IA remplit le tableau toujours au même format et signale les documents manquants, expirés ou dont le nom ou le site ne correspond pas au fournisseur.

### Niveau 3 · Agent

**Obtenu** (647 caractères)

L'agent IA est connecté à la messagerie achats, aux dossiers partagés fournisseurs et au tableau Excel de suivi :
- il repère les documents reçus par email, les renomme (fournisseur, type, date d'expiration) et les range dans le bon dossier
- il lit chaque document et met à jour le tableau de suivi
- chaque lundi, il contrôle les échéances et envoie automatiquement une relance standard pour les documents expirant sous 90 jours
- pour un certificat déjà expiré ou un audit défavorable, il prépare la relance et une note de synthèse, que je valide avant envoi
- la décision de suspendre les commandes d'un fournisseur reste à moi et à l'acheteur

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 22 s

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (369 caractères)

Je joins les fichiers Excel de ventes de la semaine (boutiques et site e-commerce), et je demande à l'IA de calculer les ventes par pays, par canal et par ligne (maroquinerie, prêt-à-porter, accessoires), puis de les comparer à la semaine précédente. Je lui demande une synthèse d'une page avec les points d'alerte, et la liste des chiffres qu'elle n'a pas pu vérifier.

### Niveau 2 · Compétences

**Obtenu** (487 caractères)

J'ai enregistré dans la solution IA :
- la structure de nos fichiers Excel et les taux de change
- les indicateurs suivis par pays, canal et ligne (maroquinerie, prêt-à-porter, accessoires)
- les objectifs hebdomadaires par boutique
- les seuils d'alerte (écart à l'objectif, remises inhabituelles, ruptures sur best-sellers)
- un modèle de synthèse d'une page
L'IA produit chaque lundi la même synthèse, comparée aux objectifs et à l'an dernier, et signale écarts et données manquantes.

### Niveau 3 · Agent

**Obtenu** (626 caractères)

L'agent IA est connecté au dossier partagé des ventes, au logiciel de caisse des boutiques, au back-office du site e-commerce et à la messagerie :
- il récupère lui-même les ventes de la semaine chaque lundi à 7 h
- il consolide les chiffres en euros et met à jour le fichier Excel de suivi
- il rédige la synthèse d'une page avec les points d'alerte
- il me l'envoie automatiquement par email avant 9 h
- il prépare un email de questions aux directeurs de boutique ou de pays concernés par une alerte, envoyé seulement après ma validation
- il garde l'historique des alertes pour suivre leur évolution d'une semaine à l'autre

**Vos remarques** :

