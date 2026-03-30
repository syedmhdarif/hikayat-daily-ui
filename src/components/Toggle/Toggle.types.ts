import {SwitchProps} from 'react-native';

export interface ToggleProps
  extends Omit<SwitchProps, 'trackColor' | 'thumbColor'> {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  activeThumbColor?: string;
  inactiveThumbColor?: string;
  size?: 'small' | 'medium' | 'large';
  ios_backgroundColor?: string;
}
