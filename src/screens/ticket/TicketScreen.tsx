import React from 'react';
import { View } from 'react-native';
import { FocusAwareStatusBar } from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import useStyles from './TicketScreen.styles';

export default function TicketScreen() {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
    </View>
  );
}

export const TicketScreenName = 'Ticket';
