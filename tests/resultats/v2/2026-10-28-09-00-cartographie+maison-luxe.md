# Prompt v2 · 28/10/2026 10:00:35

- Version : **v2** — Consignes par niveau + 3 exemples de la cartographie (réclamations, tableau de bord, procédures). Spécifications ajoutées sur la taille des réponses ainsi que les résultats epérés à chaque niveau.
- Modèle : claude-opus-5-5
- Jeux : cartographie, maison-luxe

## Faire des devis

`cartographie / devis` · 34 s

> **Fonction** : Commercial · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : J'utilise Excel pour faire le chiffrage, puis j'utilise un logiciel de devis pour formaliser le devis.  
> **Situation souhaitée** : Je souhaite avoir une solution qui crée un devis de manière automatique, en s'inspirant de modèles types.  
> **Gain espéré** : Plus de réactivité avec le client. Du temps gagné pour mieux m'occuper des clients (prospection, relance…).

### Niveau 1 · Chat

**Attendu**

Je demande à l'IA de me préparer un devis pour répondre au client. Je mets en pièce jointe un modèle de devis et un fichier qui décrit le besoin à chiffrer.

**Obtenu** (464 caractères)

Je copie la demande du client (email ou notes de rendez-vous) dans la conversation et je joins mon fichier Excel de chiffrage ainsi qu'un ancien devis similaire. Je demande à l'IA de me proposer un chiffrage détaillé ligne par ligne, quantités, prix unitaires et total HT et TTC, dans la même présentation que l'ancien devis. Je lui demande aussi de lister les informations manquantes à vérifier avec le client avant de reporter le tout dans mon logiciel de devis.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires à la création d'un devis :
- grille de chiffrage
- catalogue des produits
- modèle et exemple de devis type
- etc.
Lorsque je demande à l'IA de préparer un devis, elle le génère en prenant en compte toutes les informations données dans le contexte.

**Obtenu** (2566 caractères)

J'ai enregistré dans la solution IA :
- mon fichier Excel de chiffrage de référence : grille tarifaire à jour (prix d'achat des fournitures, taux horaire de main-d'œuvre, frais de déplacement, sous-traitance) et la façon dont chaque ligne est calculée
- nos règles commerciales : coefficient de marge minimum par type de prestation, remises autorisées selon le montant ou le type de client (nouveau, fidèle, grand compte), seuil au-delà duquel je valide moi-même, conditions d'acompte et de paiement, durée de validité du devis
- cinq à dix devis types tirés de mon logiciel de devis, pour nos prestations les plus courantes, avec leurs libellés, leur ordre de présentation et les options habituellement proposées
- les mentions obligatoires, nos conditions générales de vente et la liste des points à toujours vérifier : taux de TVA applicable, quantités, délais, exclusions, ce qui reste à la charge du client
- la présentation attendue dans mon logiciel de devis : codes articles, unités, regroupement par lots, et un modèle de texte d'accompagnement pour l'email au client

Quand je donne à l'IA la demande du client (email, notes de visite, photos, cahier des charges), elle choisit le devis type le plus proche, applique mes prix et mes règles de calcul, et me rend un chiffrage détaillé prêt à être saisi ou importé dans le logiciel de devis, accompagné du texte d'envoi. Je n'ai plus à passer d'Excel au logiciel en recopiant chaque ligne à la main : la structure est déjà la bonne.

Le résultat est homogène d'un devis à l'autre, quel que soit le jour ou ma charge de travail, et respecte toujours ma marge minimum et mes conditions de paiement. Deux clients qui demandent la même prestation reçoivent un devis cohérent, présenté de la même façon.

Surtout, l'IA me signale ce qui cloche avant l'envoi : une information manquante dans la demande (surface, quantité, délai souhaité, adresse d'intervention), une marge sous le seuil, une remise hors cadre, un prix fournisseur qui date de plus de six mois, un écart important avec un devis similaire déjà réalisé, ou une prestation qui n'existe dans aucun modèle et qui demande mon propre chiffrage. Elle me propose aussi les questions précises à poser au client pour lever les doutes, et une option ou une variante à suggérer quand c'est pertinent.

Je garde la vérification finale et la décision sur le prix, mais je pars d'un devis presque terminé au lieu d'une page blanche. Je peux ainsi répondre au client dans la journée au lieu de plusieurs jours, sans risque d'oublier une ligne ou de vendre à perte.

### Niveau 3 · Agent

**Attendu**

La solution IA est connectée à la messagerie, pour :
- préparer l'email brouillon qui pose les questions complémentaires nécessaires à l'élaboration du devis
- lire la réponse du client, et la prendre en compte pour l'élaboration du devis
- créer sur mon ordinateur un dossier dans lequel elle enregistre plusieurs fichiers : un fichier Excel avec le chiffrage, un fichier Word qui décrit le besoin du client, l'interprétation du besoin par l'IA et la réflexion qu'elle a eue sur les décisions prises pour la rédaction du devis
- se connecter au CRM (logiciel de gestion de la relation client) pour enregistrer le client, son besoin et son devis
- préparer l'email brouillon pour envoyer le devis

**Obtenu** (3004 caractères)

L'agent IA est connecté à la messagerie, au logiciel de devis, au dossier partagé contenant le fichier Excel de chiffrage et les tarifs fournisseurs, au CRM et à l'agenda :
- il repère dans la messagerie les nouvelles demandes de devis (email direct, formulaire du site, message transféré) et crée ou complète la fiche du client et l'opportunité dans le CRM
- il analyse la demande et les pièces jointes (plans, photos, cahier des charges) et vérifie s'il a toutes les informations nécessaires pour chiffrer
- s'il manque des éléments, il prépare un email au client avec les questions précises à poser ; selon ce que j'ai décidé, cet email part automatiquement (simple demande d'information, sans engagement de prix) ou attend ma validation
- il choisit le devis type le plus proche, reprend les prix à jour dans le fichier Excel et les tarifs fournisseurs, applique mes coefficients de marge et mes règles de remise
- il crée directement le devis en brouillon dans le logiciel de devis, avec les bons codes articles, lots, mentions obligatoires, conditions de paiement et durée de validité
- il me prévient par une notification avec un résumé : montant, marge, différences avec le modèle, points de vigilance (marge sous le seuil, remise exceptionnelle, prix fournisseur ancien, prestation hors modèle)
- je relis et valide le devis ; pour les devis standards sous un certain montant et sans alerte, je peux décider qu'il soit envoyé automatiquement, alors que les devis importants, hors cadre ou pour un nouveau client passent toujours par ma validation
- une fois validé, il envoie le devis au client avec un email d'accompagnement personnalisé, l'enregistre dans le dossier client et met à jour le statut dans le CRM (envoyé, montant, date de validité)
- il programme les relances : par exemple un premier rappel à J+7 et un second à J+15 ; je choisis si ces relances partent seules ou si elles me sont proposées en brouillon
- si le client répond avec une question ou une demande de modification, il prépare une version révisée du devis et me la soumet, en indiquant clairement ce qui a changé
- si le client souhaite échanger, il propose des créneaux libres de mon agenda et prépare l'invitation
- quand un devis est accepté, il passe l'opportunité en gagné dans le CRM, prépare la facture d'acompte dans le logiciel de devis et me rappelle les étapes suivantes (commande fournisseur, planification de l'intervention)
- chaque semaine, il m'envoie un point sur les devis en cours : montant total en attente, devis proches de leur date d'expiration, taux de transformation, prestations les plus demandées
- chaque mois, il me signale les prix fournisseurs à mettre à jour et les modèles de devis qui mériteraient d'être revus, par exemple quand je modifie souvent les mêmes lignes à la main

Je ne passe plus mon temps à recopier des chiffres entre Excel et le logiciel de devis : je valide, j'ajuste quand c'est nécessaire, et je consacre le temps gagné à la prospection et au suivi de mes clients.

**Vos remarques** :


## Relance commerciale

`cartographie / relance-commerciale` · 28 s

> **Fonction** : Commercial · **Priorité** : —  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec la liste de mes affaires en cours, et je relance les clients quand j'ai le temps.  
> **Situation souhaitée** : Je souhaite un système pour faire des relances automatiques, pour certaines affaires.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (450 caractères)

Je copie dans la conversation la ligne de l'affaire tirée de mon fichier Excel (client, interlocuteur, objet du devis, montant, date d'envoi, date et contenu du dernier échange), je joins le devis en PDF, et je demande à l'IA de rédiger un email de relance court et personnalisé. Je peux aussi joindre tout mon fichier Excel et lui demander de me lister les affaires à relancer en priorité cette semaine, avec une proposition de message pour chacune.

### Niveau 2 · Compétences

**Obtenu** (2364 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel des affaires en cours : le sens de chaque colonne (client, interlocuteur, email, objet, montant, date d'envoi du devis, date de dernière relance, nombre de relances, étape, colonne « relance auto oui/non », commentaire), pour que l'IA lise toujours le fichier de la même façon
- mes règles de relance : première relance 7 jours après l'envoi du devis, deuxième relance 10 jours plus tard, appel téléphonique conseillé au troisième contact, trois relances écrites au maximum, puis affaire classée « en sommeil » ; pas de relance automatique pour les affaires au-dessus d'un certain montant, pour les clients stratégiques ou en cas de litige en cours
- des modèles de messages validés pour chaque étape : relance après envoi de devis, relance après rendez-vous, relance de devis bientôt expiré, dernier message avant clôture, avec le ton à employer (courtois, direct, sans insistance) et les formules à éviter
- ce que j'ai le droit de proposer pour débloquer une affaire : prolongation de la validité du devis, proposition d'un appel ou d'un rendez-vous, envoi d'une référence client ou d'une fiche produit ; et ce que je ne propose jamais sans accord de la direction (remise, conditions de paiement particulières, délai de livraison garanti)
- ma signature, mes coordonnées et mes créneaux habituels pour proposer un échange téléphonique
Quand je joins mon fichier Excel, l'IA applique toujours les mêmes règles : elle me sort la liste des affaires à relancer aujourd'hui, classées par urgence et par montant, avec pour chacune l'étape de relance concernée et un message prêt à envoyer, rédigé à partir du bon modèle et personnalisé avec le nom de l'interlocuteur, l'objet du devis et le dernier échange. Les messages sont homogènes d'une fois à l'autre, quel que soit mon niveau de fatigue ou de disponibilité, et respectent ce que je peux promettre ou non.
Elle me signale aussi les anomalies et les écarts : affaires sans date de dernier contact, devis expirés ou sur le point d'expirer, clients déjà relancés trois fois sans réponse, adresse email manquante, montant important qui mériterait plutôt un appel, ou affaire marquée « relance auto » alors qu'elle sort du cadre défini. Je sais ainsi immédiatement où intervenir moi-même, et je gagne du temps sur toutes les relances simples.

### Niveau 3 · Agent

**Obtenu** (2955 caractères)

L'agent IA est connecté à la messagerie (Outlook ou Gmail), à l'agenda, au fichier Excel des affaires en cours dans le dossier partagé (OneDrive, SharePoint ou Google Drive) et au dossier où sont rangés les devis :
- il lit chaque matin le fichier Excel des affaires et repère celles qui arrivent à échéance de relance selon mes règles (délai depuis l'envoi du devis, nombre de relances déjà faites, date de validité du devis)
- il vérifie dans la messagerie si le client a répondu entre-temps, pour ne jamais relancer quelqu'un qui vient d'écrire, de demander un délai ou de passer commande
- il retrouve le bon devis dans le dossier partagé et vérifie qu'il est toujours valable ; s'il expire bientôt, il adapte le message en conséquence
- il rédige le message de relance à partir du modèle correspondant à l'étape, personnalisé avec le nom de l'interlocuteur, l'objet du devis et le contenu du dernier échange
- pour les affaires que j'ai marquées « relance auto » dans le fichier (petits montants, clients récurrents, relances simples de devis), il envoie lui-même la relance aux jours et heures que j'ai définis, sans attendre ma validation : c'est moi qui décide à l'avance, affaire par affaire, ce qui peut partir automatiquement
- pour les autres affaires (montants importants, clients stratégiques, négociation en cours, troisième relance, situation inhabituelle), il prépare seulement un brouillon dans ma messagerie et me prévient ; rien ne part tant que je n'ai pas relu et cliqué sur envoyer
- il ne propose jamais de remise ou de condition particulière : si un client en demande une dans sa réponse, il me transmet l'email et suspend les relances automatiques sur cette affaire
- quand une relance téléphonique est prévue par mes règles, il bloque un créneau dans mon agenda avec le nom du client, son numéro, le montant du devis et un résumé des échanges, pour que j'appelle avec toutes les informations sous les yeux
- quand le client répond, il analyse sa réponse (intéressé, demande d'information, report, refus) et me la signale ; il propose la mise à jour de l'étape dans le fichier et, si le client propose un rendez-vous, il me suggère des créneaux libres
- après chaque action, il met à jour le fichier Excel : date de la relance, nombre de relances, canal utilisé, envoi automatique ou validé par moi, prochaine date de relance prévue
- après la dernière relance sans réponse, il passe l'affaire en « en sommeil » et me la signale, sans plus jamais écrire au client de lui-même
- chaque lundi, il m'envoie un récapitulatif : relances envoyées automatiquement la semaine passée, brouillons en attente de ma validation, réponses reçues, affaires gagnées ou perdues, devis qui expirent dans les quinze jours et montant total des affaires en attente
Je garde la main sur tout ce qui est sensible, et les relances simples ne dépendent plus de mon temps disponible : aucune affaire n'est oubliée et mon fichier Excel est toujours à jour.

**Vos remarques** :


## Relance pour paiement

`cartographie / relance-paiement` · 33 s

> **Fonction** : Comptabilité · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel dans lequel j'enregistre les paiements liés à chaque affaire (paiement acompte, puis paiements après la livraison). Lorsque tout est réglé, je l'indique également dans le CRM « affaire réglée ». Lorsqu'il y a des retards de paiement, j'envoie des emails.  
> **Situation souhaitée** : Je souhaite que les relances soient envoyées automatiquement.  
> **Gain espéré** : Gain de temps, et peut-être plus d'efficacité, et donc une meilleure trésorerie.

### Niveau 1 · Chat

**Attendu**

Je demande à la solution IA de me préparer les textes de relance pour les clients en retard de paiement. Je joins à la demande un fichier avec la liste des clients en retard, et le montant à payer.

**Obtenu** (418 caractères)

Je joins mon fichier Excel de suivi des paiements, ou je copie les lignes des affaires en retard, avec la facture concernée. Je demande à l'IA de repérer les échéances dépassées (acompte ou solde après livraison) et de rédiger pour chaque client un email de relance courtois, avec le numéro d'affaire, le montant restant dû et la date d'échéance. Je relis, j'ajuste si besoin et j'envoie moi-même depuis ma messagerie.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA toutes les informations nécessaires pour rédiger des relances :
- modèle de relance
- indications sur le ton à employer
- indications sur comment lire correctement le fichier des clients en retard de paiement qui doit être joint à la demande
- etc.
Les propositions de relance sont faites par la solution IA, en suivant mes instructions données dans le contexte.

**Obtenu** (2405 caractères)

J'ai enregistré dans la solution IA :
- la structure de mon fichier Excel de suivi des paiements : une ligne par affaire avec le client, le numéro d'affaire, le montant total, l'acompte et sa date d'échéance, les paiements attendus après la livraison et leurs échéances, les montants reçus et leurs dates d'encaissement. L'IA lit ainsi mes colonnes sans que je doive les expliquer à chaque fois.
- nos règles de relance par étape : une relance amicale 3 jours après l'échéance, une deuxième plus ferme à 15 jours, une troisième à 30 jours qui rappelle les pénalités de retard et l'indemnité forfaitaire de 40 euros prévue par la loi, puis un passage au dirigeant pour un appel ou une mise en demeure. Une règle à part pour l'acompte : tant qu'il n'est pas réglé, la commande n'est pas lancée, et la relance le rappelle clairement.
- nos conditions générales de vente : délais de paiement, taux des pénalités, moyens de règlement acceptés, RIB et références à indiquer sur le virement, et ce que nous pouvons accepter ou non (échéancier, délai supplémentaire de quelques jours, à quelles conditions).
- trois modèles d'emails validés, un par niveau de relance, avec le ton à employer, la formule d'ouverture, la signature et les informations obligatoires : numéro d'affaire, numéro de facture, montant restant dû, date d'échéance initiale, coordonnées bancaires et personne à contacter en cas de question.
- les cas particuliers à traiter avec prudence : clients historiques ou stratégiques à relancer avec plus de souplesse, litige en cours sur une livraison (dans ce cas, aucune relance de paiement tant que le problème n'est pas réglé), clients qui ont déjà annoncé un paiement à une date précise, et contacts comptables à utiliser plutôt que l'interlocuteur commercial.
Quand je joins mon fichier Excel, l'IA applique toujours les mêmes règles : elle classe les affaires en retard par niveau de relance, calcule le montant exact restant dû et rédige des emails homogènes d'une fois à l'autre, conformes à nos conditions et au bon niveau de fermeté. Elle me signale aussi les anomalies : un paiement partiel qui ne correspond à aucune échéance, un montant reçu supérieur à ce qui était attendu, une affaire soldée dans l'Excel mais pas encore passée en « affaire réglée » dans le CRM, ou un client déjà relancé trois fois sans réponse qui demande mon intervention. Je n'ai plus qu'à vérifier et envoyer.

### Niveau 3 · Agent

**Attendu**

L'agent IA lit le fichier des clients en retard de paiement, et prépare dans la messagerie tous les brouillons d'emails de relance.
L'agent IA est connecté à la banque. Lorsque l'utilisateur le demande, l'agent IA lit les flux bancaires et propose un rapprochement avec les affaires en attente de règlement.

**Obtenu** (2969 caractères)

L'agent IA est connecté au fichier Excel de suivi des paiements (dans le dossier partagé), au CRM, à la messagerie, à la banque et au logiciel de facturation :
- il consulte chaque matin les relevés bancaires et repère les virements reçus, en les rapprochant des affaires grâce au nom du client, au montant et aux références indiquées
- il met à jour lui-même le fichier Excel : montant encaissé, date d'encaissement, reste à payer. Quand un virement ne correspond clairement à aucune affaire, il ne l'impute pas et me le signale
- quand toutes les échéances d'une affaire sont réglées, il passe l'affaire en « affaire réglée » dans le CRM, comme je le fais aujourd'hui à la main
- il vérifie ensuite les échéances dépassées, acompte ou solde après livraison, et détermine pour chacune le niveau de relance selon nos règles (3 jours, 15 jours, 30 jours)
- il vérifie dans le CRM et dans la messagerie qu'il n'y a pas de raison de suspendre la relance : litige ouvert sur la livraison, échange récent où le client annonce un paiement, échéancier accordé, client marqué comme sensible
- il prépare l'email de relance adapté, à partir de nos modèles, avec le numéro d'affaire, la facture en pièce jointe récupérée dans le logiciel de facturation, le montant restant dû et le RIB
- pour les envois, nous avons décidé ensemble des règles : la première relance amicale part automatiquement, sans ma validation, car elle est courtoise et sans risque. La deuxième relance, plus ferme, et toute relance d'acompte bloquant le lancement d'une commande me sont présentées en brouillon : je valide en un clic ou je modifie. La troisième relance, qui mentionne les pénalités, et toute mise en demeure ne partent jamais sans ma décision
- il enregistre chaque relance envoyée dans le CRM et dans le fichier Excel (date, niveau, destinataire), pour que tout le monde voie où en est le client avant de l'appeler
- il surveille les réponses des clients : si un client annonce une date de paiement, il la note et décale la relance suivante. S'il conteste la facture ou signale un problème, il suspend les relances et me prévient immédiatement
- si un client ne répond pas après la deuxième relance, il me prépare une fiche d'appel avec l'historique de l'affaire, les montants dus et les échanges passés, pour que je puisse téléphoner rapidement
- chaque lundi, il m'envoie une synthèse : montants encaissés la semaine passée, total en retard, clients concernés par niveau de relance, relances envoyées automatiquement et brouillons en attente de ma validation
- chaque mois, il prépare une prévision simple des encaissements attendus sur les semaines suivantes et me signale les clients qui paient régulièrement en retard, pour que j'adapte l'acompte demandé ou les conditions sur les prochaines affaires
Je ne passe plus mes soirées à rechercher qui doit quoi : les relances partent à temps, les retards sont suivis, et je n'interviens que sur les cas qui demandent vraiment ma décision.

**Vos remarques** :


## Gestion des congés

`cartographie / conges` · 36 s

> **Fonction** : Chef d'entreprise · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : J'ai un fichier Excel avec les dates de congés des employés. Les demandes de congés sont faites par email, et je leur réponds par email.  
> **Situation souhaitée** : Je souhaite que l'IA m'aide à gagner du temps pour traiter ces demandes de congés : analyser les demandes de congés, m'indiquer une recommandation de réponse, et envoyer la réponse si je suis d'accord, et mettre à jour le fichier de suivi.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (363 caractères)

Je copie l'email de demande de congés dans la conversation et je joins mon fichier Excel de suivi. Je demande à l'IA de vérifier si les dates tombent en même temps que l'absence d'un collègue, de me dire si elle recommande d'accepter ou non, et de rédiger la réponse au salarié. Je lui demande aussi de m'indiquer précisément quoi modifier dans mon fichier Excel.

### Niveau 2 · Compétences

**Obtenu** (2606 caractères)

J'ai enregistré dans la solution IA :
- les règles de congés de l'entreprise : nombre de jours acquis (2,5 jours ouvrables par mois, soit 30 jours par an, ou l'équivalent en jours ouvrés selon notre décompte), période de référence du 1er juin au 31 mai, période du congé principal entre le 1er mai et le 31 octobre avec au moins 12 jours ouvrables continus, délai de prévenance que je demande (par exemple un mois avant pour plus d'une semaine, quinze jours sinon), règles pour les RTT et les congés sans solde, et les congés pour événements familiaux prévus par notre convention collective (mariage, naissance, décès)
- mes critères de décision : effectif minimum à garder par équipe ou par poste (par exemple jamais plus de deux absents en même temps dans une équipe, toujours une personne présente à l'accueil), personnes qui se remplacent et ne peuvent donc pas partir ensemble, périodes bloquées où je refuse les congés (inventaire, clôture comptable, pic d'activité, salons), et règle de priorité en cas de demandes concurrentes (premier arrivé, enfants scolarisés pendant l'été, roulement par rapport à l'année précédente, ancienneté)
- la structure de mon fichier Excel de suivi : un onglet par année, une ligne par salarié, les colonnes (nom, service, solde au 1er juin, jours pris, jours posés à venir, solde restant) et le code couleur que j'utilise (congés payés, RTT, sans solde, maladie), pour que l'IA lise correctement le fichier que je lui joins et me dise exactement quelles cellules modifier
- des modèles de réponse avec le ton que je souhaite : acceptation simple, acceptation avec rappel du solde restant, proposition de dates alternatives, refus motivé et bienveillant avec une autre période proposée, et demande de précision quand l'email est flou (dates manquantes, journée entière ou demi-journée), en respectant le vouvoiement ou le tutoiement selon nos habitudes
- la liste des salariés avec leur service, leur date d'entrée, leur temps de travail (temps plein, temps partiel et jours non travaillés) et leur remplaçant habituel
Quand je colle une demande et joins le fichier à jour, l'IA applique toujours les mêmes règles : elle calcule les jours décomptés, vérifie le solde, repère les chevauchements et les périodes bloquées, puis me donne une recommandation claire (accepter, accepter sous condition, proposer d'autres dates ou refuser) avec sa raison en une ligne et la réponse prête à envoyer. Elle me signale aussi les anomalies, comme un solde qui deviendrait négatif, un délai de prévenance non respecté ou un salarié qui n'a pas encore posé son congé principal d'été.

### Niveau 3 · Agent

**Attendu**

J'ai enregistré dans le contexte de l'agent IA les règles pour déterminer si une demande peut être acceptée ou non.
L'agent IA est connecté à la messagerie, il peut détecter les demandes de congés envoyées par email.
L'agent IA lit le fichier Excel de suivi des congés, et analyse si la demande peut être acceptée.
L'agent IA me propose une réponse ; si je suis d'accord, l'email de confirmation est envoyé à l'employé, et le fichier Excel est mis à jour.

**Obtenu** (3105 caractères)

L'agent IA est connecté à la messagerie, au fichier Excel de suivi des congés dans le dossier partagé (OneDrive, SharePoint ou Google Drive), à l'agenda partagé de l'équipe et, si besoin, au logiciel de paie :
- il surveille la boîte mail et repère les emails de demande de congés, même quand ils sont rédigés de façon informelle (« je voudrais poser la semaine du 14 juillet »)
- il extrait les informations utiles : nom du salarié, dates de début et de fin, journée entière ou demi-journée, type d'absence (congés payés, RTT, sans solde, événement familial)
- si la demande est incomplète ou ambiguë, il prépare une réponse au salarié pour lui demander la précision manquante
- il ouvre le fichier Excel de suivi, calcule le nombre de jours décomptés en tenant compte des week-ends, des jours fériés et du temps partiel, et vérifie le solde restant du salarié
- il contrôle les absences déjà posées par les collègues du même service et par le remplaçant habituel, ainsi que les périodes bloquées et l'effectif minimum que j'ai fixé
- il vérifie dans l'agenda partagé s'il y a des rendez-vous importants, des formations ou des événements prévus pendant l'absence
- il me présente chaque demande sous forme d'une fiche courte : le salarié, les dates, le solde avant et après, les conflits éventuels, sa recommandation (accepter, accepter sous condition, proposer d'autres dates, refuser) et la raison en une ligne
- il prépare en même temps le brouillon de réponse au salarié, dans le ton et avec les modèles que j'ai définis
- je valide, je modifie ou je refuse en un clic ; une fois mon accord donné, il envoie lui-même la réponse depuis ma messagerie
- il met ensuite à jour le fichier Excel : il inscrit les dates sur la ligne du salarié avec le bon code couleur, recalcule le solde et note la date de la demande et de la réponse
- il ajoute l'absence dans l'agenda partagé pour que toute l'équipe la voie
- s'il y a deux demandes concurrentes sur la même période, il me les présente ensemble avec la règle de priorité qui s'applique, au lieu de les traiter séparément
- chaque mois, il prépare pour le logiciel de paie ou pour le comptable la liste des congés pris dans le mois, à vérifier avant transmission
- au printemps, il me signale les salariés qui n'ont pas encore posé leur congé principal d'été et me propose un brouillon de relance ; avant le 31 mai, il me liste ceux qui risquent de perdre des jours non pris
- chaque trimestre, il me prépare une synthèse simple : jours posés par service, périodes les plus demandées, demandes refusées et pourquoi
Par défaut, aucune réponse n'est envoyée sans mon accord : l'agent prépare, je décide. Je peux toutefois choisir à l'avance ce qui part automatiquement, par exemple l'accusé de réception envoyé au salarié dès que sa demande arrive, la demande de précision quand les dates manquent, ou l'acceptation des demandes simples qui respectent toutes les règles (solde suffisant, délai respecté, aucun conflit, hors période bloquée). Les refus, les propositions de dates alternatives et les cas particuliers restent toujours soumis à ma validation.

**Vos remarques** :


## Recruter un nouveau collaborateur

`cartographie / recrutement` · 39 s

> **Fonction** : Ressources humaines · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je rédige l'annonce moi-même, je reçois les CV par email et je les lis un par un. Je prends des notes sur papier pendant les entretiens.  
> **Situation souhaitée** : Je souhaite gagner du temps sur la rédaction de l'annonce et le tri des candidatures, et préparer des entretiens plus structurés.  
> **Gain espéré** : Recrutement plus rapide. Meilleure comparaison des candidats. Moins de risque d'erreur de recrutement.

### Niveau 1 · Chat

**Attendu**

Je décris le poste à l'IA et je lui demande de rédiger l'annonce. Je joins un CV et je demande à l'IA de le comparer au poste, et de me proposer des questions d'entretien.

**Obtenu** (383 caractères)

Je décris le poste à l'IA (missions, compétences attendues, type de contrat, salaire, lieu) et je lui demande de rédiger l'annonce. Ensuite, je joins un CV sans le nom, la photo ni l'adresse, avec l'annonce, et je demande à l'IA de résumer les points forts et les manques du candidat par rapport au poste. Je lui demande enfin une liste de questions d'entretien adaptées à ce profil.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise et ses valeurs
- les fiches de poste existantes
- la grille de critères d'évaluation des candidats
- un modèle d'annonce et de compte rendu d'entretien
L'IA rédige des annonces cohérentes avec l'entreprise, et évalue chaque CV selon la même grille.

**Obtenu** (2537 caractères)

J'ai enregistré dans la solution IA :
- notre modèle d'annonce et la présentation de la société : le texte de présentation de l'entreprise, nos valeurs et nos avantages (mutuelle, tickets restaurant, télétravail, horaires), la convention collective applicable et les grilles de salaire par poste. J'y ai ajouté les mentions à faire figurer à chaque fois : type et durée du contrat, lieu, fourchette de rémunération, date de prise de poste. L'IA rédige ainsi chaque annonce dans le même format, prête à publier sur France Travail, Indeed ou LinkedIn.
- les fiches de poste existantes et une grille d'évaluation par poste : pour chaque poste, les critères indispensables (diplôme, permis, expérience minimale, habilitation) et les critères souhaités, notés de 1 à 4. L'IA analyse chaque CV avec cette même grille. Elle cite les éléments du CV qui justifient chaque note et écrit « information absente » plutôt que de deviner.
- les règles de non-discrimination à respecter : l'IA ne doit jamais tenir compte de l'âge, du sexe, de l'origine, de la situation familiale, de l'état de santé, du lieu de résidence ou de la photo, conformément au Code du travail. Elle me signale aussi dans l'annonce toute formulation à risque, par exemple « jeune et dynamique », la mention H/F oubliée ou une exigence non justifiée par le poste.
- un modèle de guide d'entretien : un déroulé type de 45 minutes (accueil, présentation du poste, parcours, mises en situation, questions du candidat, conclusion), des questions par compétence (« Racontez-moi une situation où… ») et la liste des questions interdites. L'IA prépare pour chaque candidat un guide avec les points de son CV à approfondir. Elle fournit aussi une grille de prise de notes identique pour tous, qui remplace mes notes sur papier.
- nos règles RGPD et nos modèles de messages : la durée de conservation des CV (deux ans maximum après le dernier contact, avec l'accord du candidat) et la mention d'information à ajouter dans les réponses. J'y ai ajouté nos modèles d'accusé de réception, d'invitation à un entretien et de réponse négative, au ton courtois et sans motif discriminant.
L'IA produit des annonces, des analyses de CV et des guides d'entretien homogènes d'un recrutement à l'autre, ce qui permet de comparer les candidats sur les mêmes critères. Elle me signale les écarts (critère indispensable manquant, période sans emploi inexpliquée, dates incohérentes, prétentions salariales hors grille), mais ne décide jamais à ma place : je choisis seul qui rencontrer et qui retenir.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et à un dossier de recrutement :
- il enregistre chaque CV reçu dans le dossier du poste
- il remplit un fichier Excel de suivi des candidatures avec une note par critère
- il prépare les brouillons d'emails (invitation à l'entretien, réponse négative)
- après l'entretien, il met en forme mes notes en compte rendu
La décision de retenir ou non un candidat reste toujours la mienne.

**Obtenu** (3251 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, aux sites d'emploi (France Travail, Indeed, LinkedIn), au dossier partagé RH et à un tableau de suivi des candidatures :
- il prépare l'annonce à partir de la fiche de poste et de notre modèle, puis me la soumet. Je la relis et la valide avant toute publication, car c'est la vitrine de l'entreprise et elle engage sur le salaire et le contrat.
- une fois l'annonce validée, il la publie sur les sites choisis et note dans le tableau la date de publication et la date de clôture prévue.
- il repère dans la messagerie les emails de candidature, enregistre chaque CV et chaque lettre dans le dossier du recrutement, avec un nom de fichier homogène (poste, date, initiales).
- il crée une ligne par candidat dans le tableau de suivi : date de réception, source de l'annonce, coordonnées, statut.
- il envoie automatiquement un accusé de réception à chaque candidat, avec la mention RGPD. Cet envoi simple et sans enjeu ne passe pas par moi ; c'est un réglage que j'ai choisi et que je peux modifier.
- il analyse chaque CV avec la grille d'évaluation du poste et indique dans le tableau une note par critère, avec les éléments du CV qui la justifient. Il ne tient jamais compte de l'âge, du sexe, de l'origine, de la photo ou de l'adresse.
- chaque semaine, ou dès qu'il y a dix nouvelles candidatures, il me prépare une synthèse : les candidats qui remplissent tous les critères indispensables, ceux à qui il manque un élément, et les points à vérifier (dates incohérentes, informations absentes).
- je décide moi-même qui je rencontre et qui je refuse. L'agent ne rejette jamais un candidat seul : la loi impose qu'une décision de recrutement ne soit pas prise uniquement par une machine.
- pour les candidats retenus, il propose des créneaux d'entretien en fonction de mon agenda, prépare l'email d'invitation et me le soumet. Une fois validé, il l'envoie, réserve la salle ou crée le lien de visioconférence, et envoie un rappel automatique la veille.
- avant chaque entretien, il dépose dans le dossier un guide personnalisé : les questions communes à tous les candidats, les points du CV à approfondir et une grille de notation identique pour chacun.
- après l'entretien, il met en forme mes notes (saisies dans la grille ou dictées) et met à jour le tableau.
- quand tous les entretiens d'un poste sont passés, il me prépare un tableau comparatif des finalistes, critère par critère, avec les points forts, les réserves et les vérifications à faire (références, diplômes). Le choix final reste le mien.
- il prépare les réponses négatives personnalisées et courtoises. Je les relis et les valide avant envoi, en particulier pour les candidats rencontrés en entretien.
- il prépare le brouillon de promesse d'embauche ou d'email de confirmation pour le candidat retenu, que je vérifie avant tout envoi.
- il note dans le tableau la date de fin de conservation de chaque CV, me prévient à l'échéance des deux ans et prépare la suppression, ou la demande d'accord au candidat si je souhaite garder son profil.
Le recrutement est plus rapide et chaque candidat est évalué sur les mêmes critères. Je garde la main sur toutes les décisions qui comptent : publication, convocation, refus et embauche.

**Vos remarques** :


## Publier régulièrement sur LinkedIn

`cartographie / linkedin` · 37 s

> **Fonction** : Marketing · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : Je publie sur LinkedIn quand j'ai une idée, environ une fois par mois. Je manque de temps et d'inspiration.  
> **Situation souhaitée** : Je souhaite publier chaque semaine des contenus de qualité, qui valorisent nos réalisations et notre savoir-faire.  
> **Gain espéré** : Plus de visibilité auprès des prospects. Image d'entreprise plus professionnelle. Génération de contacts entrants.

### Niveau 1 · Chat

**Attendu**

Je raconte à l'IA un chantier ou un projet récent, je joins une photo, et je lui demande de rédiger un post LinkedIn.

**Obtenu** (405 caractères)

Je décris en quelques lignes une réalisation récente (le besoin du client, ce que nous avons fait, le résultat obtenu) et je joins deux ou trois photos du projet. Je demande à l'IA de rédiger un post LinkedIn avec une accroche forte, en trois versions de ton différent. Je lui demande aussi une liste de douze idées de posts pour les trois prochains mois, à partir de notre site internet que je lui colle.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre ligne éditoriale et nos sujets clés
- le ton à employer, les mots à éviter
- des exemples de posts qui ont bien fonctionné
- la liste de nos clients que l'on peut citer
L'IA propose des posts dans le style de l'entreprise, et un calendrier de publication sur un mois.

**Obtenu** (2490 caractères)

J'ai enregistré dans la solution IA :
- la présentation de l'entreprise : notre métier, nos clients types (dirigeants de PME, responsables techniques, acheteurs), notre zone d'intervention, nos points forts face à la concurrence et les chiffres clés que nous acceptons de publier. J'ai ajouté la liste des clients qui ont donné leur accord pour être cités nommément. Pour les autres, la règle est de rester anonyme, par exemple « un industriel de la région » ou « une collectivité de 5 000 habitants ».
- notre ligne éditoriale : quatre types de posts qui tournent chaque mois. Il y a d'abord la réalisation client, avec le problème de départ, la solution et le résultat. Viennent ensuite le conseil pratique tiré de notre savoir-faire, les coulisses de l'équipe ou le portrait d'un collaborateur, et enfin une actualité de l'entreprise ou du secteur. Pour chaque type, j'ai indiqué la structure attendue, la longueur (entre 800 et 1 300 caractères), le nombre de hashtags (3 à 5) et un appel à l'action discret en fin de post, comme une invitation à nous contacter ou à visiter notre site.
- notre ton et nos règles d'écriture : vouvoiement, phrases courtes, accroche forte sur les deux premières lignes (c'est ce qui s'affiche avant « voir plus »). Je veux éviter les superlatifs creux (« leader », « incontournable »), l'excès d'emojis et le jargon interne. J'ai aussi listé les sujets interdits : nos prix, les litiges, les concurrents nommés, les informations confidentielles sur nos clients ou nos projets.
- une dizaine de nos meilleurs posts passés, ceux qui ont reçu le plus de réactions et de commentaires, avec leurs statistiques. Ils servent de modèles de style et montrent ce qui fonctionne auprès de notre réseau.
- une fiche de collecte simple à remplir après chaque projet : client, besoin, difficulté rencontrée, solution apportée, résultat chiffré si possible, photos disponibles, nom du collaborateur à mentionner, accord du client pour la publication (oui, non, anonyme).
L'IA rédige alors des posts dans notre style, homogènes d'une semaine à l'autre, en respectant l'alternance des thèmes, et me propose chaque fois deux accroches au choix. Elle me signale aussi ce qui pose problème avant que je publie : un client cité sans accord, un chiffre non vérifié, une information qui semble confidentielle, une photo manquante ou un post trop proche d'un post récent. Quand la fiche projet est incomplète, elle me pose les questions utiles plutôt que d'inventer des détails.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté au dossier des projets et à l'outil de planification des publications :
- il repère les projets terminés et me propose des sujets de posts
- il prépare les textes et sélectionne les photos du dossier
- il programme les publications après ma validation
- il me fait un bilan mensuel des posts qui ont le mieux fonctionné

**Obtenu** (3275 caractères)

L'agent IA est connecté à la messagerie, à l'agenda, au dossier partagé des projets (photos, comptes rendus, fiches de fin de projet), au CRM, à la page LinkedIn de l'entreprise et à un calendrier éditorial dans un tableur partagé.
Dès sa mise en place, je décide avec lui ce qui doit passer par ma validation et ce qui peut partir automatiquement. Par défaut, chaque post est soumis à mon accord avant publication, et tout message adressé à un prospect reste un brouillon que j'envoie moi-même. Je peux en revanche autoriser la publication automatique des posts déjà validés à la date prévue, ou celle des posts de type « conseil pratique » qui ne citent aucun client.
Voici ce qu'il fait, dans l'ordre :
- chaque lundi, il parcourt le dossier des projets et le CRM pour repérer les affaires terminées, les nouvelles photos déposées et les événements récents (salon, recrutement, anniversaire de l'entreprise, nouvelle certification)
- il vérifie dans le CRM si le client a donné son accord pour être cité. S'il manque, il prépare un brouillon d'email de demande d'accord au client, que je relis et envoie
- quand la fiche de fin de projet est incomplète, il prépare un court message au chef de projet concerné pour lui demander les informations manquantes : résultat chiffré, difficulté rencontrée, photo avant et après
- il met à jour le calendrier éditorial avec les sujets des quatre semaines à venir, en respectant l'alternance des thèmes définie dans notre ligne éditoriale (réalisation, conseil, coulisses, actualité)
- il rédige le post de la semaine selon nos règles de ton et de longueur, choisit les meilleures photos dans le dossier et propose deux accroches. Il m'envoie le tout par email le mardi, avec les points d'attention : client à vérifier, chiffre à confirmer, sujet sensible
- il bloque un créneau de quinze minutes dans mon agenda pour relire et valider, et me relance si je n'ai pas répondu la veille de la date prévue
- une fois le post validé, il le programme sur la page LinkedIn de l'entreprise le jour et à l'heure qui fonctionnent le mieux pour notre réseau, en général le mardi ou le jeudi matin
- il prépare une version courte du post que les collaborateurs peuvent partager sur leur profil personnel, et l'envoie à l'équipe par email
- dans les jours qui suivent, il surveille les commentaires. Il me propose des réponses en brouillon et me signale toute question qui ressemble à une demande commerciale
- quand une personne d'une entreprise cible réagit ou commente, il crée ou complète sa fiche dans le CRM et me prépare un brouillon de message de prise de contact. Je décide de l'envoyer ou non, car un message mal venu peut nuire à notre image
- chaque mois, il me prépare une synthèse d'une page : nombre de posts publiés, vues, réactions, nouveaux abonnés, contacts entrants générés, et les types de posts qui ont le mieux fonctionné. Il me propose d'ajuster la ligne éditoriale en conséquence
- il tient à jour un stock d'au moins trois posts d'avance, pour qu'une semaine chargée ne casse jamais le rythme de publication
Au final, je passe de un post par mois, au gré de l'inspiration, à un post par semaine préparé sans effort de ma part, sauf la relecture. Les contacts intéressés arrivent directement dans le CRM pour être suivis.

**Vos remarques** :


## Comparer les offres fournisseurs

`cartographie / achats` · 35 s

> **Fonction** : Achats · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois les devis fournisseurs en PDF, dans des formats tous différents. Je les recopie dans un tableau Excel pour les comparer.  
> **Situation souhaitée** : Je souhaite comparer rapidement les offres sur les mêmes critères (prix, délai, conditions de paiement, garantie) pour choisir le meilleur fournisseur.  
> **Gain espéré** : Gain de temps. Meilleures décisions d'achat. Meilleure négociation des prix.

### Niveau 1 · Chat

**Attendu**

Je joins les devis des fournisseurs dans la conversation, et je demande à l'IA de faire un tableau comparatif et de me donner son avis.

**Obtenu** (465 caractères)

Je joins les devis PDF reçus des différents fournisseurs, je précise en quelques lignes mon besoin (produit, quantité, date de livraison souhaitée), et je demande à l'IA de les présenter dans un tableau unique sur les mêmes critères : prix total HT, délai, conditions de paiement et garantie. Je lui demande aussi de signaler les informations absentes de chaque devis, sans les inventer, et de résumer en quelques lignes les points forts et faibles de chaque offre.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos critères de choix et leur importance
- nos fournisseurs habituels et l'historique des prix
- nos conditions d'achat (délais de paiement, pénalités de retard)
L'IA compare les offres selon nos critères, signale les écarts avec les prix habituels, et propose des arguments de négociation.

**Obtenu** (2365 caractères)

J'ai enregistré dans la solution IA :
- ma grille de comparaison type, reprenant les colonnes de mon tableau Excel actuel dans le même ordre : fournisseur, référence et désignation, quantité, prix unitaire HT, remise, frais de port et d'emballage, coût total HT livré, délai de livraison en jours ouvrés, date de validité de l'offre, conditions de paiement, acompte demandé, garantie (durée et contenu), minimum de commande, et une colonne « points d'attention » pour tout ce qui n'entre pas dans les cases
- mes règles de lecture des devis : tout ramener en HT et dans la même unité (pièce, lot, mètre, kilo), intégrer les frais annexes dans le coût total, convertir les délais exprimés en semaines en jours ouvrés, noter « non précisé » quand une information manque et ne jamais la deviner, et recopier mot pour mot la phrase du devis quand une condition est ambiguë
- notre politique achats : délais de paiement acceptés par défaut (45 jours fin de mois ou 60 jours date de facture, dans la limite légale), acompte maximum de 30 %, garantie minimale exigée selon le type d'achat, montant à partir duquel trois devis sont obligatoires et montant à partir duquel la décision revient au dirigeant
- la pondération de nos critères pour noter les offres : par exemple prix 50 %, délai 20 %, conditions de paiement 15 %, garantie 15 %, que je peux ajuster pour un achat urgent où le délai compte davantage
- la liste de nos fournisseurs habituels avec les prix payés lors des dernières commandes, les remises déjà obtenues, les remarques sur leur fiabilité (retards, litiges, qualité du service après-vente), ainsi que des modèles d'emails de demande de précisions et de négociation au ton professionnel et courtois
Je dépose simplement les PDF reçus et l'IA remplit toujours le même tableau, avec les mêmes calculs, une note pondérée pour chaque offre et un classement justifié en quelques lignes, ce qui me permet de comparer d'un achat à l'autre et de garder une trace claire de mes choix. Elle me signale aussi chaque écart : prix supérieur au dernier prix payé, délai de paiement ou acompte hors de notre politique, garantie insuffisante, offre bientôt expirée, ligne manquante par rapport à mon besoin, et elle me propose les arguments de négociation à utiliser auprès du fournisseur le mieux placé, en s'appuyant sur les offres concurrentes et notre historique.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier achats :
- il récupère les devis reçus par email et les enregistre dans le dossier
- il met à jour le fichier Excel comparatif
- il prépare un brouillon d'email de négociation ou de demande de précisions
- une fois le fournisseur choisi, il prépare le bon de commande

**Obtenu** (2627 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé Achats, au fichier Excel de comparaison, au logiciel de gestion (commandes et historique des prix) et à l'agenda :
- il repère dans la messagerie les emails des fournisseurs contenant un devis, enregistre chaque PDF dans le dossier de la demande d'achat concernée, renommé selon notre règle (date, fournisseur, objet)
- il lit chaque devis, extrait les informations et remplit le fichier Excel de comparaison avec notre grille habituelle, en indiquant pour chaque chiffre la page du PDF d'où il vient, pour que je puisse vérifier en un clic
- il contrôle que chaque devis est complet et conforme au besoin exprimé ; s'il manque une information (délai, garantie, frais de port), il prépare un email de demande de précisions au fournisseur
- il relance les fournisseurs consultés qui n'ont pas répondu trois jours avant la date limite que j'ai fixée
- il compare chaque prix à l'historique du logiciel de gestion et aux remises déjà obtenues, et signale les hausses anormales
- une fois toutes les réponses reçues ou la date limite passée, il calcule la note pondérée de chaque offre et me prépare une synthèse d'une page : classement, recommandation argumentée, risques (fournisseur nouveau, acompte élevé, délai serré) et écarts avec notre politique achats
- il prépare des brouillons d'emails de négociation pour les deux fournisseurs les mieux placés, en s'appuyant sur les offres concurrentes sans jamais révéler leurs noms ni leurs prix exacts
- quand j'ai choisi le fournisseur, il prépare le bon de commande dans le logiciel de gestion à partir du devis retenu, ainsi que les emails de réponse aux fournisseurs non retenus
- il inscrit dans l'agenda les dates clés : fin de validité des offres, date de livraison promise, échéance de paiement
- il met à jour la fiche de chaque fournisseur (prix obtenus, délais réels, incidents) et me fait chaque mois un point sur les économies réalisées et les fournisseurs à surveiller
Ce qui part automatiquement et ce qui attend ma validation est décidé une fois pour toutes. Les demandes de précisions et les relances, qui ne m'engagent pas, sont envoyées automatiquement avec un modèle validé à l'avance, et j'en reçois une copie. En revanche, les emails de négociation, les bons de commande et les réponses aux fournisseurs non retenus restent des brouillons tant que je ne les ai pas relus et validés, car ils engagent l'entreprise. L'agent ne choisit jamais le fournisseur à ma place : il recommande, je décide, et au-delà du seuil fixé dans notre politique achats il me rappelle que la décision revient au dirigeant.

**Vos remarques** :


## Saisir les factures fournisseurs

`cartographie / factures` · 38 s

> **Fonction** : Comptabilité · **Priorité** : urgent  
> **Description** : —  
> **Situation actuelle** : Je reçois les factures par email ou par courrier. Je les saisis à la main dans un fichier Excel avant de les envoyer à l'expert-comptable.  
> **Situation souhaitée** : Je souhaite que les factures soient lues et classées automatiquement, et que le fichier de suivi soit à jour sans saisie manuelle.  
> **Gain espéré** : Plusieurs heures gagnées chaque mois. Moins d'erreurs de saisie. Meilleure vision des dépenses.

### Niveau 1 · Chat

**Attendu**

Je joins une facture dans la conversation, et je demande à l'IA d'extraire les informations (fournisseur, date, montant HT, TVA, échéance) sous forme de tableau.

**Obtenu** (423 caractères)

Je joins les factures du mois (PDF reçus par email et photos des factures papier), avec un extrait de mon fichier Excel de suivi pour montrer les colonnes. Je demande à l'IA de lire chaque facture et de me rendre un tableau à coller dans Excel : date, fournisseur, numéro, HT, TVA, TTC, échéance et catégorie de dépense. Je lui demande aussi de me signaler toute facture illisible ou dont les montants ne tombent pas juste.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste de nos fournisseurs et leur catégorie de dépense
- le format attendu par l'expert-comptable
- les règles de nommage des fichiers
L'IA extrait les informations, les classe dans la bonne catégorie et signale les anomalies (doublon, montant inhabituel).

**Obtenu** (2532 caractères)

J'ai enregistré dans la solution IA :
- la structure exacte de mon fichier Excel de suivi : l'ordre des colonnes (date de facture, date de réception, fournisseur, numéro de facture, montant HT, taux de TVA, montant TVA, montant TTC, catégorie de dépense, date d'échéance, mode de paiement, statut payé ou non, date d'envoi à l'expert-comptable), le format des dates (JJ/MM/AAAA) et des montants (deux décimales, virgule). Ainsi, chaque ligne produite se colle directement dans le fichier, sans retouche.
- la liste de mes fournisseurs habituels : leur nom exact tel qu'il doit apparaître, leur SIREN, leurs conditions de paiement (30 jours fin de mois, comptant, prélèvement…), la catégorie de dépense associée (achats de marchandises, sous-traitance, loyer, énergie, télécom, honoraires, fournitures, déplacements…) et leur fourchette de montant habituelle. L'IA classe donc toujours de la même façon et repère un montant inhabituel.
- les règles de contrôle à appliquer à chaque facture : présence des mentions obligatoires (numéro, date, SIREN et numéro de TVA du fournisseur, nos coordonnées exactes, détail HT, TVA et TTC), vérification du calcul HT + TVA = TTC, taux de TVA cohérent avec l'achat (20 %, 10 %, 5,5 %, autoliquidation pour certains fournisseurs étrangers ou du BTP), recherche des doublons par fournisseur et numéro de facture, et comparaison avec le devis signé ou le bon de commande quand il existe.
- les consignes de nommage et de classement des PDF, par exemple AAAA-MM-JJ_Fournisseur_NumFacture_MontantTTC.pdf, rangé dans le dossier du mois. J'y ai ajouté les attentes de mon expert-comptable : format d'export, date limite d'envoi chaque mois, pièces à joindre, et les cas à lui signaler à part (avoirs, factures en devise étrangère, achats de matériel au-dessus de 500 € HT à traiter en immobilisation).
- un modèle de récapitulatif mensuel des dépenses par catégorie et par fournisseur, avec la comparaison au mois précédent et au même mois de l'année dernière.
Je n'ai plus qu'à déposer les PDF ou les photos des factures papier, sans rien réexpliquer. L'IA me rend des lignes prêtes à coller dans mon Excel, toujours au même format, avec le nom de fichier à utiliser et la bonne catégorie de dépense, puis le récapitulatif du mois. Elle liste à part chaque anomalie (doublon possible, erreur de calcul, mention obligatoire manquante, taux de TVA douteux, montant hors fourchette habituelle, nouveau fournisseur à créer dans ma liste), pour que je vérifie ces points avant l'envoi à l'expert-comptable.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier comptable :
- il détecte les factures reçues par email et les enregistre dans le bon dossier, avec un nom normalisé
- il met à jour le fichier Excel de suivi des factures
- il me signale les échéances de paiement à venir
- chaque fin de mois, il prépare l'email d'envoi à l'expert-comptable

**Obtenu** (2664 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des factures, au fichier Excel de suivi, à la banque et à la plateforme d'échange de l'expert-comptable :
- chaque matin, il parcourt la boîte mail et repère les factures fournisseurs : pièces jointes PDF, mais aussi factures à télécharger depuis les espaces clients (énergie, téléphonie, fournitures en ligne)
- pour les factures papier, je les photographie avec mon téléphone dans un dossier « À traiter », et il les récupère lui-même
- il lit chaque facture et applique les règles de contrôle enregistrées au niveau 2 : mentions obligatoires, calcul HT, TVA et TTC, taux de TVA, doublons, comparaison avec le devis ou le bon de commande
- il renomme le PDF selon nos consignes et le range dans le dossier du mois, puis vide le dossier « À traiter »
- il ajoute la ligne dans le fichier Excel de suivi, avec le statut « OK » ou « À vérifier » et la raison de l'anomalie
- il rapproche les factures avec les relevés bancaires : il passe la facture en « payée » quand le débit apparaît, et repère les prélèvements sans facture correspondante
- chaque lundi, il me prépare la liste des factures arrivant à échéance dans la semaine, avec le total à prévoir en trésorerie ; il ne lance jamais de paiement lui-même
- quand une facture est incorrecte ou manquante (mention absente, montant différent du devis, prélèvement sans facture), il rédige un email au fournisseur pour demander une facture rectifiée ou un duplicata
- en fin de mois, il dépose les factures du mois sur la plateforme de l'expert-comptable et prépare un email récapitulatif : nombre de factures, total HT et TVA, points particuliers (avoirs, devises, immobilisations)
- il met à jour le récapitulatif des dépenses par catégorie et par fournisseur, et me signale les hausses notables par rapport aux mois précédents
Ce qui part tout seul et ce qui attend mon accord, c'est moi qui le décide, action par action. Au départ, je valide tout pendant un ou deux mois, le temps de vérifier la fiabilité de l'agent. Ensuite, la lecture, le classement, la saisie dans Excel et le rapprochement bancaire peuvent se faire automatiquement, puisque je peux les contrôler à tout moment dans le fichier. Les demandes de duplicata simples aux fournisseurs habituels peuvent aussi partir automatiquement. En revanche, les emails de contestation, toute facture marquée « À vérifier », l'envoi mensuel à l'expert-comptable et tout ce qui touche aux paiements restent soumis à ma validation. Je n'ai plus de saisie manuelle : je contrôle les anomalies signalées, je valide l'envoi du mois, et je gagne plusieurs heures avec une vision claire de mes dépenses.

**Vos remarques** :


## Préparer un rendez-vous client

`cartographie / rendez-vous` · 31 s

> **Fonction** : Commercial · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Avant un rendez-vous, je cherche les informations sur le client sur internet et dans mes anciens emails. Je prends des notes pendant le rendez-vous et je fais rarement de compte rendu.  
> **Situation souhaitée** : Je souhaite arriver mieux préparé en rendez-vous, et que le compte rendu et les actions de suivi soient faits systématiquement.  
> **Gain espéré** : Rendez-vous plus efficaces. Meilleur taux de transformation. Aucune action de suivi oubliée.

### Niveau 1 · Chat

**Attendu**

Je donne à l'IA le nom de l'entreprise et du contact, et je lui demande de préparer une fiche de préparation avec des questions à poser. Après le rendez-vous, je lui dicte mes notes pour qu'elle rédige le compte rendu.

**Obtenu** (393 caractères)

Je donne à l'IA le nom du client et l'adresse de son site, je colle mes derniers emails échangés avec lui, et je lui demande une fiche de préparation avec l'objectif du rendez-vous, les questions à poser et les objections probables. Après le rendez-vous, je lui dicte mes notes et je lui demande un compte rendu clair, la liste des actions de suivi et un email de récapitulatif pour le client.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- notre offre et nos arguments par type de client
- les questions de découverte à poser
- un modèle de compte rendu
L'IA prépare une fiche adaptée au type de client, et rédige des comptes rendus homogènes avec les prochaines étapes.

**Obtenu** (2192 caractères)

J'ai enregistré dans la solution IA :
- une fiche de présentation de notre société et de nos offres : gammes de produits ou services, tarifs de base, conditions commerciales (remises maximales que je peux accorder seul, délais, conditions de paiement), références clients par secteur que je peux citer, et les trois ou quatre arguments qui font la différence face à nos principaux concurrents
- un modèle de fiche de préparation de rendez-vous en une page : identité du client (activité, taille, chiffre d'affaires, actualité récente), interlocuteurs et leur rôle, historique de nos échanges et commandes, besoins supposés, objectif précis du rendez-vous, questions de découverte, objections probables avec la réponse adaptée, et prochaine étape à obtenir
- notre méthode de qualification (budget, décideur, besoin, délai), la liste des signaux qui montrent qu'un prospect est prêt à avancer, et la consigne de toujours signaler les informations qui manquent pour qualifier l'opportunité
- un modèle de compte rendu (contexte, besoins exprimés, points de vigilance, décisions prises, actions de suivi avec responsable et échéance) et un modèle d'email de remerciement et de récapitulatif à envoyer au client dans les 24 heures, avec notre ton : vouvoiement, phrases courtes, sans jargon
- des règles de prudence : ne jamais inventer un chiffre ou une information sur le client, indiquer la source de chaque information (site du client, article de presse, ancien email), distinguer ce qui est vérifié de ce qui est supposé, et ne jamais promettre un prix, une remise ou un délai hors de nos conditions
Avant chaque rendez-vous, je donne simplement le nom du client et je joins mes anciens emails ou mes notes : l'IA remplit toujours la même fiche de préparation, avec les questions à poser et les objections à anticiper, et me signale les informations manquantes ou contradictoires à vérifier avant d'y aller. Après le rendez-vous, je lui dicte mes notes et elle produit un compte rendu et un email de suivi conformes à nos modèles, homogènes d'un client à l'autre, en me prévenant si une demande du client sort de nos conditions commerciales ou si aucune prochaine étape claire n'a été fixée.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à l'agenda, à la messagerie et au CRM :
- la veille du rendez-vous, il prépare la fiche avec l'historique des échanges et des devis
- après le rendez-vous, il enregistre le compte rendu dans le CRM
- il crée les tâches de suivi dans l'agenda
- il prépare le brouillon d'email de remerciement au client

**Obtenu** (2874 caractères)

L'agent IA est connecté à l'agenda, à la messagerie, au CRM, aux dossiers partagés (offres, devis, références clients), à la recherche internet et à l'outil de visioconférence ou à l'application de prise de notes vocales :
- il repère dans mon agenda chaque rendez-vous client prévu dans les deux jours, et identifie la société et les participants
- il recherche les informations publiques sur le client : site internet, actualités récentes, recrutements, changements de dirigeants, page LinkedIn de la société, en notant la source de chaque information
- il retrouve dans ma messagerie et dans le CRM l'historique : derniers échanges, devis envoyés, commandes passées, réclamations éventuelles, promesses faites lors du dernier contact
- il prépare la fiche de rendez-vous selon notre modèle (objectif, interlocuteurs, besoins supposés, questions à poser, objections probables, offre à mettre en avant, prochaine étape à obtenir) et la dépose dans le dossier du client
- la veille au soir, il m'envoie automatiquement cette fiche par email avec les points à vérifier, car c'est un envoi interne qui ne nécessite pas ma validation
- si un devis ou une documentation est utile, il prépare le document à jour à partir de nos modèles et le joint à la fiche
- après le rendez-vous, il récupère la transcription de la visioconférence ou mes notes dictées, et rédige le compte rendu selon notre modèle, avec les besoins exprimés, les décisions et les actions de suivi (responsable, échéance)
- il met à jour la fiche client et l'opportunité dans le CRM : étape commerciale, montant estimé, date de décision probable, interlocuteurs ajoutés ; ces mises à jour se font automatiquement, mais il me signale tout changement de montant ou d'étape pour que je puisse corriger
- il prépare un brouillon d'email de remerciement et de récapitulatif pour le client, que je relis et valide avant envoi, car il engage la société auprès du client
- il crée dans mon agenda et dans le CRM les tâches de suivi : envoi du devis, rappel téléphonique, relance si pas de réponse sous dix jours
- à l'échéance, il prépare la relance du client ; je décide au cas par cas si les relances simples (rappel d'un devis envoyé) partent automatiquement ou si je les valide une par une, et toute proposition de prix, de remise ou de délai passe obligatoirement par ma validation
- chaque vendredi, il m'envoie la liste des actions de suivi en retard ou à venir, et les rendez-vous de la semaine suivante pour lesquels il manque des informations
- chaque mois, il me prépare une synthèse : nombre de rendez-vous, opportunités créées, taux de transformation, objections les plus fréquentes, pour améliorer mes argumentaires
Je garde la main sur tout ce qui engage la société : les règles d'envoi automatique sont fixées une fois avec moi, et l'agent me demande mon accord dès qu'une situation sort de ces règles.

**Vos remarques** :


## Relire les contrats avant signature

`cartographie / contrats` · 38 s

> **Fonction** : Juridique / administratif · **Priorité** : important  
> **Description** : —  
> **Situation actuelle** : Je reçois des contrats de clients ou de fournisseurs. Je les lis rapidement, et je fais appel à l'avocat seulement pour les gros contrats.  
> **Situation souhaitée** : Je souhaite repérer facilement les clauses à risque avant de signer, et savoir quand il faut consulter l'avocat.  
> **Gain espéré** : Moins de risques juridiques. Meilleure négociation des clauses. Recours à l'avocat mieux ciblé.

### Niveau 1 · Chat

**Attendu**

Je joins le contrat dans la conversation, et je demande à l'IA de me résumer les points importants et les clauses qui pourraient poser problème.

**Obtenu** (348 caractères)

Je joins le contrat reçu en PDF et j'indique s'il s'agit d'un client ou d'un fournisseur, le montant et la durée. Je demande à l'IA de lister les clauses à risque pour mon entreprise et d'expliquer chacune en langage simple. Je lui demande aussi de proposer une reformulation plus équilibrée et de me dire si le contrat justifie l'avis de l'avocat.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- nos conditions générales
- nos points non négociables (pénalités, délais de paiement, responsabilité)
- des exemples de clauses acceptables
L'IA compare le contrat à nos règles, liste les écarts et propose des reformulations. Elle m'indique quand l'avis de l'avocat est recommandé.

**Obtenu** (2705 caractères)

J'ai enregistré dans la solution IA :
- notre grille des clauses sensibles, avec pour chacune ce que nous acceptons, ce que nous négocions et ce que nous refusons. Elle couvre la limitation de responsabilité (plafond au montant du contrat, exclusion des dommages indirects) et les pénalités de retard (plafond de 10 % du montant). Elle couvre aussi les délais de paiement (60 jours maximum, conformément à la loi), la durée et la reconduction tacite, ainsi que le préavis de résiliation. S'y ajoutent l'exclusivité, la non-concurrence et la non-sollicitation, la propriété intellectuelle et la confidentialité. Enfin, elle traite la révision des prix, la protection des données (RGPD), le droit applicable et le tribunal compétent
- nos conditions générales de vente et d'achat ainsi que nos modèles de contrats habituels. L'IA compare ainsi chaque contrat reçu à nos propres positions et repère les écarts, mais aussi les clauses importantes qui manquent
- les critères qui déclenchent obligatoirement l'avis de l'avocat :
  - montant supérieur à 50 000 euros ou engagement de plus d'un an
  - responsabilité illimitée, garantie ou caution personnelle
  - cession de propriété intellectuelle ou exclusivité
  - droit étranger ou contrat rédigé en langue étrangère
  - clause pénale élevée, ou conditions imposées par un grand groupe ou une administration
  - tout doute de l'IA sur l'interprétation d'une clause
- une fiche d'analyse type à remplir pour chaque contrat. Elle reprend les parties, l'objet, le montant et la durée, puis les dates clés (échéance, préavis, reconduction). Elle contient ensuite un tableau des clauses avec un niveau de risque vert, orange ou rouge, une explication en langage simple et une proposition de reformulation. Elle se termine par les questions à poser à l'autre partie et une conclusion claire : « signable en l'état », « à négocier » ou « à envoyer à l'avocat »
- les contrats déjà signés, les clauses que nous avons réussi à négocier par le passé et les remarques écrites de notre avocat. L'IA s'appuie ainsi sur ce qui a déjà été accepté ou refusé chez nous
L'IA produit à chaque fois la même fiche d'analyse et juge le contrat selon nos règles plutôt que selon des principes généraux. Elle signale clairement les clauses absentes, inhabituelles ou contraires à nos positions. Elle me dit quand l'avocat doit être consulté et pourquoi, et elle prépare les questions précises à lui poser, ce qui réduit le temps facturé. Je garde la décision finale : l'IA m'aide à voir les risques, elle ne remplace pas un conseil juridique sur les contrats sensibles. La solution est paramétrée pour que nos contrats restent confidentiels et ne servent pas à entraîner le modèle.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie et au dossier des contrats :
- il enregistre le contrat reçu et une fiche d'analyse dans le dossier du client
- il prépare un brouillon d'email avec les modifications demandées
- il note les dates clés (échéance, renouvellement, préavis) dans un fichier de suivi
- il me prévient avant chaque date de renouvellement

**Obtenu** (3078 caractères)

L'agent IA est connecté à la messagerie, au dossier partagé des contrats, au CRM, à l'agenda et à l'outil de signature électronique :
- il repère les contrats reçus en pièce jointe d'un email, ou déposés dans le dossier « Contrats à relire », et les enregistre au bon endroit avec un nom normalisé (date, partie, type de contrat)
- il retrouve le client ou le fournisseur dans le CRM : historique de la relation, chiffre d'affaires, contrats précédents, éventuels litiges ou retards de paiement
- il analyse le contrat avec notre grille des clauses sensibles et remplit la fiche d'analyse type, avec un niveau de risque vert, orange ou rouge pour chaque clause
- si c'est une nouvelle version d'un contrat déjà reçu, il compare les deux versions et me signale toutes les modifications, y compris celles que l'autre partie n'a pas mentionnées
- pour un contrat vert, il me présente la fiche et me propose de passer directement à la signature
- pour un contrat orange, il prépare une version annotée du contrat avec nos propositions de reformulation. Il rédige aussi un brouillon d'email à l'autre partie, qui explique nos demandes de modification de façon courtoise et argumentée
- pour un contrat rouge, ou dès qu'un critère avocat est rempli, il prépare le dossier pour l'avocat : le contrat, la fiche d'analyse, le contexte commercial, les points bloquants et les questions précises à trancher. Il rédige le brouillon d'email à l'avocat et me propose un créneau dans l'agenda pour en parler
- il suit les échanges de négociation, analyse chaque nouvelle version reçue et met à jour la fiche jusqu'à la version finale
- une fois le contrat validé, il le prépare dans l'outil de signature électronique, avec les bons signataires et l'ordre de signature
- après la signature, il classe le contrat dans le dossier « Contrats signés » et le renseigne dans le registre des contrats (partie, montant, durée, date d'échéance, préavis, reconduction tacite, clauses particulières)
- il crée des rappels dans l'agenda avant chaque date limite de préavis, pour que je décide à temps de résilier, de renégocier ou de laisser reconduire
- chaque trimestre, il me prépare une synthèse : contrats signés et en cours de négociation, prochaines échéances, clauses le plus souvent refusées par nos partenaires, nombre de contrats transmis à l'avocat et honoraires correspondants
Je décide une fois pour toutes, avec l'agent, de ce qui part automatiquement et de ce qui attend ma validation. Le classement des contrats, la mise à jour du registre, les rappels d'échéance et les accusés de réception peuvent être automatiques. La transmission du dossier à l'avocat peut l'être aussi quand un critère obligatoire est rempli. En revanche, tout email qui engage l'entreprise auprès d'un client ou d'un fournisseur passe par ma validation, comme les demandes de modification ou l'acceptation d'une clause. Le lancement de la signature électronique et la décision de signer restent toujours entre mes mains. L'agent ne signe jamais seul et me signale chaque fois qu'il n'est pas certain de son analyse.

**Vos remarques** :


## Accueillir un nouveau salarié

`cartographie / accueil` · 34 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : —  
> **Situation actuelle** : L'accueil se fait de façon improvisée. J'oublie parfois des démarches (accès, matériel, documents administratifs).  
> **Situation souhaitée** : Je souhaite un parcours d'accueil structuré, pour que le nouveau salarié soit opérationnel rapidement et que rien ne soit oublié.  
> **Gain espéré** : Intégration plus rapide. Meilleure image auprès des nouveaux. Moins de démarches oubliées.

### Niveau 1 · Chat

**Attendu**

Je décris le poste et la date d'arrivée à l'IA, et je lui demande de préparer une liste des tâches à faire et un programme pour la première semaine.

**Obtenu** (314 caractères)

Je donne à l'IA le poste, le type de contrat et la date d'arrivée du nouveau salarié, et je joins sa fiche de poste. Je lui demande une check-list des démarches avant, pendant et après l'arrivée (accès, matériel, documents administratifs), un planning de la première semaine et un email de bienvenue à lui envoyer.

### Niveau 2 · Compétences

**Attendu**

J'ai enregistré dans la solution IA :
- la liste des démarches administratives obligatoires
- le livret d'accueil de l'entreprise
- les contacts clés et les outils utilisés
L'IA prépare un parcours d'accueil adapté au poste, et répond aux questions du nouveau salarié sur le fonctionnement de l'entreprise.

**Obtenu** (2343 caractères)

J'ai enregistré dans la solution IA :
- notre check-list d'accueil complète, en trois temps. Avant l'arrivée : DPAE à faire auprès de l'URSSAF avant la prise de poste, contrat signé, fiche dans le logiciel de paie, inscription au registre unique du personnel, adhésion à la mutuelle et à la prévoyance, commande du matériel, création des accès. Le premier jour : remise du badge, des clés, de l'ordinateur et du téléphone, visite des locaux, présentation à l'équipe, consignes de sécurité, déjeuner d'accueil. Les trois premiers mois : visite d'information et de prévention auprès de la médecine du travail, points réguliers avec le manager, entretien avant la fin de la période d'essai
- la liste des responsables de chaque tâche et les délais à respecter : ce qui revient à moi, au responsable informatique ou au prestataire, au manager du nouveau salarié, au cabinet comptable qui gère la paie
- les documents à demander au salarié (pièce d'identité, attestation de sécurité sociale, RIB, justificatif de domicile, diplômes, permis de conduire si le poste l'exige, titre de séjour le cas échéant) et ceux à lui remettre (contrat, règlement intérieur, livret d'accueil, notice mutuelle, charte informatique, fiche de poste)
- notre livret d'accueil, l'organigramme, les horaires, les règles de congés et de télétravail, et des modèles validés : email de bienvenue envoyé avant l'arrivée, planning de la première semaine, message de présentation à l'équipe, questionnaire d'étonnement à un mois
- les différences selon le contrat et le poste : CDI, CDD, alternant, stagiaire, cadre ou non cadre, poste au bureau ou sur le terrain, car les démarches et le matériel changent (convention de stage, contrat d'apprentissage et lien avec l'école, équipements de protection individuelle, véhicule)
Quand j'indique le nom, le poste, le type de contrat et la date d'arrivée, l'IA produit toujours le même parcours d'accueil complet et daté : planning de la première semaine, email de bienvenue, liste des tâches par responsable, documents adaptés au contrat. Elle me signale les écarts et les points sensibles : DPAE pas encore faite à quelques jours de l'arrivée, document manquant, titre de séjour à vérifier, fin de période d'essai qui approche, ou situation qui ne figure pas dans notre check-list et qu'il faut vérifier avec le cabinet comptable.

### Niveau 3 · Agent

**Attendu**

L'agent IA est connecté à la messagerie, à l'agenda et au dossier RH :
- il crée le dossier du salarié et la liste des documents à collecter
- il envoie le brouillon d'email de bienvenue avec le programme de la première semaine
- il planifie les rendez-vous d'intégration dans l'agenda
- il me relance sur les tâches non faites

**Obtenu** (3032 caractères)

L'agent IA est connecté à la messagerie, à l'agenda partagé, au dossier RH partagé, au logiciel de paie, à l'outil de signature électronique et à l'outil de demandes informatiques (ou à l'adresse email du prestataire) :
- il démarre le parcours dès que je crée la fiche du futur salarié dans le dossier RH (nom, poste, contrat, date d'arrivée, manager)
- il crée un dossier au nom du salarié et un fichier de suivi d'accueil à partir de notre check-list, avec une date et un responsable pour chaque tâche
- il prépare le contrat à partir de nos modèles et le dépose dans l'outil de signature électronique ; je le relis et c'est moi qui lance la signature
- il envoie au salarié la demande de pièces administratives avec un lien de dépôt, puis vérifie ce qui a été reçu ; les relances pour documents manquants partent automatiquement, avec un message standard que j'ai validé une fois
- il prépare les informations nécessaires à la DPAE et à la création de la fiche dans le logiciel de paie, et me les transmet (ou les envoie au cabinet comptable) ; la déclaration elle-même reste faite par moi ou par le cabinet, et il vérifie qu'elle est bien enregistrée avant le jour d'arrivée
- il envoie au responsable informatique ou au prestataire la demande de matériel et de création des accès (messagerie, logiciels, badge) dix jours avant l'arrivée, puis relance automatiquement si rien n'est confirmé trois jours avant
- il prépare la demande d'adhésion à la mutuelle et à la prévoyance, que je valide avant envoi
- il bloque dans l'agenda les rendez-vous de la première semaine : accueil, visite, présentation à l'équipe, formation aux outils, points avec le manager ; les invitations internes partent automatiquement
- il envoie au salarié, une semaine avant, l'email de bienvenue avec le livret d'accueil, les horaires, l'adresse et le planning ; ce premier message passe par ma validation
- la veille de l'arrivée, il me fait un point : tout ce qui est prêt et ce qui manque encore (matériel, accès, document, signature)
- il demande la visite d'information et de prévention au service de médecine du travail et me prévient si elle n'est pas programmée dans les délais
- il programme les points de suivi à un mois et à deux mois, envoie au salarié le questionnaire d'étonnement à un mois, et m'alerte trois semaines avant la fin de la période d'essai pour préparer l'entretien avec le manager
- il clôture le dossier quand toutes les tâches sont faites et archive les pièces dans le dossier du salarié
- chaque trimestre, il me prépare une synthèse : délais réels, démarches oubliées ou en retard, retours des questionnaires, pour améliorer la check-list
J'ai choisi à l'avance ce qui part seul et ce qui attend mon accord : les relances, les demandes informatiques et les invitations internes sont automatiques ; le contrat, la DPAE, la mutuelle et le premier email au salarié passent toujours par ma validation. Toute situation inhabituelle (contrat particulier, salarié étranger, poste à risque) m'est signalée avant toute action.

**Vos remarques** :


## Adapter les fiches produits pour chaque pays

`maison-luxe / luxe-fiches-produits` · 39 s

> **Fonction** : Marketing et communication · **Priorité** : important  
> **Description** : Je veux décliner les descriptions des produits du site e-commerce dans plusieurs langues, en respectant l’univers de la marque.  
> **Situation actuelle** : Les fiches sont rédigées en italien, puis envoyées à une agence de traduction. Il faut 2 semaines par collection, et certaines traductions perdent le style de la maison.  
> **Situation souhaitée** : La solution propose des fiches dans chaque langue, adaptées à la culture locale et conformes à notre charte éditoriale. Les équipes locales n’ont plus qu’à valider.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (368 caractères)

Je copie la fiche produit en italien (nom du modèle, description, matières, dimensions, entretien) et je joins deux ou trois fiches déjà publiées que je trouve réussies dans chaque langue. Je demande à l'IA de la décliner en français, anglais et allemand en gardant le même ton, sans traduire mot à mot, et de me lister les termes ou passages dont elle n'est pas sûre.

### Niveau 2 · Compétences

**Obtenu** (2515 caractères)

J'ai enregistré dans la solution IA :
- notre charte éditoriale : le ton de la maison (élégant, sobre, jamais superlatif ni promotionnel), la structure et la longueur de chaque partie de la fiche (accroche de deux lignes, description de 60 à 90 mots, puis matières, dimensions, fabrication et entretien), les mots à privilégier et ceux à bannir (« pas cher », « tendance », « must-have »…), et des exemples de fiches validées par la direction de marque dans chaque langue
- un glossaire multilingue de nos termes métier : noms des lignes et des modèles qui ne se traduisent jamais, noms des cuirs et des finitions (veau grainé, cuir pleine fleur, piqûre sellier, tranche peinte à la main), forme exacte de la mention « Made in Italy » selon les pays, avec la traduction validée par chaque équipe locale
- les règles d'adaptation par pays : vouvoiement ou tutoiement, références culturelles à éviter, unités (centimètres ou pouces), correspondance des tailles (IT, FR, UK, US, JP), sensibilités locales sur certaines couleurs, matières ou symboles, notamment pour le Japon, la Chine et le Moyen-Orient
- les règles légales et de conformité : mentions obligatoires sur la composition des textiles et l'origine des peaux, allégations interdites sans justificatif (« éco-responsable », « durable »), consignes d'entretien normalisées, restrictions sur les matières exotiques selon les marchés
- la structure de notre fichier de collection et le format attendu par le site e-commerce : champs à remplir, nombre de caractères pour le titre et la méta-description, mots-clés prioritaires par marché
Quand je lui transmets une fiche en italien, l'IA produit toutes les langues d'un coup, dans le même format et avec le même vocabulaire d'une collection à l'autre. Elle conserve les noms de modèles, convertit les tailles et les dimensions, adapte les tournures à chaque culture et n'utilise aucun mot interdit. Surtout, elle me signale les écarts : une information manquante dans la fiche italienne (composition de la doublure, poids, origine du cuir), une allégation à risque juridique, un terme absent du glossaire, ou une formulation qu'elle a dû fortement adapter pour un marché. Chaque point signalé est indiqué en tête de fiche, pour que l'équipe locale sache exactement où concentrer sa relecture. Les équipes locales relisent ainsi un texte déjà conforme à la charte et n'ont plus à réécrire le style d'une traduction : leur travail se limite à vérifier les points signalés, ajuster une nuance si besoin et valider.

### Niveau 3 · Agent

**Obtenu** (3008 caractères)

L'agent IA est connecté au dossier partagé des collections (fichiers des références en italien et visuels), au back-office du site e-commerce, à la messagerie, à l'outil de gestion de projet de l'équipe marketing et au calendrier des lancements :
- il détecte qu'une nouvelle collection a été déposée dans le dossier partagé et repère les fiches nouvelles ou modifiées
- il vérifie que chaque fiche italienne est complète (composition, dimensions, origine des peaux, entretien) et cohérente avec les visuels (couleur, fermoir, nombre de poches) ; s'il manque une information, il envoie automatiquement un email interne au chef de produit concerné en précisant ce qu'il manque
- il rédige les fiches dans chaque langue en appliquant la charte, le glossaire, les règles par pays et les règles légales enregistrées
- il dépose les fiches traduites dans le back-office du site, en statut « brouillon non publié », dans la bonne langue et le bon pays
- il crée dans l'outil de gestion de projet une tâche de validation pour chaque équipe locale, avec le lien vers les brouillons et la liste des points à vérifier en priorité (termes nouveaux, adaptations culturelles fortes, allégations sensibles)
- il suit l'avancement par pays et envoie automatiquement une relance aux équipes locales dont les fiches ne sont pas validées à J-5, puis à J-2 de la date de lancement, en me mettant en copie à la seconde relance
- il intègre les corrections faites par les équipes locales dans les brouillons et me propose d'ajouter au glossaire les nouveaux termes validés, pour qu'ils soient réutilisés automatiquement dans les collections suivantes
- il publie les fiches à la date de lancement prévue dans le calendrier, uniquement pour les pays où la validation a été donnée ; si un pays n'a pas validé, il bloque la publication pour ce pays et me prévient
- il me prépare un tableau de suivi de la collection : nombre de fiches par langue, statut, délai de validation, nombre de corrections par pays
- quelques semaines après le lancement, il croise les fiches avec les données du site (taux de conversion, retours pour « produit non conforme à la description », questions des clients) et me propose des améliorations de texte pour les fiches qui posent problème
Règles de validation : les envois internes et sans risque partent automatiquement (demandes d'informations aux chefs de produit, relances aux équipes locales, tableau de suivi). En revanche, rien n'est visible des clients sans validation humaine : chaque fiche doit être validée par l'équipe locale du pays avant publication, et toute modification du glossaire ou de la charte passe par moi. Je peux décider plus tard d'autoriser la publication automatique pour les fiches simples (par exemple une nouvelle couleur d'un modèle déjà publié), une fois la confiance établie. Le délai passe ainsi de deux semaines par collection à quelques jours, le style de la maison reste le même dans toutes les langues, et les équipes locales n'ont plus qu'à relire et valider.

**Vos remarques** :


## Former les nouveaux conseillers de vente

`maison-luxe / luxe-formation-conseillers` · 38 s

> **Fonction** : Ressources humaines · **Priorité** : souhaitable  
> **Description** : Je veux que les nouveaux conseillers connaissent rapidement l’histoire de la maison, les matières et les codes du service.  
> **Situation actuelle** : La formation se fait sur 2 jours au siège, avec un classeur de 150 pages. Les conseillers ont ensuite du mal à retrouver une information précise face au client.  
> **Situation souhaitée** : Un assistant répond aux questions des conseillers sur les produits, les matières et les procédures, et leur propose des quiz pour vérifier leurs connaissances.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (516 caractères)

Je joins le chapitre du classeur de formation concerné, par exemple « Les cuirs et leur entretien », et je demande à l'IA d'en tirer une fiche d'une page et un quiz de dix questions avec les corrections, en s'appuyant uniquement sur le document joint. Je peux aussi coller un passage du classeur et lui poser une question précise, comme « comment expliquer à une cliente la différence entre le cuir grainé et le cuir lisse ? ». Je vérifie ensuite chaque réponse avec le classeur avant de la diffuser aux conseillers.

### Niveau 2 · Compétences

**Obtenu** (2353 caractères)

J'ai enregistré dans la solution IA :
- le classeur de formation de 150 pages, découpé par chapitres : histoire de la maison et de son fondateur, ateliers en Italie, lignes iconiques, matières, entretien, codes du service, procédures boutique et e-commerce. Je lui ai donné trois consignes : répondre uniquement à partir de ces documents, citer le chapitre et la page, et répondre « cette information n'est pas dans nos documents, demandez à votre responsable de boutique » plutôt que d'inventer.
- les fiches techniques des matières et des produits : origine des cuirs (veau, agneau, cuirs exotiques avec leurs certificats), tanneries partenaires, finitions, conseils d'entretien. J'y ai ajouté ce que le conseiller peut promettre au client et ce qu'il ne doit jamais promettre : résistance à l'eau, durée de garantie, délais de réparation en atelier.
- les codes du service et le vocabulaire de la maison : accueil du client, façon de présenter et de faire toucher un sac, mots à employer et mots interdits (jamais « promotion » ni « pas cher »). J'y ai mis aussi les noms officiels des collections en italien avec leur prononciation, ainsi que les règles de discrétion sur les clients connus, les prix et les collections à venir.
- les procédures clés et leurs variantes selon le pays : retours et échanges, commande en ligne retirée en boutique, demande de réparation, détaxe pour les clients étrangers, conduite à tenir face à un produit suspecté d'être une contrefaçon.
- la méthode de quiz :
  - questions courtes tirées de situations réelles en boutique ;
  - trois niveaux (première semaine, premier mois, conseiller confirmé) ;
  - correction expliquée avec renvoi à la page du classeur ;
  - mises en situation où l'IA joue un client exigeant, puis commente la réponse du conseiller selon nos codes du service.
Le conseiller pose sa question depuis la réserve ou entre deux clients, dans sa langue. Il obtient en quelques secondes une réponse exacte, dans le vocabulaire de la maison, identique d'une boutique et d'un pays à l'autre, avec la référence pour vérifier. L'IA signale les sujets sensibles qui demandent l'accord du responsable (geste commercial, cuirs exotiques, client important, prix futurs) et les contradictions entre deux documents. Elle adapte aussi les quiz au niveau du conseiller au lieu de poser des questions au hasard.

### Niveau 3 · Agent

**Obtenu** (2892 caractères)

L'agent IA est connecté au logiciel RH, à la messagerie et à Teams, à l'agenda, au dossier partagé de formation, au catalogue produits du site e-commerce et à l'outil de planning des boutiques. Il fonctionne ainsi :
- il repère chaque nouveau conseiller dès sa création dans le logiciel RH, avec sa boutique, son pays, sa langue et sa date d'arrivée ;
- il lui réserve une place dans la prochaine session de deux jours au siège, en vérifiant dans le planning que la boutique peut se passer de lui ces jours-là, puis il prépare l'invitation dans l'agenda ;
- il envoie un message de bienvenue avec un parcours de lecture : l'histoire de la maison et les lignes iconiques à découvrir avant la formation, en courtes fiches plutôt que les 150 pages du classeur ;
- pendant les deux jours au siège, il met à disposition de chaque conseiller un espace Teams où poser ses questions et retrouver les fiches vues en session ;
- de retour en boutique, il répond aux questions des conseillers dans Teams, à partir du classeur, des fiches matières et du catalogue en ligne à jour. Il cite toujours la source et renvoie vers le responsable de boutique pour tout sujet sensible ;
- pendant les trente premiers jours, il envoie chaque matin trois questions de quiz adaptées aux erreurs de la veille, puis un quiz de validation en fin de mois ;
- il note les questions auxquelles il n'a pas pu répondre et les transmet chaque semaine au service formation, avec une proposition de réponse à valider ;
- il suit les résultats de chaque conseiller. Si un thème reste mal maîtrisé (cuirs exotiques, détaxe, retours), il prépare pour le responsable de boutique une alerte et une proposition de mise en situation ou de session de rattrapage ;
- à chaque nouvelle collection publiée dans le catalogue, il prépare les fiches produits, les arguments de vente et un quiz nouveautés, qu'il soumet au service merchandising avant de les diffuser ;
- chaque mois, il me prépare une synthèse : questions les plus posées, taux de réussite par boutique et par pays, pages du classeur à clarifier ou à mettre à jour.
Ce qui part seul et ce qui attend ma validation a été décidé une fois pour toutes avec le service formation. Partent automatiquement :
- le message de bienvenue et le parcours de lecture ;
- les quiz quotidiens et le quiz de validation ;
- les réponses aux questions courantes, quand elles s'appuient sur un document validé.
Passent par une validation humaine avant tout envoi :
- l'inscription en session au siège ;
- toute modification des contenus de référence ;
- les nouvelles fiches de collection ;
- les alertes aux responsables de boutique ;
- toute réponse sur un sujet sensible ou non couvert par nos documents.
Les nouveaux conseillers deviennent ainsi autonomes plus vite. Les deux jours au siège servent davantage à la pratique, et le classeur reste à jour grâce aux questions réelles du terrain.

**Vos remarques** :


## Contrôler la conformité des fournisseurs

`maison-luxe / luxe-conformite-fournisseurs` · 46 s

> **Fonction** : Achats et développement durable · **Priorité** : urgent  
> **Description** : Je veux vérifier plus facilement que les documents des fournisseurs (certificats, audits, traçabilité du cuir) sont complets et à jour.  
> **Situation actuelle** : Les documents sont envoyés par email et rangés dans des dossiers partagés. Un acheteur vérifie tout à la main dans un tableau Excel, et des certificats expirés sont parfois repérés trop tard.  
> **Situation souhaitée** : La solution lit chaque document, remplit le tableau de suivi, signale les documents manquants ou bientôt expirés, et prépare l’email de relance au fournisseur.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (408 caractères)

Je joins les certificats, rapports d'audit et attestations de traçabilité cuir envoyés par un fournisseur (PDF), avec la ligne de mon tableau Excel qui le concerne. Je demande à l'IA de relever pour chaque document le type, le site couvert, l'organisme certificateur et la date d'expiration. Elle me dit aussi ce qui manque ou expire dans les trois prochains mois, puis rédige un email de relance en italien.

### Niveau 2 · Compétences

**Obtenu** (2671 caractères)

J'ai enregistré dans la solution IA :
- la liste des documents exigés par catégorie de fournisseur. Pour les tanneries : certificat Leather Working Group avec sa note (Gold, Silver, Bronze), certificat ISO 14001, rapports de tests chimiques conformes à REACH et à notre liste de substances restreintes, attestation de traçabilité du cuir jusqu'à l'abattoir et au pays d'élevage, permis CITES pour les peaux exotiques. Pour les ateliers de maroquinerie et les façonniers de prêt-à-porter : audit social SMETA ou amfori BSCI de moins de deux ans et liste des sous-traitants déclarés. Pour les fournisseurs de métaux et d'accessoires : tests nickel et plomb. Pour tous : la charte fournisseur signée
- les règles de contrôle de chaque document : raison sociale identique à celle du fournisseur référencé, site de production bien couvert, périmètre du certificat, organisme certificateur accrédité, dates d'émission et d'expiration, signature ou cachet. S'y ajoutent les cas où un document n'est pas recevable : copie illisible, certificat d'un autre site, audit avec une non-conformité majeure non clôturée, traçabilité qui s'arrête à la tannerie sans remonter à l'origine des peaux
- la structure exacte de notre tableau Excel de suivi : une ligne par fournisseur et par site, les colonnes à remplir (type de document, numéro, organisme, date d'expiration, lien vers le fichier dans le dossier partagé, date du contrôle, commentaire). On y trouve aussi les statuts autorisés (conforme, à renouveler sous 90 jours, à renouveler sous 30 jours, expiré, manquant, à vérifier) et le code couleur associé
- nos seuils d'alerte et notre procédure d'escalade : première relance à 90 jours de l'échéance, deuxième relance à 30 jours. Le responsable achats et le responsable développement durable sont informés dès qu'un certificat est expiré. Le blocage des nouvelles commandes est envisagé pour toute tannerie sans traçabilité complète ou sans certificat LWG valide
- nos modèles d'emails de relance en italien, en français et en anglais, avec le ton attendu : courtois, précis, rappelant notre exigence de conformité, avec une date limite de réponse et la liste exacte des pièces à fournir
Quand je dépose les documents reçus d'un fournisseur, l'IA les vérifie toujours selon les mêmes règles, quel que soit l'acheteur qui fait le contrôle. Elle me rend les lignes du tableau Excel prêtes à copier, avec le bon statut, et rédige la relance dans la langue du fournisseur. Elle me signale clairement chaque anomalie : certificat expiré ou proche de l'échéance, site non couvert, nom différent, note LWG en baisse, pièce manquante, ou passage illisible que je dois vérifier moi-même.

### Niveau 3 · Agent

**Obtenu** (3156 caractères)

L'agent IA est connecté à la boîte email achats, aux dossiers partagés des fournisseurs, au tableau Excel de suivi de conformité, au logiciel de gestion (référentiel fournisseurs et commandes) et à l'agenda de l'équipe achats :
- il repère chaque jour dans la boîte email achats les messages des fournisseurs contenant des certificats, rapports d'audit ou attestations de traçabilité. Il les trouve aussi quand ils sont rédigés en italien ou en anglais, ou glissés dans un échange commercial
- il enregistre chaque pièce jointe dans le bon dossier partagé (fournisseur, site, type de document) et la renomme selon notre convention (fournisseur_site_type_date d'expiration). Il archive l'ancienne version sans la supprimer
- il lit chaque document et contrôle les points définis : raison sociale, site couvert, organisme certificateur, périmètre, note LWG, dates, non-conformités encore ouvertes dans les audits, traçabilité du cuir jusqu'à l'origine
- il met à jour la ligne correspondante du tableau Excel : dates, statut, lien vers le fichier, date du contrôle. Il ajoute la mention « contrôlé par l'agent » pour que l'acheteur sache ce qu'il lui reste à revoir
- il compare le tableau au référentiel fournisseurs du logiciel de gestion. Il repère ainsi les fournisseurs actifs dont le dossier est incomplet et les commandes en cours passées à un fournisseur dont un certificat est expiré
- chaque lundi, il passe en revue toutes les échéances et classe les documents en quatre groupes : expirés, à renouveler sous 30 jours, à renouveler sous 90 jours, manquants. Il envoie cette liste à l'acheteur
- il prépare l'email de relance de chaque fournisseur concerné, dans sa langue, avec la liste précise des pièces attendues et une date limite. Nous décidons ensemble de ce qui part seul : par exemple, les premières relances standard (renouvellement à 90 jours, pièce simple manquante) partent automatiquement. Les relances plus sensibles restent en brouillon jusqu'à validation par l'acheteur
- il suit les réponses. Si un fournisseur n'a pas répondu à la date limite, il prépare une deuxième relance et inscrit un rappel dans l'agenda de l'acheteur pour un appel téléphonique
- quand un document reçu n'est pas conforme (mauvais site, audit avec non-conformité majeure, traçabilité incomplète, permis CITES douteux), il ne valide rien lui-même. Il alerte l'acheteur et le responsable développement durable en indiquant le motif et le lien vers le document
- si le certificat d'une tannerie a expiré, il propose le blocage des nouvelles commandes dans le logiciel de gestion. Cette décision passe toujours par la validation du responsable achats
- chaque mois, il prépare une synthèse : taux de conformité par catégorie et par pays, fournisseurs à risque, délais moyens de réponse aux relances, documents expirés repérés avant ou après l'échéance. Elle sert au reporting développement durable et à la préparation des audits
Je fixe une fois pour toutes ce que l'agent envoie seul et ce qui attend mon accord. Toutes ses actions restent tracées dans le tableau Excel et dans la boîte email achats, ce qui permet de justifier chaque contrôle en cas d'audit.

**Vos remarques** :


## Synthèse des ventes hebdomadaires

`maison-luxe / luxe-synthese-ventes` · 47 s

> **Fonction** : Direction · **Priorité** : souhaitable  
> **Description** : Avoir chaque lundi un résumé des ventes.  
> **Situation actuelle** : Je lis plusieurs fichiers Excel.  
> **Situation souhaitée** : Un résumé clair avec les points d’alerte.  
> **Gain espéré** : —

### Niveau 1 · Chat

**Obtenu** (435 caractères)

Je joins les fichiers Excel de la semaine (ventes des boutiques par pays, export du site e-commerce, objectifs), et je demande à l'IA un résumé d'une page : chiffre d'affaires total, par pays, par canal et par catégorie, comparaison avec la semaine précédente et l'an dernier, et les trois à cinq points d'alerte à regarder en priorité. Je lui demande aussi de me signaler les chiffres qu'elle n'a pas pu rapprocher entre les fichiers.

### Niveau 2 · Compétences

**Obtenu** (2526 caractères)

J'ai enregistré dans la solution IA :
- la structure de nos fichiers Excel du lundi. Chaque zone envoie son fichier des ventes boutiques (Italie, France, Royaume-Uni, États-Unis, Japon, Moyen-Orient). S'y ajoutent l'export hebdomadaire du site e-commerce, le fichier des objectifs mensuels par boutique et le suivi des stocks des références phares. J'ai précisé le nom des onglets et des colonnes, ainsi que les pièges connus : semaines qui ne commencent pas le même jour selon les pays, ventes en devises locales, retours e-commerce enregistrés avec décalage.
- nos règles de calcul. Toutes les ventes sont converties en euros au taux budget de l'année, en chiffre d'affaires hors taxes. La comparaison se fait à surface comparable, sans les boutiques ouvertes depuis moins de douze mois. Par boutique, je suis le chiffre d'affaires, le nombre de tickets, le panier moyen, le nombre d'articles par ticket et le taux de transformation quand le comptage de passage existe. Pour le site, je suis les commandes, le panier moyen et le taux de retour.
- nos seuils d'alerte :
  - écart de plus de 10 % à l'objectif hebdomadaire
  - boutique en baisse deux semaines de suite par rapport à l'an dernier
  - rupture, ou stock inférieur à deux semaines de ventes, sur une icône de maroquinerie
  - taux de retour e-commerce au-dessus de 15 %
  - remise accordée hors de notre politique
  - chute brutale de la part des ventes à la clientèle touristique dans une ville
- le modèle de synthèse que je veux recevoir, sur une page maximum :
  - en tête, les trois chiffres clés : chiffre d'affaires total, écart à l'objectif, évolution par rapport à l'an dernier
  - un tableau par pays et par canal
  - un tableau par catégorie (maroquinerie, prêt-à-porter, accessoires)
  - le top dix des références
  - les points d'alerte classés du plus urgent au moins urgent, chacun avec une piste d'explication et la personne à contacter
- la liste des directeurs de zone et de boutique, le calendrier commercial (lancements de collection, ventes privées, événements clients, jours fériés par pays) et le ton attendu : factuel, sans jargon, en français.
L'IA produit chaque lundi la même synthèse, calculée de la même façon : je compare d'une semaine à l'autre sans me reposer de questions. Elle explique les écarts à partir du calendrier (un lancement, un jour férié au Japon, un événement en boutique), signale les chiffres manquants ou incohérents dans les fichiers reçus et distingue clairement une vraie alerte d'un simple effet de calendrier.

### Niveau 3 · Agent

**Obtenu** (2812 caractères)

L'agent IA est connecté au dossier partagé des ventes (SharePoint), au logiciel de caisse des boutiques, à la plateforme du site e-commerce, à l'outil de gestion des stocks, à la messagerie Outlook, à l'agenda et à Teams :
- chaque lundi à 6 h, il récupère lui-même les ventes de la semaine dans le logiciel de caisse et sur la plateforme e-commerce, sans attendre les fichiers Excel des zones.
- il vérifie que toutes les boutiques ont bien remonté leurs ventes. S'il manque une boutique ou si un chiffre paraît anormal (journée à zéro, montant en double), il envoie automatiquement un message au responsable de la boutique pour demander une correction avant 8 h.
- il applique les règles de calcul enregistrées : conversion en euros au taux budget, comparaison à l'objectif, à la semaine précédente et à l'an dernier, à surface comparable.
- il croise les ventes avec les stocks. Il repère les références phares qui risquent la rupture et les boutiques trop chargées sur une ligne qui se vend mal.
- il met à jour le tableau de suivi Excel dans le dossier partagé et archive la synthèse de la semaine pour garder l'historique.
- il me prépare la synthèse d'une page avec les points d'alerte et me l'envoie avant 8 h 30.
- pour chaque alerte, il prépare un brouillon de message au directeur de zone ou de boutique concerné, avec les chiffres et une question précise. Par exemple : pourquoi la boutique de Milan est-elle à -18 % sur la maroquinerie depuis deux semaines ?
- quand une icône est en rupture dans une boutique et disponible ailleurs, il propose un transfert de stock entre boutiques ou une demande de réassort.
- il prépare une version courte de la synthèse pour le comité de direction du lundi et ajoute les sujets à l'ordre du jour dans l'agenda.
- au fil de la semaine, il suit les réponses des directeurs et les reprend dans la synthèse suivante.
- chaque fin de mois, il prépare un bilan des alertes récurrentes par pays et par catégorie.
Ce qui part automatiquement et ce qui passe par moi a été décidé une fois pour toutes.
Partent sans validation :
- les relances aux boutiques pour un chiffre manquant ou incohérent
- la mise à jour du tableau de suivi et l'archivage
- l'envoi de la synthèse à moi-même
Passent par ma validation :
- les messages aux directeurs sur les alertes
- la diffusion de la synthèse au comité de direction ou aux actionnaires
- toute demande de réassort ou de transfert de stock
- toute décision commerciale
Je peux faire évoluer ces règles. Après quelques semaines de rodage, je peux par exemple laisser partir automatiquement à chaque directeur de zone la synthèse de son propre périmètre.
Je n'ouvre plus les fichiers Excel le lundi matin : je lis une page, je valide quelques messages et j'arrive au comité de direction en connaissant déjà les sujets à traiter.

**Vos remarques** :

