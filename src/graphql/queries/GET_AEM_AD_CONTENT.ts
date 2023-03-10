import { gql } from 'graphql-tag';

export const GET_AEM_AD_CONTENT = gql`
  # Lists all advertisments
  query advertisments {
    advertismentList {
      items {
        _path
        confirmationTeaser {
          _path
        }
        teaserTitle
        teaserImage {
          ... on ImageRef {
            _path
            type
            _authorUrl
            _publishUrl
            width
            height
            mimeType
          }
        }
        popupTitle
        popupImage {
          ... on ImageRef {
            _path
            type
            _authorUrl
            _publishUrl
            width
            height
            mimeType
          }
        }
      }
    }
  }
`;
