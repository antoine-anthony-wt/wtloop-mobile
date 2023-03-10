import { createContext, useEffect, useState } from 'react';
import { Offer } from '@wtloop/types';
import { useInLoungeListener } from '@wtloop/hooks/useInLoungeListener';
import { useSetInLoungeState } from '@wtloop/hooks/useSetInLoungeState';

export interface TripInfoContextInterface {
  useBoardingState: () => {
    isBoarded: boolean;
    setIsBoarded: (isBoarded: boolean) => void;
  };
  useUpgradingState: () => {
    upgradedWithOffer?: Offer;
    upgradeWithOffer: (offer: Offer) => void;
    isUpgrading: boolean;
  };
  useInLoungeState: () => {
    inLounge: boolean;
    listenForInLounge: () => void;
    stopListeningForInLounge: () => void;
  };
  resetTrip: () => void;
}

export const TripInfoContext =
  createContext<TripInfoContextInterface>(undefined);

export const TripInfo = () => {
  const [isBoarded, _setIsBoarded] = useState(false);
  const [inLounge, setInLounge] = useState(false);
  const [upgradedWithOffer, setUpgradedWithOffer] = useState<Offer>();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const {
    inLounge: freshInLounge,
    startListening,
    stopListening,
  } = useInLoungeListener();

  const { refetch: resetInLoungeState } = useSetInLoungeState(false);

  const listenForInLounge = () => {
    startListening();
  };

  const stopListeningForInLounge = () => {
    stopListening();
  };

  const upgradeWithOffer = (offer: Offer) => {
    setIsUpgrading(true);
    resetInLoungeState();
    setTimeout(() => {
      setUpgradedWithOffer(offer);
      setIsUpgrading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!freshInLounge) return;
    setInLounge(freshInLounge);
  }, [freshInLounge]);

  const resetTrip = () => {
    stopListeningForInLounge();
    setIsBoarded(false);
    setInLounge(false);
    setUpgradedWithOffer(undefined);
    resetInLoungeState();
  };

  useEffect(resetTrip, []);

  const setIsBoarded = async (_isBoarded: boolean) => {
    await resetInLoungeState();
    _setIsBoarded(_isBoarded);
  };

  const useBoardingState = () => ({ isBoarded, setIsBoarded });
  const useUpgradingState = () => ({
    upgradedWithOffer,
    upgradeWithOffer,
    isUpgrading,
  });
  const useInLoungeState = () => ({
    inLounge,
    listenForInLounge,
    stopListeningForInLounge,
  });

  return {
    useBoardingState,
    useUpgradingState,
    useInLoungeState,
    resetTrip,
  };
};
