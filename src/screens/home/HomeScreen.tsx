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
import PlaceholderView from '@wtloop/components/placeholder-view/PlaceholderView';
import { Edge, ExperienceEvent } from '@adobe/react-native-aepedge';
import { HomeScreenNavigationProp } from '@wtloop/navigators/home/HomeNavigator';

export default function HomeScreen() {
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {
    error: errorLoadingOffers,
    data: offers,
    refetch: refetchOffers,
  } = useFetchAEMAdContent();
  const { useBoardingState, useUpgradingState, useInLoungeState } =
    useTripInfo();
  const { inBoardingArea, isBoarded } = useBoardingState();
  const { upgradedWithOffer, upgradeWithOffer, isUpgrading } =
    useUpgradingState();
  const { inLounge, enterToLounge } = useInLoungeState();

  const presentLoungeInvitation = useMemo(
    () => inBoardingArea,
    [inBoardingArea],
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
    if (presentMyOffers) {
      const xdmData = { eventType: 'SampleXDMEvent' };
      const data = { free: 'form', data: 'example' };
      const experienceEvent = new ExperienceEvent(xdmData, data);
      console.log('exerienceEvent: ', experienceEvent);
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
    if (!upgradedWithOffer) return;
    showUpgradedPopup(upgradedWithOffer);
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
        {presentMyOffers && !errorLoadingOffers && offers?.length && (
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
              data={presentMyOffers ? offers : []}
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
        {presentMyOffers && (!!errorLoadingOffers || !offers?.length) && (
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
