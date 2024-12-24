import React, { useRef } from 'react';
import { useParticleSystem } from './useParticleSystem';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleSystem(canvasRef);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-black"
    />
  );
}