import Board from '@/components/game/cloud/Board';
import ChatInput from '@/containers/game/cloud/ChatInput';
import ChatLog from '@/components/game/cloud/ChatLog';
import Header from '@/containers/game/cloud/Header';
import Info from '@/containers/game/cloud/Info';
import PlayerList from '@/containers/game/cloud/PlayerList';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { Container, Main } from '@/styles/cloud/Layout';
import { useSelector } from 'react-redux';

const Cloud = () => {
  const timer = useSelector(selectTimer);
  const roomInfo = useSelector(selectRoomInfo);
  const game = useSelector(selectGame);

  return (
    <Container>
      <Header />
      <Main>
        <Info />
        <Board />
        <ChatLog />
      </Main>
      <PlayerList />
      <ChatInput />
    </Container>
  );
};

export default Cloud;
