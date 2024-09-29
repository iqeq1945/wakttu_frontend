import { MainForm } from '@/components';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useState } from 'react';
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

  useEffect(() => {
    const checkLogin = async () => {
      const response = await client.get('/test');
      const data = response.data;
      if (data.user) {
        dispatch(setUserInfo(data.user));
      } else dispatch(clearUserInfo());
    };
    checkLogin();
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      setIsLogined(true);
      socket.connect();
    } else {
      setIsLogined(false);
      socket.disconnect();
    }
  }, [userId]);

  const onModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(openModal('MAIN_MODAL'));
  };

  const start = async (e: MouseEvent<HTMLElement>) => {
    if (isLogined) {
      e.stopPropagation();
      router.push('/roomlist');
    }
  };

  const logout = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    await client.get('auth/logout');
    dispatch(clearUserInfo());
    socket.disconnect();
    return;
  };

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
