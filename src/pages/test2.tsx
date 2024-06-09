import React, { useEffect, useRef, useState } from 'react';
import { wordRelay } from '../modules/WordRelay';

/* 끝말잇기 단어 유효성 테스트 */
const Test2: React.FC = () => {
  const [word, setWord] = useState<string>('감리');
  const [userInput, setUserInput] = useState<string>('');
  const [result, setResult] = useState<{ isValid: boolean; message: string } | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = wordRelay(word, userInput);
    setResult(validationResult);
    if (validationResult.isValid) {
      setWord(userInput);
      setUserInput('');
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div style={{ fontSize: '24px' }}>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" onChange={onChange} value={userInput} />
        <button type="submit">입력</button>
      </form>
      <div>
        {result && (
          <div>
            {result.isValid ? (
              <span style={{ color: 'green' }}>{result.message}</span>
            ) : (
              <span style={{ color: 'red' }}>{result.message}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test2;
