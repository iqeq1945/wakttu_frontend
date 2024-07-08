import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MainHeader } from '@/components';
import Auth from '@/containers/auth/Auth';
import { selectUserId } from '@/redux/user/userSlice';
import { Container } from '@/styles/common/Layout';

const Main = () => {
  const userId = useSelector(selectUserId);
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    if (userId) setIsLogined(true);
    if (!userId) setIsLogined(false);
  }, [userId]);

  //return !isLogined && <Auth />;
  return (
    <Container>
      <MainHeader />
    </Container>
  );
};

export default Main;
