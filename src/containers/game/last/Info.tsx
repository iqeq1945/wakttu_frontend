import { GInfo } from '@/components';
import { selectGame } from '@/redux/game/gameSlice';
import { useSelector } from 'react-redux';

const Info = () => {
  const game = useSelector(selectGame);
  return <GInfo game={game} />;
};

export default Info;
