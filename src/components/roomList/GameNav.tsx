import { getRoomList, createRoom } from '@/services/socket/socket';
import {
  CGameNav,
  LeftIcons,
  CreateRoomBtn,
  Plus,
  SearchBtn,
  RefreshBtn,
  FilterToggled,
  FilterIcon,
  PlusTitle,
} from '@/styles/roomList/GameNav';

const GameNav = () => {
  const CreateRoom = () => {
    const data = {
      title: '방의 제목',
      type: 0,
      round: 6,
      option: ['품어', '매너', '외수'],
      total: 8,
      time: 60000,
    };
    createRoom(data);
  };
  return (
    <CGameNav>
      <LeftIcons>
        <CreateRoomBtn onClick={CreateRoom}>
          <Plus src="/assets/plus.svg" />
          <PlusTitle>방 만들기</PlusTitle>
        </CreateRoomBtn>
        <SearchBtn src="/assets/search.svg" />
        <RefreshBtn src="/assets/refresh.svg" onClick={getRoomList} />
      </LeftIcons>
      <FilterToggled>
        <FilterIcon src="/assets/filter.svg" />
      </FilterToggled>
    </CGameNav>
  );
};

export default GameNav;
