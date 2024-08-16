import React, { useEffect, useState } from 'react'
import wordStyle from '@/styles/modules/gameEffect/wordInputEffect.module.css';

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
  }, [word])

  return (
    <div className={wordStyle.typingWrong}>{wrongWord}</div>
  )
}

export default WordErrorEffect;