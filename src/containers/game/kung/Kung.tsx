import { Kung as CKung } from '@/components';
import { selectPause } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectHistory } from '@/redux/history/historySlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Kung = () => {
  const game = useSelector(selectGame);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);
  const history = useSelector(selectHistory);
  const [keyword, setKeyword] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (game.keyword) {
      const arr = game.keyword._id.split('');
      setKeyword(arr);
    }
  }, [game.keyword]);

  useEffect(() => {
    setUser(game.users[game.turn]);
  }, [game.turn, game.users]);

  return (
    <CKung
      game={game}
      keyword={keyword}
      timer={timer}
      pause={pause}
      user={user}
      history={history}
    />
  );
};

export default Kung;
