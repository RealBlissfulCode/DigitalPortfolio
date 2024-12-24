import React, { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

interface CipherTextProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function CipherText({ text, duration = 2000, className = '' }: CipherTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const endTime = Date.now() + duration;
    const interval = 50; // Time between each character change
    const iterations = Math.floor(duration / interval);
    let currentIteration = 0;

    const timer = setInterval(() => {
      const progress = currentIteration / iterations;
      let result = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' ';
          continue;
        }

        // Determine if this character should be final based on progress
        const shouldBeFinal = Math.random() < progress;

        if (shouldBeFinal) {
          result += text[i];
        } else {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          result += randomChar;
        }
      }

      setDisplayText(result);
      currentIteration++;

      if (Date.now() >= endTime) {
        setDisplayText(text);
        setIsAnimating(false);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [text, duration, isAnimating]);

  return <span className={className}>{displayText}</span>;
}