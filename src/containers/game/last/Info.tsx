import { GInfo } from '@/components';
import useEffectSound from '@/hooks/useEffectSound';
import { selectPause } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { selectUserName } from '@/redux/user/userSlice';
import { lastRound } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Info = () => {
  const name = useSelector(selectUserName);
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;
  const pause = useSelector(selectPause);
  const timer = useSelector(selectTimer);
  const trainSound = useEffectSound(
    '/assets/sound-effects/lossy/game_start_train.webm',
    0.1
  );

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string[]>(['']);

  useEffect(() => {
    let keyword = game.keyword!._id.split('');
    setKeyword(keyword);
  }, [game.keyword]);

  useEffect(() => {
    if (trainSound) setTimeout(() => trainSound.play(), 500);

    const opening = setTimeout(() => {
      if (game.host === name) {
        console.log('opening');
        lastRound(roomId);
      }
    }, 2000);

    return () => {
      clearTimeout(opening);
    };
  }, [dispatch, name, roomId, trainSound]);

  return <GInfo game={game} pause={pause} keyword={keyword} timer={timer} />;
};

export default Info;
