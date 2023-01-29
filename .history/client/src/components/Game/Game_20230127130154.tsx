import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';

function Game() {
  const [correctWord, setCorrectWord] = React.useState('');
  const [guessedWords, setGuessedWords] = React.useState<string[]>([
    'hello',
    'h',
    '',
    '',
    '',
    '',
    '',
  ]);

  const generateCorrectWord = async () => {
    const response = await fetch('http://localhost:5000/api');
    const words = await response.json();
    setCorrectWord(words[Math.floor(Math.random() * words.length)]);
  };

  function bla(ev: React.MouseEvent<HTMLElement, MouseEvent>) {
    console.log(ev);
  }
  React.useEffect(() => {
    window.addEventListener('click', bla);
  }, []);
  console.log(correctWord);
  return (
    <main className="flex items-center justify-center ">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10">
        {guessedWords.map((row, rowIdx) => {
          const singleWord = row.split('');
          return (
            <Row key={rowIdx}>
              {range(5).map((cellIdx) => (
                <Cell
                  key={cellIdx}
                  singleWord={singleWord[cellIdx]}
                />
              ))}
            </Row>
          );
        })}
      </div>
    </main>
  );
}

export default Game;
