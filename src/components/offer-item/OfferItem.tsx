import React from 'react';
import {
  StyleProp,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Offer } from '~data/types';
import useStyles from './OfferItem.styles';

export interface OfferItemProps {
  offer: Offer;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const OfferItem = ({ offer, containerStyle, onPress }: OfferItemProps) => {
  const styles = useStyles();

  return (
    <TouchableHighlight
      onPress={onPress}
      delayPressIn={100}
      delayPressOut={100}>
      <View style={[styles.container, containerStyle]}>
        <FastImage source={{ uri: offer.imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{offer.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default OfferItem;
