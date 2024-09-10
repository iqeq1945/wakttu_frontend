import { KHeader } from '@/components';
import { Room } from '@/services/socket/socket';
import { Container } from '@/styles/common/Layout';

const Game = () => {
  const roomInfo: Room = {
    id: '111111111111',
    idx: 5,
    title: '왁뚜 생활',
  };
  return (
    <Container>
      <KHeader
        roomInfo={roomInfo}
        exit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Container>
  );
};

export default Game;
