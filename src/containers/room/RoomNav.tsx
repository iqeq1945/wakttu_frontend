import { RoomNav as CRoomNav } from '@/components';
import { selectHost, setGame } from '@/redux/game/gameSlice';
import { openModal } from '@/redux/modal/modalSlice';
import {
  clearRoomInfo,
  selectRoomId,
  setRoomInfo,
} from '@/redux/roomInfo/roomInfoSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { exit, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RoomNav = () => {
  const roomId = useSelector(selectRoomId) as string;
  const userName = useSelector(selectUserName);
  const host = useSelector(selectHost);
  const dispatch = useDispatch();
  const router = useRouter();

  const onExit = useCallback(async () => {
    exit(roomId);
    await router.push('/roomlist');
    dispatch(clearRoomInfo());
  }, [dispatch, roomId, router]);

  const onModal = () => {
    if (host !== userName) return;
    dispatch(openModal('UPDATE_ROOM'));
  };

  useEffect(() => {
    socket.on('exit', (data) => {
      const { roomInfo, game } = data;
      dispatch(setRoomInfo(roomInfo));
      dispatch(setGame(game));
    });

    socket.on('kick helper', async (data) => {
      await onExit();
    });

    return () => {
      socket.off('exit');
      socket.off('kick helper');
    };
  }, [dispatch, onExit]);

  return (
    <CRoomNav onExit={onExit} onModal={onModal} host={userName === host} />
  );
};

export default RoomNav;
