import {
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
