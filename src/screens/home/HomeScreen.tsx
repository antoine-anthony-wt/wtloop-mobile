import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useFetchAEM } from '../../hooks/useFetchAEM';
import { GET_AEM_CONTENT } from '../../graphql/queries';
import { ActionButton } from '~components';
import useStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = useStyles();
  const { fetchAEM } = useFetchAEM<any>(GET_AEM_CONTENT);

  const { isLoading, error, data } = useQuery('aem', async () => {
    const response = await fetchAEM();
    return response;
  });

  if (isLoading) {
    console.log('loading...');
  }

  if (error) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" />
    </View>
  );
}

export const HomeScreenName = 'Home';
