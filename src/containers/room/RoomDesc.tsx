import { RoomDesc as CRoomDesc } from '@/components';
import { setGame } from '@/redux/game/gameSlice';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('updateRoom', (data) => {
      const { roomInfo, game } = data;
      dispatch(setRoomInfo(roomInfo));
      dispatch(setGame(game));
    });

    return () => {
      socket.off('updateRoom');
    };
  }, [dispatch]);
  return <CRoomDesc roomInfo={roomInfo} />;
};

export default RoomDesc;
