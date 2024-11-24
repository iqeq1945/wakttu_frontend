import { GEmoticon } from '@/components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectEmoticon, selectUserId } from '@/redux/user/userSlice';
import { sendEmoticon, socket } from '@/services/socket/socket';

const Emoticon = () => {
  const roomId = useSelector(selectRoomId) as string;
  const userId = useSelector(selectUserId) as string;
  const emoticonId = useSelector(selectEmoticon);

  const [key, setKey] = useState(0);
  const [receivedEmoticon, setReceivedEmoticon] = useState<{
    emoticonId: string;
    userId: string;
    roomId: string;
  } | null>(null);

  const emoticonKeyMap: { [key: string]: string } = {
    '1': emoticonId.keydown1,
    '2': emoticonId.keydown2,
    '3': emoticonId.keydown3,
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const emoticon = emoticonKeyMap[e.key];
    if (emoticon) {
      const emoticonData = {
        roomId,
        userId,
        emoticonId: emoticon,
      };
      sendEmoticon(emoticonData);
      setKey((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [emoticonKeyMap, roomId, userId]);

  useEffect(() => {
    socket.on('emoticon', (data) => {
      setReceivedEmoticon(data);
    });
    return () => {
      socket.off('emoticon');
    };
  }, []);

  return (
    <>
      {receivedEmoticon && receivedEmoticon.userId === userId && (
        <GEmoticon key={key} src={receivedEmoticon.emoticonId} />
      )}
    </>
  );
};

export default Emoticon;
