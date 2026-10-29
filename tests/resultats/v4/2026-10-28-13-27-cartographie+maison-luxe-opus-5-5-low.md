# Prompt v4 · 28/10/2026 14:27:41

- Version : **v4** — Reprend la v3 et demande de décrire d'abord ce qui devient possible avec l'IA, puis la liste des actions. 4 exemples (ajout de « Préparer un rendez-vous client »).
- Modèle : claude-opus-5-5 · effort low
- Jeux : cartographie, maison-luxe

## Synthèse de consommation

- Durée moyenne : 6 s par cas
- Tokens moyens par cas : entrée 325, cache écrit 0, cache lu 4020, sortie 540 (dont réflexion 0)
- Coût estimé : ~0.181 $ au total, ~0.0129 $ par cas (tarifs indicatifs)

## Faire des devis

`cartographie / devis` · 6 s

Tokens : entrée 288 · cache écrit 0 · cache lu 4020 · sortie 510 (dont réflexion 0) · ~0.0122 $

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (293 caractères)

Je colle la demande du client et je joins mon fichier Excel de chiffrage, ainsi qu'un ancien devis similaire, et je demande à l'IA de vérifier les calculs et de rédiger les lignes du devis (désignations, quantités, prix unitaires, total HT et TTC) prêtes à recopier dans mon logiciel de devis.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (427 caractères)

J'ai enregistré dans la solution IA :
- ma grille tarifaire et mes règles de chiffrage Excel (marges, remises, frais)
- mes modèles types de devis par type de prestation
- mes conditions générales de vente et délais de validité
- les mentions obligatoires d'un devis
L'IA produit un devis au bon modèle, chiffré selon mes règles, toujours présenté de la même façon, et me signale les marges trop basses ou les infos manquantes.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (514 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de chiffrage, au logiciel de devis et au CRM :
- il repère les demandes de devis reçues par email
- il fait le chiffrage dans Excel à partir du modèle type le plus proche
- il crée le brouillon de devis dans le logiciel de devis
- il me le soumet : le devis part au client seulement après ma validation
- il enregistre le devis envoyé dans le CRM
- il envoie automatiquement une relance simple à J+7 sans réponse, et me prévient pour les clients importants

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 6 s

Tokens : entrée 241 · cache écrit 0 · cache lu 4020 · sortie 533 (dont réflexion 0) · ~0.0124 $

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (291 caractères)

Je copie la ligne de mon fichier Excel concernant l'affaire (client, contact, devis envoyé, date du dernier échange) et l'historique de mon dernier email, et je demande à l'IA de rédiger un email de relance court et personnalisé, qui rappelle l'offre et propose une prochaine étape concrète.

### Niveau 2 · Compétences

**Obtenu** (442 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des affaires en cours
- mes règles de relance : à J+7, J+15 puis J+30 après l'envoi du devis
- le ton à employer et trois modèles de relance (1re, 2e, dernière)
- ce que je peux ou non proposer (remise, délai)
L'IA rédige des relances homogènes adaptées à l'étape, me liste les affaires à relancer cette semaine et me signale celles sans réponse depuis trop longtemps.

### Niveau 3 · Agent

**Obtenu** (561 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et au fichier Excel des affaires en cours :
- chaque lundi, il repère les affaires à relancer selon mes règles
- pour celles que j'ai marquées « relance auto », il envoie automatiquement les relances simples
- pour les gros clients ou s'il faut parler prix ou remise, il prépare un brouillon envoyé seulement après ma validation
- il détecte les réponses reçues et suspend les relances
- il met à jour le fichier (date, statut) et me crée un rappel d'appel si le client ne répond pas après la dernière relance

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 6 s

Tokens : entrée 336 · cache écrit 0 · cache lu 4020 · sortie 529 (dont réflexion 0) · ~0.0127 $

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (298 caractères)

Je copie dans la conversation les lignes de mon fichier Excel concernant l'affaire en retard (montant, échéance, acomptes déjà reçus), et je demande à l'IA de rédiger un email de relance courtois et précis. Si c'est une deuxième relance, je colle aussi mon premier email pour qu'elle adapte le ton.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (429 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel de suivi des paiements
- nos conditions de paiement (acompte, solde après livraison, délais)
- le calendrier de relance : J+7, J+15, J+30, mise en demeure
- trois modèles d'email, du plus aimable au plus ferme
L'IA rédige la bonne relance selon le niveau de retard, toujours dans le même ton, et me signale les incohérences entre l'Excel et ce qui est dû.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (539 caractères)

L'agent IA est connecté au fichier Excel des paiements, à la messagerie, au CRM et à la banque :
- chaque matin, il rapproche les virements reçus et met à jour l'Excel
- il passe l'affaire en « affaire réglée » dans le CRM quand tout est payé
- il envoie automatiquement les relances J+7 et J+15, simples et courtoises
- il prépare les relances J+30 et mises en demeure, envoyées seulement après ma validation, comme celles des clients importants ou en litige
- chaque lundi, il m'envoie la liste des retards et le montant total en attente

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 6 s

Tokens : entrée 323 · cache écrit 0 · cache lu 4020 · sortie 470 (dont réflexion 0) · ~0.0115 $

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (233 caractères)

Je copie l'email de demande de congés et je joins mon fichier Excel des congés, et je demande à l'IA de vérifier les chevauchements avec les autres absences, de me recommander d'accepter ou non, puis de rédiger la réponse au salarié.

### Niveau 2 · Compétences

**Obtenu** (398 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des congés
- nos règles : nombre minimum de présents par équipe, délai de prévenance, périodes bloquées
- les droits à congés de chaque salarié (solde, RTT)
- des modèles de réponse d'accord et de refus
L'IA applique toujours les mêmes règles, me signale les conflits ou soldes insuffisants, et propose une réponse homogène.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (503 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel des congés et à l'agenda partagé :
- il repère les emails de demande de congés
- il vérifie le solde du salarié et les absences déjà posées sur la période
- il m'envoie une recommandation (accord, refus ou à discuter) avec la raison
- après ma validation, il envoie la réponse au salarié ; aucune réponse ne part sans mon accord
- il met à jour le fichier Excel et l'agenda partagé
- il me prévient des demandes en attente depuis plus de 3 jours

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 6 s

Tokens : entrée 317 · cache écrit 0 · cache lu 4020 · sortie 524 (dont réflexion 0) · ~0.0126 $

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (332 caractères)

Je décris le poste à l'IA (missions, compétences, conditions, salaire) et je lui demande de rédiger l'annonce et une grille d'entretien avec des questions précises. Pour le tri, je joins quelques CV reçus par email, en retirant nom et photo, et je lui demande de les comparer aux critères du poste, sans écarter personne à ma place.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (426 caractères)

J'ai enregistré dans la solution IA :
- la présentation de la société et nos avantages
- un modèle d'annonce et de fiche de poste
- une grille d'évaluation commune (critères, notation de 1 à 4)
- les règles de non-discrimination à respecter
L'IA rédige des annonces homogènes, analyse chaque CV avec la même grille, signale les informations manquantes ou incohérentes, et prépare un guide d'entretien adapté à chaque candidat.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (551 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et au dossier recrutement partagé :
- il enregistre chaque CV reçu dans le dossier et le note selon la grille
- il envoie automatiquement un accusé de réception à chaque candidat
- il me propose une liste courte, que je valide
- il envoie les invitations à entretien et réserve les créneaux dans l'agenda, après ma validation
- il met en forme mes notes d'entretien dans un tableau comparatif
- il prépare les réponses négatives, envoyées seulement après ma validation ; le choix final reste le mien

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 6 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 533 (dont réflexion 0) · ~0.0127 $

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (328 caractères)

Je raconte à l'IA une réalisation récente (client, problème, solution, résultat) et je joins deux ou trois photos du chantier ou du projet, et je lui demande de rédiger un post LinkedIn de 150 à 250 mots avec une accroche et une question finale. Je lui demande aussi une liste de 12 idées de posts pour les trois prochains mois.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (451 caractères)

J'ai enregistré dans la solution IA :
- notre présentation, nos services et nos clients types
- la ligne éditoriale : réalisations, savoir-faire, coulisses, conseils
- le ton à employer et cinq de nos meilleurs posts en exemple
- les règles : pas de nom de client sans accord, pas de prix
- un modèle de post (accroche, récit, chiffre clé, appel à l'action)
L'IA rédige des posts homogènes à notre image et me signale tout élément sensible à vérifier.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (507 caractères)

L'agent IA est connecté à LinkedIn, à la messagerie, à l'agenda et au dossier partagé des photos et réalisations :
- chaque lundi, il repère les nouveaux projets terminés et photos du dossier
- il me propose le post de la semaine et me le transmet par email
- il le publie sur la page LinkedIn le mardi à 9 h, seulement après ma validation
- il me signale les commentaires et messages de prospects, et prépare les réponses que je valide
- chaque mois, il m'envoie un bilan : vues, abonnés, contacts entrants

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 6 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 561 (dont réflexion 0) · ~0.0133 $

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (362 caractères)

Je joins les devis PDF des fournisseurs, et je demande à l'IA de les reprendre dans un tableau comparatif avec les mêmes colonnes : prix unitaire et total HT, frais de port, délai de livraison, conditions de paiement, garantie. Je lui demande aussi de signaler les écarts et les éléments manquants, puis je vérifie les montants clés sur les PDF avant de décider.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (455 caractères)

J'ai enregistré dans la solution IA :
- ma grille de critères et leur pondération (prix, délai, paiement, garantie)
- le modèle de mon tableau Excel de comparaison
- nos exigences minimales (délai maximum, paiement à 45 jours fin de mois, garantie d'un an)
- les prix payés lors des derniers achats
L'IA remplit toujours le même tableau, calcule un score, signale les offres hors exigences ou plus chères qu'avant, et propose des arguments de négociation.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (596 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des achats et au fichier Excel de suivi :
- il repère les devis reçus par email et les range dans le dossier de la consultation
- il extrait les données et met à jour le tableau comparatif
- il relance automatiquement les fournisseurs qui n'ont pas répondu ou dont le devis est incomplet
- il me prépare une synthèse avec son classement et les points à négocier
- il rédige les emails de négociation, envoyés seulement après ma validation
- je choisis le fournisseur, il prépare la confirmation de commande, qui part après ma validation

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 5 s

Tokens : entrée 318 · cache écrit 0 · cache lu 4020 · sortie 536 (dont réflexion 0) · ~0.0128 $

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (318 caractères)

Je photographie ou joins les factures du mois (PDF reçus par email, scans des factures papier), et je demande à l'IA d'en extraire fournisseur, date, numéro, montants HT, TVA et TTC, et échéance dans un tableau que je colle dans mon fichier Excel. Je vérifie les totaux avant d'envoyer le fichier à l'expert-comptable.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (457 caractères)

J'ai enregistré dans la solution IA :
- les colonnes exactes de mon fichier Excel de suivi
- la liste de mes fournisseurs habituels et leur catégorie de dépense
- les taux de TVA applicables et les mentions obligatoires d'une facture
- les consignes de mon expert-comptable
L'IA remplit toujours le tableau au même format, classe chaque dépense, et me signale les anomalies : doublon, total incohérent, TVA erronée, mention manquante ou fournisseur inconnu.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (513 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures et au fichier Excel de suivi :
- il repère les factures reçues par email et récupère les scans des factures papier déposés dans le dossier
- il lit chaque facture, la renomme et la classe par mois et par fournisseur
- il ajoute la ligne dans le fichier Excel et me signale les anomalies à vérifier
- il prépare une synthèse mensuelle des dépenses par catégorie
- il prépare l'email d'envoi à l'expert-comptable, qui part après ma validation

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 6 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 559 (dont réflexion 0) · ~0.0132 $

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (375 caractères)

Je joins le contrat reçu en PDF, je précise si c'est un client ou un fournisseur et le montant en jeu, et je demande à l'IA de lister les clauses à risque (responsabilité, pénalités, durée et résiliation, paiement, propriété, juridiction) en expliquant chaque risque simplement et en proposant une reformulation à négocier. Je garde en tête que l'IA ne remplace pas l'avocat.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (470 caractères)

J'ai enregistré dans la solution IA :
- nos conditions générales de vente et d'achat
- nos positions de référence (délai de paiement, plafond de responsabilité, durée maximale d'engagement)
- les clauses que nous refusons toujours
- les critères de recours à l'avocat (montant, durée, exclusivité, clause inhabituelle)
L'IA compare chaque contrat à nos règles, présente les écarts dans le même tableau à chaque fois, et indique clairement si l'avocat doit être consulté.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (527 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats et à l'agenda :
- il repère les contrats reçus par email et les range dans le dossier
- il produit l'analyse des écarts avec nos règles
- il prépare le brouillon de réponse avec nos contre-propositions, envoyé seulement après ma validation
- si un critère est atteint, il prépare l'email à l'avocat avec le contrat et les points à vérifier, envoyé après ma validation
- il note les échéances (préavis, renouvellement) dans l'agenda et m'alerte à l'avance

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 7 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 581 (dont réflexion 0) · ~0.0137 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (353 caractères)

Je donne à l'IA le poste, la date d'arrivée et le contrat du nouveau salarié (CDI, CDD, alternance), et je lui demande une checklist complète avant, pendant et après l'arrivée : DPAE, mutuelle, visite d'information et de prévention, accès, matériel, documents à remettre. Je lui demande aussi un programme de la première semaine et l'email de bienvenue.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (443 caractères)

J'ai enregistré dans la solution IA :
- notre checklist d'accueil type, avec qui fait quoi et quand
- les accès et le matériel à prévoir selon le poste
- la liste des documents administratifs à collecter et à remettre (RIB, pièce d'identité, règlement intérieur, mutuelle)
- notre livret d'accueil et le ton de nos messages
L'IA produit pour chaque arrivée le même parcours adapté au poste, et me signale les démarches manquantes ou en retard.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (592 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au dossier RH partagé et au logiciel de paie :
- dès la signature du contrat, il crée le dossier du salarié et la checklist d'accueil
- il demande les accès et le matériel aux bons interlocuteurs (envoi automatique)
- il envoie au salarié la liste des documents à fournir et le relance si besoin (envoi automatique)
- il me prépare la DPAE et l'inscription mutuelle, que je valide avant envoi
- il planifie dans l'agenda le programme de la première semaine et le point d'étape à 1 mois
- il m'alerte si une démarche n'est pas faite à temps

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 6 s

Tokens : entrée 401 · cache écrit 0 · cache lu 4020 · sortie 552 (dont réflexion 0) · ~0.0134 $

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (330 caractères)

Je colle la fiche produit en italien et je joins une ou deux fiches existantes dont le style me plaît. Je demande à l'IA de l'adapter en français, anglais et allemand, sans traduire mot à mot : même ton, mêmes mots clés de la marque, références adaptées à chaque marché. Je fais ensuite relire chaque version par l'équipe du pays.

### Niveau 2 · Compétences

**Obtenu** (504 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale (ton, vocabulaire de la maison, mots interdits)
- le glossaire des matières, savoir-faire et noms de lignes, avec leur traduction validée par langue
- les spécificités de chaque pays (tailles, unités, mentions légales, sensibilités culturelles)
- des fiches de référence validées par les équipes locales
L'IA livre des fiches homogènes d'une collection à l'autre et me signale les termes absents du glossaire ou les affirmations à vérifier.

### Niveau 3 · Agent

**Obtenu** (559 caractères)

L'agent IA est connecté au logiciel de gestion des fiches produits du site, au dossier partagé de la collection et à la messagerie :
- il repère les nouvelles fiches italiennes validées
- il rédige les versions de chaque pays selon la charte et le glossaire
- il les dépose en brouillon sur le site et envoie automatiquement à chaque équipe locale un email de demande de validation
- il relance automatiquement les équipes après 48 heures sans réponse
- il intègre leurs corrections au glossaire
- il ne publie une fiche qu'après validation de l'équipe locale

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 6 s

Tokens : entrée 390 · cache écrit 0 · cache lu 4020 · sortie 532 (dont réflexion 0) · ~0.0130 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (305 caractères)

Je joins le classeur de formation de 150 pages (ou le chapitre utile) et je demande à l'IA de répondre à une question précise d'un conseiller, par exemple l'entretien d'un cuir grainé. Je lui demande aussi de préparer un quiz de 10 questions sur l'histoire de la maison et les matières, avec les corrigés.

### Niveau 2 · Compétences

**Obtenu** (472 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation à jour (histoire, matières, codes du service)
- les fiches produits par collection, avec matières et conseils d'entretien
- les procédures boutique : retours, réparations, détaxe, clientèle VIP
- le vocabulaire de la maison et les formulations à éviter face au client
L'IA répond toujours selon nos documents, cite la page source, signale quand l'information manque et propose des quiz homogènes par niveau.

### Niveau 3 · Agent

**Obtenu** (569 caractères)

L'agent IA est connecté à la messagerie interne, au planning des boutiques, aux fichiers partagés RH et au catalogue e-commerce :
- il répond en direct aux questions des conseillers, depuis leur téléphone en boutique
- il envoie automatiquement aux nouveaux arrivants un quiz par semaine pendant leur premier mois
- il enregistre les scores dans un fichier de suivi et me signale les lacunes
- il met à jour les fiches quand une nouvelle collection arrive, après ma validation
- il me prépare chaque mois une synthèse des questions fréquentes pour enrichir la formation

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 6 s

Tokens : entrée 416 · cache écrit 0 · cache lu 4020 · sortie 572 (dont réflexion 0) · ~0.0139 $

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (338 caractères)

Je joins les certificats et rapports d'audit reçus d'un fournisseur (PDF), et je demande à l'IA d'en extraire pour chacun le type de document, l'organisme émetteur, le site couvert et la date d'expiration, sous forme de tableau à coller dans mon Excel. Je lui demande aussi de me dire ce qui semble manquer ou expirer dans les trois mois.

### Niveau 2 · Compétences

**Obtenu** (468 caractères)

J'ai enregistré dans la solution IA :
- la liste des documents exigés par catégorie de fournisseur (tannerie, atelier, textile)
- les certifications acceptées (LWG, ISO 14001, traçabilité du cuir, etc.)
- la structure de notre tableau Excel de suivi
- les délais d'alerte avant expiration
- un modèle d'email de relance en français, italien et anglais
L'IA remplit toujours les mêmes colonnes et signale les écarts : document manquant, expiré, illisible ou incohérent.

### Niveau 3 · Agent

**Obtenu** (575 caractères)

L'agent IA est connecté à la messagerie achats, aux dossiers partagés fournisseurs et au tableau Excel de suivi :
- il repère les documents reçus par email et les range dans le bon dossier
- il lit chaque document et met à jour le tableau
- il envoie automatiquement les relances simples (document bientôt expiré, pièce manquante)
- il prépare, pour ma validation, les relances sensibles (fournisseur stratégique, certificat expiré, audit non conforme)
- chaque semaine, il m'envoie la liste des fournisseurs à risque ; la décision de suspendre un fournisseur reste la mienne

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 6 s

Tokens : entrée 285 · cache écrit 0 · cache lu 4020 · sortie 564 (dont réflexion 0) · ~0.0132 $

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (301 caractères)

Je joins les fichiers Excel de ventes de la semaine (boutiques par pays et site e-commerce), et je demande à l'IA de me rédiger un résumé d'une page : chiffre d'affaires par canal, pays et catégorie (maroquinerie, prêt-à-porter, accessoires), comparaison avec la semaine précédente et points d'alerte.

### Niveau 2 · Compétences

**Obtenu** (482 caractères)

J'ai enregistré dans la solution IA :
- la structure de chaque fichier Excel (boutiques, e-commerce, pays)
- les indicateurs suivis et leur calcul (CA, panier moyen, taux de retour, ventes par catégorie)
- les objectifs hebdomadaires par pays et par canal
- les seuils d'alerte (écart à l'objectif, rupture de best-sellers)
- un modèle de synthèse
L'IA produit chaque lundi la même synthèse, comparée aux objectifs et à l'an dernier, et signale les écarts et les données manquantes.

### Niveau 3 · Agent

**Obtenu** (522 caractères)

L'agent IA est connecté aux dossiers partagés des ventes, au logiciel de caisse des boutiques, à la plateforme e-commerce et à la messagerie :
- le lundi à 7h, il récupère les chiffres de la semaine dans chaque source
- il vérifie les données et me signale les boutiques ou pays manquants
- il met à jour le fichier de suivi hebdomadaire
- il rédige la synthèse avec les points d'alerte et me l'envoie automatiquement
- il prépare un email aux directeurs pays concernés par une alerte, envoyé seulement après ma validation

**Vos remarques** :

