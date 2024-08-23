import { Container } from '@/styles/last/Layout';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';
import Last from '@/containers/game/last/Last';
import { useDispatch, useSelector } from 'react-redux';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { socket } from '@/services/socket/socket';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { useEffect, useRef, useState } from 'react';
import { setPause } from '@/redux/answer/answerSlice';
import {
  selectTimer,
  setTimer,
  setTimerId,
  setTurn,
  tick,
} from '@/redux/timer/timerSlice';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;
  const timer = useSelector(selectTimer);

  if (timer.countTime === timer.turnTime) clearInterval(timer.timerId);

  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setGame(data));
      dispatch(setPause(true));
      dispatch(setTimer(game.roundTime));
      const timeId = setInterval(() => {
        dispatch(tick());
      }, 100);
      dispatch(setTimerId(timeId));
    });

    return () => {
      socket.off('last.round');
    };
  }, [dispatch, game.roundTime, roomId, timer.timerId]);

  useEffect(() => {
    socket.on('last.game', (data) => {
      const { success } = data;
      if (success) {
        clearInterval(timer.timerId);
        dispatch(setTurn());
        const timeId = setInterval(() => {
          dispatch(tick());
        }, 100);
        dispatch(setTimerId(timeId));
      }
    });

    return () => {
      socket.off('last.game');
    };
  }, [dispatch, timer.timerId]);

  return (
    <Container>
      <Header />
      <Info />
      <Last />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
