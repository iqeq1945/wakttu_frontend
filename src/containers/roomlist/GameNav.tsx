import { GameNav as CGameNav } from '@/components';
import { openModal } from '@/redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import FilterBox from './FilterBox';
import { getRoomList } from '@/services/socket/socket';
import { clearRoomInfo } from '@/redux/roomInfo/roomInfoSlice';

const GameNav = () => {
  const dispatch = useDispatch();

  const onModal = (type: string) => {
    dispatch(openModal(type));
  };

  const onRoomList = () => {
    dispatch(clearRoomInfo());
    getRoomList();
  };

  return (
    <CGameNav onModal={onModal} onRoomList={onRoomList}>
      <FilterBox />
    </CGameNav>
  );
};

export default GameNav;
