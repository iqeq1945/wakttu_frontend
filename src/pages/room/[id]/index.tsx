import { Container } from "@/styles/common/Layout";
import { GameNav, Header, PlayerList } from "@/components";
import { LeftFooter, RightWrapper, WrapRoom } from "@/styles/room/Room";
import { LeftWrapper, Copyright } from "@/styles/room/Room";
import { ORoomDesc, Ready } from "@/components";
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
          <GameNav />
          <PlayerList />
        </RightWrapper>
      </WrapRoom>
    </Container>
  );
};

export default Room;
