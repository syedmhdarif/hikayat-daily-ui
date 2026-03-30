import {ViewStyle, TextStyle} from 'react-native';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'action'
  | 'outline'
  | 'ghost'
  | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
