import { RoomDesc as CRoomDesc } from '@/components';
import { setGame } from '@/redux/game/gameSlice';
import { openModal } from '@/redux/modal/modalSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { enter, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const onEnter = () => {
    const { id, password } = roomInfo;
    if (password !== undefined) {
      dispatch(openModal('PASSWORD'));
      return;
    }

    enter({ roomId: id as string, password });
  };

  useEffect(() => {
    socket.on('createRoom', (data) => {
      enter(data);
    });

    socket.on('enter', async (data: any) => {
      if (data) {
        const { roomInfo, game } = data;
        await dispatch(setRoomInfo(roomInfo));
        await dispatch(setGame(game));
        router.push(`/room/${roomInfo.id}`);
      }
    });

    return () => {
      socket.off('createRoom');
      socket.off('enter');
    };
  }, [dispatch, router]);

  return <CRoomDesc roomInfo={roomInfo} onEnter={onEnter} />;
};

export default RoomDesc;
