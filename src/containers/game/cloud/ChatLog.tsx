import { CChatLog } from '@/components';
import useEffectSound from '@/hooks/useEffectSound';
import { selectEffectVolume } from '@/redux/audio/audioSlice';
import { socket } from '@/services/socket/socket';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Log {
  user: any;
  chat: string;
}

const ChatLog = () => {
  const effectVolume = useSelector(selectEffectVolume);
  const logSound = useEffectSound(
    '/assets/sound-effects/lossy/ui_click.webm',
    effectVolume
  );
  const [log, setLog] = useState<Log[]>([]);

  const playSound = useCallback(() => {
    if (logSound) {
      if (logSound.playing()) logSound.stop();
      logSound.play();
    }
  }, [logSound]);

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
      setLog((prev) => [...prev, data]);
      playSound();
    });
    return () => {
      socket.off('chat');
    };
  }, [log, playSound]);

  return <CChatLog />;
};

export default ChatLog;
