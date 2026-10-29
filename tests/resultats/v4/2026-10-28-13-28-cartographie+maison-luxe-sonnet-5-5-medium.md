# Prompt v4 · 28/10/2026 14:28:08

- Version : **v4** — Reprend la v3 et demande de décrire d'abord ce qui devient possible avec l'IA, puis la liste des actions. 4 exemples (ajout de « Préparer un rendez-vous client »).
- Modèle : claude-sonnet-5-5 · effort medium
- Jeux : cartographie, maison-luxe

## Synthèse de consommation

- Durée moyenne : 5 s par cas
- Tokens moyens par cas : entrée 325, cache écrit 861, cache lu 3159, sortie 524 (dont réflexion 0)
- Coût estimé : ~0.121 $ au total, ~0.0087 $ par cas (tarifs indicatifs)

## Faire des devis

`cartographie / devis` · 5 s

Tokens : entrée 288 · cache écrit 4020 · cache lu 0 · sortie 517 (dont réflexion 0) · ~0.0158 $

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (287 caractères)

Je décris à l'IA la demande du client (ou je colle son email), je joins mon fichier Excel de chiffrage et un ancien devis similaire, et je lui demande de rédiger un devis complet : désignation, quantités, prix, conditions et délai. Je relis avant de le saisir dans mon logiciel de devis.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (433 caractères)

J'ai enregistré dans la solution IA :
- mes devis types par prestation ou produit, avec leurs formulations
- ma grille de prix, mes marges minimales et les remises autorisées
- la structure de mon Excel de chiffrage
- mes conditions de paiement, délais et mentions obligatoires
L'IA chiffre et rédige un devis conforme à mes tarifs et au même format à chaque fois. Elle signale les informations manquantes et les remises hors règles.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (584 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de chiffrage et au logiciel de devis :
- il repère les demandes de devis reçues par email et relève les besoins du client
- il pose au client, par email automatique, les questions simples qui manquent (quantité, délai)
- il chiffre dans Excel et crée le devis dans le logiciel à partir du modèle type adapté
- il me soumet le devis ; l'envoi au client n'a lieu qu'après ma validation
- il relance automatiquement par un email simple les devis sans réponse après 7 jours, sauf pour les clients importants que je valide moi-même

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 5 s

Tokens : entrée 241 · cache écrit 4020 · cache lu 0 · sortie 466 (dont réflexion 0) · ~0.0152 $

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (218 caractères)

Je joins mon fichier Excel des affaires en cours, et je demande à l'IA de repérer celles à relancer (devis sans réponse depuis plus de dix jours, par exemple) puis de rédiger un email de relance adapté à chaque client.

### Niveau 2 · Compétences

**Obtenu** (434 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel (client, montant, date du devis, statut)
- mes règles de relance : délai par type d'affaire, nombre maximum de relances
- la liste des affaires à ne jamais relancer sans mon accord (gros montants, clients sensibles)
- mon ton et des exemples de mes relances
L'IA me dit chaque semaine quelles affaires relancer et rédige des messages cohérents avec mes règles.

### Niveau 3 · Agent

**Obtenu** (504 caractères)

L'agent IA est connecté à mon fichier Excel des affaires et à ma messagerie :
- chaque matin, il repère les affaires qui atteignent le délai de relance
- il envoie automatiquement la relance aux petites affaires que j'ai marquées « relance auto »
- pour les autres, il prépare un brouillon que je valide avant envoi
- il note la date et le contenu de chaque relance dans le fichier
- il me signale les clients qui répondent, et ceux restés sans réponse après deux relances, pour que je décide de la suite

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 5 s

Tokens : entrée 336 · cache écrit 4020 · cache lu 0 · sortie 507 (dont réflexion 0) · ~0.0158 $

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (237 caractères)

Je joins mon fichier Excel de suivi des paiements, et je demande à l'IA de repérer les affaires dont une échéance (acompte ou solde) est dépassée. Je lui demande ensuite de rédiger pour chacune un email de relance poli, adapté au retard.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (443 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel et les échéances d'acompte et de solde
- les délais de relance : rappel aimable, relance ferme, dernier avis
- trois modèles d'email, un par étape, avec mes coordonnées bancaires
- les cas à me remonter : gros montant, client important, litige
L'IA classe les retards, choisit le bon ton et rédige des relances homogènes, en signalant les cas qui demandent ma décision.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (551 caractères)

L'agent IA est connecté à mon fichier Excel, à la messagerie et au CRM :
- chaque matin, il repère les échéances dépassées dans le fichier
- il envoie automatiquement le rappel aimable aux retards de moins de 15 jours
- il prépare les relances fermes et les derniers avis, et ne les envoie qu'après ma validation
- il me signale les clients importants et les litiges, sans rien envoyer
- quand un paiement est noté dans le fichier, il arrête les relances et passe l'affaire en « réglée » dans le CRM
- chaque semaine, il me résume les sommes en retard

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 4 s

Tokens : entrée 323 · cache écrit 0 · cache lu 4020 · sortie 469 (dont réflexion 0) · ~0.0061 $

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (258 caractères)

Je copie l'email de demande de congés dans la conversation, je joins mon fichier Excel des congés, et je demande à l'IA d'analyser la demande, de me dire s'il y a un chevauchement avec d'autres absences, puis de rédiger une réponse d'acceptation ou de refus.

### Niveau 2 · Compétences

**Obtenu** (414 caractères)

J'ai enregistré dans la solution IA :
- mes règles de congés (préavis, durée maximale, périodes sensibles)
- le nombre minimum de personnes présentes par service
- la structure de mon fichier Excel des congés
- un modèle de réponse pour l'accord, le refus et la contre-proposition
L'IA vérifie chaque demande selon mes règles, me recommande une réponse, et signale les conflits de dates ou les soldes insuffisants.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (495 caractères)

L'agent IA est connecté à la messagerie et au fichier Excel des congés :
- il détecte les emails de demande de congés et en extrait les dates
- il vérifie le solde du salarié et les absences déjà prévues
- il me présente une recommandation (accord, refus ou autre date) avec son motif
- après ma validation, il envoie la réponse au salarié
- il met à jour le fichier de suivi
- si je le souhaite, les accords simples sans conflit partent automatiquement, les refus restent soumis à ma validation

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 5 s

Tokens : entrée 317 · cache écrit 0 · cache lu 4020 · sortie 536 (dont réflexion 0) · ~0.0068 $

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (274 caractères)

Je décris à l'IA le poste, les missions et le profil recherché, et je lui demande de rédiger l'annonce. Ensuite je joins quelques CV reçus par email avec l'annonce, et je lui demande de les comparer au profil et de me proposer des questions d'entretien identiques pour tous.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (435 caractères)

J'ai enregistré dans la solution IA :
- un modèle d'annonce avec notre présentation, nos valeurs et nos avantages
- une grille de critères de sélection (indispensables et souhaitables)
- les règles à respecter : pas de critère discriminatoire
- un modèle de fiche d'entretien avec notes par critère
L'IA rédige des annonces homogènes, classe les CV selon la grille avec une justification, et signale les points à vérifier en entretien.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (633 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et au dossier partagé des candidatures :
- il prépare le brouillon de l'annonce, que je valide avant sa publication
- il classe chaque CV reçu dans le dossier du poste et le compare à ma grille
- il envoie automatiquement l'accusé de réception à chaque candidat
- il me présente une présélection motivée ; je décide qui rencontrer
- il propose des créneaux d'entretien dans mon agenda et prépare les invitations, envoyées après ma validation
- il prépare la fiche d'entretien et un tableau comparatif après mes notes
- il prépare les réponses de refus, envoyées après ma validation

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 5 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 526 (dont réflexion 0) · ~0.0067 $

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (292 caractères)

Je décris à l'IA une réalisation récente (client, problème, solution, résultat) ou je lui dicte mes idées en vrac, et je lui demande de rédiger un post LinkedIn de 150 mots avec une accroche et trois variantes de titre. Je lui demande aussi de me proposer quatre sujets de posts pour le mois.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (408 caractères)

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise, nos clients cibles et notre savoir-faire
- notre ton de voix, avec trois posts que j'ai aimés
- les règles : pas de nom de client sans accord, pas de chiffres confidentiels
- un calendrier type : réalisation, conseil, coulisses, témoignage
L'IA propose chaque semaine un post dans notre style, sur le bon thème, sans mention interdite.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (563 caractères)

L'agent IA est connecté à ma messagerie, à mon agenda, au dossier de photos et de réalisations et à LinkedIn :
- chaque lundi, il me propose trois sujets tirés de mes derniers chantiers, devis signés et photos
- il rédige le post choisi avec l'image adaptée et me l'envoie par email
- après ma validation, il programme la publication au meilleur créneau de la semaine
- chaque mois, il me prépare un bilan des posts les plus lus et des contacts reçus
- il me prépare un brouillon de réponse aux commentaires et aux messages de prospects, que je valide avant envoi

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 6 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 539 (dont réflexion 0) · ~0.0068 $

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (359 caractères)

Je joins les devis fournisseurs en PDF dans la conversation, et je demande à l'IA de relever pour chacun le prix, le délai, les conditions de paiement et la garantie, puis de me les présenter dans un seul tableau comparatif que je peux copier dans Excel. Je lui demande aussi de repérer ce qui n'est pas comparable (quantités, frais de port, options en plus).

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (437 caractères)

J'ai enregistré dans la solution IA :
- mes critères de comparaison et leur importance (prix, délai, paiement, garantie)
- mon modèle de tableau Excel avec ses colonnes
- mes conditions d'achat habituelles (délai de paiement, garantie minimale)
- la liste de mes fournisseurs actuels et leurs derniers prix
L'IA remplit toujours le même tableau, signale les informations manquantes, les écarts avec nos conditions et les hausses de prix.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (558 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des devis et au fichier Excel de comparaison :
- il repère les devis PDF reçus par email et les range dans le dossier de la demande
- il en extrait les données et remplit le tableau Excel
- il me prépare une synthèse avec le fournisseur le mieux placé et les points à négocier
- il rédige les emails de demande d'informations manquantes et les envoie automatiquement
- il prépare les emails de négociation et de commande, qui ne partent qu'après ma validation
Le choix du fournisseur reste le mien.

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 5 s

Tokens : entrée 318 · cache écrit 0 · cache lu 4020 · sortie 536 (dont réflexion 0) · ~0.0068 $

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (245 caractères)

Je joins une facture fournisseur (PDF ou photo du courrier scanné), et je demande à l'IA d'en extraire le fournisseur, le numéro, la date, le montant HT, la TVA, le TTC et l'échéance, sous forme d'une ligne que je recopie dans mon fichier Excel.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (442 caractères)

J'ai enregistré dans la solution IA :
- les colonnes de mon fichier Excel de suivi et leur format (dates, montants)
- la liste de mes fournisseurs avec leur catégorie de dépense
- les règles de contrôle : TVA cohérente, doublons, mentions obligatoires
- le nom de classement des fichiers (année-mois-fournisseur-numéro)
L'IA me rend toujours la même ligne prête à coller, et signale les doublons, montants incohérents ou factures incomplètes.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (579 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures, au fichier Excel de suivi et à l'email de l'expert-comptable :
- il repère les factures reçues par email et enregistre les pièces jointes dans le dossier
- il lit chaque facture, y compris les courriers que je scanne, et la renomme
- il ajoute la ligne dans le fichier Excel et signale doublons ou anomalies
- il m'envoie chaque semaine la liste des factures à vérifier, que je valide
- en fin de mois, il prépare l'email avec le fichier et les pièces pour l'expert-comptable : il part après ma validation

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 4 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 540 (dont réflexion 0) · ~0.0068 $

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (341 caractères)

Je joins le contrat reçu (PDF ou Word) et je demande à l'IA de repérer les clauses à risque pour nous : durée et reconduction, pénalités, responsabilité, résiliation, exclusivité, paiement. Je lui demande aussi de proposer une reformulation pour chaque clause à négocier. L'IA ne remplace pas l'avocat : elle m'aide à préparer mes questions.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (450 caractères)

J'ai enregistré dans la solution IA :
- la liste des clauses à surveiller et nos limites acceptables (délai de paiement, plafond de responsabilité, durée d'engagement)
- nos conditions générales et nos contrats types
- les clauses de remplacement que nous proposons
- le seuil à partir duquel je consulte l'avocat (montant, durée, exclusivité)
L'IA relit chaque contrat avec la même grille, signale les écarts et m'indique si l'avocat est nécessaire.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (517 caractères)

L'agent IA est connecté à la messagerie et aux dossiers partagés :
- il détecte les contrats reçus par email et les range dans le dossier du client ou du fournisseur
- il les relit avec notre grille et prépare une fiche : clauses à risque, propositions de modification, avis « signer » ou « avocat »
- il me l'envoie pour décision
- si l'avocat est nécessaire, il prépare l'email avec le contrat et les points à examiner, et l'envoie après ma validation
- il note les dates de reconduction et de préavis dans l'agenda

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 5 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 532 (dont réflexion 0) · ~0.0067 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (296 caractères)

Je donne à l'IA le poste, la date d'arrivée et la taille de l'équipe, et je lui demande une liste complète des démarches à faire avant l'arrivée (contrat, accès, matériel, documents administratifs), puis un programme pour la première semaine. Je lui demande aussi de rédiger l'email de bienvenue.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (396 caractères)

J'ai enregistré dans la solution IA :
- ma liste type des démarches par poste (accès, matériel, déclaration d'embauche, mutuelle)
- la liste des documents à demander au salarié
- un modèle de programme de la première semaine
- le ton de nos emails et notre livret d'accueil
L'IA produit pour chaque arrivée un parcours complet adapté au poste, avec les échéances, sans oubli d'une fois à l'autre.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (637 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et aux dossiers partagés :
- dès que je lui indique une embauche, il crée la liste des démarches avec des dates dans mon agenda
- il envoie automatiquement au salarié l'email de bienvenue avec la liste des documents à fournir
- il relance automatiquement le salarié si des documents manquent
- il prépare, pour ma validation, les demandes de matériel et d'accès au prestataire informatique
- il planifie les rendez-vous de la première semaine et le point de fin de période d'essai, après mon accord
- il classe les documents reçus dans le dossier du salarié et me signale ce qui manque

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 5 s

Tokens : entrée 401 · cache écrit 0 · cache lu 4020 · sortie 536 (dont réflexion 0) · ~0.0070 $

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (319 caractères)

Je colle dans la conversation la fiche produit italienne, avec le nom de la collection et le pays visé, et je demande à l'IA de la décliner en anglais, français ou japonais en gardant le ton raffiné de la maison. Je lui demande aussi de signaler les expressions qui ne passent pas telles quelles dans la culture locale.

### Niveau 2 · Compétences

**Obtenu** (450 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale (ton, mots à privilégier et à éviter)
- le glossaire des matières, des savoir-faire et des noms de modèles, à ne pas traduire
- des fiches de référence réussies dans chaque langue
- les règles locales par pays (mentions d'entretien, tailles, formules interdites)
L'IA produit des fiches fidèles au style de la maison, homogènes d'une collection à l'autre, et signale les termes douteux.

### Niveau 3 · Agent

**Obtenu** (570 caractères)

L'agent IA est connecté au site e-commerce, au dossier partagé de la charte éditoriale et à la messagerie :
- dès qu'une fiche italienne est publiée en brouillon, il la récupère
- il rédige la version de chaque pays selon la charte et le glossaire
- il dépose les fiches dans le dossier partagé et envoie un email à chaque équipe locale pour validation, avec les points d'attention
- après leur validation, il charge les textes dans le site
- il envoie automatiquement un rappel si une équipe n'a pas répondu sous 3 jours
- la mise en ligne reste soumise à ma validation

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 4 s

Tokens : entrée 390 · cache écrit 0 · cache lu 4020 · sortie 498 (dont réflexion 0) · ~0.0066 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (230 caractères)

Je joins des extraits du classeur de formation (histoire de la maison, matières, codes du service) et je demande à l'IA de répondre aux questions d'un nouveau conseiller, puis de lui poser un quiz de dix questions avec correction.

### Niveau 2 · Compétences

**Obtenu** (439 caractères)

J'ai enregistré dans la solution IA :
- le classeur de 150 pages, découpé par thème (histoire, matières, entretien, service)
- les fiches produits des collections en cours
- les codes du service et les phrases à éviter en boutique
- un format de quiz par niveau, avec correction
L'IA répond en s'appuyant uniquement sur nos documents, de façon courte et utilisable face au client, et dit quand l'information manque pour que je la complète.

### Niveau 3 · Agent

**Obtenu** (594 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé de formation et au outil de suivi RH :
- dès qu'un conseiller est recruté, il lui envoie automatiquement un message d'accueil avec le lien vers l'assistant et le programme
- il envoie automatiquement un mini quiz chaque semaine pendant les premiers mois
- il enregistre les scores et les thèmes mal maîtrisés dans le fichier de suivi
- il met à jour ses réponses quand un document est ajouté ou modifié dans le dossier
- il me prépare une synthèse par conseiller et par boutique, et je valide avant tout envoi au directeur de boutique

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 5 s

Tokens : entrée 416 · cache écrit 0 · cache lu 4020 · sortie 610 (dont réflexion 0) · ~0.0077 $

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (373 caractères)

Je joins le certificat ou l'audit d'un fournisseur (par exemple un certificat Leather Working Group ou un document de traçabilité du cuir), et je demande à l'IA d'en extraire le fournisseur, le type de document, la date d'émission, la date d'expiration et les éventuelles réserves. Je lui demande aussi de rédiger un email de relance si le document est expiré ou incomplet.

### Niveau 2 · Compétences

**Obtenu** (461 caractères)

J'ai enregistré dans la solution IA :
- la liste des documents exigés par type de fournisseur (tanneries, ateliers, fournisseurs de tissus)
- les certificats acceptés et leurs règles de validité
- le délai d'alerte avant expiration (par exemple 90 jours)
- la structure de notre tableau Excel de suivi
- un modèle d'email de relance
L'IA lit chaque document, remplit les mêmes colonnes à chaque fois, et signale les pièces manquantes, expirées ou non conformes.

### Niveau 3 · Agent

**Obtenu** (685 caractères)

L'agent IA est connecté à la messagerie, aux dossiers partagés et au tableau Excel de suivi :
- il récupère les documents reçus par email et les range dans le dossier du fournisseur
- il lit chaque document et remplit le tableau (type, dates, statut)
- chaque semaine, il repère les documents manquants ou qui expirent bientôt
- il envoie automatiquement un simple rappel de renouvellement aux fournisseurs dont le certificat expire dans 90 jours
- pour un document expiré, non conforme ou un fournisseur stratégique, il prépare la relance et me la soumet : elle part après ma validation
- il me prépare chaque mois la liste des fournisseurs à risque, et je décide de la suite à donner

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 4 s

Tokens : entrée 285 · cache écrit 0 · cache lu 4020 · sortie 517 (dont réflexion 0) · ~0.0065 $

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (263 caractères)

Je joins les fichiers Excel de la semaine (ventes boutiques par pays, ventes du site e-commerce), et je demande à l'IA de rédiger un résumé : chiffre d'affaires total, écart avec la semaine précédente, meilleures et moins bonnes boutiques, et les points d'alerte.

### Niveau 2 · Compétences

**Obtenu** (438 caractères)

J'ai enregistré dans la solution IA :
- la structure de mes fichiers Excel (boutiques, e-commerce, pays, devises)
- les indicateurs suivis et leur mode de calcul
- mes objectifs de vente par pays et par ligne (maroquinerie, prêt-à-porter, accessoires)
- les seuils d'alerte (par exemple un recul supérieur à 10 %)
Chaque lundi, l'IA produit le même résumé, compare aux objectifs et à la semaine précédente, et signale les écarts anormaux.

### Niveau 3 · Agent

**Obtenu** (487 caractères)

L'agent IA est connecté aux dossiers partagés où arrivent les fichiers Excel, et à la messagerie :
- le lundi matin, il récupère les fichiers de la semaine et vérifie qu'aucun n'est manquant
- il relance automatiquement par email la boutique ou le pays dont le fichier n'est pas arrivé
- il calcule les indicateurs et rédige le résumé d'une page avec les points d'alerte
- il me l'envoie par email avant ma première réunion
- il ne transmet rien au comité de direction sans ma validation

**Vos remarques** :

