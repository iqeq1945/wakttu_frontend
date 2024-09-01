import { Container } from '@/styles/last/Layout';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';
import Last from '@/containers/game/last/Last';
import { useDispatch, useSelector } from 'react-redux';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { lastRound, lastTurnStart, socket } from '@/services/socket/socket';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { useCallback, useEffect } from 'react';
import {
  clearAnswer,
  clearSuccess,
  selectPause,
  setAnswer,
  setPause,
} from '@/redux/answer/answerSlice';
import {
  clearTimer,
  selectTimer,
  setTimer,
  setTurn,
  tick,
} from '@/redux/timer/timerSlice';
import { selectUserInfo, selectUserName } from '@/redux/user/userSlice';
import { useRouter } from 'next/router';
import { clearHistory, setHistory } from '@/redux/history/historySlice';
import useSound from '@/hooks/useSound';
import useEffectSound from '@/hooks/useEffectSound';

const Game = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const user = useSelector(selectUserInfo);
  const name = useSelector(selectUserName);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);

  const sound = useSound('/assets/bgm/lossy/ui_in-game.webm', 0.1, 0, true);
  const fastSound = useSound(
    '/assets/bgm/lossy/ui_in-game_speedup.webm',
    0.1,
    0,
    true
  );

  const startSound = useEffectSound(
    '/assets/sound-effects/lossy/game_start.webm',
    0.1
  );

  const answerSound = useEffectSound(
    '/assets/sound-effects/lossy/game_correct_variant1.webm',
    0.1
  );
  const wrongSound = useEffectSound(
    '/assets/sound-effects/lossy/game_wrong.webm',
    0.1
  );
  const turnEndSound = useEffectSound(
    '/assets/sound-effects/lossy/game_turn_failure.webm',
    0.1
  );

  const onBgm = useCallback(() => {
    if (game.chain >= 10 || timer.turnTime - timer.countTime <= 10000) {
      if (fastSound && !fastSound.playing()) {
        if (sound && sound.playing()) sound.stop();
        fastSound.play();
      }
    } else if (game.chain < 10 || timer.turnTime - timer.countTime > 10000) {
      if (sound && !sound.playing()) sound.play();
    }
  }, [fastSound, game.chain, sound, timer.countTime, timer.turnTime]);

  /* round 종료시 history 없애기*/
  useEffect(() => {
    dispatch(clearHistory());
  }, [dispatch, game.round]);

  /* round logic */
  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setPause(false));
      dispatch(clearTimer());
      dispatch(clearAnswer());
      dispatch(setGame(data));

      setTimeout(() => {
        startSound?.play();
      });

      console.log('round loading start');
      setTimeout(() => {
        console.log('round loading end');
        setTimeout(() =>
          dispatch(
            setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
          )
        );
        setTimeout(() => dispatch(setPause(true)));
        if (game.host === user.name) lastTurnStart(roomInfo.id as string);
      }, 4000);
    });

    return () => {
      socket.off('last.round');
    };
  }, [dispatch, game.host, roomInfo.id, sound, startSound, user.name]);

  /* turn Logic */
  useEffect(() => {
    socket.on('last.turnStart', () => {
      if (game.host === user.name) socket.emit('ping', roomInfo.id);
      onBgm();
    });

    socket.on('last.turnEnd', () => {
      if (game.host === user.name)
        setTimeout(() => lastRound(roomInfo.id as string), 4000);
      if (sound && sound.playing()) sound.stop();
      if (fastSound && fastSound.playing()) fastSound.stop();
      turnEndSound?.play();
    });
    return () => {
      socket.off('last.turnStart');
      socket.off('last.turnEnd');
    };
  }, [
    fastSound,
    game.host,
    onBgm,
    roomInfo.id,
    sound,
    turnEndSound,
    user.name,
  ]);

  /* turn game logic */
  useEffect(() => {
    socket.on('last.game', (data) => {
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
        setTimeout(() => {
          if (sound && sound.playing()) sound.pause();
          if (fastSound && fastSound.playing()) fastSound.pause();
          answerSound?.play();
        });
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
          if (name === game.host) lastTurnStart(roomInfo.id as string);
        }, 2000);
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
    game.keyword,
    name,
    roomInfo.id,
    sound,
    wrongSound,
  ]);

  /* ping logic */
  useEffect(() => {
    socket.on('ping', () => {
      onBgm();
      if (pause) setTimeout(() => dispatch(tick()));
    });

    return () => {
      socket.off('ping');
    };
  }, [dispatch, onBgm, pause, sound]);

  /* result, end logic*/
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
