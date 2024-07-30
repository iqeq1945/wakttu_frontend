import { Ready as CReady } from '@/components';
import { selectHost, selectReadyUser } from '@/redux/game/gameSlice';
import { selectRoomId, selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { kungStart, lastStart, ready } from '@/services/socket/socket';
import { useSelector } from 'react-redux';

const Ready = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const readyUsers = useSelector(selectReadyUser);
  const userName = useSelector(selectUserName);
  const host = useSelector(selectHost);

  const onReady = () => {
    ready(roomInfo.id as string);
  };

  const onStart = () => {
    if (roomInfo.users.length - 1 !== readyUsers.length) return;
    switch (roomInfo.type) {
      case 0: {
        lastStart(roomInfo.id as string);
        break;
      }
      case 1: {
        kungStart(roomInfo.id as string);
        break;
      }
    }
  };
  return (
    <CReady
      onReady={onReady}
      onStart={host === userName ? onStart : undefined}
    />
  );
};

export default Ready;
