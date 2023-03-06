import { gql } from 'graphql-tag';

export const GET_AEM_CONTENT = gql`
{
  adventureList {
    items {
      _path
      title
      description {
        html
        json
      }
      primaryImage {
        ... on ImageRef {
          _path
          width
          height
        }
      }
    }
  }
}
`;
