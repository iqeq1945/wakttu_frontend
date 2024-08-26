import { RoomDesc as CRoomDesc } from '@/components';
import { setGame } from '@/redux/game/gameSlice';
import { openModal } from '@/redux/modal/modalSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { client } from '@/services/api';
import { enter } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();

  const onEnter = async () => {
    const data = (await client.get(`room/${roomInfo.id}`)).data;
    const { id, password } = data;
    if (password !== null) {
      if (id === undefined) {
        alert('존재하지 않는 방입니다!');
        return;
      }
      dispatch(openModal('PASSWORD'));
      return;
    }
    enter({ roomId: id as string, password });
  };

  return <CRoomDesc roomInfo={roomInfo} onEnter={onEnter} />;
};

export default RoomDesc;
