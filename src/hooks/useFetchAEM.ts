import { useCallback } from 'react';
import { graphQLClient } from '../graphql/graphQLClient';

export function useFetchAEM<T>(query: string) {
  const fetchAEM = useCallback(async function (): Promise<T> {
    const response = await graphQLClient.request<T>(query);
    return response;
  }, []);

  return { fetchAEM };
}
