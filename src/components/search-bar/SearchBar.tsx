import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Input, SearchBarProps } from '@rneui/base';
import useStyles from './SearchBar.styles';
import { useTheme } from '@rneui/themed';

const SearchBar = (props: SearchBarProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { theme } = useTheme();
  const styles = useStyles();
  const {
    containerStyle,
    inputStyle,
    inputContainerStyle,
    selectionColor,
    keyboardAppearance,
    searchIcon,
    placeholder,
    onFocus,
    onBlur,
  } = props;

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        focused && styles.containerFocused,
        containerStyle,
      ]}>
      <Input
        placeholder={placeholder}
        leftIcon={
          searchIcon ?? {
            name: 'search',
            type: 'feather',
            size: 22,
            color: theme.colors.black,
            containerStyle: styles.searchIcon,
          }
        }
        rightIcon={{
          name: 'arrow-right',
          type: 'feather',
          size: 22,
          color: theme.colors.white,
          containerStyle: styles.buttonContainer,
          style: styles.button,
          onPress: () => console.log('on press search'),
          Component: TouchableOpacity,
        }}
        keyboardAppearance={keyboardAppearance ?? 'light'}
        selectionColor={selectionColor ?? theme.colors.primary}
        placeholderTextColor={theme.colors.placeholder}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        inputStyle={[styles.input, inputStyle]}
        errorStyle={styles.errorContainer}
        onFocus={(e) => {
          handleOnFocus();
          onFocus?.(e);
        }}
        onBlur={(e) => {
          handleOnBlur();
          onBlur?.(e);
        }}
      />
    </View>
  );
};

export default SearchBar;
