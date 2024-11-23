import { GEmoticon } from '@/components';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectEmoticon, selectUserId } from '@/redux/user/userSlice';
import { sendEmoticon, socket } from '@/services/socket/socket';

const Emoticon = () => {
  const roomId = useSelector(selectRoomId) as string;
  const userId = useSelector(selectUserId) as string;
  const emoticonId = useSelector(selectEmoticon);

  const [keydownNumber, setKeydownNumber] = useState<string | null>(null);
  const [coolTime, setCoolTime] = useState(false);
  const [receivedEmoticon, setReceivedEmoticon] = useState<any>(null);

  const onSendEmoticon = useCallback(() => {
    if (keydownNumber) {
      const emoticonData = {
        roomId,
        userId,
        emoticonId: keydownNumber,
      };
      sendEmoticon(emoticonData);
      setCoolTime(true);
      setTimeout(() => {
        setCoolTime(false);
        setKeydownNumber(null);
      });
    }
  }, [userId, roomId, keydownNumber]);

  const handleKeyDown = (e: KeyboardEvent) => {
    const emoticonKeyMap: { [key: string]: string } = {
      '1': emoticonId.keydown1,
      '2': emoticonId.keydown2,
      '3': emoticonId.keydown3,
    };
    if (!coolTime && emoticonKeyMap[e.key]) {
      setKeydownNumber(emoticonKeyMap[e.key]);
    }
  };

  useEffect(() => {
    if (keydownNumber) {
      onSendEmoticon();
    }
  }, [keydownNumber, onSendEmoticon]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [coolTime]);

  useEffect(() => {
    socket.on('emoticon', (data) => {
      setReceivedEmoticon(data);
    });
    return () => {
      socket.off('emoticon');
    };
  }, []);

  return <>{receivedEmoticon && <GEmoticon src={receivedEmoticon} />}</>;
};

export default Emoticon;
