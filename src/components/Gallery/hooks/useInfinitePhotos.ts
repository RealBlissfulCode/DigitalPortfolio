import { useState, useCallback } from 'react';
import { photos } from '../data/photos';
import { shuffleArray } from '../utils/shuffleArray';

export function useInfinitePhotos(batchSize: number = 12) {
  const [photoSets, setPhotoSets] = useState<string[][]>([shuffleArray([...photos])]);
  
  const loadMorePhotos = useCallback(() => {
    setPhotoSets(prev => [...prev, shuffleArray([...photos])]);
  }, []);

  return {
    photoSets,
    loadMorePhotos
  };
}