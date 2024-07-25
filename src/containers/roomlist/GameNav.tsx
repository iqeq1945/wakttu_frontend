import { GameNav as CGameNav } from '@/components';
import { openModal } from '@/redux/modal/modalSlice';
import { createRoom } from '@/services/socket/socket';
import { useDispatch } from 'react-redux';
import FilterBox from './FilterBox';

const GameNav = () => {
  const dispatch = useDispatch();

  const OnModal = (type: string) => {
    dispatch(openModal(type));
  };

  const CreateRoom = () => {
    const data = {
      title: '방의 제목',
      type: 0,
      round: 6,
      option: ['품어', '매너', '외수'],
      total: 8,
      time: 60000,
    };
    createRoom(data);
  };

  return (
    <CGameNav onModal={OnModal}>
      <FilterBox />
    </CGameNav>
  );
};

export default GameNav;
