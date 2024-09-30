import Chat from '@/containers/game/kung/Chat';
import Header from '@/containers/game/kung/Header';
import Kung from '@/containers/game/kung/Kung';
import PlayerList from '@/containers/game/kung/PlayerList';
import { Container } from '@/styles/kung/Layout';
import {
  exit,
  kungRound,
  kungTurnEnd,
  kungTurnStart,
  socket,
} from '@/services/socket/socket';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory, setHistory } from '@/redux/history/historySlice';
import { clearGame, selectGame, setGame } from '@/redux/game/gameSlice';
import {
  clearTimer,
  selectTimer,
  setTimer,
  setTurn,
  tick,
} from '@/redux/timer/timerSlice';
import {
  clearAnswer,
  clearSuccess,
  selectPause,
  setAnswer,
  setFail,
  setPause,
} from '@/redux/answer/answerSlice';
import {
  selectUserInfo,
  selectUserName,
  setUserInfo,
} from '@/redux/user/userSlice';
import {
  clearRoomInfo,
  selectRoomInfo,
  setRoomInfo,
} from '@/redux/roomInfo/roomInfoSlice';
import useSound from '@/hooks/useSound';
import useEffectSound from '@/hooks/useEffectSound';
import { useRouter } from 'next/router';
import { client, updatePlayCount, updateResult } from '@/services/api';
import { GetKey } from '@/modules/Voice';
import useWaktaSound from '@/hooks/useWaktaSound';
import { selectVolume } from '@/redux/audio/audioSlice';
import useAnswerSound from '@/hooks/useAnswerSound';
import { selectResult, setResult } from '@/redux/result/resultSlice';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const user = useSelector(selectUserInfo);
  const result = useSelector(selectResult);
  const roomInfo = useSelector(selectRoomInfo);
  const name = useSelector(selectUserName);
  const timer = useSelector(selectTimer);
  const router = useRouter();
  const pause = useSelector(selectPause);
  const { bgmVolume, effectVolume, voiceVolume } = useSelector(selectVolume);
  const [late, setLate] = useState<boolean>(false);

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

  /**
   * Function Part
   */

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
      if (!wakta) answerSound![id.length - 2].play();
      else {
        const key = GetKey(type, meta);
        waktaSound![key].play();
      }
    },
    [answerSound, waktaSound]
  );

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
    setLate(true);
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

  // Turn End(round 종료) 시 호출하는 함수
  const setTurnEnd = useCallback(() => {
    if (!late) return;
    if (timer.turnTime > 0 && timer.countTime === timer.turnTime) {
      setLate(false);
      if (game.host === name) kungTurnEnd(roomInfo.id as string);
      dispatch(setPause(false));
      dispatch(clearTimer());
      dispatch(clearAnswer());
    }
  }, [
    late,
    timer.turnTime,
    timer.countTime,
    game.host,
    name,
    roomInfo.id,
    dispatch,
  ]);

  const exitGame = useCallback(async () => {
    await router.push('/roomlist');
    await dispatch(clearRoomInfo());
    await dispatch(clearGame());
    exit(roomInfo.id as string);
  }, [dispatch, roomInfo.id, router]);

  /**
   * Opening
   */

  useEffect(() => {
    const opening = setTimeout(() => {
      if (game.host === name) {
        console.log('opening');
        kungRound(roomInfo.id as string);
      }
    }, 2000);

    return () => {
      clearTimeout(opening);
    };
  }, [dispatch, roomInfo.id]);

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
        if (game.host === user.name) kungTurnStart(roomInfo.id as string);
      }, 4000);
    });

    return () => {
      socket.off('kung.round');
    };
  }, [
    dispatch,
    exitGame,
    failUser.count,
    failUser.name,
    game.host,
    name,
    roomInfo.id,
    startSound,
    user.name,
  ]);

  /**
   * Turn Logick
   */

  useEffect(() => {
    socket.on('kung.turnStart', () => {
      if (game.host === user.name) socket.emit('ping', roomInfo.id);
      onBgm();
    });

    socket.on('kung.turnEnd', (data) => {
      dispatch(setFail());
      setTimeout(() => dispatch(clearSuccess()), 2200);
      dispatch(setGame(data));
      onFailUser(game.users[game.turn].name);
      if (game.host === user.name)
        setTimeout(() => kungRound(roomInfo.id as string), 4000);
      if (sound) sound.stop();
      if (fastSound) fastSound.stop();
      turnEndSound?.play();
    });

    return () => {
      socket.off('kung.turnStart');
      socket.off('kung.turnEnd');
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
    user.name,
  ]);

  useEffect(() => {
    setTurnEnd();
  }, [setTurnEnd]);

  /**
   * turn game Logic
   */

  useEffect(() => {
    socket.on('kung.game', (data) => {
      if (!late) {
        return;
      }
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
        playAnswer({ ...word, chain: game.chain });
        sound?.pause();
        fastSound?.pause();
        if (name === game.host) socket.emit('pong', roomInfo.id);
        dispatch(setHistory(word));

        // Result 용 데이터
        if (word.wakta) dispatch(setResult({ type: 'WORD', word }));

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
      } else {
        wrongSound?.play();
      }
      setTimeout(() => {
        dispatch(clearSuccess());
      }, 2200);
    });

    return () => {
      socket.off('kung.game');
    };
  }, [
    answerSound,
    dispatch,
    fastSound,
    late,
    name,
    playAnswer,
    roomInfo.id,
    sound,
    wrongSound,
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

  /* result, end logic*/
  useEffect(() => {
    socket.on('kung.result', async (data) => {
      if (user.provider === 'waktaverse.games') {
        await updatePlayCount(game.type);
        await updateResult(result);
      }
      dispatch(clearAnswer());
      dispatch(clearTimer());
      dispatch(clearHistory());
      console.log('result:', data);
    });

    socket.on('kung.end', async (data) => {
      console.log('end :', data);
      const { game, roomInfo } = data;

      const response = await client.get(`/user/${user.id}`);
      if (response) await dispatch(setUserInfo(response.data));

      await router.push('/room');
      await dispatch(setRoomInfo(roomInfo));
      await dispatch(setGame(game));
    });

    return () => {
      socket.off('kung.result');
      socket.off('kung.end');
    };
  });

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
      <Kung />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
