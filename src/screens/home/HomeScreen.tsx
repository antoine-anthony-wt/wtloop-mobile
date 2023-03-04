import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFetchAEM } from '../../hooks/useFetchAEM';
import { ActionButton } from '@wtloop/components';
import useStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = useStyles();
  const { isLoading, error, data: content } = useFetchAEM();

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('content:', content);
  }, [isLoading, error, content]);

  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" />
    </View>
  );
}

export const HomeScreenName = 'Home';
