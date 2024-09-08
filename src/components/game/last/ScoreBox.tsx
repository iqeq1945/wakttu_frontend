import { PlusScore } from '@/styles/last/PlayList';
import { useEffect, useRef, useState } from 'react';

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  const [data, setData] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    let count = score - data;
    if (count === 0) return;

    ref.current = setInterval(() => {
      if (count <= 0) clearInterval(ref.current);
      setData((prev) => prev + 1);
      count -= 1;
    }, 30);

    return () => {
      clearInterval(ref.current);
    };
  }, [data, score]);

  useEffect(() => {
    const count = score - data;
    setDifference(count);
  }, [score]);

  return (
    <>
      {data}
      {difference > 0 ? <PlusScore key={data}>+{difference}</PlusScore> : ''}
    </>
  );
};

export default Score;
