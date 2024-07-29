import { PlayerList as CPlayerList } from '@/components';
import {
  selectHost,
  selectReadyUser,
  setGame,
  setReady,
} from '@/redux/game/gameSlice';
import { selectRoomUsers, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectRoomUsers);
  const ready = useSelector(selectReadyUser);
  const host = useSelector(selectHost);

  const dispatch = useDispatch();

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

  return <CPlayerList users={users} ready={ready} host={host} />;
};

export default PlayerList;
