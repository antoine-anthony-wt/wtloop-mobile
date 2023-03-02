import React from 'react';
import { View } from 'react-native';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BookScreen, BookScreenName } from '~screens';
import { TabBar } from './components/tab-bar/TabBar';
import { HyperloopLogo } from '~assets/images';

export type MainBottomTabParamList = {
  [BookScreenName]: undefined;
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
        name={BookScreenName}
        component={BookScreen}
        options={{ headerTitle: hyperloopLogo }}
      />
      <Tab.Screen name="Trips" component={EmptyComponent} />
      <Tab.Screen name="Profile" component={EmptyComponent} />
    </Tab.Navigator>
  );
}

export const MainNavigatorName = 'MainNavigator';

export type BookScreenNavigationProp = BottomTabNavigationProp<
  MainBottomTabParamList,
  'Home'
>;
