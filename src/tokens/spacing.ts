// ------------------- SPACING SYSTEM -------------------  //
// Based on 4px grid system for consistent spacing

export const BASE_UNIT = 4;

export const spacing = {
  xxs: BASE_UNIT, // 4
  xs: BASE_UNIT * 2, // 8
  sm: BASE_UNIT * 3, // 12
  md: BASE_UNIT * 4, // 16
  lg: BASE_UNIT * 5, // 20
  xl: BASE_UNIT * 6, // 24
  xxl: BASE_UNIT * 8, // 32
  xxxl: BASE_UNIT * 10, // 40
  huge: BASE_UNIT * 12, // 48
  massive: BASE_UNIT * 16, // 64
} as const;

export const SPACING = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
} as const;

export const layout = {
  screenPaddingHorizontal: spacing.md,
  screenPaddingVertical: spacing.md,
  cardPadding: spacing.sm,
  cardMargin: spacing.md,
  sectionSpacing: spacing.xl,
  itemSpacing: spacing.sm,
  listItemSpacing: spacing.xs,
} as const;

export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 9999,
} as const;

export const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
} as const;

export const avatarSize = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  xxl: 80,
  xxxl: 120,
} as const;

export const hitSlop = {
  small: {top: 8, bottom: 8, left: 8, right: 8},
  medium: {top: 12, bottom: 12, left: 12, right: 12},
  large: {top: 16, bottom: 16, left: 16, right: 16},
} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = (typeof spacing)[SpacingKey];
