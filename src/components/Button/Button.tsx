import React, {memo, useMemo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import {Text} from '../Text';
import {Colors} from '../../tokens/colors';
import {useThemeColors} from '../../theme';
import {spacing, borderRadius} from '../../tokens/spacing';
import type {ThemeColors} from '../../tokens/theme';
import {ButtonProps, ButtonVariant, ButtonSize} from './Button.types';

const getVariantStyles = (
  variant: ButtonVariant,
  disabled: boolean,
  themeColors: ThemeColors,
) => {
  const opacity = disabled ? 0.5 : 1;

  const variants = {
    primary: {
      container: {backgroundColor: themeColors.primary, borderWidth: 0, opacity},
      text: Colors.white,
    },
    secondary: {
      container: {
        backgroundColor: themeColors.backgroundTertiary,
        borderWidth: 0,
        opacity,
      },
      text: themeColors.textPrimary,
    },
    action: {
      container: {
        backgroundColor: Colors.secondary500,
        borderWidth: 0,
        opacity,
      },
      text: Colors.white,
    },
    outline: {
      container: {
        backgroundColor: Colors.transparent,
        borderWidth: 1.5,
        borderColor: themeColors.primary,
        opacity,
      },
      text: themeColors.primary,
    },
    ghost: {
      container: {
        backgroundColor: Colors.transparent,
        borderWidth: 0,
        opacity,
      },
      text: themeColors.primary,
    },
    danger: {
      container: {backgroundColor: Colors.error300, borderWidth: 0, opacity},
      text: Colors.white,
    },
  };

  return variants[variant];
};

const getSizeStyles = (size: ButtonSize) => {
  const sizes = {
    small: {paddingVertical: spacing.xs, paddingHorizontal: spacing.md, minHeight: 36},
    medium: {paddingVertical: spacing.sm, paddingHorizontal: spacing.lg, minHeight: 44},
    large: {paddingVertical: spacing.md, paddingHorizontal: spacing.xl, minHeight: 52},
  };
  return sizes[size];
};

const getTextVariant = (size: ButtonSize) => {
  const variants = {
    small: 'caption' as const,
    medium: 'bodySmall' as const,
    large: 'body' as const,
  };
  return variants[size];
};

const getTextWeight = (size: ButtonSize) => {
  const weights = {
    small: 'medium' as const,
    medium: 'medium' as const,
    large: 'semibold' as const,
  };
  return weights[size];
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}) => {
  const themeColors = useThemeColors();
  const variantStyles = useMemo(
    () => getVariantStyles(variant, disabled || loading, themeColors),
    [variant, disabled, loading, themeColors],
  );
  const sizeStyles = useMemo(() => getSizeStyles(size), [size]);
  const textVariant = useMemo(() => getTextVariant(size), [size]);
  const textWeight = useMemo(() => getTextWeight(size), [size]);

  const containerStyle = useMemo(
    () => [
      styles.container,
      variantStyles.container,
      sizeStyles,
      fullWidth && styles.fullWidth,
      style,
    ],
    [variantStyles.container, sizeStyles, fullWidth, style],
  );

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator size="small" color={variantStyles.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text
            variant={textVariant}
            weight={textWeight}
            color={variantStyles.text}
            style={textStyle}>
            {title}
          </Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
  },
  fullWidth: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: spacing.xs,
  },
  rightIcon: {
    marginLeft: spacing.xs,
  },
});

export default memo(Button);
