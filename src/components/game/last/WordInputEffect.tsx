import React, { useEffect, useState } from 'react';
import wordStyle from '@/styles/modules/gameEffect/wordInputEffect.module.css';

interface Props {
  word: string;
}

/** 단어 출력 이펙트
* @param word 입력된 단어
*/
const WordInputEffect: React.FC<Props> = ({ word }) => {
  const [displayWord, setDisplayWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const wordLength = word.length;
    const typingInterval = setInterval(() => {
      if (count < wordLength) {
        setDisplayWord(prev => prev + word[count]);
        setCount(count => count + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 500 / wordLength);

    return () => {
      clearInterval(typingInterval);
    };
  }, [word, count]);

  return (
    <div>
      <div className={wordStyle.typingContainer}>
        {displayWord.split('').map((char, index) => (
          <span key={index} className={index < count ? wordStyle.typingAnimation : wordStyle.typingNone}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default WordInputEffect;
