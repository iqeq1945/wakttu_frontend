import { LastPlayerList } from '@/components';
import { selectGame, selectReadyUser } from '@/redux/game/gameSlice';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectReadyUser);
  const game = useSelector(selectGame);
  return <LastPlayerList users={users} game={game} />;
};

export default PlayerList;
