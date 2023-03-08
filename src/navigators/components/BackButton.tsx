import React from 'react';
import { Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';

const BackButton = ({ tintColor }: { tintColor: string }) => {
  const { theme } = useTheme();

  return (
    <Icon
      type="feather"
      name="arrow-left"
      size={26}
      color={tintColor ?? theme.colors.black}
    />
  );
};

export default BackButton;

export const backButton = ({ tintColor }: { tintColor?: string }) => (
  <BackButton tintColor={tintColor} />
);
