import { Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import useStyles from './InfoItem.styles';

export interface InfoItemProps {
  onPress: () => void;
}

const InfoItem = ({ onPress }: InfoItemProps) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      delayPressIn={100}
      delayPressOut={100}>
      <View style={styles.content}>
        <FastImage
          source={require('@wtloop/assets/images/first-class-lounge.png')}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Head to the First Class lounge</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Icon
              name="arrow-up-right"
              type="feather"
              color={theme.colors.white}
              size={56}
            />
            <Text style={styles.buttonTitle}>{'How to\nget there?'}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default InfoItem;
