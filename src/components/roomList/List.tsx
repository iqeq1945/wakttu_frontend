import { RoomNumber } from '@/components';
import { Room } from '@/services/socket/socket';
import {
  CItem,
  CList,
  Item,
  RoomNameCount,
  RoomName,
  RoomCount,
  Summary,
  RoomInfo,
  SemiText,
  MediumText,
  RoomGame,
  Status,
  Lock,
} from '@/styles/roomList/List';

interface Props {
  roomList: Room[];
  onClick: (data: any) => void;
}

const List = ({ roomList, onClick }: Props) => {
  return (
    <CList>
      <CItem>
        {roomList.map((room) => {
          return (
            <Item key={room.id} onClick={() => onClick(room)}>
              <Summary>
                <RoomNumber number={room.idx as number} />
                <RoomInfo>
                  <RoomNameCount>
                    <RoomName>{room.title}</RoomName>
                    <RoomCount>
                      <SemiText>{room.users.length}</SemiText>
                      <SemiText $color={true}>/</SemiText>
                      <SemiText>{room.total}</SemiText>
                    </RoomCount>
                    {room.password && <Lock src="/assets/lock.svg" />}
                  </RoomNameCount>
                  <RoomGame>
                    <SemiText>
                      {room.type === 0 ? '끝말잇기' : '쿵쿵따'}
                    </SemiText>
                    <MediumText $color={true}>라운드</MediumText>
                    <MediumText>{room.round}</MediumText>
                    <MediumText $color={true}>시간</MediumText>
                    <MediumText>{room.time / 1000}초</MediumText>
                  </RoomGame>
                </RoomInfo>
              </Summary>
              <Status $status={room.status ? 'start' : undefined}>
                {room.status ? '게임 중' : '대기 중'}
              </Status>
            </Item>
          );
        })}
      </CItem>
    </CList>
  );
};

export default List;
