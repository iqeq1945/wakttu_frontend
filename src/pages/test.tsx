import { LastPlayerList, ScoreBox } from '@/components';
import BubbleBox from '@/components/game/last/Bubble';
import useInput from '@/hooks/useInput';
import { getR2URL } from '@/services/api';
import { CName, CPlayer, Name, Score, Skin } from '@/styles/last/PlayList';
import { useState } from 'react';

const Test = () => {
  const { inputs, setInputs, onInputChange } = useInput({ chat: '' });

  const [chat, setChat] = useState('hello');

  return (
    <>
      <CPlayer key={123} $turn={false} $fail={false}>
        <BubbleBox chat={chat} />
        <Skin src={getR2URL('/assets/ipali.png')} />
        <CName>
          <Name>tester</Name>
        </CName>
        <Score>
          <ScoreBox score={100} />
        </Score>
      </CPlayer>
    </>
  );
};

export default Test;
