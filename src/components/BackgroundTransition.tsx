import React from 'react';
import ParticleBackground from './ParticleBackground';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function BackgroundTransition() {
  const progress = useScrollProgress();
  const opacity = Math.max(0, 1 - progress * 2); // Fade out in first 50% of scroll

  return (
    <div className="fixed inset-0 z-0 transition-opacity duration-500">
      <div style={{ opacity }}>
        <ParticleBackground />
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"
        style={{ opacity: progress }}
      />
    </div>
  );
}