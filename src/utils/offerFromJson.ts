import { Offer } from '@wtloop/types';

export const offerFromJson = (json: any) => {
  const offer: Offer = {
    id: json._path as string,
    title: json.teaserTitle as string,
    imageUrl: json.teaserImage._publishUrl as string,
  };
  return offer;
};

/*
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
*/
