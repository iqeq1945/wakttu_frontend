import Game from '@/containers/game/bell/Bell';
import Chat from '@/containers/game/bell/Chat';
import Header from '@/containers/game/bell/Header';
import PlayerList from '@/containers/game/bell/PlayerList';
import { clearAnswer, setFail, setPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { clearHistory } from '@/redux/history/historySlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { clearResult } from '@/redux/result/resultSlice';
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
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Bell = () => {
  const user = useSelector(selectUserInfo);
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();
  const timer = useSelector(selectTimer);
  const router = useRouter();

  const setRoundEnd = useCallback(() => {
    if (timer.countTime === 30000) {
      if (game.host === user.id) bellRoundEnd(roomInfo.id as string);
      dispatch(clearCountTime());
    }
  }, [dispatch, game.host, roomInfo.id, timer.countTime, user.id]);

  useEffect(() => {
    setRoundEnd();
  }, [setRoundEnd]);

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
      if (game.host === user.id)
        setTimeout(() => bellRound(roomInfo.id as string), 3000);
      dispatch(setGame(data));
      dispatch(setPause(false));
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
  }, [dispatch]);

  useEffect(() => {
    socket.on('bell.ping', () => {
      dispatch(tick());
    });

    return () => {
      socket.off('bell.ping');
    };
  });

  useEffect(() => {
    socket.on('bell.result', async (data) => {
      /*if (user.provider === 'waktaverse.games') {
        await updatePlayCount(game.type);
        await updateResult(result);
      }*/
      dispatch(clearResult());
      dispatch(clearAnswer());
      dispatch(clearTimer());
      dispatch(clearHistory());
      console.log(data);
      //dispatch(setDataModal(data));
      // dispatch(openModal('RESULT'));
    });

    socket.on('bell.end', async (data) => {
      console.log('end :', data);
      const { game, roomInfo } = data;
      const response = await client.get(`/user/${user.id}`);
      if (response) await dispatch(setUserInfo(response.data));

      await router.push('/room');
      await dispatch(setRoomInfo(roomInfo));
      await dispatch(setGame(game));
    });

    return () => {
      socket.off('last.result');
      socket.off('last.end');
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
