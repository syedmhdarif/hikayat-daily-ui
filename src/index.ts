// ------------------- hikayat-daily-ui -------------------  //
// A React Native UI component library with design tokens,
// theming, and glassmorphism support.

// Design Tokens
export {
  Colors,
  colors,
  Gradients,
  // Individual color scales
  white,
  black,
  transparent,
} from './tokens/colors';

export {
  spacing,
  SPACING,
  layout,
  borderRadius,
  iconSize,
  avatarSize,
  hitSlop,
  BASE_UNIT,
} from './tokens/spacing';
export type {SpacingKey, SpacingValue} from './tokens/spacing';

export {
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  typography,
} from './tokens/typography';
export type {TypographyKey} from './tokens/typography';

// Theme
export {
  lightColors,
  darkColors,
  lightGradients,
  darkGradients,
  getTheme,
  getColors,
  getGradients,
} from './tokens/theme';
export type {
  ColorScheme,
  ThemePreference,
  ThemeColors,
  ThemeGradients,
  Theme,
} from './tokens/theme';

export {
  ThemeProvider,
  useTheme,
  useThemeColors,
  useThemeGradients,
  useIsDarkMode,
} from './theme';
export type {ThemeContextValue, ThemeProviderProps} from './theme';

// Components
export {
  Text,
  Button,
  TextInput,
  Spacer,
  Divider,
  Toggle,
  GlassContainer,
  Modal,
} from './components';

export type {
  TextProps,
  TextVariant,
  FontWeight,
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  TextInputProps,
  SpacerProps,
  SpacerDirection,
  DividerProps,
  DividerDirection,
  ToggleProps,
  GlassContainerProps,
  GlassVariant,
  ModalProps,
  ModalType,
  ModalIconProps,
} from './components';
