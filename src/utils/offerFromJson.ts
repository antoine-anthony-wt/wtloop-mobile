import { Offer } from '@wtloop/types';

export const offerFromJson = (json: any) => {
  const offer: Offer = {
    id: (json._path as string) ?? '',
    title: (json.teaserTitle as string) ?? '',
    imageUrl: (json.teaserImage?._publishUrl as string) ?? '',
    confirmationPopup: {
      title: (json.popupTitle as string) ?? '',
      imageUrl: (json.popupImage?._publishUrl as string) ?? '',
    },
    confirmationTeaser: {
      title: (json.confirmationTeaser?.teaserText as string) ?? '',
      imageUrl: (json.confirmationTeaser?.image?._publishUrl as string) ?? '',
      path: json.confirmationTeaser._path as string,
    },
  };
  return offer;
};
