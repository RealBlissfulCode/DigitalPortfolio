import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileToggle({ isOpen, onToggle }: MobileToggleProps) {
  return (
    <button
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white
        border border-purple-500/30 hover:border-purple-500/50 transition-colors"
      onClick={onToggle}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}