import { useCallback, useEffect, useRef, useState } from 'react';

export const useScrolledDown = () => {
  const scrolledTopRef = useRef(0);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = useCallback(() => {
    const top = window.document.body.getBoundingClientRect().top;
    const scrolledDown = top < scrolledTopRef.current;
    setScrolledDown(scrolledDown);
    scrolledTopRef.current = top;
  }, []);

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll);

    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrolledDown;
};
