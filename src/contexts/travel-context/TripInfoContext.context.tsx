import { createContext, useEffect, useState } from 'react';
import { Offer } from '@wtloop/types';
import { useBoarderAreaScanListener } from '@wtloop/hooks/useBoarderAreaScanListener';
import { useSetInBoarderAreaState } from '@wtloop/hooks/useSetInBoarderAreaState';

export interface TripInfoContextInterface {
  useBoardingState: () => {
    inBoardingArea: boolean;
    enterToBoardingArea: () => void;
    listenForBoardingAreaScan: () => void;
    stopListeningForBoardingAreaScan: () => void;
    isBoarded: boolean;
    setIsBoarded: (isBoarded: boolean) => void;
  };
  useUpgradingState: () => {
    upgradedWithOffers?: Offer[];
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
  const [upgradedWithOffers, setUpgradedWithOffers] = useState<Offer[]>([]);
  const [isUpgrading, setIsUpgrading] = useState(false);

  const {
    inBoardingArea: freshInBoardingArea,
    startListening,
    stopListening,
  } = useBoarderAreaScanListener();

  const { refetch: resetInBoardingAreaState } = useSetInBoarderAreaState(false);
  const { refetch: setInBoardingAreaState } = useSetInBoarderAreaState(true);

  const listenForBoardingAreaScan = () => {
    startListening();
  };

  const stopListeningForBoardingAreaScan = () => {
    stopListening();
  };

  const upgradeWithOffer = (offer: Offer) => {
    setIsUpgrading(true);
    resetInBoardingAreaState();
    setTimeout(() => {
      setUpgradedWithOffers([...upgradedWithOffers, offer]);
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
    setUpgradedWithOffers([]);
    resetInBoardingAreaState();
  };

  useEffect(resetTrip, []);

  const enterToBoardingArea = async () => {
    await setInBoardingAreaState();
    setInBoardingArea(true);
  };

  const setIsBoarded = async (isBoarded: boolean) => {
    await resetInBoardingAreaState();
    _setIsBoarded(isBoarded);
  };

  const enterToLounge = () => {
    setInLounge(true);
    setInBoardingArea(false);
    setIsBoarded(true);
  };

  const useBoardingState = () => ({
    inBoardingArea,
    enterToBoardingArea,
    listenForBoardingAreaScan,
    stopListeningForBoardingAreaScan,
    isBoarded: _isBoarded,
    setIsBoarded,
  });
  const useUpgradingState = () => ({
    upgradedWithOffers,
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
