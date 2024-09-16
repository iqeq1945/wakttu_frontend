import { Kung as CKung } from '@/components';
import { selectAnswer, selectPause } from '@/redux/answer/answerSlice';
import { selectGame, selectWhoisTurn } from '@/redux/game/gameSlice';
import { selectHistory } from '@/redux/history/historySlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Kung = () => {
  const game = useSelector(selectGame);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);
  const history = useSelector(selectHistory);
  const answer = useSelector(selectAnswer);
  const [keyword, setKeyword] = useState([]);
  const whoIsTurn = useSelector(selectWhoisTurn);
  useEffect(() => {
    if (game.keyword) {
      const arr = game.keyword._id.split('');
      setKeyword(arr);
    }
  }, [game.keyword]);

  return (
    <CKung
      game={game}
      keyword={keyword}
      timer={timer}
      pause={pause}
      answer={answer}
      name={whoIsTurn}
      history={history}
    />
  );
};

export default Kung;
