# Prompt v4 · 28/10/2026 14:29:01

- Version : **v4** — Reprend la v3 et demande de décrire d'abord ce qui devient possible avec l'IA, puis la liste des actions. 4 exemples (ajout de « Préparer un rendez-vous client »).
- Modèle : claude-haiku-5-5 · effort medium
- Jeux : cartographie, maison-luxe

## Synthèse de consommation

- Durée moyenne : 7 s par cas
- Tokens moyens par cas : entrée 325, cache écrit 861, cache lu 3159, sortie 1489 (dont réflexion 893)
- Coût estimé : ~0.013 $ au total, ~0.0009 $ par cas (tarifs indicatifs)

## Faire des devis

`cartographie / devis` · 3 s

Tokens : entrée 288 · cache écrit 4020 · cache lu 0 · sortie 525 (dont réflexion 0) · ~0.0008 $

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (317 caractères)

Je copie dans la conversation les lignes du besoin client (produits ou prestations, quantités, délais, remises habituelles) et je joins mon fichier Excel de chiffrage ainsi qu'un ancien devis accepté. Je demande à l'IA de me proposer le chiffrage détaillé et un texte de devis reprenant le même format que mon modèle.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (489 caractères)

J'ai enregistré dans la solution IA :
- mes tarifs, remises autorisées et conditions de paiement
- mes modèles de devis types par famille de prestation
- les règles de chiffrage de mon fichier Excel (marges, frais de déplacement, minimum de facturation)
- les mentions obligatoires et conditions générales de vente
L'IA produit un devis conforme à mes règles, homogène d'une fois à l'autre, et signale les lignes hors grille tarifaire ou les remises qui dépassent mon seuil d'autorisation.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (485 caractères)

L'agent IA est connecté à la messagerie, au CRM et au logiciel de devis :
- il reçoit la demande client par email et crée la fiche prospect dans le CRM
- il prépare le chiffrage à partir du modèle type et des tarifs enregistrés
- il génère le devis dans le logiciel de devis avec un numéro et une date de validité
- il m'envoie le devis pour validation, sans l'envoyer au client
- après mon accord, il envoie le devis par email et programme une relance à J+7 si le client ne répond pas

**Vos remarques** : 


## Relance commerciale

`cartographie / relance-commerciale` · 12 s

Tokens : entrée 241 · cache écrit 4020 · cache lu 0 · sortie 2310 (dont réflexion 1687) · ~0.0017 $

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (355 caractères)

Je copie dans la conversation la liste de mes affaires en cours issue de mon fichier Excel, avec pour chacune le client, le montant, la date du dernier échange et l'étape. Je demande à l'IA de repérer les affaires sans nouvelles depuis plus de deux semaines et de rédiger un email de relance pour chacune, que je relis ensuite avant de l'envoyer moi-même.

### Niveau 2 · Compétences

**Obtenu** (533 caractères)

J'ai enregistré dans la solution IA :
- nos délais de relance par étape (7 jours après un devis, 15 jours après une démonstration)
- notre ton, le vouvoiement et une signature type
- les clients à ne jamais relancer sans moi (gros comptes, litiges, négociations de prix)
- le modèle de mon fichier Excel des affaires en cours
L'IA liste chaque semaine les relances dues dans le même format, rédige des emails homogènes d'une fois à l'autre, et signale les lignes incomplètes ou les affaires qui sortent des règles pour que je décide.

### Niveau 3 · Agent

**Obtenu** (663 caractères)

L'agent IA est connecté à mon fichier Excel des affaires, à ma messagerie et à mon agenda :
- il lit chaque jour le fichier et repère les affaires dont la relance est due
- il rédige un email de relance adapté à l'étape de l'affaire et au client
- pour les relances simples et répétitives (rappel de devis, suivi sans réponse), il les envoie automatiquement depuis ma messagerie et note la date d'envoi dans le fichier
- pour les gros comptes, les remises de prix ou toute proposition engageante, il me soumet le brouillon et n'envoie qu'après ma validation
- il crée dans mon agenda une tâche de rappel pour les affaires restées sans réponse après trois relances

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 4 s

Tokens : entrée 336 · cache écrit 4020 · cache lu 0 · sortie 584 (dont réflexion 0) · ~0.0008 $

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (330 caractères)

Je copie dans la conversation la liste des factures en retard extraite de mon fichier Excel (client, affaire, montant, date d'échéance), et je demande à l'IA de rédiger pour chaque client une relance polie et ferme, adaptée au nombre de jours de retard. Je joins aussi le modèle de relance que j'utilise aujourd'hui si j'en ai un.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (580 caractères)

J'ai enregistré dans la solution IA :
- les conditions de paiement de nos affaires (acompte, solde à la livraison, délai en jours)
- trois niveaux de relance : rappel amiable, relance ferme, mise en demeure à valider
- le ton à employer avec nos clients et des exemples d'emails déjà envoyés
- la structure de notre fichier Excel de suivi des paiements
L'IA produit des relances homogènes, conformes à nos conditions et au niveau de retard. Elle signale les affaires dont le paiement est partiel ou dont le client a déjà été relancé plusieurs fois, pour que je décide de la suite.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (533 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de suivi des paiements et au CRM :
- il repère chaque jour les échéances dépassées dans le fichier Excel
- il prépare une relance adaptée au nombre de jours de retard
- il envoie automatiquement le premier rappel amiable aux clients habituels, sans risque
- il me soumet pour validation toute relance ferme ou mise en demeure, ainsi que tout client important
- il met à jour le statut de l'affaire dans le CRM et passe en « affaire réglée » dès que le paiement est enregistré

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 12 s

Tokens : entrée 323 · cache écrit 0 · cache lu 4020 · sortie 2710 (dont réflexion 2138) · ~0.0014 $

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (269 caractères)

Je joins le fichier Excel des congés et je copie dans la conversation l'email de demande d'un salarié. Je demande à l'IA de vérifier si les dates sont compatibles avec le planning et les congés déjà pris, puis de me proposer une réponse que je relis avant de l'envoyer.

### Niveau 2 · Compétences

**Obtenu** (421 caractères)

J'ai enregistré dans la solution IA :
- les règles de congés (délai de prévenance, périodes de fermeture, effectif minimum par service)
- le solde de congés acquis par salarié
- un modèle de réponse pour accepter, refuser ou demander des précisions
- le format de notre fichier de suivi des congés
L'IA recommande chaque fois une réponse conforme à nos règles, et signale les conflits de dates ou les soldes insuffisants.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (739 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel des congés et à l'agenda :
- il lit chaque nouvelle demande de congé reçue par email et envoie immédiatement un accusé de réception au salarié
- il vérifie dans le fichier les dates déjà prises, l'effectif du service et le solde du salarié
- il me prépare une recommandation (accepter, refuser ou demander des précisions) avec les conflits éventuels
- il prépare la réponse au salarié, mais elle part seulement après ma validation, car elle concerne une décision sur un salarié
- une fois la réponse validée et envoyée, il inscrit les dates acceptées dans le fichier Excel et dans l'agenda
- chaque lundi, il m'envoie la liste des congés à venir et les demandes encore sans réponse

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 11 s

Tokens : entrée 317 · cache écrit 0 · cache lu 4020 · sortie 2442 (dont réflexion 1832) · ~0.0013 $

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (394 caractères)

Je copie l'annonce ou la fiche de poste dans la conversation, et je demande à l'IA de rédiger une annonce claire et attractive. Pour le tri, je joins les CV reçus, un par un ou en lot, et je demande à l'IA de les comparer aux critères du poste et de me résumer les points forts et les points faibles de chaque candidat. Je lui demande aussi une grille de questions d'entretien adaptée au poste.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (481 caractères)

J'ai enregistré dans la solution IA :
- la fiche de poste type et les compétences indispensables par métier
- nos critères de tri et de rejet, validés par moi
- notre modèle d'annonce et le ton de notre marque employeur
- une grille d'entretien identique pour tous les candidats
L'IA rédige des annonces conformes à nos règles et trie les CV selon nos critères, en signalant les hésitations et les informations manquantes. Les grilles restent identiques d'un recrutement à l'autre.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (661 caractères)

L'agent IA est connecté à la messagerie, à l'agenda et au dossier partagé des candidatures :
- il rédige l'annonce à partir de la fiche de poste et la met en ligne sur les sites que j'ai choisis, après ma validation
- il reçoit les CV, les range dans le dossier du poste et prépare pour chaque candidat une fiche de synthèse selon mes critères
- il envoie automatiquement un accusé de réception à chaque candidat
- il propose des créneaux d'entretien dans mon agenda et prépare l'email d'invitation, envoyé seulement après ma validation
- il me remet le classement des candidats sans jamais écarter quelqu'un seul : la décision de rejet ou d'embauche me revient

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 10 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 2175 (dont réflexion 1587) · ~0.0012 $

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (271 caractères)

Je donne à l'IA une idée ou une réalisation récente avec ses résultats, et je lui demande de rédiger un post LinkedIn de 150 à 200 mots, au ton professionnel, qui se termine par une question pour inciter aux échanges. Je joins si besoin une photo ou un témoignage client.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (466 caractères)

J'ai enregistré dans la solution IA :
- la ligne éditoriale de l'entreprise et ses 3 à 4 thèmes de publication
- nos réalisations et études de cas validées, avec les autorisations clients
- le ton et le style de nos publications passées
- un calendrier type : un post par semaine, au format LinkedIn
L'IA rédige chaque semaine des posts dans la même voix, qui valorisent nos réalisations sans inventer de chiffres, et signale les sujets qui demandent une validation.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (714 caractères)

L'agent IA est connecté à LinkedIn, à la messagerie, au dossier partagé de photos et de réalisations, et à l'agenda :
- il repère chaque lundi dans le dossier partagé les nouvelles réalisations, photos et témoignages
- il rédige le post de la semaine à partir de ces éléments et de la ligne éditoriale
- il m'envoie le brouillon par email avec deux propositions de visuel, et part seulement après ma validation
- une fois validé, il publie le post sur LinkedIn le mardi matin, à l'heure choisie
- il répond automatiquement aux demandes de connexion et aux remerciements simples, sans attendre ma validation ; les questions commerciales me sont transmises
- il me prépare chaque mois un bilan des posts les plus lus

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 9 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 2109 (dont réflexion 1542) · ~0.0011 $

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (268 caractères)

Je joins les devis fournisseurs en PDF, et je demande à l'IA de relever pour chacun le prix, le délai, les conditions de paiement et la garantie, puis de les présenter dans un tableau comparatif. Je lui demande aussi de me signaler les points manquants ou inhabituels.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (466 caractères)

J'ai enregistré dans la solution IA :
- mon modèle de tableau comparatif (prix, délai, paiement, garantie)
- mes règles d'achat : seuils, délai de livraison et conditions de paiement acceptables
- mes conditions actuelles avec les fournisseurs habituels
- la liste des mentions à vérifier dans chaque devis (validité, transport, TVA)
L'IA lit chaque PDF de la même façon, remplit le tableau à l'identique et signale les offres hors règles ou les mentions manquantes.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (694 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des achats et au tableur Excel :
- il récupère les devis PDF reçus par email et les range dans le dossier de la consultation
- il extrait les données de chaque devis et met à jour le tableau comparatif Excel
- il calcule le coût total par fournisseur (transport et remises inclus) et classe les offres selon mes critères
- il me prépare chaque semaine une synthèse avec le fournisseur recommandé et les points de négociation
- il prépare un email de demande de précisions aux fournisseurs, qui part seulement après ma validation car il engage l'entreprise
- il ne choisit jamais le fournisseur à ma place : la décision reste la mienne

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 3 s

Tokens : entrée 318 · cache écrit 0 · cache lu 4020 · sortie 605 (dont réflexion 0) · ~0.0004 $

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (342 caractères)

Je copie le texte d'une facture fournisseur reçue par email, ou je joins la photo ou le PDF scanné d'une facture reçue par courrier, et je demande à l'IA d'en extraire le fournisseur, la date, le numéro de facture, les montants HT, TVA et TTC, et l'échéance, puis de me les présenter sous forme de ligne prête à copier dans mon fichier Excel.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (502 caractères)

J'ai enregistré dans la solution IA :
- la liste de mes fournisseurs récurrents avec leur numéro de compte comptable
- le plan comptable utilisé par l'expert-comptable et le mode de classement des charges
- les taux de TVA appliqués à mes achats
- le modèle de fichier de suivi des factures avec ses colonnes
L'IA extrait les mêmes informations d'une facture à l'autre, propose le bon compte de charge, et signale les factures illisibles, les doublons ou les montants qui ne correspondent pas à la TVA.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (630 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures et au fichier de suivi Excel :
- il repère dans la messagerie les emails contenant une facture fournisseur et les télécharge dans le dossier de l'année
- il lit chaque facture et en extrait les informations clés
- il ajoute une ligne dans le fichier de suivi avec le compte comptable proposé
- il range la facture dans le sous-dossier du fournisseur
- il m'envoie chaque semaine la liste des factures à vérifier (montant inhabituel, doublon, facture illisible)
- il prépare l'envoi du lot mensuel à l'expert-comptable, qui part seulement après ma validation

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 10 s

Tokens : entrée 310 · cache écrit 0 · cache lu 4020 · sortie 2202 (dont réflexion 1557) · ~0.0012 $

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (342 caractères)

Je joins le contrat reçu au format PDF ou Word, et je demande à l'IA de repérer les clauses à risque : responsabilité, pénalités de retard, durée, reconduction tacite, résiliation, confidentialité et propriété intellectuelle. Je lui demande aussi de me dire lesquelles méritent d'être négociées et lesquelles justifient de consulter l'avocat.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (483 caractères)

J'ai enregistré dans la solution IA :
- nos conditions générales de vente et d'achat
- la liste des clauses à risque à surveiller (responsabilité, pénalités, reconduction tacite)
- nos seuils de montant et de durée au-delà desquels il faut consulter l'avocat
- les contrats déjà signés et les litiges passés
L'IA compare chaque contrat à nos règles et signale chaque écart avec un niveau de risque. Le résultat est homogène d'un contrat à l'autre et ne manque aucune clause sensible.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (741 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats et à l'agenda :
- il récupère chaque contrat reçu par email et le range dans le dossier du client ou du fournisseur
- il prépare une fiche d'analyse avec les clauses à risque et leur niveau
- il m'envoie la fiche par email dès réception, sans envoi automatique à l'extérieur
- il prépare un brouillon de réponse au client ou au fournisseur avec les modifications proposées, et ne l'envoie qu'après ma validation, car cela engage l'entreprise
- il me signale les contrats qui dépassent nos seuils et propose de les transmettre à l'avocat, sans rien envoyer sans mon accord
- il inscrit dans l'agenda les dates de renouvellement et de préavis, avec un rappel automatique

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 3 s

Tokens : entrée 309 · cache écrit 0 · cache lu 4020 · sortie 526 (dont réflexion 0) · ~0.0003 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (334 caractères)

Je copie dans la conversation la liste de mes démarches d'accueil habituelles (accès informatiques, matériel, documents administratifs, rendez-vous à planifier) et je demande à l'IA de me proposer un parcours d'accueil étape par étape, avec un planning pour la première semaine et un message de bienvenue à envoyer au nouveau salarié.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (481 caractères)

J'ai enregistré dans la solution IA :
- la liste des démarches obligatoires d'arrivée (déclarations, documents à signer, visite médicale, mutuelle)
- les accès et le matériel standard par poste
- le planning type de la première semaine et les personnes référentes
- un modèle de checklist d'accueil et de message de bienvenue
L'IA produit à chaque arrivée la même checklist complète, adaptée au poste, et signale les démarches qui manquent d'informations ou les délais à respecter.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (528 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au logiciel de paie et au dossier RH partagé :
- il crée le dossier du nouveau salarié dès la signature du contrat
- il prépare la checklist d'accueil et la transmet à l'informatique et au manager pour les accès et le matériel
- il réserve les rendez-vous de la première semaine dans l'agenda
- il envoie automatiquement le message de bienvenue et les rappels de démarches simples
- il me soumet pour validation les documents administratifs et tout écart de délai avant envoi

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 4 s

Tokens : entrée 401 · cache écrit 0 · cache lu 4020 · sortie 610 (dont réflexion 0) · ~0.0004 $

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (384 caractères)

Je copie la description rédigée en italien d'une fiche produit de la collection, et je joins notre charte éditoriale (ton, vocabulaire, mots interdits). Je demande à l'IA de me proposer une version en français, anglais et chinois, adaptée à chaque culture locale tout en gardant le style de la maison, puis de signaler les termes qu'elle n'est pas sûre de pouvoir traduire fidèlement.

### Niveau 2 · Compétences

**Obtenu** (594 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale : ton, niveau de langage, vocabulaire signature et termes interdits
- le glossaire des matières, finitions et noms de collections, avec leur traduction validée
- une dizaine de fiches produits déjà approuvées dans chaque langue, comme exemples
- les spécificités réglementaires d'affichage par pays (composition, origine, mentions obligatoires)
L'IA produit des fiches dans chaque langue, homogènes d'une collection à l'autre, conformes à notre charte, et elle signale les écarts ou les termes à faire valider par l'équipe locale.

### Niveau 3 · Agent

**Obtenu** (590 caractères)

L'agent IA est connecté au logiciel de gestion produit, à l'e-commerce et à la messagerie :
- il récupère les nouvelles fiches italiennes dès leur validation dans le logiciel produit
- il rédige les versions dans chaque langue selon la charte et le glossaire
- il dépose les versions traduites dans l'e-commerce en mode brouillon, sans publication
- il envoie aux équipes locales un email de demande de validation avec les points signalés
- après validation de l'équipe locale, il publie la fiche sur le site ; les prix et mentions réglementaires restent contrôlés par moi avant publication

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 4 s

Tokens : entrée 390 · cache écrit 0 · cache lu 4020 · sortie 678 (dont réflexion 0) · ~0.0004 $

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (422 caractères)

Je joins le chapitre du classeur sur les matières (cuir, doublures, finitions) ou je copie la question d'un conseiller, par exemple « Quelle différence entre le cuir de veau grainé et le veau lisse ? », et je demande à l'IA de répondre en termes simples, avec la réponse à donner au client. Je lui demande aussi de préparer cinq questions de quiz sur le chapitre joint pour vérifier la compréhension du nouveau conseiller.

### Niveau 2 · Compétences

**Obtenu** (588 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation de 150 pages, découpé par thème (histoire, matières, produits, procédures de vente et de retour)
- le glossaire officiel de la maison et les termes à employer avec le client
- nos procédures internes : encaissement, retours, personnalisation, service après-vente
- le ton de la maison et les formulations interdites face au client
L'IA répond à chaque question avec la référence du passage concerné, dans le même style d'une fois à l'autre. Si une information manque dans le classeur, elle le signale au lieu de l'inventer.

### Niveau 3 · Agent

**Obtenu** (741 caractères)

L'agent IA est connecté au LMS de formation (plateforme d'apprentissage), à la messagerie, à l'agenda et au dossier partagé des RH :
- il inscrit les nouveaux conseillers à leur parcours de formation dès la signature de leur contrat
- il leur envoie automatiquement chaque matin un module court sur l'histoire ou les matières, avec un quiz de cinq questions
- il enregistre les résultats des quiz dans le dossier de formation de chaque conseiller
- il signale automatiquement aux RH les conseillers en difficulté sur un thème
- il prépare un brouillon de bilan hebdomadaire pour le responsable boutique, envoyé seulement après ma validation
- il réserve les créneaux de mise en pratique en boutique dans l'agenda, après validation de ma part

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 4 s

Tokens : entrée 416 · cache écrit 0 · cache lu 4020 · sortie 637 (dont réflexion 0) · ~0.0004 $

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (389 caractères)

Je joins à la conversation le certificat ou l'audit d'un fournisseur (PDF ou copie de l'email reçu), ainsi que la liste des documents attendus pour cette catégorie de fournisseur, et je demande à l'IA de me dire quels documents sont présents, lesquels manquent, et à quelle date chaque certificat expire. Je lui demande aussi de rédiger un email de relance poli pour les pièces manquantes.

### Niveau 2 · Compétences

**Obtenu** (553 caractères)

J'ai enregistré dans la solution IA :
- notre liste de documents requis par type de fournisseur (cuir, maroquinerie, accessoires, sous-traitance)
- nos règles de traçabilité du cuir et les durées de validité acceptées pour chaque certificat
- notre tableau de suivi des fournisseurs avec ses colonnes exactes
- un modèle d'email de relance en italien et en français
L'IA vérifie chaque dossier selon nos règles, remplit le tableau de la même façon à chaque fois, et signale clairement les documents manquants, incomplets ou expirant dans les trois mois.

### Niveau 3 · Agent

**Obtenu** (661 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des fournisseurs et au tableau de suivi Excel :
- il surveille l'arrivée des nouveaux documents dans la messagerie et les range dans le dossier du bon fournisseur
- il lit chaque document et met à jour le tableau de suivi (date d'expiration, statut, anomalies)
- il prépare une relance pour chaque document manquant ou expirant, et la relance part automatiquement pour les rappels simples de documents à renouveler
- les relances qui touchent à un fournisseur stratégique ou à un litige attendent ma validation avant envoi
- chaque lundi, il me prépare la liste des fournisseurs à risque pour décision

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 12 s

Tokens : entrée 285 · cache écrit 0 · cache lu 4020 · sortie 2739 (dont réflexion 2158) · ~0.0014 $

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (193 caractères)

Je joins les fichiers Excel des ventes de la semaine (boutiques et site e-commerce), et je demande à l'IA de me faire une synthèse par boutique, par gamme et par pays, avec les points d'alerte.

### Niveau 2 · Compétences

**Obtenu** (479 caractères)

J'ai enregistré dans la solution IA :
- la structure de nos fichiers de ventes (boutiques, e-commerce, pays, gammes)
- nos objectifs hebdomadaires par boutique et par gamme
- nos seuils d'alerte (baisse de plus de 10 % sur une semaine, stock faible sur les best-sellers)
- un modèle de synthèse d'une page
L'IA produit chaque lundi la même synthèse, compare aux objectifs et à la semaine précédente, et signale les écarts et anomalies de données (doublons, devises incohérentes).

### Niveau 3 · Agent

**Obtenu** (728 caractères)

L'agent IA est connecté au logiciel de caisse, à la plateforme e-commerce, au dossier partagé des ventes et à la messagerie :
- il récupère chaque dimanche soir les ventes des boutiques et du site e-commerce
- il consolide les fichiers, contrôle les données et met à jour le tableau de bord de la semaine
- il prépare la synthèse d'une page avec les points d'alerte et la range dans le dossier Direction
- il envoie automatiquement la synthèse du lundi matin à l'équipe de direction, car c'est un message simple et sans risque
- il prépare un brouillon d'email aux responsables de boutique pour leurs points d'alerte, envoyé seulement après ma validation
- les décisions sur les prix, promotions ou réassorts restent les miennes

**Vos remarques** :

