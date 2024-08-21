import { GChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import { clean } from '@/modules/Slang';
import { selectAnswer } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { RootState } from '@/redux/store';
import { sendChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import countScore from '@/modules/Score';
interface InputProps {
  chat: string;
}

export interface LogProps {
  user: any;
  chat: string;
  date: string;
}

const Chat = () => {
  const myTurn = useSelector((state: RootState) => {
    return state.user.id === state.game.users[state.game.turn].userId;
  });
  const roomId = useSelector(selectRoomId) as string;
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);

  const [log, setLog] = useState<LogProps[]>([]);
  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSendAnswer = () => {
    if (inputs.chat) {
      sendChat({
        roomId,
        chat: inputs.chat,
        roundTime: 8000,
        turnTime: 6000,
        score: 100,
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
        turnTime: null,
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
    />
  );
};

export default Chat;
