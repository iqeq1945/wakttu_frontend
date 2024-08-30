import React, { useEffect, useState } from 'react';
import { TypingWrong } from '@/styles/game/wordEffect';

interface Props {
  word: string;
}

/** 잘못된 단어 출력 이펙트
 * @param word 입력된 단어
 */
const WordErrorEffect: React.FC<Props> = ({ word }) => {
  const [wrongWord, setWrongWord] = useState<string>('');

  useEffect(() => {
    setWrongWord(word);
    setTimeout(() => {
      setWrongWord('');
    }, 2000);
  }, [word]);

  return <TypingWrong>{wrongWord}</TypingWrong>;
};

export default WordErrorEffect;
