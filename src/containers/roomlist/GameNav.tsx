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

  return (
    <CGameNav onModal={OnModal}>
      <FilterBox />
    </CGameNav>
  );
};

export default GameNav;
