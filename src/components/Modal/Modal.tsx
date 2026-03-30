import React, {memo, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Modal as RNModal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Colors} from '../../tokens/colors';
import {useThemeColors} from '../../theme';
import {spacing, borderRadius} from '../../tokens/spacing';
import {Text} from '../Text';
import {ModalProps, ModalType} from './Modal.types';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const getButtonColor = (type: ModalType): string => {
  switch (type) {
    case 'success':
      return Colors.primary500;
    case 'error':
      return Colors.error300;
    case 'warning':
      return Colors.warning500;
    case 'info':
      return Colors.info300;
    default:
      return Colors.primary500;
  }
};

const getIconColor = (type: ModalType) => {
  switch (type) {
    case 'success':
      return {bg: Colors.success100, fg: Colors.primary500};
    case 'error':
      return {bg: Colors.error50, fg: Colors.error300};
    case 'warning':
      return {bg: Colors.warning50, fg: Colors.warning500};
    case 'info':
      return {bg: Colors.info50, fg: Colors.info300};
    default:
      return {bg: Colors.info50, fg: Colors.info300};
  }
};

const getIconSymbol = (type: ModalType): string => {
  switch (type) {
    case 'success':
      return '\u2713';
    case 'error':
      return '\u2717';
    case 'warning':
      return '!';
    case 'info':
      return 'i';
    default:
      return 'i';
  }
};

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  type = 'info',
  title,
  message,
  primaryButtonText = 'OK',
  secondaryButtonText,
  onPrimaryPress,
  onSecondaryPress,
  showCloseButton = true,
  dismissOnBackdrop = true,
  containerStyle,
}) => {
  const colors = useThemeColors();

  const handlePrimaryPress = useCallback(() => {
    onPrimaryPress?.();
    onClose();
  }, [onPrimaryPress, onClose]);

  const handleSecondaryPress = useCallback(() => {
    onSecondaryPress?.();
    onClose();
  }, [onSecondaryPress, onClose]);

  const handleBackdropPress = useCallback(() => {
    if (dismissOnBackdrop) {
      onClose();
    }
  }, [dismissOnBackdrop, onClose]);

  const buttonColor = getButtonColor(type);
  const iconColors = getIconColor(type);

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent>
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.container,
                {backgroundColor: colors.glassBg},
                containerStyle,
              ]}>
              {showCloseButton && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={onClose}
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <Text
                    variant="h4"
                    weight="light"
                    color={colors.textSecondary}>
                    {'\u2715'}
                  </Text>
                </TouchableOpacity>
              )}

              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: iconColors.bg},
                ]}>
                <Text variant="h2" weight="bold" color={iconColors.fg}>
                  {getIconSymbol(type)}
                </Text>
              </View>

              {title && (
                <Text
                  variant="h4"
                  weight="bold"
                  align="center"
                  color={colors.textPrimary}
                  style={styles.title}>
                  {title}
                </Text>
              )}

              {message && (
                <Text
                  variant="body"
                  color={colors.textSecondary}
                  align="center"
                  style={styles.message}>
                  {message}
                </Text>
              )}

              <View style={styles.buttonContainer}>
                {secondaryButtonText && (
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {backgroundColor: colors.backgroundTertiary},
                    ]}
                    onPress={handleSecondaryPress}
                    activeOpacity={0.8}>
                    <Text
                      variant="body"
                      weight="semibold"
                      color={colors.textPrimary}>
                      {secondaryButtonText}
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: buttonColor},
                    !secondaryButtonText && styles.fullWidthButton,
                  ]}
                  onPress={handlePrimaryPress}
                  activeOpacity={0.8}>
                  <Text variant="body" weight="semibold" color={Colors.white}>
                    {primaryButtonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  container: {
    width: SCREEN_WIDTH - spacing.xxl * 2,
    maxWidth: 340,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: 1,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.xs,
  },
  message: {
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.sm,
  },
  button: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  fullWidthButton: {
    flex: 1,
  },
});

export default memo(Modal);
