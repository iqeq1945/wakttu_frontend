import { PlayerList as CPlayerList } from '@/components';
import { selectHost, selectReadyUser, setGame } from '@/redux/game/gameSlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { selectRoomUsers, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectRoomUsers);
  const ready = useSelector(selectReadyUser);
  const host = useSelector(selectHost);

  const dispatch = useDispatch();

  const onKick = (data: { id: string; name: string }) => {
    dispatch(openModal('KICK'));
    dispatch(setDataModal(data));
  };

  useEffect(() => {
    socket.on('enter', (data: any) => {
      if (data) {
        const { roomInfo, game } = data;
        dispatch(setRoomInfo(roomInfo));
        dispatch(setGame(game));
      }
    });

    return () => {
      socket.off('enter');
    };
  }, [dispatch]);

  return (
    <CPlayerList users={users} ready={ready} host={host} onKick={onKick} />
  );
};

export default PlayerList;
