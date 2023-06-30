import { useRef, useEffect } from 'react';

export function useScrollToTop<T>(
  dep: T
): React.MutableRefObject<HTMLDivElement | undefined> {
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    setTimeout(() => {
      if (ref.current != undefined) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, 100);
  }, [dep]);
  return ref;
}
