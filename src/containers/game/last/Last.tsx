import { Last as CLast } from '@/components';
import { setAnswer } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Last = () => {
  const [history, setHistory] = useState<any[]>([]);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('last.round', (data) => {
      setHistory([game.keyword]);
    });
    socket.on('last.game', (data) => {
      const { success, answer, game, message, history } = data;
      console.log(success, answer, game, message, history);
      dispatch(setGame(game));
      dispatch(
        setAnswer({
          success,
          answer,
          message,
          pause: !success,
        })
      );
      setHistory((prev) => [...prev, history]);
    });

    return () => {
      socket.off('last.round');
      socket.off('last.game');
    };
  }, [dispatch, game.keyword]);

  return <CLast history={history} />;
};
