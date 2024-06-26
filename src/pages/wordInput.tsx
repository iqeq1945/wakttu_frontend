import React, { useEffect, useRef, useState } from 'react';
import { wordRelay } from '../modules/WordRelay';
import wordStyle from '@/styles/modules/gameEffect/wordEffect.module.css';



/* 끝말잇기 단어 유효성 테스트 */
const WordInput: React.FC = () => {
  const [word, setWord] = useState<string>('감리');
  const [userInput, setUserInput] = useState<string>('');
  const [result, setResult] = useState<{ isValid: boolean; message: string } | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [displayWord, setDisplayWord] = useState<string>(''); // 초기값을 빈 문자열로 설정
  const [count, setCount] = useState<number>(0);
  const typingSpeed = 500;

  useEffect(() => {
    const wordLength = word.length;
    const typingInterval = setInterval(() => {
      if (count < wordLength) {
        setDisplayWord(prev => {
          const newDisplayWord = prev + word[count];
          return newDisplayWord;
        });
        setCount(count => count + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed / wordLength);

    return () => {
      clearInterval(typingInterval);
    };
  }, [word, count]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = wordRelay(word, userInput);
    setResult(validationResult);
    if (validationResult.isValid) {
      setWord(userInput);
      setUserInput('');
      setDisplayWord(''); // 새로운 단어 입력 시 이전 단어 삭제
      setCount(0); // count 초기화
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div style={{ fontSize: '24px', margin: '10px' }}>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" onChange={onChange} value={userInput} />
        <button type="submit">입력</button>
      </form>
      <div className={wordStyle.typingContainer}>
        {word.split('').map((char, index) => (
          <span key={index} className={index < count ? wordStyle.typingAnimation : wordStyle.typingNone}>{char}</span>
        ))}
      </div>

      {/* <div>
        {result && (
          <div>
            {result.isValid ? (
              <span style={{ color: 'green' }}>{result.message}</span>
            ) : (
              <span style={{ color: 'red' }}>{result.message}</span>
            )}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default WordInput;
