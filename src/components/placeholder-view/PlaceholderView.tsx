import React, { cloneElement, ReactElement } from 'react';
import { View, Text, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Button, ButtonProps, Icon, IconProps } from '@rneui/base';
import useStyles from './PlaceholderView.styles';

interface Props {
  icon?: IconProps;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  message?: string;
  messageStyle?: StyleProp<TextStyle>;
  defaultButtonTitle?: string;
  defaultButtonIcon?: IconProps;
  defaultButtonStyle?: StyleProp<ViewStyle>;
  onDefaultButtonPress?: () => void;
  customButton?: ReactElement<ButtonProps>;
  customButtonContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const PlaceholderView = (props: Props) => {
  const {
    icon,
    title,
    titleStyle,
    message,
    messageStyle,
    defaultButtonTitle,
    defaultButtonIcon,
    defaultButtonStyle,
    customButton,
    customButtonContainerStyle,
    containerStyle,
    onDefaultButtonPress,
  } = props;
  const descriptionMarginTopWhenTitle = 6;
  const descriptionMarginTopWhenIcon = 12;
  const styles = useStyles();

  const renderIconIfNeeded = () => {
    if (!icon) return null;
    return (
      <Icon
        containerStyle={styles.icon}
        {...icon}
        testID="testPlaceholderIcon"
      />
    );
  };

  const renderTitleIfNeeded = () => {
    if (!title) return null;
    return (
      <Text
        style={[styles.title, titleStyle]}
        testID="testPlaceholderTitle"
        accessible
        accessibilityLabel={title}>
        {title}
      </Text>
    );
  };

  const getMessageMarginTop = () => {
    if (title) {
      return descriptionMarginTopWhenTitle;
    }
    if (icon) {
      return descriptionMarginTopWhenIcon;
    }
    return 0;
  };

  const renderMessageIfNeeded = () => {
    if (!message) return null;
    return (
      <Text
        style={[
          styles.message,
          messageStyle,
          { marginTop: getMessageMarginTop() },
        ]}
        testID="testPlaceholderMessage"
        accessible
        accessibilityLabel={message}>
        {message}
      </Text>
    );
  };

  const renderDefaultButtonIfNeeded = () => {
    if (!defaultButtonTitle) return null;
    return (
      <Button
        title={defaultButtonTitle}
        icon={defaultButtonIcon}
        containerStyle={styles.defaultButtonContainer}
        buttonStyle={[styles.defaultButton, defaultButtonStyle]}
        titleStyle={styles.defaultButtonText}
        onPress={onDefaultButtonPress}
        testID="testPlaceholderDefaultButton"
        accessible
        accessibilityLabel={defaultButtonTitle}
      />
    );
  };

  const renderCustomButtonIfNeeded = () => {
    if (!customButton) return null;
    const accessibleLabel =
      typeof customButton.props.title === 'string'
        ? customButton.props.title
        : undefined;
    return (
      <>
        {defaultButtonTitle && <Text style={styles.or}>or</Text>}
        <View
          style={[styles.customButtonContainer, customButtonContainerStyle]}>
          {cloneElement(customButton, {
            testID: 'testPlaceholderCustomButton',
            accessible: true,
            accessibilityLabel:
              customButton.props.accessibilityLabel ?? accessibleLabel,
          })}
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderIconIfNeeded()}
      {renderTitleIfNeeded()}
      {renderMessageIfNeeded()}
      {renderDefaultButtonIfNeeded()}
      {renderCustomButtonIfNeeded()}
    </View>
  );
};

export default PlaceholderView;
