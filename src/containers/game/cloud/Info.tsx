import { CInfo } from '@/components';
import { selectGame } from '@/redux/game/gameSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { useSelector } from 'react-redux';

const Info = () => {
  const game = useSelector(selectGame);
  const timer = useSelector(selectTimer);
  return <CInfo timer={timer} game={game} weather="비" />;
};
export default Info;
