import { Last as CLast } from '@/components';
import { setAnswer, setPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '@/modules/Time';

interface Props {
  timer: Timer;
}

const Last = ({ timer }: Props) => {
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
      if (success) {
        setHistory((prev) => [...prev, word]);
        timer.stop();
      } else {
        timer.resume();
      }
      dispatch(setPause(true));
    });

    return () => {
      socket.off('last.game');
    };
  }, [dispatch, game.keyword, timer]);

  return <CLast history={history} game={game} historyBoxRef={historyBoxRef} />;
};

export default Last;
