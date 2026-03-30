// ------------------- THEME SYSTEM -------------------  //
// Dark mode implementation with semantic color tokens

import {StatusBarStyle} from 'react-native';
import * as Colors from './colors';
import {Gradients} from './colors';

// ------------------- TYPE DEFINITIONS -------------------  //

export type ColorScheme = 'light' | 'dark';
export type ThemePreference = 'light' | 'dark' | 'system';

export interface ThemeColors {
  // Backgrounds
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundElevated: string;

  // Surfaces
  surface: string;
  surfaceHover: string;
  surfacePressed: string;
  surfaceDisabled: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;
  textDisabled: string;
  textLink: string;

  // Borders & Dividers
  border: string;
  borderLight: string;
  borderFocus: string;

  // Primary brand color
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryBackground: string;

  // Status colors
  success: string;
  successBackground: string;
  error: string;
  errorBackground: string;
  warning: string;
  warningBackground: string;
  info: string;
  infoBackground: string;

  // Overlays
  overlay: string;
  overlayLight: string;

  // Shadows
  shadowColor: string;

  // Glass effects
  glassBg: string;
  glassBorder: string;

  // Navigation
  tabBarBg: string;
  tabBarActive: string;
  tabBarInactive: string;
  headerBg: string;

  // StatusBar
  statusBarBg: string;
  statusBarStyle: StatusBarStyle;

  // Icons
  icon: string;
  iconSecondary: string;
  iconDisabled: string;

  // Skeleton loading
  skeletonBase: string;
  skeletonHighlight: string;

  // Input fields
  inputBg: string;
  inputBorder: string;
  inputPlaceholder: string;

  // Card specific
  cardBg: string;
  cardBorder: string;
  cardShadow: string;

  // AI colors
  aiPrimary: string;
  aiSecondary: string;
  aiGlass: string;
}

export interface ThemeGradients {
  glass: string[];
  glassPrimary: string[];
  tabBar: string[];

  ai: string[];
  aiGold: string[];
  aiLight: string[];
  aiGoldLight: string[];
  aiDark: string[];
  aiGoldDark: string[];
  aiGlass: string[];
  aiGoldGlass: string[];

  card: string[];

  overlay: string[];
  overlayReverse: string[];

  success: string[];
  error: string[];
  warning: string[];
}

export interface Theme {
  colorScheme: ColorScheme;
  colors: ThemeColors;
  gradients: ThemeGradients;
}

// ------------------- LIGHT THEME -------------------  //

export const lightColors: ThemeColors = {
  background: Colors.grey100,
  backgroundSecondary: Colors.white,
  backgroundTertiary: Colors.grey50,
  backgroundElevated: Colors.white,

  surface: Colors.white,
  surfaceHover: Colors.grey50,
  surfacePressed: Colors.grey100,
  surfaceDisabled: Colors.grey100,

  textPrimary: Colors.black500,
  textSecondary: Colors.black300,
  textTertiary: Colors.grey700,
  textInverse: Colors.white,
  textDisabled: Colors.grey400,
  textLink: Colors.primary500,

  border: Colors.grey200,
  borderLight: Colors.grey100,
  borderFocus: Colors.primary500,

  primary: Colors.primary500,
  primaryLight: Colors.primary100,
  primaryDark: Colors.primary700,
  primaryBackground: Colors.primary50,

  success: Colors.success600,
  successBackground: Colors.success50,
  error: Colors.error600,
  errorBackground: Colors.error50,
  warning: Colors.warning600,
  warningBackground: Colors.warning50,
  info: Colors.info600,
  infoBackground: Colors.info50,

  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',

  shadowColor: Colors.black,

  glassBg: Colors.glassWhite,
  glassBorder: Colors.glassBorderDark,

  tabBarBg: Colors.primary700,
  tabBarActive: Colors.primary700,
  tabBarInactive: Colors.primary300,
  headerBg: Colors.white,

  statusBarBg: Colors.white,
  statusBarStyle: 'dark-content',

  icon: Colors.black500,
  iconSecondary: Colors.grey600,
  iconDisabled: Colors.grey400,

  skeletonBase: Colors.grey200,
  skeletonHighlight: Colors.grey100,

  inputBg: Colors.white,
  inputBorder: Colors.grey300,
  inputPlaceholder: Colors.grey500,

  cardBg: Colors.white,
  cardBorder: Colors.grey200,
  cardShadow: 'rgba(0, 0, 0, 0.08)',

  aiPrimary: Colors.ai600,
  aiSecondary: Colors.ai700,
  aiGlass: Colors.glassAi,
};

export const lightGradients: ThemeGradients = {
  glass: Gradients.glassLight,
  glassPrimary: Gradients.glassPrimary,
  tabBar: Gradients.glassPrimaryDark,

  ai: Gradients.ai,
  aiGold: Gradients.aiGold,
  aiLight: Gradients.aiLight,
  aiGoldLight: Gradients.aiGoldLight,
  aiDark: Gradients.aiDark,
  aiGoldDark: Gradients.aiGoldDark,
  aiGlass: Gradients.aiGlass,
  aiGoldGlass: Gradients.aiGoldGlass,

  card: Gradients.cardLight,

  overlay: Gradients.overlayDark,
  overlayReverse: Gradients.overlayLight,

  success: Gradients.success,
  error: Gradients.error,
  warning: Gradients.warning,
};

// ------------------- DARK THEME -------------------  //

export const darkColors: ThemeColors = {
  background: Colors.primary900,
  backgroundSecondary: Colors.primary800,
  backgroundTertiary: Colors.primary700,
  backgroundElevated: Colors.primary700,

  surface: Colors.glassDarkLight,
  surfaceHover: Colors.primary600,
  surfacePressed: Colors.primary800,
  surfaceDisabled: Colors.primary800,

  textPrimary: Colors.grey100,
  textSecondary: Colors.grey300,
  textTertiary: Colors.grey500,
  textInverse: Colors.black900,
  textDisabled: Colors.grey700,
  textLink: Colors.primary400,

  border: Colors.black500,
  borderLight: Colors.black600,
  borderFocus: Colors.primary400,

  primary: Colors.ai500,
  primaryLight: 'rgba(149, 167, 176, 0.15)',
  primaryDark: Colors.ai700,
  primaryBackground: 'rgba(125, 147, 160, 0.12)',

  success: Colors.success400,
  successBackground: 'rgba(125, 181, 152, 0.15)',
  error: Colors.error400,
  errorBackground: 'rgba(198, 124, 108, 0.15)',
  warning: Colors.warning400,
  warningBackground: 'rgba(207, 195, 99, 0.15)',
  info: Colors.info400,
  infoBackground: 'rgba(107, 145, 169, 0.15)',

  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayLight: 'rgba(0, 0, 0, 0.5)',

  shadowColor: Colors.black,

  glassBg: 'rgba(42, 49, 56, 0.85)',
  glassBorder: Colors.glassBorder,

  tabBarBg: Colors.black800,
  tabBarActive: Colors.primary700,
  tabBarInactive: Colors.grey500,
  headerBg: Colors.primary800,

  statusBarBg: Colors.black900,
  statusBarStyle: 'light-content',

  icon: Colors.grey100,
  iconSecondary: Colors.grey400,
  iconDisabled: Colors.grey700,

  skeletonBase: Colors.black600,
  skeletonHighlight: Colors.black500,

  inputBg: Colors.black700,
  inputBorder: Colors.black500,
  inputPlaceholder: Colors.grey600,

  cardBg: Colors.black700,
  cardBorder: Colors.black500,
  cardShadow: 'rgba(0, 0, 0, 0.3)',

  aiPrimary: Colors.ai400,
  aiSecondary: Colors.ai500,
  aiGlass: Colors.glassAiDark,
};

export const darkGradients: ThemeGradients = {
  glass: ['rgba(42, 49, 56, 0.9)', 'rgba(31, 37, 42, 0.85)'],
  glassPrimary: ['rgba(51, 62, 68, 0.92)', 'rgba(42, 49, 56, 0.88)'],
  tabBar: ['rgba(31, 37, 42, 0.95)', 'rgba(20, 25, 29, 0.98)'],

  ai: Gradients.ai,
  aiGold: Gradients.aiGold,
  aiLight: Gradients.aiLight,
  aiGoldLight: Gradients.aiGoldLight,
  aiDark: Gradients.aiDark,
  aiGoldDark: Gradients.aiGoldDark,
  aiGlass: Gradients.aiGlassDark,
  aiGoldGlass: Gradients.aiGoldGlassDark,

  card: [Colors.black700, Colors.black800],

  overlay: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)'],
  overlayReverse: ['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)'],

  success: [Colors.success500, Colors.success700],
  error: [Colors.error500, Colors.error700],
  warning: [Colors.warning500, Colors.warning700],
};

// ------------------- THEME HELPERS -------------------  //

export const getTheme = (colorScheme: ColorScheme): Theme => ({
  colorScheme,
  colors: colorScheme === 'dark' ? darkColors : lightColors,
  gradients: colorScheme === 'dark' ? darkGradients : lightGradients,
});

export const getColors = (colorScheme: ColorScheme): ThemeColors =>
  colorScheme === 'dark' ? darkColors : lightColors;

export const getGradients = (colorScheme: ColorScheme): ThemeGradients =>
  colorScheme === 'dark' ? darkGradients : lightGradients;

export default {
  light: {colors: lightColors, gradients: lightGradients},
  dark: {colors: darkColors, gradients: darkGradients},
};
