import { Header, RoomDesc, PlayerInfo, GameNav } from '@/components';
import { Container } from '@/styles/common/Layout';
import { WrapRoomList, LeftWrapper, RightWrapper, Copyright } from '@/styles/roomList/RoomList';

const RoomList = () => {
  return (
    <Container>
      <Header />
      <WrapRoomList>
        <LeftWrapper>
          <RoomDesc />
          <PlayerInfo />
          <Copyright>
            © copyright WAKTTU.
            <br />
            왁뚜는 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
          </Copyright>
        </LeftWrapper>
        <RightWrapper>
          <GameNav />
        </RightWrapper>
      </WrapRoomList>
    </Container>
  );
};

export default RoomList;
