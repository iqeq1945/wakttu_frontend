import { getRoomList } from '@/services/socket/socket';
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

interface Props {
  onCreateRoom: () => void;
  onFilter: () => void;
}

const GameNav = ({ onCreateRoom, onFilter }: Props) => {
  return (
    <CGameNav>
      <LeftIcons>
        <CreateRoomBtn onClick={onCreateRoom}>
          <Plus src="/assets/plus.svg" />
          <PlusTitle>방 만들기</PlusTitle>
        </CreateRoomBtn>
        <SearchBtn src="/assets/search.svg" />
        <RefreshBtn src="/assets/refresh.svg" onClick={getRoomList} />
      </LeftIcons>
      <FilterToggled onClick={onFilter}>
        <FilterIcon src="/assets/filter.svg" />
      </FilterToggled>
    </CGameNav>
  );
};

export default GameNav;
