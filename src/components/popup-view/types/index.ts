import { ReactElement } from 'react';

export type PopupViewOptions = {
  /**
   * The backdrop opacity when the modal is visible.
   * Default value: 0.70
   */
  backdropOpacity?: number;
  /**
   * The backdrop background color.
   * Default value: 'black'
   */
  backdropColor?: string;
  /**
   * Callback when the popup is opened.
   */
  onOpen?: () => void;
  /**
   * Callback when the popup is closed.
   */
  onClose?: () => void;
};

export type PopupViewData = {
  /**
   * The content that will be renderized in the bottom popup.
   */
  content?: ReactElement;
};

/**
 * `props` that can be set on the popup instance.
 * They act as defaults for all popups that are shown.
 */
export type PopupViewProps = PopupViewOptions;

export type PopupViewOpenParams = PopupViewOptions & PopupViewData;

export type PopupViewCloseParams = {
  onClose?: () => void;
};

export type PopupViewRef = {
  open: (params: PopupViewOpenParams) => void;
  close: (params?: PopupViewCloseParams) => void;
};
