import { useState, useEffect } from 'react';
import { photos } from '../data/photos';
import { shuffleArray } from '../utils/shuffleArray';

export function useRandomPhotos() {
  const [randomizedPhotos, setRandomizedPhotos] = useState<string[]>([]);
  
  useEffect(() => {
    setRandomizedPhotos(shuffleArray(photos));
  }, []);

  return randomizedPhotos;
}