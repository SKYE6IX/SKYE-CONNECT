import { useState, useEffect, useMemo, MutableRefObject } from 'react';
import moment from 'moment';

export const useIsMessageInVeiw = (
  ref: MutableRefObject<HTMLDivElement | null>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export const getTime = (time: string) => {
  const new_time = new Date(time);
  const timeResult = moment(new_time).format('LT');
  return timeResult;
};
