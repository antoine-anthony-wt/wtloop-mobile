import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from './TripBanner.styles';
import { useTheme } from '@rneui/themed';
import { QRIcon } from '@wtloop/assets/images';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';

export interface TripBannerProps {
  onPress: () => void;
  onPressQR: () => void;
}

export const TripBanner = ({ onPress, onPressQR }: TripBannerProps) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { useBoardingState } = useTripInfo();
  const { isBoarded } = useBoardingState();

  const renderItinerary = () => (
    <View style={styles.itineraryContainer}>
      <TouchableOpacity style={styles.qrCodeButton} onPress={onPressQR}>
        <QRIcon />
      </TouchableOpacity>
      <View>
        <Text style={styles.originDestination}>LV → HD</Text>
        <Text style={styles.travelTime}>Today, Dec 10</Text>
      </View>
      <View style={styles.travelTimeTitleContainer}>
        <Text style={styles.originDestination}>・</Text>
        <Text style={styles.travelTimeTitle}>
          {!isBoarded ? 'On Time' : 'Travel time'}
        </Text>
      </View>
    </View>
  );

  const renderArrivalTime = () => (
    <View style={styles.arrivalContainer}>
      <Text style={styles.arrivalTitle}>
        {!isBoarded ? 'Boarding' : 'Est. Arrival'}
      </Text>
      <Text style={styles.arrivalTime}>
        {!isBoarded ? '10:30 AM' : '11:42 AM'}
      </Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[theme.colors.white, theme.colors.grey2]}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>
        <View style={styles.topSeparator} />
        <View style={styles.row}>
          {renderItinerary()}
          {renderArrivalTime()}
        </View>
        <View style={styles.bottomSeparator} />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
