import axios from 'axios';
import { useQuery } from 'react-query';

import { AEM_ENDPOINT } from '@env';
import { offerFromJson } from '@wtloop/utils/offerFromJson';
import { offersResponse } from '@wtloop/__mocks__/server-responses/offersResponse';

/**
 * Custom hook that returns a React Query useQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {ReturnType<typeof useQuery>} The useQuery hook instance.
 */
export function useFetchAEMAdContentQuery() {
  return useQuery(
    'aem',
    async () => {
      const selectedResponse = async ({ mocked }: { mocked: boolean }) => {
        if (mocked) {
          return { data: offersResponse() };
        }
        return await axios.get(AEM_ENDPOINT);
      };

      const response = await selectedResponse({ mocked: true });
      const data = response.data.data.advertismentList.items as Record<
        string,
        any
      >[];
      const offers = data
        .map((item) => offerFromJson(item))
        .filter((item) => item !== undefined);
      return offers;
    },
    { enabled: false },
  );
}

/**
 * Custom hook that returns an object containing the isLoading, error, and data properties
 * from the useFetchAEMAdContentQuery hook for fetching AEM content.
 *
 * @template T - The expected return type of the AEM content.
 * @returns {{ isLoading: boolean, error: unknown, data: T }} An object containing the isLoading, error, and data properties.
 */
export function useFetchAEMAdContent() {
  const { isLoading, error, data, refetch } = useFetchAEMAdContentQuery();
  return { isLoading, error, data, refetch };
}
