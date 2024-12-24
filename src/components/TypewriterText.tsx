import React, { useReducer, useEffect } from 'react';

interface TypewriterState {
  displayText: string;
  currentIndex: number;
  isDeleting: boolean;
  isWaiting: boolean;
  texts: string[];
}

type TypewriterAction =
  | { type: 'TYPE' }
  | { type: 'DELETE' }
  | { type: 'START_DELETE' }
  | { type: 'SWITCH_TEXT' };

interface TypewriterTextProps {
  texts: string[];
}

function typewriterReducer(state: TypewriterState, action: TypewriterAction): TypewriterState {
  const currentText = state.texts[state.currentIndex];

  switch (action.type) {
    case 'TYPE':
      if (state.isWaiting) return state;
      if (state.displayText.length < currentText.length) {
        return {
          ...state,
          displayText: currentText.slice(0, state.displayText.length + 1)
        };
      }
      return { ...state, isWaiting: true };

    case 'START_DELETE':
      return { ...state, isDeleting: true, isWaiting: false };

    case 'DELETE':
      if (state.displayText.length > 0) {
        return {
          ...state,
          displayText: state.displayText.slice(0, -1)
        };
      }
      return {
        ...state,
        isDeleting: false,
        currentIndex: (state.currentIndex + 1) % state.texts.length
      };

    default:
      return state;
  }
}

export default function TypewriterText({ texts }: TypewriterTextProps) {
  const [state, dispatch] = useReducer(typewriterReducer, {
    displayText: '',
    currentIndex: 0,
    isDeleting: false,
    isWaiting: false,
    texts
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (state.isWaiting) {
      timer = setTimeout(() => {
        dispatch({ type: 'START_DELETE' });
      }, 2000);
    } else if (state.isDeleting) {
      timer = setTimeout(() => {
        dispatch({ type: 'DELETE' });
      }, 50);
    } else {
      timer = setTimeout(() => {
        dispatch({ type: 'TYPE' });
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <span className="animate-[revealRight_0.5s_ease-out_0.7s_forwards] translate-x-[-100%] opacity-0">
      {state.displayText}<span className="cursor">|</span>
    </span>
  );
}