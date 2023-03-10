import React, { ReactNode } from 'react';
import { TripInfoContext, TripInfo } from './TripInfoContext.context';

interface TripInfoProviderProps {
  children?: ReactNode;
}

export const TripInfoProvider = ({ children }: TripInfoProviderProps) => {
  const value = TripInfo();
  return (
    <TripInfoContext.Provider value={value}>
      {children}
    </TripInfoContext.Provider>
  );
};
