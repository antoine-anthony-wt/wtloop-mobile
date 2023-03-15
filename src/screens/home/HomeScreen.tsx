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
import PlaceholderView from '@wtloop/components/placeholder-view/PlaceholderView';
import { Edge, ExperienceEvent } from '@adobe/react-native-aepedge';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();

  const {
    error: errorLoadingOffers,
    data: content,
    refetch: refetchOffers,
  } = useFetchAEMAdContent();
  const { useBoardingState, useUpgradingState, useInLoungeState } =
    useTripInfo();
  const { inBoardingArea, isBoarded } = useBoardingState();
  const { upgradedWithOffers, upgradeWithOffer, isUpgrading } =
    useUpgradingState();
  const { inLounge, enterToLounge } = useInLoungeState();

  const offers = useMemo(() => {
    if (inLounge) {
      return upgradedWithOffers;
    }
    return content;
  }, [content, inLounge, upgradedWithOffers]);

  const presentLoungeInvitation = useMemo(
    () => inBoardingArea,
    [inBoardingArea],
  );
  const presentWelcomeToLounge = useMemo(
    () => isBoarded && upgradedWithOffers.length > 0 && inLounge,
    [isBoarded, upgradedWithOffers, inLounge],
  );
  const presentMyOffers = useMemo(
    () => !presentLoungeInvitation,
    [presentLoungeInvitation],
  );

  useEffect(() => {
    if (presentMyOffers) {
      const xdmData = { eventType: 'SampleXDMEvent' };
      const data = { free: 'form', data: 'example' };
      const experienceEvent = new ExperienceEvent(xdmData, data);
      console.log('experienceEvent: ', experienceEvent);
      Edge.sendEvent(experienceEvent).then((eventHandles) =>
        console.log(
          'Edge.sentEvent returned EdgeEventHandles = ' +
            JSON.stringify(eventHandles),
        ),
      );
      refetchOffers();
    }
  }, [presentMyOffers]);

  const upgradeToFirstClass = (offer: Offer) => {
    upgradeWithOffer(offer);
  };

  const showUpgradedPopup = (offer: Offer) => {
    PopupView.open({
      content: <UpgradedTicket offer={offer} />,
    });
  };

  useEffect(() => {
    if (!upgradedWithOffers.length) return;
    showUpgradedPopup(upgradedWithOffers[upgradeWithOffer.length - 1]);
  }, [upgradedWithOffers]);

  console.log(offers?.length);

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
        {presentMyOffers && !errorLoadingOffers && offers?.length > 0 && (
          <View style={styles.offersContainer}>
            <Text style={styles.offersTitle}>My Offers</Text>
            <Carousel
              vertical={false}
              width={ScreenWidth}
              style={styles.offersCarousel}
              loop={offers.length > 1}
              pagingEnabled
              snapEnabled
              enabled={offers.length > 1}
              autoPlay={offers.length > 1}
              autoPlayInterval={5000}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: offers.length > 1 ? 50 : 0,
              }}
              panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
              }}
              data={offers}
              renderItem={({ item }) => (
                <OfferItem
                  offer={item}
                  inLounge={inLounge}
                  tagButtonTitle={
                    !upgradedWithOffers.includes(item)
                      ? 'UPGRADE HERE'
                      : !inLounge
                      ? 'UPGRADED'
                      : undefined
                  }
                  onPressButton={
                    !upgradedWithOffers.includes(item)
                      ? () => upgradeToFirstClass(item)
                      : undefined
                  }
                />
              )}
            />
          </View>
        )}
        {presentMyOffers && (!!errorLoadingOffers || offers?.length === 0) && (
          <PlaceholderView
            title="Hmm..."
            message={
              'Something went wrong trying to get your offers.\nPlease try again'
            }
            containerStyle={styles.placeholder}
            defaultButtonTitle="Try Again"
            onDefaultButtonPress={() => {
              refetchOffers();
            }}
          />
        )}
        {presentLoungeInvitation && <InfoItem onPress={enterToLounge} />}
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
