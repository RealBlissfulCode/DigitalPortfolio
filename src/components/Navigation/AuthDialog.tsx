import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { unlockExtras } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ComingSoon') {
      unlockExtras();
      onClose();
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-black/90 p-6 rounded-lg border border-purple-500/30 
        max-w-md w-full shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white
            transition-colors duration-200"
        >
          <X size={20} />
        </button>

        <div className="flex items-center justify-center mb-6">
          <Lock className="w-12 h-12 text-purple-500" />
        </div>

        <h2 className="text-xl font-bold text-center mb-2">Authentication Required</h2>
        <p className="text-gray-400 text-center mb-6">
          Enter the password to access the Extras folder
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-2 bg-black/50 text-white rounded-lg
              border border-purple-500/20 focus:border-purple-500/50
              focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
            placeholder="Enter password"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg
              hover:bg-purple-700 transition-colors duration-200"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}