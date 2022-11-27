import React, {FC} from 'react';
import {Text} from '../';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../../theme';

export interface AppButtonProps extends TouchableOpacityProps {
  label?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  loading?: boolean;
  variant?: 'basic' | 'dark' | 'light' | 'clear';
  textSize?: number;
}

export const AppButton: FC<AppButtonProps> = ({
  label,
  children,
  fullWidth,
  style,
  loading,
  textSize,
  rounded,
  variant = 'basic',
  disabled,
  ...props
}) => (
  <TouchableOpacity
    style={[
      bodyStyle[variant],
      fullWidth ? bodyStyle.fullWidth : null,
      style,
      disabled ? bodyStyle.disabled : null,
      rounded ? bodyStyle.rounded : null,
    ]}
    {...props}
    disabled={disabled || loading}>
    {loading ? (
      <ActivityIndicator size="small" />
    ) : label ? (
      <Text size={textSize || 18} style={[textStyle[variant], textStyle.bold]}>
        {label}
      </Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);

const textStyle = StyleSheet.create({
  basic: {
    color: colors.typography.static,
  },
  clear: {
    color: colors.background.primary,
  },
  light: {
    color: colors.background.primary,
  },
  dark: {
    color: colors.background.primary,
  },
  bold: {
    fontFamily: "Inter-Med",
  }
});

const bodyStyle = StyleSheet.create({
  basic: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background.primary,

    //shadow

  },
  light: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.typography.static,
  },
  dark: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background.secondary,
  },
  clear: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background.transparent,
    paddingHorizontal: 12,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: colors.background.secondary,
  },
  rounded: {
    borderRadius: 10,
  },
});


// const ShadowedTouchable = styled(TouchableOpacity)`
// box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.07);`