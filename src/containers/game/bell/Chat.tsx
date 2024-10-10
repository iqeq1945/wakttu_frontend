import { BChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import countScore from '@/modules/Score';
import { clean } from '@/modules/Slang';
import { selectAnswer, selectPause } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { sendChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import wordRelay from '@/modules/WordRelay';
import { selectUserId } from '@/redux/user/userSlice';
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
  const userId = useSelector(selectUserId);
  const roomId = useSelector(selectRoomId) as string;
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);
  const effectVolume = useSelector(selectEffectVolume);
  const [myTurn, setMyTurn] = useState(true);

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

  const playSound = useCallback(() => {
    if (logSound) {
      if (logSound.playing()) logSound.stop();
      logSound.play();
    }
  }, [logSound]);

  const onSendAnswer = () => {
    if (inputs.chat) {
      if (inputs.chat !== game.target) {
        sendChat({
          roomId,
          chat: clean(inputs.chat),
          roundTime: null,
          score: null,
        });
      } else {
        sendChat({
          roomId,
          chat: inputs.chat,
          roundTime: timer.roundTime - timer.countTime,
          score: countScore({
            wordLength: inputs.chat.length,
            chainCount: game.chain,
            timeLimit: timer.roundTime,
            remainingTime: timer.roundTime - timer.countTime,
          }),
          success: true,
        });
        setMyTurn(false);
      }
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
      if (pause && myTurn) onSendAnswer();
      else onSendMessage();
    }
  };

  useEffect(() => {
    setMyTurn(true);
  }, [game.round]);

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
    <BChatBox
      log={log}
      message={inputs.chat}
      onChange={onInputChange}
      onMessage={onSendMessage}
      onAnswer={onSendAnswer}
      handleEnter={handleEnter}
      inputRef={inputRef}
      chatBoxRef={chatBoxRef}
      myTurn={myTurn}
      game={game}
      answer={answer}
      timer={timer}
      pause={pause}
    />
  );
};

export default Chat;
