import { Header as CHeader } from '@/components';
import { selectUserInfo } from '@/redux/user/userSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const user = useSelector(selectUserInfo);

  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  useEffect(() => {
    setIsConnected(true);
  }, []);

  return isConnected && <CHeader user={user} goHome={goHome} />;
};

export default Header;
