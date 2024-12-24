import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAutoAdvance } from './hooks/useAutoAdvance';
import { photos } from './data/photos';

export default function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-advance when not hovered
  useAutoAdvance(nextPhoto, !isHovered);

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-lg overflow-hidden
        shadow-[0_0_20px_rgba(168,85,247,0.2)] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current Photo */}
      <div className="absolute inset-0 bg-black">
        <img
          src={photos[currentIndex]}
          alt={`Gallery photo ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousPhoto}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2
          bg-black/50 backdrop-blur-sm rounded-full
          opacity-0 group-hover:opacity-100 transition-opacity
          hover:bg-black/70"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextPhoto}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2
          bg-black/50 backdrop-blur-sm rounded-full
          opacity-0 group-hover:opacity-100 transition-opacity
          hover:bg-black/70"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50">
        <div 
          className="h-full bg-purple-500 transition-all duration-300"
          style={{ width: `${(currentIndex + 1) / photos.length * 100}%` }}
        />
      </div>

      {/* Photo Counter */}
      <div className="absolute top-4 right-4 px-3 py-1 
        bg-black/50 backdrop-blur-sm rounded-full
        text-sm font-mono">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}