import { RefObject, useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import {
  PopupViewCloseParams,
  PopupViewData,
  PopupViewOpenParams,
  PopupViewOptions,
} from './types';

export const DEFAULT_DATA: PopupViewData = {
  content: undefined,
};

export const DEFAULT_OPTIONS: PopupViewOptions = {
  onOpen: undefined,
  onClose: undefined,
};

export type UsePopupViewParams = {
  defaultOptions: PopupViewOptions;
  ref: RefObject<Modal>;
};

const ANIMATION_DURATION = 250;

export function usePopupView({ defaultOptions, ref }: UsePopupViewParams) {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<PopupViewData>(DEFAULT_DATA);
  const initialOptions = mergeIfDefined(DEFAULT_OPTIONS, defaultOptions);
  const [options, setOptions] = useState<PopupViewOptions>(initialOptions);

  const open = useCallback(
    (params: PopupViewOpenParams) => {
      const { content, backdropColor, backdropOpacity, onOpen, onClose } =
        params;

      setData({
        content,
      });
      setOptions(
        mergeIfDefined(initialOptions, {
          backdropColor,
          backdropOpacity,
          onOpen,
          onClose,
        }) as PopupViewOptions,
      );
      setIsVisible(true);

      setTimeout(() => {
        ref.current?.close();
        onOpen?.();
      }, ANIMATION_DURATION);
    },
    [initialOptions],
  );

  const close = useCallback((params?: PopupViewCloseParams) => {
    ref.current?.close();
    params?.onClose?.();
  }, []);

  const clear = useCallback(() => {
    setTimeout(() => {
      setIsVisible(false);
      setData(DEFAULT_DATA);
      setOptions(initialOptions);
    }, ANIMATION_DURATION);
  }, []);

  return {
    isVisible,
    data,
    options,
    open,
    close,
    clear,
  };
}

function mergeIfDefined(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>,
) {
  const newObj = {
    ...obj1,
  };
  Object.entries(obj2).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      newObj[key] = value;
    }
  });
  return newObj;
}
