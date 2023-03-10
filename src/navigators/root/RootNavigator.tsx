import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator, {
  MainNavigatorName,
} from '@wtloop/navigators/main/MainNavigator';
import { TicketScreen, TicketScreenName } from '@wtloop/screens';
import { useCommonNavBarOptions } from '@wtloop/navigators/utils/useCommonNavBarOptions';
import { useTheme } from '@rneui/themed';
import { closeButton, menuButton } from '@wtloop/navigators/components';

export type RootStackParamList = {
  [MainNavigatorName]: undefined;
  [TicketScreenName]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const commonOptions = useCommonNavBarOptions();
  const { theme } = useTheme();
  const { typography } = theme;
  const headerTypographyColor = theme.colors.white;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainNavigatorName} component={MainNavigator} />
      <Stack.Screen
        name={TicketScreenName}
        component={TicketScreen}
        options={{
          ...commonOptions,
          presentation: 'fullScreenModal',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTitleStyle: {
            ...typography({
              color: headerTypographyColor,
              lineHeight: 23.87,
            }).subheading,
          },
          headerTintColor: theme.colors.white,
          headerShadowVisible: false,
          headerLeft: () => closeButton({ tintColor: theme.colors.white }),
          headerRight: () => menuButton({ tintColor: theme.colors.white }),
        }}
      />
    </Stack.Navigator>
  );
}
