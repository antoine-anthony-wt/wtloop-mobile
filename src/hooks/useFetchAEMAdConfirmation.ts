import axios from 'axios';
import { useQuery } from 'react-query';

import { AEM_ENDPOINT } from '@env';
import { GET_AEM_AD_CONFIRMATION } from '@wtloop/graphql/queries';

/**
 * A custom React Query hook to fetch data from AEM confirmation endpoint.
 *
 * @template T - The type of the data being fetched.
 * @returns {import('react-query').QueryResult<T, Error>} - The React Query result object.
 */
export function useFetchAEMConfirmationQuery<T>() {
  return useQuery<T>('aem', async () => {
    const response = await axios.post<T>(AEM_ENDPOINT, {
      query: GET_AEM_AD_CONFIRMATION,
    });
    return response.data;
  });
}

/**
 * A custom hook to fetch data from AEM confirmation endpoint and return a simplified result object.
 *
 * @template T - The type of the data being fetched.
 * @returns {{isLoading: boolean, error: Error|null, data: T|null}} - The simplified result object.
 */
export function useFetchAEMAdConfirmation<T>() {
  const { isLoading, error, data } = useFetchAEMConfirmationQuery<T>();

  return { isLoading, error, data };
}
