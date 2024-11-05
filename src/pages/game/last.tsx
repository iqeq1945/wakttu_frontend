import { Container } from '@/styles/last/Layout';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';
import Last from '@/containers/game/last/Last';
import { useDispatch, useSelector } from 'react-redux';
import { clearGame, selectGame, setGame } from '@/redux/game/gameSlice';
import {
  exit,
  lastRound,
  lastTurnEnd,
  lastTurnStart,
  socket,
} from '@/services/socket/socket';
import {
  clearRoomInfo,
  selectRoomInfo,
  setRoomInfo,
} from '@/redux/roomInfo/roomInfoSlice';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  clearAnswer,
  clearSuccess,
  selectPause,
  setAnswer,
  setFail,
  setPause,
} from '@/redux/answer/answerSlice';
import {
  clearTimer,
  selectTimer,
  setTimer,
  setTurn,
  tick,
} from '@/redux/timer/timerSlice';
import {
  selectUserInfo,
  selectUserName,
  setUserInfo,
} from '@/redux/user/userSlice';
import { useRouter } from 'next/router';
import { clearHistory, setHistory } from '@/redux/history/historySlice';
import useSound from '@/hooks/useSound';
import useEffectSound from '@/hooks/useEffectSound';
import useWaktaSound from '@/hooks/useWaktaSound';
import { GetKey } from '@/modules/Voice';
import {
  client,
  updatePlayCount,
  updatePlayCountLocal,
  updateResult,
  updateResultLocal,
} from '@/services/api';
import useAnswerSound from '@/hooks/useAnswerSound';
import { selectVolume } from '@/redux/audio/audioSlice';
import {
  clearResult,
  selectResult,
  setResult,
} from '@/redux/result/resultSlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { setAchieve } from '@/redux/achieve/achieveSlice';

const Game = () => {
  /** Redux and State Part */
  const dispatch = useDispatch();
  const router = useRouter();
  const game = useSelector(selectGame);
  const name = useSelector(selectUserName);
  const roomInfo = useSelector(selectRoomInfo);
  const user = useSelector(selectUserInfo);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);
  const result = useSelector(selectResult);

  const { bgmVolume, effectVolume, voiceVolume } = useSelector(selectVolume);

  const [failUser, setFailuesr] = useState<{ name: string; count: number }>({
    name: '',
    count: 0,
  });

  /**
   * Sound Part
   */
  const sound = useSound(
    '/assets/bgm/lossy/ui_in-game.webm',
    bgmVolume,
    0,
    true
  );
  const fastSound = useSound(
    '/assets/bgm/lossy/ui_in-game_speedup.webm',
    bgmVolume,
    0,
    true
  );

  const startSound = useEffectSound(
    '/assets/sound-effects/lossy/game_start.webm',
    effectVolume
  );

  const wrongSound = useEffectSound(
    '/assets/sound-effects/lossy/game_wrong.webm',
    effectVolume
  );
  const turnEndSound = useEffectSound(
    '/assets/sound-effects/lossy/game_turn_failure.webm',
    effectVolume
  );

  const answerSound = useAnswerSound(effectVolume);

  const waktaSound = useWaktaSound(voiceVolume);

  /** Function Part*/

  // 실패횟수 잠수 특정 함수
  const onFailUser = useCallback(
    (userName?: string) => {
      if (!userName) setFailuesr({ name: '', count: 0 });
      else {
        if (failUser.name === userName)
          setFailuesr({
            ...failUser,
            count: game.chain === 1 ? failUser.count + 1 : 1,
          });
        else {
          setFailuesr({ name: userName, count: 1 });
        }
      }
    },
    [failUser, game.chain]
  );

  // Turn 시작시 BGM 켜는 함수
  const onBgm = useCallback(() => {
    if (game.chain >= 10 || timer.turnTime - timer.countTime <= 10000) {
      if (fastSound && !fastSound.playing()) {
        if (sound && sound.playing()) sound.stop();
        fastSound.play();
      }
    } else if (game.chain < 10 || timer.turnTime - timer.countTime > 10000) {
      if (sound && !sound.playing()) {
        if (fastSound && !fastSound.playing()) fastSound.stop();
        sound.play();
      }
    }
  }, [fastSound, game.chain, sound, timer.countTime, timer.turnTime]);

  const exitGame = useCallback(async () => {
    await router.push('/roomlist');
    await dispatch(clearRoomInfo());
    await dispatch(clearGame());
    exit(roomInfo.id as string);
  }, [dispatch, roomInfo.id, router]);

  const playAnswer = useCallback(
    ({
      id,
      wakta,
      type,
      meta,
    }: {
      id: string;
      wakta: boolean;
      type: string;
      meta?: { [x: string]: any };
    }) => {
      answerSound![id.length < 10 ? id.length - 2 : 9].play();
      if (wakta) {
        const key = GetKey(type, meta);
        setTimeout(() => waktaSound![key].play(), 500);
      }
    },
    [answerSound, waktaSound]
  );

  /** Socekt Logic Part */

  useEffect(() => {
    const handleDisconnect = () => {
      router.replace('/');
    };

    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('disconnect', handleDisconnect);
    };
  }, [router]);

  /* round 종료시 history 없애기*/
  useEffect(() => {
    dispatch(clearHistory());
  }, [dispatch, game.round]);

  /* round logic */
  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setGame(data));

      if (failUser.count === 3) {
        if (name === failUser.name) {
          setTimeout(() => exitGame());
          setFailuesr({ name: '', count: 0 });
        }
      }

      setTimeout(() => {
        startSound?.play();
      });

      setTimeout(() => {
        setTimeout(() =>
          dispatch(
            setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
          )
        );
        setTimeout(() => dispatch(setPause(true)));
        if (game.host === user.id) lastTurnStart(roomInfo.id as string);
      }, 4000);
    });

    return () => {
      socket.off('last.round');
    };
  }, [
    dispatch,
    exitGame,
    failUser.count,
    failUser.name,
    game.host,
    user.id,
    roomInfo.id,
    sound,
    startSound,
    name,
  ]);

  /* turn Logic */
  useEffect(() => {
    socket.on('last.turnStart', () => {
      if (game.host === user.id) socket.emit('ping', roomInfo.id);
      onBgm();
    });

    socket.on('last.turnEnd', (data) => {
      dispatch(setFail());
      setTimeout(() => dispatch(clearSuccess()), 2200);
      dispatch(setGame(data));
      onFailUser(game.users[game.turn].name);
      if (game.host === user.id)
        setTimeout(() => lastRound(roomInfo.id as string), 4000);
      if (sound) sound.stop();
      if (fastSound) fastSound.stop();
      turnEndSound?.play();
    });
    return () => {
      socket.off('last.turnStart');
      socket.off('last.turnEnd');
    };
  }, [
    dispatch,
    fastSound,
    game.host,
    game.turn,
    game.users,
    onBgm,
    onFailUser,
    roomInfo.id,
    sound,
    turnEndSound,
    user.id,
  ]);

  /* turn game logic */
  useEffect(() => {
    socket.on('last.game', (data) => {
      const { success, answer, game, message, word, who } = data;

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
        playAnswer({ ...word, chain: game.chain });
        sound?.pause();
        fastSound?.pause();
        dispatch(setHistory(word));

        // Result 용 데이터
        if (word.wakta && who === user.id) {
          dispatch(setResult({ type: 'WORD', word }));
        }

        setTimeout(() => {
          setTimeout(() =>
            dispatch(
              setTurn({ roundTime: game.roundTime, turnTime: game.turnTime })
            )
          );
          setTimeout(() => {
            dispatch(setPause(true));
          });
          if (user.id === game.host) lastTurnStart(roomInfo.id as string);
        }, 2200);
      } else {
        wrongSound?.play();
      }
      setTimeout(() => {
        dispatch(clearSuccess());
      }, 2200);
    });

    return () => {
      socket.off('last.game');
    };
  }, [
    answerSound,
    dispatch,
    fastSound,
    roomInfo.id,
    sound,
    wrongSound,
    playAnswer,
    user.id,
  ]);

  /* ping logic */
  useEffect(() => {
    socket.on('ping', () => {
      if (pause) setTimeout(() => dispatch(tick()));
    });

    return () => {
      socket.off('ping');
    };
  }, [dispatch, pause, sound]);

  useEffect(() => {
    socket.on('pong', () => {
      if (game.host === user.id) lastTurnEnd(roomInfo.id as string);
      dispatch(setPause(false));
      dispatch(clearTimer());
      dispatch(clearAnswer());
    });

    return () => {
      socket.off('pong');
    };
  }, [dispatch, game.host, roomInfo.id, timer, user.id]);

  /* result, end logic*/
  useEffect(() => {
    socket.on('last.result', async (data) => {
      dispatch(clearResult());
      dispatch(clearAnswer());
      dispatch(clearTimer());
      dispatch(clearHistory());

      dispatch(setDataModal(data));
      dispatch(openModal('RESULT'));

      let achieve: any[] = [];
      const ach_1 =
        user.provider === 'waktaverse.games'
          ? await updatePlayCount(game.type)
          : await updatePlayCountLocal(game.type);
      const ach_2 =
        user.provider === 'waktaverse.games'
          ? await updateResult(result)
          : await updateResultLocal(result);
      if (ach_1) achieve = [...achieve, ...ach_1];
      if (ach_2) achieve = [...achieve, ...ach_2];
      await dispatch(setAchieve(achieve));
    });

    socket.on('last.end', async (data) => {
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
  }, [dispatch, game.type, result, router, user.id, user.provider]);

  useEffect(() => {
    socket.on('exit', (data) => {
      const { roomInfo, game } = data;

      if (!roomInfo || !game) return;

      dispatch(setRoomInfo(roomInfo));
      dispatch(setGame(game));

      if (roomInfo.users && roomInfo.users.length <= 1) {
        router.push('/room');
      }
    });

    return () => {
      socket.off('exit');
    };
  }, [dispatch, router]);

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
