import { useEffect, useRef } from 'react';

export const useDebounce = (value, onClick) => {
  const ref = useRef();

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      onClick();
    }, 500);
    return () => {
      clearTimeout(ref.current);
    };
  }, [value, ref, onClick]);
};
