import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen, HomeScreenName } from '@wtloop/screens';
import { useCommonNavBarOptions } from '@wtloop/navigators/utils/useCommonNavBarOptions';
import { HyperloopLogo } from '@wtloop/assets/images';

const Stack = createNativeStackNavigator();

export type HomeNavigatorParamList = {
  [HomeScreenName]: undefined;
};

export function HomeNavigator() {
  const commonOptions = useCommonNavBarOptions();

  return (
    <Stack.Navigator
      screenOptions={{ ...commonOptions, headerTitle: HyperloopLogo }}>
      <Stack.Screen name={HomeScreenName} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export const HomeNavigatorName = 'HomeNavigator';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeNavigatorParamList,
  typeof HomeScreenName
>;
