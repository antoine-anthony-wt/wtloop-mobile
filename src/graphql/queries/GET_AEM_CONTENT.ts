import { gql } from 'graphql-tag';

export const GET_AEM_CONTENT = gql`
  {
    users {
      id
      name
      email
    }
  }
`;
