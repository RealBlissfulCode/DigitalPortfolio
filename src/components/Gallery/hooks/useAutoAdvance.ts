import { useEffect, useRef } from 'react';

export function useAutoAdvance(callback: () => void, isEnabled: boolean = true) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isEnabled) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    const advance = () => {
      callback();
      timeoutRef.current = setTimeout(advance, 3000); // Change photo every 3 seconds
    };

    timeoutRef.current = setTimeout(advance, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, isEnabled]);
}