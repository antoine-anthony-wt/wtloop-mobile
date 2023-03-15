import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import { ActionButton, FocusAwareStatusBar } from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import useStyles from './TicketScreen.styles';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';
import { CountUp } from 'use-count-up';
import { Divider } from '@rneui/base';
import { TicketImage } from '@wtloop/assets/images';
import { useNavigation } from '@react-navigation/native';
import { useDidUpdateEffect } from '@wtloop/hooks/useDidUpdateEffect';

export default function TicketScreen() {
  const [extraZero, setExtraZero] = useState<number | null>();
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const { useBoardingState, useUpgradingState, resetTrip } = useTripInfo();
  const {
    inBoardingArea,
    enterToBoardingArea,
    isBoarded,
    listenForBoardingAreaScan,
    stopListeningForBoardingAreaScan,
  } = useBoardingState();
  const { upgradedWithOffer } = useUpgradingState();

  useEffect(() => {
    if (!inBoardingArea && !isBoarded && !!upgradedWithOffer) {
      stopListeningForBoardingAreaScan();
      listenForBoardingAreaScan();
    }
    return () => stopListeningForBoardingAreaScan();
  }, [inBoardingArea, isBoarded]);

  useDidUpdateEffect(() => {
    if (!inBoardingArea) return;
    stopListeningForBoardingAreaScan();
    navigation.goBack();
  }, [inBoardingArea]);

  const handleBoardingState = () => {
    resetTrip();
  };

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
        <ActionButton
          title={!isBoarded ? 'ON TIME' : 'ON RIDE'}
          size="sm"
          containerStyle={styles.state}
          buttonStyle={styles.stateButton}
          radius="sm"
          onPress={handleBoardingState}
        />
        <View style={styles.subHeaderTimerContainer}>
          {isBoarded ? (
            <Text style={styles.subHeaderTimerText}>
              Est. Arrival Time: 0:{extraZero}
              {countdownTimer}
            </Text>
          ) : (
            <Text style={styles.subHeaderTimerText}>
              Boarding closes at 10:20 AM
            </Text>
          )}
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
        <TouchableHighlight
          style={styles.qrContainer}
          onPress={
            !inBoardingArea && !isBoarded && !!upgradedWithOffer
              ? enterToBoardingArea
              : undefined
          }>
          <Image
            source={require('@wtloop/assets/images/qr-code.png')}
            style={styles.qr}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.footer} />
    </View>
  );
}

export const TicketScreenName = 'Ticket';
