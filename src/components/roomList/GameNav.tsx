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
} from "@/styles/roomList/GameNav";

const GameNav = () => {
  return (
    <CGameNav>
      <LeftIcons>
        <CreateRoomBtn>
          <Plus src="/assets/plus.svg" />
          <PlusTitle>방 만들기</PlusTitle>
        </CreateRoomBtn>
        <SearchBtn src="/assets/search.svg" />
        <RefreshBtn src="/assets/refresh.svg" />
      </LeftIcons>
      <FilterToggled>
        <FilterIcon src="/assets/filter.svg" />
      </FilterToggled>
    </CGameNav>
  );
};

export default GameNav;
