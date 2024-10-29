import { MainForm } from '@/components';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/modal/modalSlice';
import { client } from '@/services/api';
import {
  clearUserInfo,
  selectUserId,
  selectUserInfo,
  setUserInfo,
} from '@/redux/user/userSlice';
import { socket } from '@/services/socket/socket';

const MainFormContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(selectUserInfo);
  const userId = useSelector(selectUserId);
  const [isLogined, setIsLogined] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // 로그인 체크 및 소켓 연결 관리
  useEffect(() => {
    const checkLoginAndConnect = async () => {
      try {
        const response = await client.get('/test');
        const data = response.data;

        if (data.user) {
          dispatch(setUserInfo(data.user));
          // 유저 정보가 있고 소켓이 연결되지 않은 경우에만 연결
          if (!isConnected) {
            socket.connect();
            socket.on('connect', () => {
              setIsConnected(true);
            });
            socket.on('disconnect', () => {
              setIsConnected(false);
            });
          }
        } else {
          dispatch(clearUserInfo());
          if (isConnected) {
            socket.disconnect();
            setIsConnected(false);
          }
        }
      } catch (error) {
        console.error('Login check or socket connection error:', error);
        dispatch(clearUserInfo());
        socket.disconnect();
        setIsConnected(false);
      }
    };

    checkLoginAndConnect();

    // 클린업 함수
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [dispatch, isConnected]);

  // userId 변경에 따른 로그인 상태 관리
  useEffect(() => {
    if (userId) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [userId]);

  const onModal = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      dispatch(openModal('MAIN_MODAL'));
    },
    [dispatch]
  );

  const start = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      if (isLogined) {
        e.stopPropagation();
        // 연결되지 않은 경우만 소켓 연결 시도
        if (!isConnected) {
          await socket.connect();
        }
        await router.push('/roomlist');
      }
    },
    [isLogined, router, isConnected]
  );

  const logout = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      await client.get('auth/logout');
      dispatch(clearUserInfo());
      socket.disconnect();
      return;
    },
    [dispatch]
  );

  return (
    <MainForm
      user={user}
      isLogined={isLogined}
      onModal={onModal}
      start={start}
      logout={logout}
    />
  );
};

export default MainFormContainer;
