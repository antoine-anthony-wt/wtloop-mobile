import axios from 'axios';
import { useQuery } from 'react-query';
import { IN_LOUNGE_URL } from '@env';

export const useSetInLoungeState = () => {
  return useQuery('aem', async () => {
    const response = await axios.put(IN_LOUNGE_URL);
    return response.data.firstClass === 'true';
  });
};
