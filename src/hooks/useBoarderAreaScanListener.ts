import { useEffect, useState } from 'react';
import { IN_LOUNGE_URL } from '@env';
import axios from 'axios';

export const useBoarderAreaScanListener = () => {
  const [inBoardingArea, setInBoardingArea] = useState<boolean>();
  let timerInterval: NodeJS.Timer;

  const fetchInBoardingAreaInfo = async () => {
    console.log('LISTENING');
    const response = await axios.get(IN_LOUNGE_URL);
    setInBoardingArea(response.data.firstClass === 'true');
  };

  const startListening = () => {
    fetchInBoardingAreaInfo();
    timerInterval = setInterval(() => {
      fetchInBoardingAreaInfo();
    }, 1000);
  };

  const stopListening = () => {
    clearInterval(timerInterval);
  };

  useEffect(() => {
    return () => stopListening();
  }, []);

  return { inBoardingArea, startListening, stopListening };
};
