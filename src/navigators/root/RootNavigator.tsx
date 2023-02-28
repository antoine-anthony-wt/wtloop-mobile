import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen, { HomeScreenName } from '../../screens/home/HomeScreen';

export type RootStackParamList = {
  [HomeScreenName]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HomeScreenName} component={HomeScreen} />
    </Stack.Navigator>
  );
}
