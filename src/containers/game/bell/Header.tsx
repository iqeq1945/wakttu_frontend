import { BHeader } from '@/components';
import { setAchieve } from '@/redux/achieve/achieveSlice';
import { clearGame } from '@/redux/game/gameSlice';
import { clearRoomInfo, selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { updateStat } from '@/services/api';
import { exit } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(selectUserInfo);
  const roomInfo = useSelector(selectRoomInfo);
  const router = useRouter();
  const dispatch = useDispatch();

  const exitGame = useCallback(async () => {
    await router.push('/roomlist');
    await dispatch(clearRoomInfo());
    await dispatch(clearGame());
    exit(roomInfo.id as string);
    if (user.provider === 'waktaverse.games') {
      const achieves = await updateStat('EXIT');
      if (achieves) dispatch(setAchieve(achieves));
    }
  }, [dispatch, roomInfo.id, router, user.provider]);

  return <BHeader roomInfo={roomInfo} exit={exitGame} />;
};

export default Header;
