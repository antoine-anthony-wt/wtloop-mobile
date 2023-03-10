export interface Offer {
  id: string;
  title: string;
  imageUrl: string;
  confirmationPopup?: {
    title?: string;
    imageUrl?: string;
  };
  confirmationTeaser?: {
    title?: string;
    imageUrl?: string;
    path?: string;
  };
}
