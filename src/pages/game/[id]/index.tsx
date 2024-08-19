import { Last } from '@/components';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';

import { Container } from '@/styles/last/Layout';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';

const Game = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Last />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
