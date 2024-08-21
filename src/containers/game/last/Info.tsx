import { GInfo } from '@/components';
import { setPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { lastRound, socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Info = () => {
  const name = useSelector(selectUserName);
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setGame(data));
      dispatch(setPause(true));
    });

    return () => {
      socket.off('last.round');
    };
  }, [dispatch]);

  useEffect(() => {
    const opening = setTimeout(() => {
      console.log(new Date());
      if (game.host === name) lastRound(roomId);
    }, 5000);

    return () => {
      clearTimeout(opening);
    };
  }, [dispatch, game.host, name, roomId]);

  return <GInfo game={game} />;
};

export default Info;
