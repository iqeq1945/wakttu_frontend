import { Last as CLast } from '@/components';
import {
  failAnswer,
  selectAnswer,
  setAnswer,
  setPause,
} from '@/redux/answer/answerSlice';
import { selectGame, selectWhoisTurn, setGame } from '@/redux/game/gameSlice';
import {
  clearHistory,
  selectHistory,
  setHistory,
} from '@/redux/history/historySlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { setTurn } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { socket } from '@/services/socket/socket';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Last = () => {
  const roomId = useSelector(selectRoomId);
  const name = useSelector(selectUserName);
  const whoIsTurn = useSelector(selectWhoisTurn);
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const history = useSelector(selectHistory);

  const dispatch = useDispatch();
  const historyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on('last.game', (data) => {
      const { success, answer, game, message, word } = data;
      dispatch(
        setAnswer({
          success,
          answer,
          message,
          pause: !success,
          word: word,
        })
      );
      dispatch(setGame(game));
      if (success) {
        if (name === game.host) socket.emit('pong', roomId);
        dispatch(setHistory(word));
        setTimeout(() => {
          dispatch(
            setTurn({ roundTime: game.roundTime, turnTime: game.turnTime })
          );
          if (name === game.host) socket.emit('ping', roomId);
        }, 5000);
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
      name={whoIsTurn}
      answer={answer}
      historyBoxRef={historyBoxRef}
    />
  );
};

export default Last;
