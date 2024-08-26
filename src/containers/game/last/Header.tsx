import { GHeader } from '@/components';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const roomInfo = useSelector(selectRoomInfo);
  return <GHeader roomInfo={roomInfo} />;
};

export default Header;
