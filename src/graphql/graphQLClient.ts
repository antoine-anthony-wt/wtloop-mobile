import { GraphQLClient } from 'graphql-request';
import { AEM_ENDPOINT } from '@env';

export const graphQLClient = new GraphQLClient(AEM_ENDPOINT);
