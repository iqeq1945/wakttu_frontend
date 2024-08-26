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
import { MouseEvent } from 'react';

interface Props {
  roomList: Room[];
  onClick: (data: any, e: MouseEvent) => void;
  onToggle: (e: MouseEvent<HTMLDivElement>) => void;
  filter: {
    time: string | undefined;
    start: boolean | undefined;
    type: number | undefined;
    keyword: string | undefined;
  };
}

const List = ({ roomList, onClick, filter, onToggle }: Props) => {
  const checkFilter = (room: Room) => {
    const { type, start, title } = room;
    return (
      (filter.type === type || filter.type === undefined) &&
      (filter.start === start || filter.start === undefined) &&
      (filter.keyword === undefined ||
        (title as string).includes(filter.keyword))
    );
  };

  return (
    <CList onClick={onToggle}>
      <CItem>
        {roomList.map((room) => {
          if (checkFilter(room))
            return (
              <Item key={room.id} onClick={(e) => onClick(room, e)}>
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
                      {room.password && <Lock src="/assets/icons/lock.svg" />}
                    </RoomNameCount>
                    <RoomGame>
                      <SemiText>
                        {room.type === 0 ? '끝말잇기' : '쿵쿵따'}
                      </SemiText>
                      <MediumText $color={true}>라운드</MediumText>
                      <MediumText>{room.round}</MediumText>
                      <MediumText $color={true}>시간</MediumText>
                      <MediumText>{room.time! / 1000}초</MediumText>
                    </RoomGame>
                  </RoomInfo>
                </Summary>
                <Status $status={room.start ? 'start' : undefined}>
                  {room.start ? '게임 중' : '대기 중'}
                </Status>
              </Item>
            );
        })}
      </CItem>
    </CList>
  );
};

export default List;
