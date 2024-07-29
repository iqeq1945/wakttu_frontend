import { RoomDesc as CRoomDesc } from '@/components';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);

  return <CRoomDesc roomInfo={roomInfo} />;
};

export default RoomDesc;
