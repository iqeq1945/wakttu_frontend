import { Ready as CReady } from '@/components';
import { selectHost, selectReadyUser, setGame } from '@/redux/game/gameSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { kungStart, lastStart, ready, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ready = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const readyUsers = useSelector(selectReadyUser);
  const userName = useSelector(selectUserName);
  const host = useSelector(selectHost);

  const dispatch = useDispatch();
  const router = useRouter();

  const onReady = () => {
    ready(roomInfo.id as string);
  };

  const onStart = () => {
    if (roomInfo.users.length - 1 !== readyUsers.length) {
      alert('모두 준비 상태가 아닙니다.');
      return;
    }
    if (roomInfo.users.length === 1) {
      alert('혼자서는 시작할 수 없습니다!');
      return;
    }
    switch (roomInfo.type) {
      case 0: {
        lastStart(roomInfo.id as string);
        break;
      }
      case 1: {
        kungStart(roomInfo.id as string);
        break;
      }
    }
  };

  useEffect(() => {
    socket.on('last.start', async (data) => {
      await dispatch(setGame(data));
      router.push(`/game/${roomInfo.id}`);
    });

    socket.on('kung.start', async (data) => {
      await dispatch(setGame(data));
      router.push(`/game/${roomInfo.id}`);
    });

    return () => {
      socket.off('last.start');
      socket.off('kung.start');
    };
  }, [dispatch, roomInfo.id, router]);

  return (
    <CReady
      onReady={onReady}
      onStart={host === userName ? onStart : undefined}
    />
  );
};

export default Ready;
