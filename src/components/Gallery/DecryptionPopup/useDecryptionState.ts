import { useState, useCallback } from 'react';

// Simple state management using React hooks
export function useDecryptionState() {
  const [isDecrypted, setIsDecrypted] = useState(false);
  
  const handleSetDecrypted = useCallback((value: boolean) => {
    setIsDecrypted(value);
  }, []);

  return {
    isDecrypted,
    setIsDecrypted: handleSetDecrypted
  };
}