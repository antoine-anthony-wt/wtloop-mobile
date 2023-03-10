import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FocusAwareStatusBar } from '@wtloop/components';
import { useTheme, Divider } from '@rneui/themed';
import useStyles from './TicketScreen.styles';
import { TicketImage } from '@wtloop/assets/images';
import { CountUp } from 'use-count-up';

export default function TicketScreen() {
  const [extraZero, setExtraZero] = React.useState<number | null>();
  const styles = useStyles();
  const { theme } = useTheme();

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
          insertType={'middle'}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.ticketImageContainer}>
        <TicketImage onLongPress={() => alert('long press clicked...')} />
      </View>
    </View>
  );
}

export const TicketScreenName = 'Ticket';
