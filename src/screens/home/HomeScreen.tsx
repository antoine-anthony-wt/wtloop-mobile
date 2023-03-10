import React, { useEffect, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  FocusAwareStatusBar,
  SearchBar,
  UpgradedTicket,
} from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import useStyles from './HomeScreen.styles';
import { OfferItem } from '@wtloop/components';
import Carousel from 'react-native-reanimated-carousel';
import { ScreenWidth } from '@rneui/base';
import InfoItem from './components/info-item/InfoItem';
import { PopupView } from '@wtloop/components/popup-view';
import { useFetchAEM } from '../../hooks/useFetchAEM';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';
import { Offer } from '@wtloop/types';
import LoadingView from '@wtloop/components/loading-view/LoadingView';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();

  const { isLoading, error, data: content } = useFetchAEM();
  const { useUpgradingState, useInLoungeState } = useTripInfo();
  const { upgradedWithOffer, upgradeWithOffer, isUpgrading } =
    useUpgradingState();
  const { inLounge } = useInLoungeState();

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

  const upgradeToFirstClass = (offer: Offer) => {
    upgradeWithOffer(offer);
  };

  const showUpgradedPopup = () => {
    PopupView.open({
      content: <UpgradedTicket />,
      onOpen: () => console.log('ON OPEN'),
      onClose: () => console.log('ON CLOSE'),
    });
  };

  useEffect(() => {
    if (!upgradedWithOffer) return;
    showUpgradedPopup();
  }, [upgradedWithOffer]);

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
        {!!upgradedWithOffer && <InfoItem onPress={() => console.log('hey')} />}
        {(!upgradedWithOffer || inLounge) && (
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
                  tagButtonTitle={!upgradedWithOffer && 'UPGRADE HERE'}
                  onPressButton={() => upgradeToFirstClass(item)}
                />
              )}
            />
          </View>
        )}
      </ScrollView>
      <LoadingView
        visible={isUpgrading}
        message="Upgrading..."
        container
        overlay
      />
    </View>
  );
}

export const HomeScreenName = 'Book';
