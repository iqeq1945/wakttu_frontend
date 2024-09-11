import { KHeader } from '@/components';
import { clearGame } from '@/redux/game/gameSlice';
import { clearRoomInfo, selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { exit } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const router = useRouter();
  const dispatch = useDispatch();

  const exitGame = useCallback(async () => {
    await router.push('/roomlist');
    await dispatch(clearRoomInfo());
    await dispatch(clearGame());
    exit(roomInfo.id as string);
  }, [dispatch, roomInfo.id, router]);

  return <KHeader roomInfo={roomInfo} exit={exitGame} />;
};

export default Header;
