import React from 'react';
import { View, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import useStyles from './UpgradedTicket.styles';
import { PopupView } from '@wtloop/components/popup-view';

const UpgradedTicket = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.upgradeTitleContainer}>
        <View style={styles.closeIconContainer}>
          <Entypo
            name="cross"
            size={32}
            color="white"
            style={styles.closeIcon}
            onPress={() => {
              PopupView.close();
            }}
          />
        </View>
        <View>
          <Text style={[styles.upgradeTitle, { marginTop: 20 }]}>Upgraded</Text>
          <Text style={styles.upgradeTitle}>confirmed</Text>
        </View>
      </View>
      <Image
        style={styles.upgradeImage}
        source={require('@wtloop/assets/images/confirmation-image.png')}
      />
      <View style={styles.upgradeMessageContainer}>
      <Text style={[styles.upgradeMessage, { marginTop: 37 }]}>Welcome to</Text>
          <Text style={styles.upgradeMessage}>First Class</Text>
      </View>
    </View>
  );
};

export default UpgradedTicket;
