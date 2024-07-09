import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MainHeader } from '@/components';
import Auth from '@/containers/auth/Auth';
import { selectUserId } from '@/redux/user/userSlice';
import { selectIsModal } from '@/redux/modal/modalSlice';
import MainForm from '@/components/main/MainForm';
import { Container } from '@/styles/common/Layout';
import { Wrapper } from '@/styles/main/Layout';

const Main = () => {
  const userId = useSelector(selectUserId);
  const [isLogined, setIsLogined] = useState(false);

  const modal = useSelector(selectIsModal);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setIsModal(!modal);
    if (userId) setIsLogined(true);
    if (!userId) setIsLogined(false);
  }, [userId, modal]);

  return isModal ? (
    <Auth />
  ) : (
    <Container>
      <MainHeader />
      <Wrapper>
        <MainForm isLogined={isLogined} />
      </Wrapper>
    </Container>
  );
};

export default Main;
