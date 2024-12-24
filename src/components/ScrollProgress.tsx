import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 w-1 h-48 bg-white/10 rounded-full z-50">
      <div 
        className="w-full bg-purple-500 rounded-full transition-all duration-300"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}