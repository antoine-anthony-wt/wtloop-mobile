import React, { useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FocusAwareStatusBar, SearchBar } from '~components';
import { useTheme } from '@rneui/themed';
import useStyles from './HomeScreen.styles';
import OfferItem from '~components/offer-item/OfferItem';
import Carousel from 'react-native-reanimated-carousel';
import { ScreenWidth } from '@rneui/base';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();
  const items = useMemo(
    () => [
      {
        id: 'xyx987',
        title: 'Go to First Class and get your free whisky!',
        imageUrl:
          'https://hips.hearstapps.com/hmg-prod/images/whiskey-being-poured-into-a-glass-royalty-free-image-1663870436.jpg',
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled>
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
        <View style={styles.offersContainer}>
          <Text style={styles.offersTitle}>My Offers</Text>
          <Carousel
            vertical={false}
            width={ScreenWidth}
            style={styles.offersCarousel}
            loop
            pagingEnabled
            snapEnabled
            autoPlay
            autoPlayInterval={5000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            data={items}
            renderItem={({ item }) => (
              <OfferItem
                offer={item}
                onPress={() => console.log('on press offer')}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export const HomeScreenName = 'Book';
