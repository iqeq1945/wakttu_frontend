import {
  CRoomDesc,
  WrapRoomTitle,
  WrapGameInfo,
  GameInfo,
  RoomInfo,
  WrapInfo,
  Info,
  WrapMod,
  Mod,
  ModText,
  WatingLarge,
  WatingText,
} from "@/styles/roomList/RoomDesc";
import { RoomNumber } from "@/components";

const RoomDesc = () => {
  return (
    <CRoomDesc>
      <WrapRoomTitle>
        <RoomNumber number={724} />
        <h5>방제에요</h5>
      </WrapRoomTitle>
      <WrapGameInfo>
        <GameInfo src="/assets/game-info.png" />
        <RoomInfo>
          <WrapInfo>
            <Info $variant="title">플레이어</Info>
            <Info $variant="title">라운드 수</Info>
            <Info $variant="title">라운드 시간</Info>
          </WrapInfo>
          <WrapInfo>
            <Info>4/8명</Info>
            <Info>5개</Info>
            <Info>60초</Info>
          </WrapInfo>
        </RoomInfo>
      </WrapGameInfo>
      <WrapMod>
        <Mod>
          <ModText>매너, 품어, 외수</ModText>
        </Mod>
        <WatingLarge>
          <WatingText>대기 중</WatingText>
        </WatingLarge>
      </WrapMod>
    </CRoomDesc>
  );
};

export default RoomDesc;
