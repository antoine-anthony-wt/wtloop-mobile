import { TripInfoContext } from '@wtloop/contexts/travel-context/TripInfoContext.context';
import { useContext } from 'react';

export const useTripInfo = () => {
  const context = useContext(TripInfoContext);
  return context;
};
