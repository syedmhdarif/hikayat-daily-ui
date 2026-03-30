import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Colors, Gradients} from '../../tokens/colors';
import {useIsDarkMode} from '../../theme';

export type GlassVariant =
  | 'light'
  | 'medium'
  | 'dark'
  | 'subtle'
  | 'primary'
  | 'ai'
  | 'deep';

export interface GlassContainerProps {
  children: React.ReactNode;
  variant?: GlassVariant;
  style?: ViewStyle;
  borderRadius?: number;
  showBorder?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  customGradientColors?: string[];
  /**
   * Optional LinearGradient component from react-native-linear-gradient.
   * If not provided, falls back to a simple View with the first gradient color.
   */
  LinearGradientComponent?: React.ComponentType<{
    colors: string[];
    start?: {x: number; y: number};
    end?: {x: number; y: number};
    style?: ViewStyle;
    children?: React.ReactNode;
  }>;
}

const getGradientColors = (
  variant: GlassVariant,
  isDark: boolean,
): string[] => {
  if (isDark) {
    switch (variant) {
      case 'light':
      case 'medium':
      case 'subtle':
      case 'dark':
        return Gradients.glassDark;
      case 'primary':
        return Gradients.glassPrimaryDark;
      case 'ai':
        return Gradients.aiGlassDark;
      case 'deep':
        return Gradients.aiGoldGlassDark;
      default:
        return Gradients.glassDark;
    }
  }

  switch (variant) {
    case 'light':
      return Gradients.glassLight;
    case 'medium':
      return Gradients.glassMedium;
    case 'dark':
      return Gradients.glassDark;
    case 'subtle':
      return Gradients.glassSubtle;
    case 'primary':
      return Gradients.glassPrimary;
    case 'ai':
      return Gradients.ai;
    case 'deep':
      return Gradients.aiGoldGlassDark;
    default:
      return Gradients.glassLight;
  }
};

const getBorderColor = (variant: GlassVariant, isDark: boolean): string => {
  if (isDark) return 'rgba(255, 255, 255, 0.1)';
  if (variant === 'dark') return 'rgba(255, 255, 255, 0.1)';
  return Colors.glassBorderDark;
};

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  variant = 'light',
  style,
  borderRadius: radius = 25,
  showBorder = true,
  intensity = 'medium',
  customGradientColors,
  LinearGradientComponent,
}) => {
  const isDark = useIsDarkMode();
  const gradientColors = customGradientColors ?? getGradientColors(variant, isDark);
  const borderColor = getBorderColor(variant, isDark);

  const opacityMultiplier =
    intensity === 'low' ? 0.7 : intensity === 'high' ? 1.15 : 1;

  const adjustedColors = gradientColors.map(color => {
    const match = color.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
    );
    if (match) {
      const [, r, g, b, a = '1'] = match;
      const newAlpha = Math.min(1, parseFloat(a) * opacityMultiplier);
      return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
    }
    return color;
  });

  const borderStyle = showBorder ? {borderWidth: 1, borderColor} : undefined;

  // Use LinearGradient if provided, otherwise fallback to View
  if (LinearGradientComponent) {
    return (
      <View style={[styles.container, {borderRadius: radius}, style]}>
        <LinearGradientComponent
          colors={adjustedColors}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            ...styles.gradient,
            borderRadius: radius,
            ...borderStyle,
          } as ViewStyle}>
          {children}
        </LinearGradientComponent>
      </View>
    );
  }

  // Fallback: use first gradient color as solid background
  return (
    <View
      style={[
        styles.container,
        styles.gradient,
        {
          borderRadius: radius,
          backgroundColor: adjustedColors[0],
        },
        borderStyle,
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
});

export default GlassContainer;
