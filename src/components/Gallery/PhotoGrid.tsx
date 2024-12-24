import React, { useState, useCallback } from 'react';
import { useInfinitePhotos } from './hooks/useInfinitePhotos';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function PhotoGrid() {
  const { photoSets, loadMorePhotos } = useInfinitePhotos();
  const [visiblePhotos, setVisiblePhotos] = useState<string[]>([]);
  
  const loadMoreRef = useIntersectionObserver(loadMorePhotos);

  const handlePhotoInView = useCallback((photo: string) => {
    // Delay adding photos to create a staggered effect
    setTimeout(() => {
      setVisiblePhotos(prev => [...prev, photo]);
    }, Math.random() * 500); // Random delay up to 500ms

    // Remove photo from visible list after animation
    setTimeout(() => {
      setVisiblePhotos(prev => prev.filter(p => p !== photo));
    }, 3500); // Increased from 2000ms to 3500ms
  }, []);

  return (
    <div className="space-y-8">
      {photoSets.map((photoSet, setIndex) => (
        <div
          key={setIndex}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {photoSet.map((photo, index) => (
            <PhotoCard
              key={`${setIndex}-${index}-${photo}`}
              photo={photo}
              onInView={handlePhotoInView}
              isVisible={visiblePhotos.includes(photo)}
            />
          ))}
        </div>
      ))}
      
      <div ref={loadMoreRef} className="h-4 w-full" aria-hidden="true" />
    </div>
  );
}

interface PhotoCardProps {
  photo: string;
  onInView: (photo: string) => void;
  isVisible: boolean;
}

function PhotoCard({ photo, onInView, isVisible }: PhotoCardProps) {
  const cardRef = useIntersectionObserver(
    () => onInView(photo),
    { threshold: 0.3 } // Reduced threshold to start loading earlier
  );

  return (
    <div
      ref={cardRef}
      className="aspect-square relative overflow-hidden rounded-lg
        bg-black/30 backdrop-blur-sm border border-purple-500/20
        transform transition-transform duration-500 hover:scale-105"
    >
      <img
        src={photo}
        alt="Gallery photo"
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 scale-100 blur-0' 
            : 'opacity-0 scale-105 blur-sm'}`}
      />
      
      {/* Loading overlay */}
      <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm
        transition-opacity duration-1000 ease-out
        ${isVisible ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}