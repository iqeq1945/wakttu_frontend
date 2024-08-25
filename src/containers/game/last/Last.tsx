import { Last as CLast } from '@/components';
import { selectAnswer, setAnswer, setPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { setTurn } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Last = () => {
  const roomId = useSelector(selectRoomId);
  const name = useSelector(selectUserName);
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);

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
        if (name === game.host) socket.emit('pong', roomId);
        setHistory((prev) => [...prev, word]);
        dispatch(setPause(false));
        setTimeout(() => {
          dispatch(
            setTurn({ roundTime: game.roundTime, turnTime: game.turnTime })
          );
          dispatch(setPause(true));
          if (name === game.host) socket.emit('ping', roomId);
        }, 3000);
      }
    });

    return () => {
      socket.off('last.game');
    };
  }, [dispatch, game.keyword]);

  return (
    <CLast
      history={history}
      game={game}
      answer={answer}
      historyBoxRef={historyBoxRef}
    />
  );
};

export default Last;
