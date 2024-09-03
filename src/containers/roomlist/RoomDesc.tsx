import { RoomDesc as CRoomDesc } from '@/components';
import { openModal } from '@/redux/modal/modalSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { client } from '@/services/api';
import { enter } from '@/services/socket/socket';
import { useDispatch, useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();

  const onEnter = async () => {
    const data = (await client.get(`room/${roomInfo.id}`)).data;
    const { id, password, start } = data;
    dispatch(setRoomInfo(data));

    if (start) {
      alert('게임이 진행중인 방입니다!');
      return;
    }
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
