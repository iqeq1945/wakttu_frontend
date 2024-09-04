import { Bubble } from '@/styles/last/PlayList';
import { useEffect, useState } from 'react';

interface Props {
  chat: string;
}
const BubbleBox = ({ chat }: Props) => {
  const [data, setData] = useState('');
  useEffect(() => {
    setData(chat);
    console.log('check');
  }, [chat]);

  return <>{data !== '' ? <Bubble key={data}>{data}</Bubble> : ''}</>;
};

export default BubbleBox;
