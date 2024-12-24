import React, { useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { useDecryptionState } from './useDecryptionState';
import Keypad from './Keypad';
import PasscodeDisplay from './PasscodeDisplay';
import './styles.css';

const CORRECT_PASSCODE = '2121';
const MAX_LENGTH = 4;

export default function DecryptionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const { isDecrypted, setIsDecrypted } = useDecryptionState();

  useEffect(() => {
    if (!isDecrypted) {
      const timer = setTimeout(() => setIsVisible(true), 3500);
      return () => clearTimeout(timer);
    }
  }, [isDecrypted]);

  const handleKeyPress = (key: string) => {
    if (key === 'clear') {
      setPasscode('');
      setError('');
      return;
    }

    if (passcode.length < MAX_LENGTH) {
      const newPasscode = passcode + key;
      setPasscode(newPasscode);
      setError('');

      // Auto-submit when length reaches MAX_LENGTH
      if (newPasscode.length === MAX_LENGTH) {
        if (newPasscode === CORRECT_PASSCODE) {
          setIsDecrypted(true);
          setIsVisible(false);
        } else {
          setError('Invalid passcode');
          setTimeout(() => setPasscode(''), 300);
        }
      }
    }
  };

  if (!isVisible || isDecrypted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 decryption-popup">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
      
      <div className="relative bg-black/90 p-8 rounded-lg border border-purple-500/30 
        max-w-md w-full shadow-[0_0_50px_rgba(168,85,247,0.2)] decrypt-modal">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Lock className="w-16 h-16 text-purple-500 decrypt-icon" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 unlock-icon">
              <Unlock className="w-16 h-16 text-purple-500" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-3">Encrypted Gallery</h2>
        <p className="text-gray-400 text-center mb-8">
          Enter the 4-digit passcode to decrypt and view the gallery
        </p>

        <PasscodeDisplay passcode={passcode} maxLength={MAX_LENGTH} />
        
        <Keypad onKeyPress={handleKeyPress} />

        {error && (
          <p className="text-red-500 text-sm text-center mt-4 decrypt-error">
            {error}
          </p>
        )}

        <p className="mt-8 text-sm text-gray-500 text-center">
          You can still navigate to other pages while the gallery remains encrypted
        </p>
      </div>
    </div>
  );
}