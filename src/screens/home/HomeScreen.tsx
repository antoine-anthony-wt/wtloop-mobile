import React, { useEffect, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  FocusAwareStatusBar,
  SearchBar,
  UpgradedTicket,
} from '@wtloop/components';
import { useTheme } from '@rneui/themed';
import { useFetchAEMAdContent } from '@wtloop/hooks/useFetchAEMAdContent';
import useStyles from './HomeScreen.styles';
import { OfferItem } from '@wtloop/components';
import Carousel from 'react-native-reanimated-carousel';
import { ScreenWidth } from '@rneui/base';
import InfoItem from './components/info-item/InfoItem';
import { PopupView } from '@wtloop/components/popup-view';
import { useTripInfo } from '@wtloop/hooks/useTripInfo';
import { Offer } from '@wtloop/types';
import LoadingView from '@wtloop/components/loading-view/LoadingView';
import { useNavigation } from '@react-navigation/native';
import { TicketScreenName } from '../ticket/TicketScreen';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const { isLoading, error, data: content } = useFetchAEMAdContent();
  const { useBoardingState, useUpgradingState, useInLoungeState } =
    useTripInfo();
  const { isBoarded } = useBoardingState();
  const { upgradedWithOffer, upgradeWithOffer, isUpgrading } =
    useUpgradingState();
  const { inLounge } = useInLoungeState();

  const presentLoungeInvitation = useMemo(
    () => isBoarded && upgradedWithOffer && !inLounge,
    [isBoarded, upgradedWithOffer, inLounge],
  );
  const presentWelcomeToLounge = useMemo(
    () => isBoarded && upgradedWithOffer && inLounge,
    [isBoarded, upgradedWithOffer, inLounge],
  );
  const presentMyOffers = useMemo(
    () => !presentLoungeInvitation,
    [presentLoungeInvitation],
  );

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('content:', content);
  }, [isLoading, error, content]);

  const items = useMemo(
    () =>
      inLounge
        ? [
            {
              id: 'abc123',
              title: 'Tap to get a free glass of whisky.',
              imageUrl:
                'https://hips.hearstapps.com/hmg-prod/images/whiskey-being-poured-into-a-glass-royalty-free-image-1663870436.jpg',
            },
          ]
        : [
            {
              id: 'xyx987',
              title: 'Go to First Class and get your free whisky!',
              imageUrl:
                'https://hips.hearstapps.com/hmg-prod/images/whiskey-being-poured-into-a-glass-royalty-free-image-1663870436.jpg',
            },
          ],
    [inLounge],
  );

  const upgradeToFirstClass = (offer: Offer) => {
    upgradeWithOffer(offer);
  };

  const showUpgradedPopup = () => {
    PopupView.open({
      content: <UpgradedTicket />,
    });
  };

  const goToTicketScreen = () => {
    navigation.navigate(TicketScreenName);
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
        {presentWelcomeToLounge && (
          <Text style={styles.welcomeLounge}>{'Welcome to\nFirst Class'}</Text>
        )}
        {presentMyOffers && (
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
                  tagButtonTitle={
                    !upgradedWithOffer
                      ? 'UPGRADE HERE'
                      : !inLounge
                      ? 'UPGRADED'
                      : undefined
                  }
                  onPressButton={
                    !upgradedWithOffer
                      ? () => upgradeToFirstClass(item)
                      : undefined
                  }
                />
              )}
            />
          </View>
        )}
        {presentLoungeInvitation && <InfoItem onPress={goToTicketScreen} />}
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
