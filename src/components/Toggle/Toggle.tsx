import React, {memo, useCallback, useMemo} from 'react';
import {Switch, Platform} from 'react-native';
import {Colors} from '../../tokens/colors';
import {ToggleProps} from './Toggle.types';

const Toggle: React.FC<ToggleProps> = ({
  value,
  onValueChange,
  disabled = false,
  activeTrackColor = Colors.primary300,
  inactiveTrackColor = Colors.grey400,
  activeThumbColor = Colors.primary600,
  inactiveThumbColor = Colors.grey100,
  size = 'medium',
  ios_backgroundColor,
  ...rest
}) => {
  const handleValueChange = useCallback(
    (newValue: boolean) => {
      if (!disabled && onValueChange) {
        onValueChange(newValue);
      }
    },
    [disabled, onValueChange],
  );

  const trackColor = useMemo(
    () => ({
      false: inactiveTrackColor,
      true: activeTrackColor,
    }),
    [inactiveTrackColor, activeTrackColor],
  );

  const thumbColor = useMemo(
    () => (value ? activeThumbColor : inactiveThumbColor),
    [value, activeThumbColor, inactiveThumbColor],
  );

  const sizeTransform = useMemo(() => {
    if (Platform.OS !== 'android') return undefined;

    switch (size) {
      case 'small':
        return {transform: [{scaleX: 0.8}, {scaleY: 0.8}]};
      case 'large':
        return {transform: [{scaleX: 1.2}, {scaleY: 1.2}]};
      default:
        return undefined;
    }
  }, [size]);

  return (
    <Switch
      value={value}
      onValueChange={handleValueChange}
      disabled={disabled}
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor || inactiveTrackColor}
      style={sizeTransform}
      {...rest}
    />
  );
};

export default memo(Toggle);
