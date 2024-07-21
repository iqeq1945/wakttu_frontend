import { PlayerInfo as CPlyerInfo } from '@/components';
import { selectUserInfo } from '@/redux/user/userSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PlayerInfo = () => {
  const [isConnected, setIsConnected] = useState(false);
  const user = useSelector(selectUserInfo);
  useEffect(() => {
    setIsConnected(true);
  }, []);
  return isConnected && <CPlyerInfo user={user} />;
};

export default PlayerInfo;
