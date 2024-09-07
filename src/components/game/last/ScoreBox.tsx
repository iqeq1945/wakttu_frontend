import { useEffect, useRef, useState } from 'react';

interface Props {
  score: number;
  onScoreDifference?: (difference: number) => void;
}

const Score = ({ score, onScoreDifference }: Props) => {
  const [data, setData] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  const prevScoreRef = useRef<number>(score);

  useEffect(() => {
    const prevScore = prevScoreRef.current;
    const scoreDifference = score - prevScore;

    if (onScoreDifference) {
      onScoreDifference(scoreDifference);
    }
    prevScoreRef.current = score;

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
  }, [data, score, onScoreDifference]);

  return <>{data}</>;
};

export default Score;
