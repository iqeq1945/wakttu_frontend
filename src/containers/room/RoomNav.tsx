import { RoomNav as CRoomNav } from '@/components';
import {
  clearRoomInfo,
  selectRoomId,
  setRoomInfo,
} from '@/redux/roomInfo/roomInfoSlice';
import { exit, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RoomNav = () => {
  const roomId = useSelector(selectRoomId) as string;
  const dispatch = useDispatch();
  const router = useRouter();

  const onExit = () => {
    exit(roomId);
    dispatch(clearRoomInfo());
    router.push('/roomlist');
  };

  useEffect(() => {
    socket.on('exit', (data) => {
      const { roomInfo, game } = data;
      dispatch(setRoomInfo(roomInfo));
    });
  });
  return <CRoomNav onExit={onExit} />;
};

export default RoomNav;
