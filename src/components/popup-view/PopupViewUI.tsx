import React, { cloneElement, forwardRef, RefObject } from 'react';
import styles from './PopupViewUI.styles';
import { PopupViewData, PopupViewOptions } from './types';
import Modal from 'react-native-modal';

export type PopupViewUIProps = {
  isVisible: boolean;
  options: PopupViewOptions;
  data: PopupViewData;
  onPopupClose: () => void;
};

export const PopupViewUI = forwardRef(
  (props: PopupViewUIProps, ref: RefObject<Modal>) => {
    const { isVisible, options, data, onPopupClose } = props;
    const { content } = data;
    const { backdropColor, backdropOpacity, onClose } = options;

    const renderContent = () => {
      if (content) {
        return cloneElement(content);
      }
      return null;
    };

    if (isVisible) {
      return (
        <Modal
          ref={ref}
          style={styles.container}
          isVisible={isVisible}
          backdropColor={backdropColor}
          backdropOpacity={backdropOpacity}
          statusBarTranslucent
          onBackdropPress={() => ref.current?.close()}
          onModalWillHide={() => {
            onPopupClose();
            onClose?.();
          }}>
          {renderContent()}
        </Modal>
      );
    }
    return null;
  },
);

PopupViewUI.displayName = 'PopupViewUI';
