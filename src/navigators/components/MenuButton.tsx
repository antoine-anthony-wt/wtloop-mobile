import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';
import { StyleProp, ViewStyle } from 'react-native';
import underConstructionAlert from '@wtloop/utils/underConstructionAlert';

const MenuButton = ({
  tintColor,
  styles,
}: {
  tintColor: string;
  styles?: StyleProp<ViewStyle>;
}) => {
  const { theme } = useTheme();

  return (
    <Entypo
      type="dots-three-horizontal"
      size={16}
      color={tintColor ?? theme.colors.black}
      style={[
        {
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.xxs,
        },
        styles,
      ]}
      onPress={() => underConstructionAlert()}
    />
  );
};

export const menuButton = ({
  tintColor,
  styles,
}: {
  tintColor: string;
  styles?: StyleProp<ViewStyle>;
}) => <MenuButton tintColor={tintColor} styles={styles ?? {}} />;
