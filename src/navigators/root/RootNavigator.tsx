import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator, {
  MainNavigatorName,
} from '~navigators/main/MainNavigator';

export type RootStackParamList = {
  [MainNavigatorName]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainNavigatorName} component={MainNavigator} />
    </Stack.Navigator>
  );
}
