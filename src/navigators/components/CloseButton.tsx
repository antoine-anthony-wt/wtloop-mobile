import React from 'react';
import { Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const CloseButton = ({ tintColor }: { tintColor: string }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Icon
      type="feather"
      name="x"
      size={26}
      color={tintColor ?? theme.colors.black}
      Component={TouchableOpacity}
      style={{
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.xxs,
      }}
      onPress={() => navigation.goBack()}
    />
  );
};

export const closeButton = ({ tintColor }: { tintColor?: string }) => (
  <CloseButton tintColor={tintColor} />
);
