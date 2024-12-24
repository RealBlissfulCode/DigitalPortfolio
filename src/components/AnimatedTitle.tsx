import React from 'react';
import TypewriterText from './TypewriterText';
import CipherText from './CipherText';

export default function AnimatedTitle() {
  return (
    <div className="text-center mb-12 opacity-0 animate-[fadeIn_1s_ease-out_forwards] px-4">
      <div className="inline-block bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          <CipherText text="Jaron Norris" duration={2000} />
        </h1>
        <div className="inline-flex flex-wrap justify-center items-center text-base md:text-lg font-mono text-gray-300">
          <span className="animate-[revealRight_0.5s_ease-out_0.3s_forwards] translate-x-[-100%] opacity-0">
            Manager
          </span>
          <span className="animate-[revealRight_0.5s_ease-out_0.4s_forwards] translate-x-[-100%] opacity-0 text-purple-500 mx-3">
            |
          </span>
          <span className="animate-[revealRight_0.5s_ease-out_0.5s_forwards] translate-x-[-100%] opacity-0">
            Entrepreneur
          </span>
          <span className="animate-[revealRight_0.5s_ease-out_0.6s_forwards] translate-x-[-100%] opacity-0 text-purple-500 mx-3">
            |
          </span>
          <TypewriterText texts={['Software Engineering', 'Cyber Security']} />
        </div>
      </div>
    </div>
  );
}