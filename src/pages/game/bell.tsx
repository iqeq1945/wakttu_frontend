import Game from '@/containers/game/bell/Bell';
import Chat from '@/containers/game/bell/Chat';
import Header from '@/containers/game/bell/Header';
import PlayerList from '@/containers/game/bell/PlayerList';
import {
  clearAnswer,
  selectPause,
  setAnswer,
  setFail,
  setPause,
} from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { clearHistory } from '@/redux/history/historySlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { clearResult, selectResult } from '@/redux/result/resultSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import {
  clearCountTime,
  clearTimer,
  selectTimer,
  setTimer,
  tick,
} from '@/redux/timer/timerSlice';
import { selectUserInfo, setUserInfo } from '@/redux/user/userSlice';
import { client, updatePlayCount, updateResult } from '@/services/api';

import {
  bellRound,
  bellRoundEnd,
  bellRoundStart,
  socket,
} from '@/services/socket/socket';
import { Container } from '@/styles/bell/Layout';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Bell = () => {
  const user = useSelector(selectUserInfo);
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();
  const timer = useSelector(selectTimer);
  const router = useRouter();
  const result = useSelector(selectResult);

  const pause = useSelector(selectPause);

  useEffect(() => {
    const opening = setTimeout(() => {
      if (game.host === user.id) {
        console.log('opening');
        bellRound(roomInfo.id as string);
      }
    }, 2000);

    return () => {
      clearTimeout(opening);
    };
  }, [roomInfo.id, user.id]);

  useEffect(() => {
    socket.on('bell.round', (data) => {
      dispatch(setGame(data));
      dispatch(clearAnswer());
      setTimeout(() => {
        dispatch(setTimer({ roundTime: 30000, turnTime: 30000 }));
        if (game.host === user.id) bellRoundStart(roomInfo.id as string);
      }, 2000);
    });
    return () => {
      socket.off('bell.round');
    };
  }, [dispatch, game.host, roomInfo.id, user.id]);

  useEffect(() => {
    socket.on('bell.roundStart', () => {
      if (game.host === user.id) socket.emit('bell.ping', roomInfo.id);
      dispatch(setPause(true));
    });

    socket.on('bell.roundEnd', (data) => {
      dispatch(setGame(data));

      if (game.host === user.id)
        setTimeout(() => bellRound(roomInfo.id as string), 3000);
    });

    return () => {
      socket.off('bell.roundStart');
      socket.off('bell.roundEnd');
    };
  }, [dispatch, game.host, roomInfo.id, user.id]);

  useEffect(() => {
    socket.on('bell.game', (data) => {
      dispatch(setGame(data));
    });

    return () => {
      socket.off('bell.game');
    };
  }, [dispatch, game]);

  useEffect(() => {
    socket.on('bell.ping', () => {
      dispatch(tick());
    });

    socket.on('bell.pong', async () => {
      if (game.host === user.id) await bellRoundEnd(roomInfo.id!);
      dispatch(
        setAnswer({
          success: true,
          pause: false,
          answer: game.target,
          word: undefined,
        })
      );
    });

    return () => {
      socket.off('bell.ping');
      socket.off('bell.pong');
    };
  });

  useEffect(() => {
    socket.on('bell.result', async (data) => {
      if (user.provider === 'waktaverse.games') {
        await updatePlayCount(game.type);
        await updateResult(result);
      }
      dispatch(clearResult());
      dispatch(clearAnswer());
      dispatch(clearTimer());
      dispatch(clearHistory());

      dispatch(setDataModal(data));
      dispatch(openModal('RESULT'));
    });

    socket.on('bell.end', async (data) => {
      const { game, roomInfo } = data;
      const response = await client.get(`/user/${user.id}`);
      if (response) await dispatch(setUserInfo(response.data));

      await router.push('/room');
      await dispatch(setRoomInfo(roomInfo));
      await dispatch(setGame(game));
    });

    return () => {
      socket.off('bell.result');
      socket.off('bell.end');
    };
  }, [dispatch, game.type, router, user.id, user.provider]);

  useEffect(() => {
    socket.on('exit', (data) => {
      const { roomInfo, game } = data;
      dispatch(setRoomInfo(roomInfo));
      dispatch(setGame(game));
      if (roomInfo.users.length === 1) router.push('/room');
    });

    return () => {
      socket.off('exit');
    };
  }, [dispatch, router]);
  return (
    <Container>
      <Header />
      <Game />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Bell;
