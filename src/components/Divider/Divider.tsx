import React, {useMemo} from 'react';
import {View, ViewStyle, DimensionValue} from 'react-native';
import {Colors} from '../../tokens/colors';

type DividerDirection = 'horizontal' | 'vertical';

interface DividerProps {
  direction?: DividerDirection;
  thickness?: number;
  color?: string;
  length?: DimensionValue;
  marginStart?: number;
  marginEnd?: number;
  style?: ViewStyle;
}

const DividerComponent: React.FC<DividerProps> = ({
  direction = 'horizontal',
  thickness = 1,
  color = Colors.grey300,
  length = '100%',
  marginStart = 0,
  marginEnd = 0,
  style,
}) => {
  const dividerStyle = useMemo<ViewStyle>(() => {
    if (direction === 'horizontal') {
      return {
        width: length,
        height: thickness,
        backgroundColor: color,
        marginLeft: marginStart,
        marginRight: marginEnd,
      };
    }
    return {
      width: thickness,
      height: length,
      backgroundColor: color,
      marginTop: marginStart,
      marginBottom: marginEnd,
    };
  }, [direction, thickness, color, length, marginStart, marginEnd]);

  return <View style={[dividerStyle, style]} />;
};

const Divider = React.memo(DividerComponent);

export type {DividerProps, DividerDirection};
export default Divider;
