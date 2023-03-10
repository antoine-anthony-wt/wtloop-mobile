import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { FocusAwareStatusBar } from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import useStyles from './TicketScreen.styles';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';

export default function TicketScreen() {
  const styles = useStyles();
  const { theme } = useTheme();

  const { useInLoungeState } = useTripInfo();
  const { inLounge, listenForInLounge, stopListeningForInLounge } =
    useInLoungeState();

  useEffect(() => {
    listenForInLounge();
    return () => stopListeningForInLounge();
  }, []);

  useEffect(() => {
    if (!inLounge) return;
    stopListeningForInLounge();
  }, [inLounge]);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      <Image source={require('@wtloop/assets/images/qr-code.png')} />
    </View>
  );
}

export const TicketScreenName = 'Ticket';
