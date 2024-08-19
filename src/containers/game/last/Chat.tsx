import { GChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import { clean } from '@/modules/Slang';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { RootState } from '@/redux/store';
import { sendChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

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
  const [log, setLog] = useState<LogProps[]>([
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
    {
      user: {
        name: '이파리는참고싶어',
        provider: 'wataverse.games',
        score: 4352,
        color: '#000000',
      },
      chat: '안녕',
      date: '오후 12:00:31',
    },
  ]);
  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSendAnswer = () => {
    if (inputs.chat) {
      sendChat({
        roomId,
        chat: '',
        roundTime: 88.2,
        turnTime: 8.1,
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
    />
  );
};

export default Chat;
