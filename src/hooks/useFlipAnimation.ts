import { useLayoutEffect, useRef, type MutableRefObject } from 'react';

interface RankedItem {
  id: number;
}

export interface FlipAnimationRefs {
  listRef: MutableRefObject<HTMLDivElement | null>;
  rowRefs: MutableRefObject<Record<number, HTMLDivElement | null>>;
}

export function useFlipAnimation(ranked: RankedItem[], orderKey: string): FlipAnimationRefs {
  const listRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const prevTopsRef = useRef<Record<number, number>>({});

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const nextTops: Record<number, number> = {};
    const moved: HTMLDivElement[] = [];

    ranked.forEach((person) => {
      const element = rowRefs.current[person.id];
      if (!element) return;

      const newTop = element.offsetTop;
      nextTops[person.id] = newTop;
      const previousTop = prevTopsRef.current[person.id];

      if (!reduceMotion && previousTop !== undefined) {
        const deltaY = previousTop - newTop;
        if (deltaY !== 0) {
          element.style.transition = 'none';
          element.style.transform = `translateY(${deltaY}px)`;
          moved.push(element);
        }
      }
    });

    if (moved.length && listRef.current) {
      void listRef.current.offsetHeight;
      moved.forEach((element) => {
        element.style.transition = '';
        element.style.transform = '';
      });
    }

    prevTopsRef.current = nextTops;
  }, [orderKey, ranked]);

  return { listRef, rowRefs };
}
