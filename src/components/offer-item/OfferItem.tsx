import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import ActionButton from '@wtloop/components/action-button/ActionButton';
import { Offer } from '@wtloop/types';
import useStyles from './OfferItem.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface OfferItemProps {
  offer: Offer;
  tagButtonTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPressButton: () => void;
}

const OfferItem = ({
  offer,
  tagButtonTitle,
  containerStyle,
  onPressButton,
}: OfferItemProps) => {
  const styles = useStyles();

  return (
    <View>
      <TouchableWithoutFeedback style={[styles.container, containerStyle]}>
        <View style={styles.content}>
          <FastImage source={{ uri: offer.imageUrl }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {offer.title}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {tagButtonTitle && (
        <ActionButton
          title={tagButtonTitle}
          containerStyle={styles.tagButton}
          size="md"
          onPress={onPressButton}
          userInteractionDisabled={!onPressButton}
        />
      )}
    </View>
  );
};

export default OfferItem;
