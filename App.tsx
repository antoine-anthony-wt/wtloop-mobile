import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '~navigators';
import { ThemeProvider } from '@rneui/themed';
import defaultTheme from '~assets/themes/default-theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
