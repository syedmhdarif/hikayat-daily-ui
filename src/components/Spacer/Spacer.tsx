import React, {useMemo} from 'react';
import {View} from 'react-native';

type SpacerDirection = 'horizontal' | 'vertical';

interface SpacerProps {
  direction?: SpacerDirection;
  unit?: number;
}

const SIZES = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

const SpacerComponent: React.FC<SpacerProps> = ({
  direction = 'vertical',
  unit = 8,
}) => {
  const style = useMemo(
    () => (direction === 'vertical' ? {height: unit} : {width: unit}),
    [direction, unit],
  );

  return <View style={style} />;
};

const Spacer = React.memo(SpacerComponent) as React.MemoExoticComponent<
  React.FC<SpacerProps>
> & {
  sizes: typeof SIZES;
};

Spacer.sizes = SIZES;

export type {SpacerProps, SpacerDirection};
export default Spacer;
