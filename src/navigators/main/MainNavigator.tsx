import React from 'react';
import { View } from 'react-native';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen, HomeScreenName } from '@wtloop/screens';
import { TabBar } from './components/tab-bar/TabBar';
import { HyperloopLogo } from '@wtloop/assets/images';

export type MainBottomTabParamList = {
  [HomeScreenName]: undefined;
  Trips: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainBottomTabParamList>();
const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;
const hyperloopLogo = () => <HyperloopLogo />;
const EmptyComponent = () => <View />;

export default function MainNavigator() {
  return (
    <Tab.Navigator tabBar={tabBar}>
      <Tab.Screen
        name={HomeScreenName}
        component={HomeScreen}
        options={{ headerTitle: hyperloopLogo }}
      />
      <Tab.Screen name="Trips" component={EmptyComponent} />
      <Tab.Screen name="Profile" component={EmptyComponent} />
    </Tab.Navigator>
  );
}

export const MainNavigatorName = 'MainNavigator';

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  MainBottomTabParamList,
  'Home'
>;
