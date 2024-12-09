import { CBoard } from '@/components';
import { Cloud } from '@/components/game/cloud/Board';
import { selectPause } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const game = useSelector(selectGame);
  const pause = useSelector(selectPause);
  const [data, setData] = useState<Cloud[]>([]);

  useEffect(() => {
    if (game.round > 0 && game.cloud) {
      setData(game.cloud?.slice(20 * (game.round - 1), 20 * game.round));
    }
  }, [game.cloud, game.round]);
  return <CBoard clouds={data} pause={pause} />;
};

export default Board;
