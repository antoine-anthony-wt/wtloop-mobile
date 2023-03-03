import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { FocusAwareStatusBar, SearchBar } from '~components';
import { useTheme } from '@rneui/themed';
import useStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={styles.map}
          source={require('~assets/images/travel-map.png')}
        />
        <SearchBar
          containerStyle={styles.searchBar}
          placeholder="Departing from?"
          searchIcon={{
            name: 'map-marker-alt',
            type: 'font-awesome-5',
            size: 22,
            containerStyle: styles.mapIcon,
          }}
        />
      </ScrollView>
    </View>
  );
}

export const HomeScreenName = 'Book';
