import React from 'react';
import { Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ tintColor }: { tintColor: string }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Icon
      type="feather"
      name="arrow-left"
      size={26}
      color={tintColor ?? theme.colors.black}
      style={{
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.xxs,
      }}
      onPress={() => navigation.goBack()}
    />
  );
};

export const backButton = ({ tintColor }: { tintColor?: string }) => (
  <BackButton tintColor={tintColor} />
);
