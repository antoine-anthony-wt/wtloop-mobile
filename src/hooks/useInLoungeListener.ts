import { useEffect, useState } from 'react';
import { IN_LOUNGE_URL } from '@env';
import axios from 'axios';

export const useInLoungeListener = () => {
  const [inLounge, setInLounge] = useState<boolean>();
  let timerInterval: NodeJS.Timer;

  const fetchInLoungeInfo = async () => {
    const response = await axios.get(IN_LOUNGE_URL);
    setInLounge(response.data.firstClass === 'true');
  };

  const startListening = () => {
    fetchInLoungeInfo();
    timerInterval = setInterval(() => {
      fetchInLoungeInfo();
    }, 1000);
  };

  const stopListening = () => {
    clearInterval(timerInterval);
  };

  useEffect(() => {
    return () => stopListening();
  }, []);

  return { inLounge, startListening, stopListening };
};
