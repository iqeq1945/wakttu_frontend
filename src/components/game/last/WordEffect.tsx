import { TypingContainer, TypingSpan } from '@/styles/game/wordEffect';
import React, { useEffect, useState } from 'react';

interface Props {
  word: string;
}

const WordEffect: React.FC<Props> = ({ word }) => {
  const [displayWord, setDisplayWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setDisplayWord('');
    setCount(0);
  }, [word]);

  useEffect(() => {
    const wordLength = word.length;
    const typingInterval = setInterval(() => {
      if (count < wordLength) {
        setDisplayWord((prev) => prev + word[count]);
        setCount((count) => count + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 500 / wordLength);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count, word]);

  return (
    <TypingContainer>
      {displayWord.split('').map((char, index) => (
        <TypingSpan key={index} isTyped={index < count}>
          {char}
        </TypingSpan>
      ))}
    </TypingContainer>
  );
};

export default WordEffect;
