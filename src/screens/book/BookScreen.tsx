import React from 'react';
import { View } from 'react-native';
import { ActionButton } from '~components';
import useStyles from './BookScreen.styles';

export default function BookScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" />
    </View>
  );
}

export const BookScreenName = 'Book';
