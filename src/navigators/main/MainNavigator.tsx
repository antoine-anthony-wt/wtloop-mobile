import React from 'react';
import { View } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TabBar } from './components/tab-bar/TabBar';
import {
  HomeNavigator,
  HomeNavigatorName,
  HomeNavigatorParamList,
} from '@wtloop/navigators/home/HomeNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@wtloop/navigators/root/RootNavigator';
import { HomeScreenName } from '@wtloop/screens';

export type MainNavigatorParamList = {
  [HomeNavigatorName]: NavigatorScreenParams<HomeNavigatorParamList>;
  Trips: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainNavigatorParamList>();
const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;
const EmptyComponent = () => <View />;

export default function MainNavigator() {
  return (
    <Tab.Navigator tabBar={tabBar}>
      <Tab.Screen
        name={HomeNavigatorName}
        component={HomeNavigator}
        options={{ headerShown: false, tabBarLabel: HomeScreenName }}
      />
      <Tab.Screen name="Trips" component={EmptyComponent} />
      <Tab.Screen name="Profile" component={EmptyComponent} />
    </Tab.Navigator>
  );
}

export const MainNavigatorName = 'MainNavigator';

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList & MainNavigatorParamList,
  typeof HomeNavigatorName
>;
