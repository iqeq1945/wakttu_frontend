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
  TitleText,
} from '@/styles/roomList/RoomDesc';
import { RoomNumber } from '@/components';
import { Room } from '@/services/socket/socket';
import { getR2URL } from '@/services/api';

interface Props {
  roomInfo: Room;
}

const RoomDesc = ({ roomInfo }: Props) => {
  return (
    <CRoomDesc>
      <WrapRoomTitle>
        <RoomNumber number={roomInfo.idx as number} />
        <TitleText>방제에요</TitleText>
      </WrapRoomTitle>
      <WrapGameInfo>
        {roomInfo.type === 0 ? (
          <GameInfo src={getR2URL('/assets/game-info.png')} />
        ) : (
          ''
        )}
        {roomInfo.type === 1 ? (
          <GameInfo src={getR2URL('/assets/game-info-2.png')} />
        ) : (
          ''
        )}
        {roomInfo.type === 2 ? (
          <GameInfo src={getR2URL('/assets/game-info-3.png')} />
        ) : (
          ''
        )}
        <RoomInfo>
          <WrapInfo>
            <Info $variant="title">플레이어</Info>
            <Info $variant="title">라운드 수</Info>
            <Info $variant="title">라운드 시간</Info>
          </WrapInfo>
          <WrapInfo>
            <Info>
              {roomInfo.users.length}/{roomInfo.total}명
            </Info>
            <Info>{roomInfo.round}</Info>
            <Info>{roomInfo.type === 2 ? '30' : roomInfo.time! / 1000}초</Info>
          </WrapInfo>
        </RoomInfo>
      </WrapGameInfo>
      <WrapMod>
        <Mod>
          <ModText>
            {roomInfo.option?.length ? roomInfo.option.join(', ') : '-'}
          </ModText>
        </Mod>
        <WatingLarge>
          <WatingText>대기 중</WatingText>
        </WatingLarge>
      </WrapMod>
    </CRoomDesc>
  );
};

export default RoomDesc;
