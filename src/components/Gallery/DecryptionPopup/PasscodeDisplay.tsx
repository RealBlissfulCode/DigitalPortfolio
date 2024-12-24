import React from 'react';

interface PasscodeDisplayProps {
  passcode: string;
  maxLength: number;
}

export default function PasscodeDisplay({ passcode, maxLength }: PasscodeDisplayProps) {
  return (
    <div className="flex justify-center gap-3 mb-8">
      {Array.from({ length: maxLength }).map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full transition-all duration-300
            ${passcode[index] ? 'bg-purple-500 scale-110' : 'bg-purple-500/20'}`}
        />
      ))}
    </div>
  );
}