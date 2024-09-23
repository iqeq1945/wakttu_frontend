import { Ready as CReady } from '@/components';
import { clearAnswer } from '@/redux/answer/answerSlice';
import {
  selectGame,
  selectHost,
  selectReadyUser,
  setGame,
  setReady,
} from '@/redux/game/gameSlice';
import { clearHistory } from '@/redux/history/historySlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { clearTimer } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import {
  kungStart,
  lastStart,
  ready,
  selectTeam,
  socket,
} from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ready = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const readyUsers = useSelector(selectReadyUser);
  const userName = useSelector(selectUserName);
  const host = useSelector(selectHost);
  const game = useSelector(selectGame);

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
    if (roomInfo.option?.includes('팀전')) {
      const countWoo = game.team.woo.length;
      const countGomem = game.team.gomem.length;
      const countAcademy = game.team.academy.length;
      const countIsedol = game.team.isedol.length;

      const check = [];
      if (countWoo > 0) check.push(countWoo);
      if (countGomem > 0) check.push(countGomem);
      if (countAcademy > 0) check.push(countAcademy);
      if (countIsedol > 0) check.push(countIsedol);

      if (check.length <= 1) {
        alert('팀을 선택하세요!');
        return;
      }
      for (let i = 0; i < check.length - 1; i++)
        for (let j = 1; j < check.length; j++) {
          if (check[i] != check[j]) {
            alert('인원수가 맞지 않습니다.');
            return;
          }
        }
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

  const onTeam = (team: string) => {
    selectTeam({ roomId: roomInfo.id as string, team: team });
  };

  useEffect(() => {
    socket.on('ready', (data) => {
      dispatch(setReady(data));
    });

    socket.on('team', (data) => {
      dispatch(setGame(data));
    });

    socket.on('last.start', async (data) => {
      await dispatch(clearHistory());
      await dispatch(clearTimer());
      await dispatch(clearAnswer());
      await dispatch(setGame(data));
      router.push('/game/last');
    });

    socket.on('kung.start', async (data) => {
      await dispatch(clearHistory());
      await dispatch(clearTimer());
      await dispatch(clearAnswer());
      await dispatch(setGame(data));
      router.push('/game/kung');
    });

    return () => {
      socket.off('ready');
      socket.off('team');
      socket.off('last.start');
      socket.off('kung.start');
    };
  }, [dispatch, roomInfo.id, router]);

  return (
    <CReady
      ready={isReady}
      onReady={onReady}
      onStart={host === userName ? onStart : undefined}
      onTeam={onTeam}
      team={roomInfo.option?.includes('팀전')}
    />
  );
};

export default Ready;
