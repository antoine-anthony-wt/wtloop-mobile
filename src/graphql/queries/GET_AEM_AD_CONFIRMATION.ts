import { gql } from 'graphql-tag';
import { AEM_ADVERTISEMENT_CONFIRMATION_PATH } from '@env';

export const GET_AEM_AD_CONFIRMATION = gql`
  query advertismentConfirmationByPath {
    advertismentByPath(_path: ${AEM_ADVERTISEMENT_CONFIRMATION_PATH}) {
      item {
        _path
        teaserTitle
        teaserImage {
          ... on ImageRef {
            _path
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
