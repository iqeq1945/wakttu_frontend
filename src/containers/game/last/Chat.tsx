import { GChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import countScore from '@/modules/Score';
import { clean } from '@/modules/Slang';
import {
  selectAnswer,
  selectPause,
  setAnswer,
} from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { RootState } from '@/redux/store';
import { selectTimer } from '@/redux/timer/timerSlice';
import { sendChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordRelay from '@/modules/WordRelay';

interface InputProps {
  chat: string;
}

export interface LogProps {
  user: any;
  chat: string;
  date: string;
}

const Chat = () => {
  const dispatch = useDispatch();

  const myTurn = useSelector((state: RootState) => {
    return state.user.id === state.game.users[state.game.turn].userId;
  });
  const roomId = useSelector(selectRoomId) as string;
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);

  const [log, setLog] = useState<LogProps[]>([]);
  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSendAnswer = () => {
    if (inputs.chat) {
      const { isValid, message } = wordRelay(game.target, inputs.chat);
      if (!isValid) {
        dispatch(
          setAnswer({
            success: isValid,
            answer: inputs.chat,
            message: message,
            pause: true,
            word: undefined,
          })
        );
      } else {
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
        });
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
    });
    return () => {
      socket.off('chat');
    };
  }, [log]);

  return (
    <GChatBox
      log={log}
      message={inputs.chat}
      onChange={onInputChange}
      onMessage={onSendMessage}
      onAnswer={onSendAnswer}
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
