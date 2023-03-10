import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  FocusAwareStatusBar,
  SearchBar,
  UpgradedTicket,
} from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import { useQueryClient } from 'react-query';
import { useFetchAEMAdContent } from '@wtloop/hooks/useFetchAEMAdContent';
import { ActionButton, AEMModal } from '@wtloop/components';
import useStyles from './HomeScreen.styles';
import { OfferItem } from '@wtloop/components';
import Carousel from 'react-native-reanimated-carousel';
import { ScreenWidth } from '@rneui/base';
import InfoItem from './components/info-item/InfoItem';
import { PopupView } from '@wtloop/components/popup-view';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();
  const queryClient = useQueryClient();
  const { isLoading, error, data: content } = useFetchAEMAdContent();
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('content:', content);
  }, [isLoading, error, content]);

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

  const showUpgradedPopup = () => {
    PopupView.open({
      content: <UpgradedTicket />,
      onOpen: () => console.log('ON OPEN'),
      onClose: () => console.log('ON CLOSE'),
    });
  };

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
          source={require('@wtloop/assets/images/travel-map.png')}
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
        {<InfoItem onPress={() => console.log('hey')} />}
        {
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
              panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
              }}
              data={items}
              renderItem={({ item }) => (
                <OfferItem
                  offer={item}
                  tagButtonTitle="UPGRADE HERE"
                  onPress={showUpgradedPopup}
                />
              )}
            />
          </View>
        }
      </ScrollView>
    </View>
  );
}

export const HomeScreenName = 'Book';
