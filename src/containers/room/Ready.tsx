import { Ready as CReady } from '@/components';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { ready } from '@/services/socket/socket';
import { useSelector } from 'react-redux';

const Ready = () => {
  const roomId = useSelector(selectRoomId) as string;
  const onReady = () => {
    ready(roomId);
  };
  return <CReady onReady={onReady} />;
};

export default Ready;
