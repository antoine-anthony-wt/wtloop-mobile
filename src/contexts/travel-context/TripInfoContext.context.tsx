import { createContext, useEffect, useState } from 'react';
import { Offer } from '@wtloop/types';
import { useBoarderAreaScanListener } from '@wtloop/hooks/useBoarderAreaScanListener';
import { useSetInLoungeState } from '@wtloop/hooks/useSetInLoungeState';

export interface TripInfoContextInterface {
  useBoardingState: () => {
    inBoardingArea: boolean;
    listenForBoardingAreaScan: () => void;
    stopListeningForBoardingAreaScan: () => void;
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
    enterToLounge: () => void;
  };
  resetTrip: () => void;
}

export const TripInfoContext =
  createContext<TripInfoContextInterface>(undefined);

export const TripInfo = () => {
  const [inBoardingArea, setInBoardingArea] = useState(false);
  const [_isBoarded, _setIsBoarded] = useState(false);
  const [inLounge, setInLounge] = useState(false);
  const [upgradedWithOffer, setUpgradedWithOffer] = useState<Offer>();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const {
    inBoardingArea: freshInBoardingArea,
    startListening,
    stopListening,
  } = useBoarderAreaScanListener();

  const { refetch: resetInLoungeState } = useSetInLoungeState(false);

  const listenForBoardingAreaScan = () => {
    startListening();
  };

  const stopListeningForBoardingAreaScan = () => {
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
    if (!freshInBoardingArea) return;
    setInBoardingArea(freshInBoardingArea);
  }, [freshInBoardingArea]);

  const resetTrip = () => {
    stopListeningForBoardingAreaScan();
    setInBoardingArea(false);
    setIsBoarded(false);
    setInLounge(false);
    setUpgradedWithOffer(undefined);
    resetInLoungeState();
  };

  useEffect(resetTrip, []);

  const setIsBoarded = async (isBoarded: boolean) => {
    await resetInLoungeState();
    _setIsBoarded(isBoarded);
  };

  const enterToLounge = () => {
    setInLounge(true);
    setInBoardingArea(false);
    setIsBoarded(true);
  };

  const useBoardingState = () => ({
    inBoardingArea,
    setInBoardingArea,
    listenForBoardingAreaScan,
    stopListeningForBoardingAreaScan,
    isBoarded: _isBoarded,
    setIsBoarded,
  });
  const useUpgradingState = () => ({
    upgradedWithOffer,
    upgradeWithOffer,
    isUpgrading,
  });
  const useInLoungeState = () => ({
    inLounge,
    enterToLounge,
  });

  return {
    useBoardingState,
    useUpgradingState,
    useInLoungeState,
    resetTrip,
  };
};
