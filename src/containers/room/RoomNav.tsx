import { RoomNav as CRoomNav } from '@/components';
import { setGame } from '@/redux/game/gameSlice';
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

  const onExit = async () => {
    exit(roomId);
    await router.push('/roomlist');
    dispatch(clearRoomInfo());
  };

  useEffect(() => {
    socket.on('exit', (data) => {
      const { roomInfo, game } = data;
      dispatch(setRoomInfo(roomInfo));
      dispatch(setGame(game));
    });
  }, [dispatch]);

  return <CRoomNav onExit={onExit} />;
};

export default RoomNav;
