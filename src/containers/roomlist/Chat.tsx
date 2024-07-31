import { ChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import { getTime } from '@/modules/Date';
import { sendLobbyChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef } from 'react';

interface InputProps {
  chat: string;
}

export interface LogProps {
  user: any;
  chat: string;
  date: string;
}

const Chat = () => {
  const [log, setLog] = useState<LogProps[]>([]);
  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSendMessage = () => {
    if (inputs.chat) sendLobbyChat(inputs.chat);
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
    socket.on('lobby.chat', (data) => {
      data.date = getTime();
      setLog((prev) => [...prev, data]);
    });
    return () => {
      socket.off('lobby.chat');
    };
  }, [log]);

  return (
    <ChatBox
      log={log}
      message={inputs.chat}
      onChange={onInputChange}
      onClick={onSendMessage}
      inputRef={inputRef}
      chatBoxRef={chatBoxRef}
    />
  );
};

export default Chat;
