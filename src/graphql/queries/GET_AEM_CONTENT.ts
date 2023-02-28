import { gql } from 'graphql-request';

export const GET_AEM_CONTENT = gql`
  query GetContent {
    users {
      id
      name
      email
    }
  }
`;
