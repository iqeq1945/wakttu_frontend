import {
  CRoomDesc,
  WrapRoomTitle,
  WrapRoomNumber,
  RoomNumber,
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
  JoinButton,
  JoinText,
} from '@/styles/roomList/RoomDesc';

const RoomDesc = () => {
  return (
    <CRoomDesc>
      <WrapRoomTitle>
        <WrapRoomNumber>
          <RoomNumber>724</RoomNumber>
        </WrapRoomNumber>
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
      <JoinButton>
        <JoinText>입장하기</JoinText>
      </JoinButton>
    </CRoomDesc>
  );
};

export default RoomDesc;
