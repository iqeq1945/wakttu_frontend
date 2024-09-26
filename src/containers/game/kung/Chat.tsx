import { KChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import countScore from '@/modules/Score';
import { clean } from '@/modules/Slang';
import {
  selectAnswer,
  selectPause,
  setPause,
} from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer, setTimer, tick } from '@/redux/timer/timerSlice';
import {
  kungBan,
  kungTurnStart,
  sendChat,
  socket,
} from '@/services/socket/socket';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordRelay from '@/modules/WordRelay';
import { selectUserId, selectUserName } from '@/redux/user/userSlice';
import { selectHistory } from '@/redux/history/historySlice';
import useEffectSound from '@/hooks/useEffectSound';
import { selectEffectVolume } from '@/redux/audio/audioSlice';

interface InputProps {
  chat: string;
}

export interface LogProps {
  user: any;
  chat: string;
  date: string;
}

const Chat = () => {
  const name = useSelector(selectUserName);
  const userId = useSelector(selectUserId);
  const roomId = useSelector(selectRoomId) as string;
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);
  const history = useSelector(selectHistory);
  const effectVolume = useSelector(selectEffectVolume);
  const dispatch = useDispatch();

  const [myTurn, setMyTurn] = useState(false);
  const [isBan, setBan] = useState(false);

  const logSound = useEffectSound(
    '/assets/sound-effects/lossy/ui_click.webm',
    effectVolume
  );
  const [log, setLog] = useState<LogProps[]>([]);
  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Function Part
   */
  const playSound = useCallback(() => {
    if (logSound) {
      if (logSound.playing()) logSound.stop();
      logSound.play();
    }
  }, [logSound]);

  const isInHistory = (keyword: string) => {
    const idx = history.findIndex((item) => item.id === keyword);
    return idx === -1 ? true : false;
  };

  const onSendBan = () => {
    if (inputs.chat) {
      if (inputs.chat.length >= 2 && inputs.chat.length <= 3) {
        kungBan({ roomId: roomId, keyword: inputs.chat });
        setBan(false);
      }
    }
    setInputs({ chat: '' });
    if (inputRef.current) inputRef.current.focus();
  };

  const onSendAnswer = () => {
    if (inputs.chat) {
      const { isValid, message } = wordRelay(
        game.target,
        inputs.chat,
        true,
        game.chain
      );
      const isIn = isInHistory(inputs.chat);
      const isBan = game.ban.includes(inputs.chat);

      sendChat({
        roomId,
        chat: inputs.chat,
        roundTime: timer.roundTime - timer.countTime,
        score: countScore({
          wordLength: inputs.chat.length,
          chainCount: game.chain,
          timeLimit: timer.turnTime,
          remainingTime: timer.turnTime - timer.countTime,
        }),
        success: !isValid || !isIn || !isBan,
      });
    }
    setInputs({ chat: '' });
    if (inputRef.current) inputRef.current.focus();
  };
  const onSendMessage = () => {
    if (inputs.chat) {
      sendChat({
        roomId,
        chat: clean(inputs.chat),
        roundTime: null,
        score: null,
      });
    }
    setInputs({ chat: '' });
    if (inputRef.current) inputRef.current.focus();
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      if (isBan) {
        onSendBan();
        return;
      }

      if (myTurn && pause) onSendAnswer();
      else onSendMessage();
    }
  };

  /**
   * UseEffect Part
   */

  useEffect(() => {
    socket.on('kung.round', () => {
      setTimeout(() => setBan(true), 4000);
    });

    return () => {
      socket.off('kung.round');
    };
  });

  useEffect(() => {
    socket.on('ping.ban', () => {
      setTimeout(() => dispatch(tick()));
    });

    return () => {
      socket.off('ping.ban');
    };
  }, [dispatch]);

  useEffect(() => {
    socket.on('kung.banEnd', (data) => {
      setBan(false);
      dispatch(
        setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
      );
      dispatch(setGame(data));
      dispatch(setPause(true));

      if (game.host === name) setTimeout(() => kungTurnStart(roomId), 1000);
    });

    return () => {
      socket.off('kung.banEnd');
    };
  }, [dispatch, game.host, isBan, name, roomId]);

  useEffect(() => {
    if (game.users.length > game.turn)
      setMyTurn(userId === game.users[game.turn].userId);
  }, [game.turn, game.users, userId]);

  useEffect(() => {
    socket.on('alarm', (data) => {
      alert(data.message);
    });

    return () => {
      socket.off('alarm');
    };
  }, []);

  useEffect(() => {
    socket.on('chat', (data) => {
      data.date = getTime();
      setLog((prev) => [...prev, data]);
      playSound();
    });
    return () => {
      socket.off('chat');
    };
  }, [log]);

  return (
    <KChatBox
      log={log}
      message={inputs.chat}
      onChange={onInputChange}
      onMessage={onSendMessage}
      onAnswer={onSendAnswer}
      onBan={onSendBan}
      handleEnter={handleEnter}
      inputRef={inputRef}
      chatBoxRef={chatBoxRef}
      myTurn={myTurn}
      game={game}
      answer={answer}
      timer={timer}
      pause={pause}
      ban={isBan}
    />
  );
};

export default Chat;
