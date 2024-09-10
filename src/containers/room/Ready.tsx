import { Ready as CReady } from '@/components';
import { clearAnswer } from '@/redux/answer/answerSlice';
import {
  selectHost,
  selectReadyUser,
  setGame,
  setReady,
} from '@/redux/game/gameSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { clearTimer } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { kungStart, lastStart, ready, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ready = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const readyUsers = useSelector(selectReadyUser);
  const userName = useSelector(selectUserName);
  const host = useSelector(selectHost);

  const dispatch = useDispatch();
  const router = useRouter();

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const idx = readyUsers.findIndex((user) => user.name === userName);
    if (idx === -1) setIsReady(false);
    else setIsReady(true);
  }, [readyUsers, userName]);

  const onReady = () => {
    ready(roomInfo.id as string);
  };

  const onStart = () => {
    if (roomInfo.users.length === 1) {
      alert('혼자서는 시작할 수 없습니다!');
      return;
    }
    if (roomInfo.users.length - 1 > readyUsers.length) {
      alert('모두 준비 상태가 아닙니다.');
      return;
    } else if (roomInfo.users.length - 1 < readyUsers.length) {
      alert('침입자가 존재합니다. 방을새로파세용!');
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
    socket.on('ready', (data) => {
      dispatch(setReady(data));
    });

    socket.on('last.start', async (data) => {
      await dispatch(clearTimer());
      await dispatch(clearAnswer());
      await dispatch(setGame(data));
      router.push('/game/last');
    });

    socket.on('kung.start', async (data) => {
      await dispatch(clearTimer());
      await dispatch(clearAnswer());
      await dispatch(setGame(data));
      router.push('/game/kung');
    });

    return () => {
      socket.off('ready');
      socket.off('last.start');
      socket.off('kung.start');
    };
  }, [dispatch, roomInfo.id, router]);

  return (
    <CReady
      ready={isReady}
      onReady={onReady}
      onStart={host === userName ? onStart : undefined}
    />
  );
};

export default Ready;
