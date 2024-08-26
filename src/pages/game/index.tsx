import { Container } from '@/styles/last/Layout';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';
import Last from '@/containers/game/last/Last';
import { useDispatch, useSelector } from 'react-redux';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { socket } from '@/services/socket/socket';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { useEffect, useRef, useState } from 'react';
import { clearAnswer, setPause } from '@/redux/answer/answerSlice';
import { setTimer, tick } from '@/redux/timer/timerSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { useRouter } from 'next/router';

const Game = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setPause(false));
      dispatch(setGame(data));

      console.log('round loading start');
      setTimeout(() => {
        console.log('round loading end');
        dispatch(
          setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
        );
        dispatch(setPause(true));
        if (game.host === user.name) socket.emit('ping', roomInfo.id);
      }, 3000);
    });

    return () => {
      socket.off('last.round');
    };
  }, [dispatch]);

  useEffect(() => {
    socket.on('ping', () => {
      dispatch(tick());
    });

    return () => {
      socket.off('ping');
    };
  }, [dispatch]);

  useEffect(() => {
    socket.on('last.result', (data) => {
      dispatch(clearAnswer());
      console.log('result:', data);
    });

    socket.on('last.end', async (data) => {
      console.log('end :', data);
      const { game, roomInfo } = data;
      await router.push('/room');
      await dispatch(setRoomInfo(roomInfo));
      await dispatch(setGame(game));
    });

    return () => {
      socket.off('last.result');
      socket.off('last.end');
    };
  });

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
