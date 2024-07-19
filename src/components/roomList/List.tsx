import { RoomNumber } from "@/components";
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
} from "@/styles/roomList/List";

const List = () => {
  return (
    <CList>
      <CItem>
        <Item>
          <Summary>
            <RoomNumber number={724} />
            <RoomInfo>
              <RoomNameCount>
                <RoomName>방제에요</RoomName>
                <RoomCount>
                  <SemiText>4</SemiText>
                  <SemiText $color={true}>/</SemiText>
                  <SemiText>8</SemiText>
                </RoomCount>
              </RoomNameCount>
              <RoomGame>
                <SemiText>쿵쿵따</SemiText>
                <MediumText $color={true}>라운드</MediumText>
                <MediumText>6</MediumText>
                <MediumText $color={true}>시간</MediumText>
                <MediumText>60초</MediumText>
              </RoomGame>
            </RoomInfo>
          </Summary>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </CItem>
    </CList>
  );
};

export default List;
