import { GInfo } from '@/components';
import { selectPause } from '@/redux/answer/answerSlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { lastRound } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const name = useSelector(selectUserName);
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;
  const pause = useSelector(selectPause);
  const timer = useSelector(selectTimer);

  const [keyword, setKeyword] = useState<string[]>(['']);

  useEffect(() => {
    let keyword = game.keyword!._id.split('');
    setKeyword(keyword);
  }, [game.keyword]);

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

  return <GInfo game={game} pause={pause} keyword={keyword} timer={timer} />;
};

export default Info;
