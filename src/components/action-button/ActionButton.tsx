import React, { useMemo } from 'react';
import {
  Platform,
  TextStyle,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, ButtonProps } from '@rneui/base';
import useStyles from './ActionButton.styles';

export interface ActionButtonProps extends Omit<ButtonProps, 'color'> {
  outlined?: boolean;
  reversed?: boolean;
  userInteractionDisabled?: boolean;
}

const ActionButton = ({
  title,
  size,
  outlined = false,
  reversed = false,
  userInteractionDisabled = false,
  containerStyle,
  buttonStyle,
  titleStyle,
  disabledStyle,
  disabledTitleStyle,
  loadingProps,
  TouchableComponent,
  ...props
}: ActionButtonProps) => {
  const styles = useStyles();
  const defaultButtonStyle = useMemo(() => {
    let style = { ...styles.button };
    if (outlined) {
      style = reversed
        ? { ...style, ...styles.outlinedReversedButton }
        : { ...style, ...styles.outlinedButton };
    } else {
      style = reversed
        ? { ...style, ...styles.filledReversedButton }
        : { ...style, ...styles.filledButton };
    }

    switch (size) {
      case 'md':
        return { ...style, ...styles.buttonMedium };
      case 'sm':
        return { ...style, ...styles.buttonSmall };
      case 'lg':
        return { ...style, ...styles.buttonLarge };
      default:
        return style;
    }
  }, [size, outlined, reversed, styles]);

  const defaultDisabledButtonStyle = useMemo(() => {
    const style = { ...styles.button };
    if (outlined) {
      return { ...style, ...styles.outlinedDisabledButton };
    } else {
      return { ...style, ...styles.filledDisabledButton };
    }
  }, [size, outlined, styles]);

  const defaultTitleStyle = useMemo(() => {
    let style = { ...styles.title };
    if (outlined) {
      style = reversed
        ? { ...style, ...styles.outlinedReversedTitle }
        : { ...style, ...styles.outlinedTitle };
    } else {
      style = reversed
        ? { ...style, ...styles.filledReversedTitle }
        : { ...style, ...styles.filledTitle };
    }

    switch (size) {
      case 'sm':
        return { ...style, ...styles.smallTitle };
      case 'lg':
        return { ...style, ...styles.largeTitle };
      default:
        return { ...style, ...styles.mediumTitle };
    }
  }, [size, outlined, reversed, styles]);

  const defaultDisabledTitleStyle = useMemo(() => {
    const style = { ...defaultTitleStyle };
    if (outlined) {
      return { ...style, ...styles.outlinedDisabledTitle };
    }
    return style;
  }, [size, outlined, styles]);

  return (
    <View pointerEvents={userInteractionDisabled ? 'none' : 'auto'}>
      <Button
        {...props}
        type={outlined ? 'outline' : 'solid'}
        title={title}
        accessible={true}
        accessibilityLabel={`${title} Button}`}
        accessibilityRole={'button'}
        testID={`test${title}Button`}
        containerStyle={[styles.container, containerStyle]}
        buttonStyle={[defaultButtonStyle, buttonStyle]}
        disabledStyle={[defaultDisabledButtonStyle, disabledStyle]}
        titleStyle={[defaultTitleStyle, titleStyle]}
        disabledTitleStyle={[defaultDisabledTitleStyle, disabledTitleStyle]}
        loadingProps={{
          ...loadingProps,
          color: (titleStyle as TextStyle)?.color ?? defaultTitleStyle?.color,
        }}
        size={size}
        TouchableComponent={
          TouchableComponent ?? Platform.OS === 'ios'
            ? outlined
              ? TouchableOpacity
              : TouchableHighlight
            : TouchableNativeFeedback
        }
        activeOpacity={outlined ? 0.7 : 0.9}
      />
    </View>
  );
};

ActionButton.defaultProps = {
  radius: 'lg',
  size: 'md',
};

export default ActionButton;
