import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Offer } from '@wtloop/types';
import { useInLoungeListener } from '@wtloop/hooks/useInLoungeListener';

export interface TripInfoContextInterface {
  useBoardingState: () => {
    isBoarded: boolean;
    setIsBoarded: Dispatch<SetStateAction<boolean>>;
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
  const [isBoarded, setIsBoarded] = useState(false);
  const [inLounge, setInLounge] = useState(false);
  const [upgradedWithOffer, setUpgradedWithOffer] = useState<Offer>();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const {
    inLounge: freshInLounge,
    startListening,
    stopListening,
  } = useInLoungeListener();

  const listenForInLounge = () => {
    startListening();
  };

  const stopListeningForInLounge = () => {
    stopListening();
  };

  const upgradeWithOffer = (offer: Offer) => {
    setIsUpgrading(true);
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
