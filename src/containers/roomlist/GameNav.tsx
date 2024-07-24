import { GameNav as CGameNav } from '@/components';
import { selectModal } from '@/redux/modal/modalSlice';
import { createRoom } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Modal {
  modalType: string | null;
  open: boolean | null;
}

const GameNav = () => {
  const modal = useSelector(selectModal);
  const [view, setView] = useState<Modal>({ modalType: '', open: false });
  const [filter, setFiter] = useState('');

  useEffect(() => {
    if (modal.modalType === 'FILTER' || modal.modalType === 'CREATE_ROOM') {
      setView(modal);
    }
  }, [modal]);

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

  const Filter = () => {};
  return <CGameNav onCreateRoom={CreateRoom} onFilter={() => {}} />;
};

export default GameNav;
