import { GInfo } from '@/components';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { lastRound, socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const name = useSelector(selectUserName);
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;

  useEffect(() => {
    const opening = setTimeout(() => {
      if (game.host === name) {
        lastRound(roomId);
        console.log('opening');
      }
    }, 5000);

    return () => {
      clearTimeout(opening);
    };
  }, [game.host, name, roomId]);

  return <GInfo game={game} />;
};

export default Info;
