import Game from '@/containers/game/bell/Bell';
import Chat from '@/containers/game/bell/Chat';
import Header from '@/containers/game/bell/Header';
import PlayerList from '@/containers/game/bell/PlayerList';
import useSound from '@/hooks/useSound';
import { setAchieve } from '@/redux/achieve/achieveSlice';
import {
  clearAnswer,
  selectPause,
  setAnswer,
  setPause,
} from '@/redux/answer/answerSlice';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { clearHistory } from '@/redux/history/historySlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { clearResult, selectResult } from '@/redux/result/resultSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import {
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
  const router = useRouter();
  const result = useSelector(selectResult);
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound(
    '/assets/bgm/lossy/ui_in-game-b.webm',
    bgmVolume,
    0,
    true
  );

  const onBgm = useCallback(() => {
    if (sound) {
      sound.play();
    }
  }, [sound]);

  useEffect(() => {
    onBgm();
  }, [onBgm]);

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
      dispatch(clearResult());
      dispatch(clearAnswer());
      dispatch(clearTimer());
      dispatch(clearHistory());

      dispatch(setDataModal(data));
      dispatch(openModal('RESULT'));

      if (user.provider === 'waktaverse.games') {
        let achieve: any[] = [];
        const ach_1 = await updatePlayCount(game.type);
        const ach_2 = await updateResult(result);
        if (ach_1) achieve = [...achieve, ...ach_1];
        if (ach_2) achieve = [...achieve, ...ach_2];
        await dispatch(setAchieve(achieve));
      }
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
  }, [dispatch, game.type, result, router, user.id, user.provider]);

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
