import React from 'react';
import { View } from 'react-native';
import { ActionButton } from '~components';
import useStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" />
    </View>
  );
}

export const HomeScreenName = 'Home';
