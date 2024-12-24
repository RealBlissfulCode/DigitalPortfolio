import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export default function AudioControls() {
  const { isPlaying, togglePlay, volume, setVolume } = useAudio();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 p-2 
      bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20">
      <button
        onClick={togglePlay}
        className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
        aria-label={isPlaying ? 'Mute' : 'Unmute'}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-24 accent-purple-500"
      />
    </div>
  );
}