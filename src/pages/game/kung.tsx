import Chat from '@/containers/game/kung/Chat';
import Header from '@/containers/game/kung/Header';
import Kung from '@/containers/game/kung/Kung';
import PlayerList from '@/containers/game/kung/PlayerList';
import { Container } from '@/styles/kung/Layout';
import { kungRound, kungTurnStart, socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory, setHistory } from '@/redux/history/historySlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { setTimer, setTurn } from '@/redux/timer/timerSlice';
import { clearSuccess, setAnswer, setPause } from '@/redux/answer/answerSlice';
import { selectUserInfo, selectUserName } from '@/redux/user/userSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const user = useSelector(selectUserInfo);
  const roomInfo = useSelector(selectRoomInfo);
  const name = useSelector(selectUserName);

  /**
   * Round 변할때마다 History Clear
   */
  useEffect(() => {
    dispatch(clearHistory());
  }, [game.round, dispatch]);

  /**
   * Round Logic
   */
  useEffect(() => {
    socket.on('kung.round', (data) => {
      dispatch(setGame(data));
      setTimeout(() => {
        setTimeout(() =>
          dispatch(
            setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
          )
        );
        setTimeout(() => dispatch(setPause(true)));
        if (game.host === user.name) kungTurnStart(roomInfo.id as string);
      }, 4000);
    });

    return () => {
      socket.off('kung.round');
    };
  }, [dispatch, game.host, roomInfo.id, user.name]);

  /**
   * Turn Logick
   */

  useEffect(() => {
    socket.on('kung.turnStart', () => {
      if (game.host === user.name) socket.emit('ping', roomInfo.id);
    });

    socket.on('kung.turnEnd', () => {
      if (game.host === user.name)
        setTimeout(() => kungRound(roomInfo.id as string), 4000);
    });

    return () => {
      socket.off('kung.turnStart');
      socket.off('kung.turnEnd');
    };
  }, [game.host, roomInfo.id, user.name]);

  /**
   * turn game Logic
   */

  useEffect(() => {
    socket.on('kung.game', (data) => {
      const { success, answer, game, message, word } = data;
      setTimeout(() =>
        dispatch(
          setAnswer({
            success,
            answer,
            message,
            pause: !success,
            word: word,
          })
        )
      );
      setTimeout(() => {
        dispatch(setGame(game));
      });

      if (success) {
        if (name === game.host) socket.emit('pong', roomInfo.id);
        dispatch(setHistory(word));
        setTimeout(() => {
          setTimeout(() =>
            dispatch(
              setTurn({ roundTime: game.roundTime, turnTime: game.turnTime })
            )
          );
          setTimeout(() => {
            dispatch(setPause(true));
          });
          if (name === game.host) kungTurnStart(roomInfo.id as string);
        }, 2200);
      }
      setTimeout(() => {
        dispatch(clearSuccess());
      }, 2200);
    });
  }, [dispatch, name, roomInfo.id]);

  return (
    <Container>
      <Header />
      <Kung />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
