import { PlayerList as CPlayerList } from '@/components';
import {
  selectHost,
  selectReadyUser,
  selectTeam,
  setGame,
} from '@/redux/game/gameSlice';
import { openModal, setDataModal } from '@/redux/modal/modalSlice';
import { selectRoomUsers, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectRoomUsers);
  const me = useSelector(selectUserInfo);
  const ready = useSelector(selectReadyUser);
  const host = useSelector(selectHost);
  const team = useSelector(selectTeam);
  const router = useRouter();
  const [userList, setUserList] = useState<any[]>([]);

  const dispatch = useDispatch();

  const onKick = (data: { id: string; name: string }) => {
    dispatch(openModal('KICK'));
    dispatch(setDataModal(data));
  };

  useEffect(() => {
    if (!users) {
      router.push('/');
      return;
    }
    let copy = [...users];
    if (copy.length > 0) {
      const len = copy.length;
      for (let i = 0; i < 8 - len; i++) copy.push({ id: i, name: undefined });
    }

    setUserList(copy);
  }, [router, users]);

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
    <CPlayerList
      users={userList}
      ready={ready}
      host={host}
      me={me.id!}
      onKick={onKick}
      team={team}
    />
  );
};

export default PlayerList;
