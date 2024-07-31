import { PlayerList as CPlayerList } from '@/components';
import {
  selectHost,
  selectReadyUser,
  setGame,
  setReady,
} from '@/redux/game/gameSlice';
import { openModal } from '@/redux/modal/modalSlice';
import {
  selectRoomId,
  selectRoomUsers,
  setRoomInfo,
} from '@/redux/roomInfo/roomInfoSlice';
import { kick, socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectRoomUsers);
  const ready = useSelector(selectReadyUser);
  const host = useSelector(selectHost);

  const dispatch = useDispatch();

  const onKick = () => {
    dispatch(openModal('Kick'));
  };

  useEffect(() => {
    socket.on('enter', (data: any) => {
      if (data) {
        const { roomInfo, game } = data;
        dispatch(setRoomInfo(roomInfo));
        dispatch(setGame(game));
      }
    });

    socket.on('ready', (data) => {
      dispatch(setReady(data));
    });

    return () => {
      socket.off('enter');
      socket.off('ready');
    };
  }, [dispatch]);

  return (
    <CPlayerList users={users} ready={ready} host={host} onKick={onKick} />
  );
};

export default PlayerList;
