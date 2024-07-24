import GameNav from '@/containers/roomlist/GameNav';
import List from '@/containers/roomlist/List';
import RoomDesc from '@/containers/roomlist/RoomDesc';
import Header from '@/containers/common/Header';
import { Container } from '@/styles/common/Layout';
import Chat from '@/containers/roomlist/Chat';
import {
  WrapRoomList,
  LeftWrapper,
  RightWrapper,
  Copyright,
} from '@/styles/roomList/RoomList';
import PlayerInfo from '@/containers/roomlist/PlayerInfo';

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
          <List />
          <Chat />
        </RightWrapper>
      </WrapRoomList>
    </Container>
  );
};

export default RoomList;
