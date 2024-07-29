import { Container } from '@/styles/common/Layout';
import Header from '@/containers/common/Header';
import { PlayerList } from '@/components';
import { LeftFooter, RightWrapper, WrapRoom } from '@/styles/room/Room';
import { LeftWrapper, Copyright } from '@/styles/room/Room';
import { ORoomDesc } from '@/components';
import RoomNav from '@/containers/room/RoomNav';
import Chat from '@/containers/roomlist/Chat';
import Ready from '@/containers/room/Ready';

const Room = () => {
  return (
    <Container>
      <Header />
      <WrapRoom>
        <LeftWrapper>
          <ORoomDesc />
          <LeftFooter>
            <Ready />
            <Copyright>
              © copyright WAKTTU.
              <br />
              왁뚜는 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
            </Copyright>
          </LeftFooter>
        </LeftWrapper>
        <RightWrapper>
          <RoomNav />
          <PlayerList users={[{ id: 'hi', name: 'bye' }]} />
          <Chat />
        </RightWrapper>
      </WrapRoom>
    </Container>
  );
};

export default Room;
