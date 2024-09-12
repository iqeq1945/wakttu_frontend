import { Header as CHeader } from '@/components';
import { clearGame, selectGame } from '@/redux/game/gameSlice';
import { clearRoomInfo, selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { exit } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const user = useSelector(selectUserInfo);
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const router = useRouter();
  const dispatch = useDispatch();

  const goHome = useCallback(async () => {
    await router.push('/');
    if (game.host !== '' || roomInfo.id) {
      await exit(roomInfo.id as string);
      await dispatch(clearGame());
      await dispatch(clearRoomInfo());
    }
  }, [dispatch, game.host, roomInfo.id, router]);

  useEffect(() => {
    setIsConnected(true);
  }, []);

  return isConnected && <CHeader user={user} goHome={goHome} />;
};

export default Header;
