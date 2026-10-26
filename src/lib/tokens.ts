/**
 * Design tokens — Surcouche IA
 * Source : Figma « Yz8KT3FENgGLyfvDhudyda » (extraction du 26/10/2026).
 *
 * Le fichier Figma ne définit aucune variable : ces valeurs ont été relevées
 * directement sur les calques des 6 maquettes. Quand deux écrans utilisaient
 * des valeurs légèrement différentes pour le même rôle, la valeur retenue est
 * indiquée et l'écart est noté en commentaire.
 *
 * Ces valeurs sont reprises dans src/app/globals.css (variables CSS utilisées
 * par Tailwind et shadcn) : toute modification ici doit y être reportée.
 */

/* -------------------------------------------------------------------------- */
/* 1. Palette brute (valeurs exactes trouvées dans Figma)                      */
/* -------------------------------------------------------------------------- */

export const palette = {
  // Neutres clairs
  sable50: '#fbf8f3', // fond des champs (écran 4) — écran 1 : #fbfaf7
  sable100: '#f5f4ef', // fond de page (écrans 1, 4, 5) — écrans 2, 3 : #faf6f0
  sable150: '#f5efe7', // zones teintées : bandeau actuel, zone réponse, état vide
  sable200: '#ece8e0', // bouton de priorité non coché
  sable300: '#e8e0d5', // bordure par défaut — écrans 1, 4, 5 cartes : #e2dfd6
  sable400: '#cfcbbe', // bordure des champs et des choix (écran 1)
  gris400: '#9a9488', // texte des priorités non cochées
  gris500: '#948b7e', // placeholder — écran 1 : #8a867b
  gris600: '#6b6358', // texte secondaire — écran 1 : #6b6860
  encre900: '#1f1e1b', // texte principal, bouton principal sombre
  blanc: '#ffffff',

  // Neutres sombres
  nuit950: '#161512', // fond de page sombre, texte sur bouton accent
  nuit900: '#1a1814', // fond des champs sombres
  nuit850: '#211f1b', // surfaces (cartes, volet) sombres
  nuit700: '#37342d', // bordure sombre
  nuitGris500: '#7d766b', // placeholder sombre
  nuitGris300: '#a8a196', // texte secondaire sombre
  nuitBlanc: '#f5f3ee', // texte principal sombre

  // Accent (terracotta)
  terracotta500: '#d97757', // accent clair : liens, boutons, filets
  terracotta400: '#e38b6b', // accent sombre
  terracotta100: '#f8e6dc', // cercle de l'état vide (relevé sur rendu)

  // Secondaire (vert d'eau)
  eau600: '#4f8f80', // filet « situation souhaitée », filet cas
  eau400: '#6fb3a3', // version sombre (filet niveau 1)
  eau100: '#ddefea', // fond du bandeau « situation souhaitée »

  // Priorités
  urgent: '#d9534f',
  important: '#e8913a',
  souhaitable: '#4f8f80', // vert d'eau, identique à eau600 (validé)
} as const;

/* -------------------------------------------------------------------------- */
/* 2. Couleurs sémantiques par thème                                          */
/* -------------------------------------------------------------------------- */

export interface ThemeColors {
  bgPage: string;
  bgSurface: string; // cartes, volet, carte formulaire
  bgInput: string;
  bgTint: string; // zones teintées (réponse IA, bandeau actuel, état vide)
  bgTintSuccess: string; // bandeau « situation souhaitée »
  border: string;
  borderInput: string;
  textPrimary: string;
  textSecondary: string;
  textPlaceholder: string;
  textOnAccent: string;
  textOnPrimary: string;
  accent: string;
  accentSoft: string;
  secondary: string;
  buttonPrimaryBg: string; // bouton principal (Continuer, Valider)
  priorityOffBg: string;
  priorityOffText: string;
  priorityUrgent: string;
  priorityImportant: string;
  prioritySouhaitable: string;
}

export const lightTheme: ThemeColors = {
  bgPage: palette.sable100,
  bgSurface: palette.blanc,
  bgInput: palette.sable50,
  bgTint: palette.sable150,
  bgTintSuccess: palette.eau100,
  border: palette.sable300,
  borderInput: palette.sable300,
  textPrimary: palette.encre900,
  textSecondary: palette.gris600,
  textPlaceholder: palette.gris500,
  textOnAccent: palette.blanc,
  textOnPrimary: palette.blanc,
  accent: palette.terracotta500,
  accentSoft: palette.terracotta100,
  secondary: palette.eau600,
  buttonPrimaryBg: palette.encre900, // validé : #1f1e1b
  priorityOffBg: palette.sable200,
  priorityOffText: palette.gris400,
  priorityUrgent: palette.urgent,
  priorityImportant: palette.important,
  prioritySouhaitable: palette.souhaitable,
};

/**
 * Thème sombre. Les valeurs marquées « proposé » n'existent pas dans la
 * maquette sombre (qui ne montre ni priorités, ni bandeaux, ni état vide) :
 * elles sont dérivées pour rester lisibles sur fond #161512.
 */
export const darkTheme: ThemeColors = {
  bgPage: palette.nuit950,
  bgSurface: palette.nuit850,
  bgInput: palette.nuit900,
  bgTint: palette.nuit900,
  bgTintSuccess: '#1d2c28', // proposé
  border: palette.nuit700,
  borderInput: palette.nuit700,
  textPrimary: palette.nuitBlanc,
  textSecondary: palette.nuitGris300,
  textPlaceholder: palette.nuitGris500,
  textOnAccent: palette.nuit950,
  textOnPrimary: palette.nuit950,
  accent: palette.terracotta400,
  accentSoft: '#3a2620', // proposé
  secondary: palette.eau400,
  buttonPrimaryBg: palette.terracotta400, // dans la maquette sombre, le bouton principal est l'accent
  priorityOffBg: '#2a2722', // proposé
  priorityOffText: palette.nuitGris500, // proposé
  priorityUrgent: '#e06a66', // proposé
  priorityImportant: '#eda04f', // proposé
  prioritySouhaitable: palette.eau400, // proposé
};

export const themes = { light: lightTheme, dark: darkTheme } as const;
export type ThemeName = keyof typeof themes;

/* -------------------------------------------------------------------------- */
/* 3. Typographie                                                              */
/* -------------------------------------------------------------------------- */

export const fontFamily = {
  // Inter est chargée par next/font (src/app/layout.tsx) sous un nom généré.
  sans: "var(--font-inter), system-ui, -apple-system, 'Segoe UI', sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  semibold: 600,
} as const;

/** Tailles relevées dans Figma (px). Interlignage Figma : « normal ». */
export const fontSize = {
  xs: 13, // libellés secondaires, « Niveau 1 · Chat », bouton retour
  sm: 14, // texte courant, champs, boutons, labels
  md: 15, // texte d'introduction des cartes formulaire
  lg: 16, // message de bienvenue, titre d'un cas dans la liste
  xl: 18, // titre de section (« Vos cas d'usage »)
  '2xl': 19, // titre des cartes de niveau
  '3xl': 20, // titre de l'état vide, titre du volet
  '4xl': 28, // titre de page
  icon: 30, // « + » de l'état vide
} as const;

export const textStyles = {
  pageTitle: { size: fontSize['4xl'], weight: fontWeight.semibold },
  pageEyebrow: { size: fontSize.sm, weight: fontWeight.regular }, // « Écran 3 · Cas d'usage »
  sectionTitle: { size: fontSize.xl, weight: fontWeight.semibold },
  cardTitle: { size: fontSize['2xl'], weight: fontWeight.semibold },
  emptyTitle: { size: fontSize['3xl'], weight: fontWeight.semibold },
  intro: { size: fontSize.md, weight: fontWeight.regular },
  bodyLarge: { size: fontSize.lg, weight: fontWeight.regular },
  body: { size: fontSize.sm, weight: fontWeight.regular },
  label: { size: fontSize.sm, weight: fontWeight.semibold },
  button: { size: fontSize.sm, weight: fontWeight.semibold },
  caption: { size: fontSize.xs, weight: fontWeight.regular },
} as const;

/* -------------------------------------------------------------------------- */
/* 4. Espacements, rayons, dimensions                                          */
/* -------------------------------------------------------------------------- */

/** Échelle d'espacement (px) déduite des écarts entre calques. */
export const space = {
  1: 4,
  2: 8, // label → champ (≈ 7 px dans Figma)
  3: 12, // écart entre cartes de la liste, entre boutons de priorité (8 à 12)
  4: 16, // padding horizontal des champs du volet
  5: 20, // padding horizontal des champs, écart entre cartes de niveau
  6: 24, // padding des cartes formulaire, écart entre groupes de champs (≈ 20)
  8: 32,
  10: 40, // marge de page du thème sombre
} as const;

export const radius = {
  bar: 2, // petit filet coloré des cartes de niveau (thème sombre)
  control: 10, // champs, boutons, priorités, zones de réponse
  buttonLarge: 12, // boutons 48 px (nouveau cas, premier cas)
  card: 14, // cartes, bandeaux, éléments de liste
  cardLarge: 16, // carte de bienvenue, zone état vide
} as const;

export const size = {
  pageContentWidth: 820, // colonne des formulaires (marge 230 px sur un écran de 1280)
  pageLargeWidth: 1040, // colonne de l'accueil (élargie, hors maquette)
  pageWideWidth: 1280, // colonne des réponses de l'IA (élargie, hors maquette)
  panelWidth: 380, // volet « Contexte de mon entreprise »
  accentStripe: 6, // filet vertical gauche des cartes et bandeaux
  levelBarWidth: 40, // filet horizontal des cartes de niveau (thème sombre)
  levelBarHeight: 4,
  emptyIcon: 64,
  controlSm: 36, // boutons de priorité
  controlMd: 40, // bouton retour, exporter en Excel
  control: 44, // champs, boutons principaux
  controlLg: 48, // bouton « nouveau cas », « premier cas »
  textareaSm: 64, // champs de description du cas
  textareaMd: 110, // informations complémentaires (volet)
  textareaLg: 120, // activité de l'organisation
  levelCardWidth: 260,
} as const;

export const borderWidth = { default: 1 } as const;

/* -------------------------------------------------------------------------- */
/* 5. Export groupé                                                            */
/* -------------------------------------------------------------------------- */

export const tokens = {
  palette,
  themes,
  fontFamily,
  fontWeight,
  fontSize,
  textStyles,
  space,
  radius,
  size,
  borderWidth,
} as const;

export type Tokens = typeof tokens;
