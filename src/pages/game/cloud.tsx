import Board from '@/components/game/cloud/Board';
import ChatInput from '@/components/game/cloud/ChatInput';
import ChatLog from '@/components/game/cloud/ChatLog';
import Header from '@/components/game/cloud/Header';
import Info from '@/components/game/cloud/Info';
import PlayerList from '@/components/game/cloud/PlayerList';
import { Container, Main } from '@/styles/cloud/Layout';

const Cloud = () => {
  return (
    <Container>
      <Header
        roomInfo={{ id: '12345', title: 'hello', idx: 123 }}
        exit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Main>
        <Info />
        <Board />
        <ChatLog />
      </Main>
      <PlayerList
        users={[
          {
            id: '123',
            userId: '1234',
            name: 'hello',
            character: { skin: 'S-1' },
            score: 0,
          },
        ]}
        bubble={[]}
        emoticon={[]}
        team={{
          woo: [],
          gomem: [],
          academy: [],
          isedol: [],
        }}
      />
      <ChatInput />
    </Container>
  );
};

export default Cloud;
