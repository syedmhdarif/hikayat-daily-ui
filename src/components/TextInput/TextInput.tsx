import {memo, forwardRef, useState} from 'react';
import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';
import {Colors} from '../../tokens/colors';
import {useThemeColors} from '../../theme';
import {Text} from '../Text';
import {TextInputProps} from './TextInput.types';

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      error,
      containerStyle,
      inputStyle,
      leftIcon,
      rightIcon,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const colors = useThemeColors();

    const handleFocus = (e: Parameters<NonNullable<typeof onFocus>>[0]) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: Parameters<NonNullable<typeof onBlur>>[0]) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const getBorderColor = () => {
      if (error) return Colors.error300;
      if (isFocused) return colors.primary;
      return colors.border;
    };

    return (
      <View style={containerStyle}>
        {label && (
          <Text
            variant="bodySmall"
            weight="medium"
            color={colors.textSecondary}
            style={styles.label}>
            {label}
          </Text>
        )}
        <View
          style={[
            styles.inputContainer,
            {borderColor: getBorderColor(), backgroundColor: colors.surface},
            isFocused && styles.inputContainerFocused,
          ]}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <RNTextInput
            ref={ref}
            style={[
              styles.input,
              {color: colors.textPrimary},
              !!leftIcon && styles.inputWithLeftIcon,
              !!rightIcon && styles.inputWithRightIcon,
              inputStyle,
            ]}
            placeholderTextColor={colors.textTertiary}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
        {error && (
          <Text variant="caption" color={Colors.error300} style={styles.error}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 48,
  },
  inputContainerFocused: {
    borderWidth: 1.5,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  iconLeft: {
    paddingLeft: 12,
  },
  iconRight: {
    paddingRight: 12,
  },
  error: {
    marginTop: 4,
  },
});

export default memo(TextInput);
