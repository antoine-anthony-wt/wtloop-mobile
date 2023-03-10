import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './UpgradedTicket.styles';
import { PopupView } from '@wtloop/components/popup-view';
import { Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { Offer } from '@wtloop/types';
import FastImage from 'react-native-fast-image';

export interface UpgradedTicketProps {
  offer: Offer;
}

const UpgradedTicket = ({ offer }: UpgradedTicketProps) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.upgradeTitleContainer}>
        <View style={styles.closeIconContainer}>
          <Icon
            type="feather"
            name="x"
            size={26}
            color={theme.colors.white}
            Component={TouchableOpacity}
            style={styles.closeIcon}
            onPress={() => PopupView.close()}
          />
        </View>
        <View>
          <Text style={styles.upgradeTitle}>
            {offer.confirmationPopup.title}
          </Text>
        </View>
      </View>
      <FastImage
        style={styles.upgradeImage}
        source={{ uri: offer.confirmationPopup.imageUrl }}
      />
      <View style={styles.upgradeMessageContainer}>
        <Text style={styles.upgradeMessage}>{'Welcome to\nFirst Class'}</Text>
      </View>
    </View>
  );
};

export default UpgradedTicket;
