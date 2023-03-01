import React from 'react';
import { View } from 'react-native';
import ActionButton from '../../components/action-button/ActionButton';
import { styles } from './HomeScreen.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" radius="xl" outlined />
    </View>
  );
}

export const HomeScreenName = 'Home';
