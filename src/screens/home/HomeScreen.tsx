import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './HomeScreen.styles';
import { useQuery } from 'react-query';
import { useFetchAEM } from '../../hooks/useFetchAEM';
import { GET_AEM_CONTENT } from '../../graphql/queries';

export default function HomeScreen() {
  const { fetchAEM } = useFetchAEM<any>(GET_AEM_CONTENT);

  const { isLoading, error, data } = useQuery('users', async () => {
    const response = await fetchAEM();
    return response.users;
  });

  if (isLoading) {
    return <ActivityIndicator color={'blue'} size={'large'}/>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return <View style={styles.container}></View>;
}

export const HomeScreenName = 'Home';
