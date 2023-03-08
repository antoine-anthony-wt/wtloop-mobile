import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { useMemo } from 'react';
import { Platform } from 'react-native';

export const useCommonNavBarOptions: () => NativeStackNavigationOptions =
  () => {
    const { theme } = useTheme();
    const options: NativeStackNavigationOptions = useMemo(
      () => ({
        headerShown: true,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          left: Platform.select({
            ios: theme.spacing.md,
            android: theme.spacing.xxs,
          }),
        },
        headerRightContainerStyle: { right: theme.spacing.md },
        headerTintColor: theme.colors.black,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleAlign: 'center',
      }),
      [theme],
    );

    return options;
  };
