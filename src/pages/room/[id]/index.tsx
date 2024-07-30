import { Container } from '@/styles/common/Layout';
import Header from '@/containers/common/Header';
import { LeftFooter, RightWrapper, WrapRoom } from '@/styles/room/Room';
import { LeftWrapper, Copyright } from '@/styles/room/Room';
import RoomNav from '@/containers/room/RoomNav';
import Chat from '@/containers/room/Chat';
import Ready from '@/containers/room/Ready';
import PlayerList from '@/containers/room/PlyaerList';
import RoomDesc from '@/containers/room/RoomDesc';
import { useSelector } from 'react-redux';
import { selectModal } from '@/redux/modal/modalSlice';
import UpdateRoom from '@/containers/room/UpdateRoom';

const Room = () => {
  const modal = useSelector(selectModal);

  return (
    <Container>
      <Header />
      <WrapRoom>
        <LeftWrapper>
          <RoomDesc />
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
          <PlayerList />
          <Chat />
        </RightWrapper>
      </WrapRoom>
      {modal.modalType === 'UPDATE_ROOM' && modal.open && <UpdateRoom />}
    </Container>
  );
};

export default Room;
