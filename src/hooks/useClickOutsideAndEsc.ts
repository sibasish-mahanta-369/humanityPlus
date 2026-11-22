import { useEffect, type MutableRefObject } from 'react';

interface Options {
  enabled: boolean;
  containerRef: MutableRefObject<HTMLElement | null>;
  triggerRef: MutableRefObject<HTMLButtonElement | null>;
  onClose: () => void;
  returnFocusOnEscape?: boolean;
}

export function useClickOutsideAndEsc({
  enabled,
  containerRef,
  triggerRef,
  onClose,
  returnFocusOnEscape = true,
}: Options) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        if (returnFocusOnEscape) triggerRef.current?.focus();
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (target instanceof Node && containerRef.current && !containerRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [enabled, containerRef, triggerRef, onClose, returnFocusOnEscape]);
}
