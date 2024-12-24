import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

interface DesktopToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function DesktopToggle({ isOpen, onToggle }: DesktopToggleProps) {
  return (
    <button
      className={`hidden md:flex fixed top-4 left-4 z-50 items-center gap-2 py-2 px-3 
        bg-black/30 backdrop-blur-sm rounded-lg text-white
        border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300
        ${!isOpen ? 'hover:pl-6' : ''}`}
      onClick={onToggle}
    >
      <Terminal size={16} className="min-w-4" />
      <span className={`transition-all duration-300 overflow-hidden ${!isOpen ? 'w-0' : 'w-auto'}`}>
        Explorer
      </span>
      <ChevronRight 
        size={16} 
        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
}