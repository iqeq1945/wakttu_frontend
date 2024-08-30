import { LastPlayerList } from '@/components';
import { selectAnswer } from '@/redux/answer/answerSlice';
import { selectGame, selectReadyUser } from '@/redux/game/gameSlice';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  const users = useSelector(selectReadyUser);
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);

  return <LastPlayerList answer={answer} users={users} game={game} />;
};

export default PlayerList;
