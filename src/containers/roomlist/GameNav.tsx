import { GameNav as CGameNav } from '@/components';
import { openModal } from '@/redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import FilterBox from './FilterBox';

const GameNav = () => {
  const dispatch = useDispatch();

  const onModal = (type: string) => {
    dispatch(openModal(type));
  };

  return (
    <CGameNav onModal={onModal}>
      <FilterBox />
    </CGameNav>
  );
};

export default GameNav;
