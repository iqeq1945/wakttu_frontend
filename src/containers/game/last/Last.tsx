import { Last as CLast } from '@/components';
import {
  clearAnswer,
  selectAnswer,
  setAnswer,
  setPause,
} from '@/redux/answer/answerSlice';
import { selectGame, selectWhoisTurn, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { setTurn } from '@/redux/timer/timerSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Last = () => {
  const roomId = useSelector(selectRoomId);
  const name = useSelector(selectWhoisTurn);
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);

  const [history, setHistory] = useState<
    { id: string; mean: string; type: string; [x: string]: any }[]
  >([{ id: '', mean: '', type: '' }]);

  const dispatch = useDispatch();
  const historyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      {
        id: game.keyword!._id,
        ...game.keyword,
        mean: game.keyword!.mean,
        type: game.keyword!.type,
      },
    ]);
  }, []);

  useEffect(() => {
    socket.on('last.game', (data) => {
      const { success, answer, game, message, word } = data;
      dispatch(setGame(game));
      dispatch(
        setAnswer({
          success,
          answer,
          message,
          pause: !success,
          word: word,
        })
      );
      setTimeout(() => {
        dispatch(clearAnswer());
      }, 2200);
      if (success) {
        if (name === game.host) socket.emit('pong', roomId);
        setHistory((prev) => [...prev, word]);
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
  }, [dispatch, game.keyword, name, roomId]);

  return (
    <CLast
      history={history}
      game={game}
      name={name}
      answer={answer}
      historyBoxRef={historyBoxRef}
    />
  );
};

export default Last;
