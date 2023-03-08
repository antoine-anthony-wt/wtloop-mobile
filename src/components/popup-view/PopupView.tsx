import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { PopupViewUI } from './PopupViewUI';
import Modal from 'react-native-modal';

import {
  PopupViewCloseParams,
  PopupViewOpenParams,
  PopupViewProps,
  PopupViewRef,
} from './types';
import { usePopupView } from './usePopupView';

const PopupViewRoot = forwardRef((props: PopupViewProps, ref) => {
  const { ...defaultOptions } = props;
  const popup = useRef<Modal>(null);
  const { open, close, clear, isVisible, options, data } = usePopupView({
    defaultOptions,
    ref: popup,
  });

  // This must use useCallback to ensure the ref doesn't get set to null and then a new ref every render.
  useImperativeHandle(
    ref,
    useCallback(
      () => ({
        open,
        close,
      }),
      [open, close],
    ),
  );

  if (!isVisible) return null;
  return (
    <PopupViewUI
      ref={popup}
      isVisible={isVisible}
      options={options}
      data={data}
      onPopupClose={clear}
    />
  );
});

PopupViewRoot.displayName = 'PopupViewRoot';

type PopupViewRefObj = {
  current: PopupViewRef | null;
};

let refs: PopupViewRefObj[] = [];

export function PopupView(props: PopupViewProps) {
  const toastRef = React.useRef<PopupViewRef | null>(null);

  /*
    This must use `useCallback` to ensure the ref doesn't get set to null and then a new ref every render.
    Failure to do so will cause whichever PopupView *renders or re-renders* last to be the instance that is used,
    rather than being the PopupView that was *mounted* last.
  */
  const setRef = React.useCallback((ref: PopupViewRef | null) => {
    // Since we know there's a ref, we'll update `refs` to use it.
    if (ref) {
      // store the ref in this toast instance to be able to remove it from the array later when the ref becomes null.
      toastRef.current = ref;
      addNewRef(ref);
    } else {
      // remove the this toast's ref, wherever it is in the array.
      removeOldRef(toastRef.current);
    }
  }, []);

  return <PopupViewRoot ref={setRef} {...props} />;
}

/**
 * Adds a ref to the end of the array, which will be used to show the toasts until its ref becomes null.
 *
 * @param newRef the new ref, which must be stable for the life of the PopupView instance.
 */
function addNewRef(newRef: PopupViewRef) {
  refs.push({
    current: newRef,
  });
}

/**
 * Removes the passed in ref from the file-level refs array using a strict equality check.
 *
 * @param oldRef the exact ref object to remove from the refs array.
 */
function removeOldRef(oldRef: PopupViewRef | null) {
  refs = refs.filter((r) => r.current !== oldRef);
}

/**
 * Get the active PopupView instance `ref`, by priority.
 * The "highest" PopupView in the `View` hierarchy has the highest priority.
 *
 * For example, a PopupView inside a `Modal`, would have had its ref set later than a PopupView inside App's Root.
 * Therefore, the library knows that it is currently visible on top of the App's Root
 * and will thus use the `Modal`'s PopupView when showing/hiding.
 *
 * ```js
 * <>
 *  <PopupView />
 *  <Modal>
 *    <PopupView />
 *  </Modal>
 * </>
 * ```
 */
function getRef() {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find((ref) => ref?.current !== null);
  if (!activeRef) {
    return null;
  }
  return activeRef.current;
}

PopupView.open = (params: PopupViewOpenParams) => {
  getRef()?.open(params);
};

PopupView.close = (params?: PopupViewCloseParams) => {
  getRef()?.close(params);
};
