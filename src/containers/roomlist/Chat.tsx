import { ChatBox } from '@/components';
import useInput from '@/hooks/useInput';
import useEffectSound from '@/hooks/useEffectSound';
import { getTime } from '@/modules/Date';
import { clean } from '@/modules/Slang';
import { sendLobbyChat, socket } from '@/services/socket/socket';
import { useEffect, useState, useRef, useCallback } from 'react';

interface InputProps {
  chat: string;
}

export interface LogProps {
  user: any;
  chat: string;
  date: string;
}

const Chat = () => {
  const logSound = useEffectSound(
    '/assets/sound-effects/lossy/ui_click.webm',
    0.08
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

  const onSendMessage = () => {
    if (inputs.chat) sendLobbyChat(clean(inputs.chat));
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
      playSound();
    });
    return () => {
      socket.off('lobby.chat');
    };
  }, [log, playSound]);

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
