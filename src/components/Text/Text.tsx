import React, {memo} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {useThemeColors} from '../../theme';
import {TextProps, fontFamilyMap, variantStyles} from './Text.types';

const Text: React.FC<TextProps> = ({
  variant = 'body',
  weight = 'regular',
  color,
  align = 'left',
  style,
  children,
  ...rest
}) => {
  const themeColors = useThemeColors();
  const textColor = color ?? themeColors.textPrimary;

  return (
    <RNText
      style={[
        styles.base,
        variantStyles[variant],
        {
          fontFamily: fontFamilyMap[weight],
          color: textColor,
          textAlign: align,
        },
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Roboto-Regular',
  },
});

export default memo(Text);
