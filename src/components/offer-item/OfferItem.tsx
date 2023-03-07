import React from 'react';
import {
  StyleProp,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ActionButton from '@wtloop/components/action-button/ActionButton';
import { Offer } from '@wtloop/types';
import useStyles from './OfferItem.styles';

export interface OfferItemProps {
  offer: Offer;
  tagButtonTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const OfferItem = ({
  offer,
  tagButtonTitle,
  containerStyle,
  onPress,
}: OfferItemProps) => {
  const styles = useStyles();

  return (
    <View>
      <TouchableHighlight
        style={[styles.container, containerStyle]}
        onPress={onPress}
        delayPressIn={100}
        delayPressOut={100}>
        <View style={styles.content}>
          <FastImage source={{ uri: offer.imageUrl }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {offer.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      {tagButtonTitle && (
        <ActionButton
          title={tagButtonTitle}
          containerStyle={styles.tagButton}
          size="md"
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default OfferItem;
