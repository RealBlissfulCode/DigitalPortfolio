import React from 'react';

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <div className="circuit-pattern absolute inset-0" />
      <div className="circuit-glow" />
    </div>
  );
}