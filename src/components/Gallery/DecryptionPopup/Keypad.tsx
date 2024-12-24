import React from 'react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

export default function Keypad({ onKeyPress }: KeypadProps) {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'clear'];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-xs mx-auto">
      {keys.map((key, index) => (
        <button
          key={index}
          onClick={() => onKeyPress(key)}
          disabled={key === ''}
          className={`aspect-square rounded-lg text-2xl font-bold
            ${key === 'clear' 
              ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400'
              : key 
                ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400'
                : 'bg-transparent cursor-default'}
            transition-colors backdrop-blur-sm
            disabled:cursor-default disabled:opacity-0
            active:scale-95 transform duration-100`}
        >
          {key === 'clear' ? '×' : key}
        </button>
      ))}
    </div>
  );
}