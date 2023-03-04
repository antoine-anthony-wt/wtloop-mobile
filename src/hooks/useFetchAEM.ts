import axios from 'axios';
import { useQuery } from 'react-query';

import { AEM_ENDPOINT } from '@env';

/**
 * Custom hook that returns a React Query useQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {ReturnType<typeof useQuery>} The useQuery hook instance.
 */
export function useFetchAEMQuery<T>() {
  return useQuery<T>('aem', async () => {
    const response = await axios.get<T>(AEM_ENDPOINT);
    return response.data;
  });
}

/**
 * Custom hook that returns an object containing the isLoading, error, and data properties
 * from the useFetchAEMQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {{ isLoading: boolean, error: unknown, data: T }} An object containing the isLoading, error, and data properties.
 */
export function useFetchAEM<T>() {
  const { isLoading, error, data } = useFetchAEMQuery<T>();

  return { isLoading, error, data };
}
