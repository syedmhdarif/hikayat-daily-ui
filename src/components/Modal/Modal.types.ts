import {ViewStyle} from 'react-native';

export type ModalType = 'success' | 'error' | 'warning' | 'info';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  type?: ModalType;
  title?: string;
  message?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
  showCloseButton?: boolean;
  dismissOnBackdrop?: boolean;
  containerStyle?: ViewStyle;
}

export interface ModalIconProps {
  type: ModalType;
  size?: number;
}
