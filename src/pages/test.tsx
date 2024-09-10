import WordEffect from '@/components/game/WordEffect';
import useInput from '@/hooks/useInput';
import { CWordC, WordText } from '@/styles/last/Game';
import { useState } from 'react';

const Test = () => {
  const { inputs, setInputs, onInputChange } = useInput({ chat: '' });

  const { chat } = inputs;

  const [word, setWord] = useState('');

  const onClick = () => {
    setWord(chat);
  };

  return (
    <>
      <p>
        <input name="chat" onChange={onInputChange} value={chat} />
        <button onClick={onClick}>버튼</button>
      </p>

      <CWordC>
        <WordText>
          <WordEffect word={word} />
        </WordText>
      </CWordC>
    </>
  );
};

export default Test;
