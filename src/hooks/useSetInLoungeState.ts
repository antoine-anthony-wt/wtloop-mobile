import axios from 'axios';
import { useQuery } from 'react-query';
import { IN_LOUNGE_URL } from '@env';

export const useSetInLoungeState = (inLounge: boolean) => {
  return useQuery(
    'in-lounge',
    async () => {
      const response = await axios.put(IN_LOUNGE_URL, { firstClass: inLounge });
      return response.data.firstClass === 'true';
    },
    { enabled: false },
  );
};
