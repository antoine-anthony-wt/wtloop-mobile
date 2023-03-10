import React from 'react';
import { useTheme } from '@rneui/themed';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import underConstructionAlert from '@wtloop/utils/underConstructionAlert';
import { Icon } from '@rneui/base';

const MenuButton = ({ tintColor }: { tintColor: string }) => {
  const { theme } = useTheme();

  return (
    <Icon
      type="material"
      name="more-horiz"
      size={30}
      color={tintColor ?? theme.colors.black}
      Component={TouchableOpacity}
      style={{
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.xxs,
      }}
      onPress={() => underConstructionAlert()}
    />
  );
};

export const menuButton = ({
  tintColor,
}: {
  tintColor: string;
  styles?: StyleProp<ViewStyle>;
}) => <MenuButton tintColor={tintColor} />;
