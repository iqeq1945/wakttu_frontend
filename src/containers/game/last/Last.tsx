import { Last as CLast } from '@/components';
import { setAnswer, setPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Last = () => {
  const game = useSelector(selectGame);
  const [history, setHistory] = useState<any[]>([
    {
      id: game.keyword._id,
      ...game.keyword,
    },
  ]);
  const dispatch = useDispatch();
  const historyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on('last.game', (data) => {
      const { success, answer, game, message, word } = data;
      dispatch(setGame(game));
      dispatch(
        setAnswer({
          success,
          answer,
          message,
          pause: false,
        })
      );
      if (success) setHistory((prev) => [...prev, word]);
      dispatch(setPause(true));
    });

    return () => {
      socket.off('last.round');
      socket.off('last.game');
    };
  }, [dispatch, game.keyword]);

  return <CLast history={history} game={game} historyBoxRef={historyBoxRef} />;
};

export default Last;
