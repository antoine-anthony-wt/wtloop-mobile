import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import useStyles from './InfoItem.styles';

export interface InfoItemProps {
  onPress: () => void;
}

const InfoItem = ({ onPress }: InfoItemProps) => {
  const styles = useStyles();

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      delayPressIn={100}
      delayPressOut={100}>
      <View style={styles.content}>
        <FastImage
          source={require('~assets/images/first-class-lounge.png')}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Head to the First Class lounge</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default InfoItem;
