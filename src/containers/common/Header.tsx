import { Header as CHeader } from '@/components';
import { selectUserInfo } from '@/redux/user/userSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    setIsConnected(true);
  }, []);

  return isConnected && <CHeader user={user} />;
};

export default Header;
