import { useCallback, useRef } from 'react';

export const useDebounce = (handler, delay) => {
  const timeout = useRef();

  return useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      handler();
    }, delay);
  }, [timeout, handler, delay]);
};
