import axios from 'axios';
import { useQuery } from 'react-query';

import { AEM_ENDPOINT } from '@env';
import { GET_AEM_AD_CONTENT } from '@wtloop/graphql/queries';

/**
 * Custom hook that returns a React Query useQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {ReturnType<typeof useQuery>} The useQuery hook instance.
 */
export function useFetchAEMAdContentQuery<T>() {
  return useQuery<T>('aem', async () => {
    const response = await axios.post<T>(AEM_ENDPOINT, {
      mode: 'graphql',
      graphql: { query: GET_AEM_AD_CONTENT, variable: '' },
    });

    console.log('response.request', response.request); // log the axios request
    return response.data;
  });
}

/**
 * Custom hook that returns an object containing the isLoading, error, and data properties
 * from the useFetchAEMAdContentQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {{ isLoading: boolean, error: unknown, data: T }} An object containing the isLoading, error, and data properties.
 */
export function useFetchAEMAdContent<T>() {
  const { isLoading, error, data } = useFetchAEMAdContentQuery<T>();

  return { isLoading, error, data };
}
