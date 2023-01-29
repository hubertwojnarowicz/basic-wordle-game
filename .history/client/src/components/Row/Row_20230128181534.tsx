import React from 'react';
import { range } from '../../utils/range';
import Cell from '../Cell';

function Row({
  currentWord,
  correctWord,
}: {
  currentWord: string;
  correctWord: string;
}) {
  const checkGuess = (currentChar: string, correctWord: string) => {
    if (!currentChar) return;
    const chars = currentChar.split('');
    return chars.map((char, idx) => {
      let status;
      if (char === correctWord[idx]) {
        status = 'correct';
      } else if (correctWord.includes(char)) {
        status = 'misplaced';
      } else {
        status = 'incorrect';
      }
      return {
        letter: currentChar,
        status,
      };
    });
  };

  const result = checkGuess(currentChar, correctWord);
  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        return (
          <Cell key={cellIdx} currentChar={currentWord[cellIdx]} />
        );
      })}
    </div>
  );
}

export default Row;
