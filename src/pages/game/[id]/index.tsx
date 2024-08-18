import { GHeader, GInfo, Last, LastPlayerList } from '@/components';
import Chat from '@/containers/game/last/Chat';
import { Container } from '@/styles/last/Layout';

const Game = () => {
  return (
    <Container>
      <GHeader />
      <GInfo />
      <Last />
      <LastPlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
