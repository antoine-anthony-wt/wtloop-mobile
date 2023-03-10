import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { FocusAwareStatusBar } from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import useStyles from './TicketScreen.styles';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';
import { CountUp } from 'use-count-up';
import { Divider } from '@rneui/base';
import { TicketImage } from '@wtloop/assets/images';

export default function TicketScreen() {
  const [extraZero, setExtraZero] = React.useState<number | null>();
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

  const countdownTimer = (
    <CountUp
      isCounting
      start={36}
      end={0}
      duration={36}
      easing="linear"
      updateInterval={0}
      onUpdate={(currentValue) => {
        if (currentValue && currentValue < 10) {
          setExtraZero(0);
        } else {
          setExtraZero(null);
        }
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      <View style={styles.ticketSubHeaderContainer}>
        <View style={styles.subHeaderLabelContainer}>
          <Text style={styles.subHeaderLabelText}>ON RIDE</Text>
        </View>
        <View style={styles.subHeaderTimerContainer}>
          <Text style={styles.subHeaderTimerText}>
            Est. Arrival Time: 0:{extraZero}
            {countdownTimer}
          </Text>
        </View>
      </View>
      <View style={styles.subHeaderDividerContainer}>
        <Divider
          style={styles.subHeaderDivider}
          width={1}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.ticketImageContainer}>
        <TicketImage height={'100%'} />
        <Image
          source={require('@wtloop/assets/images/qr-code.png')}
          style={styles.qr}
        />
      </View>
      <View style={styles.footer} />
    </View>
  );
}

export const TicketScreenName = 'Ticket';
