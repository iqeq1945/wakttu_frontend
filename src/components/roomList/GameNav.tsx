import { getR2URL } from '@/services/api';
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
  CSearch,
  SearchInput,
  CloseBtn,
} from '@/styles/roomList/GameNav';
import { ChangeEvent, ReactNode } from 'react';

interface Props {
  onRoomList: () => void;
  onModal: (type: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  children: ReactNode;
  keyword: string | undefined;
  open: boolean;
}

const GameNav = ({
  onModal,
  children,
  onRoomList,
  keyword,
  onChange,
  open,
  onClick,
}: Props) => {
  return (
    <CGameNav>
      <LeftIcons>
        <CreateRoomBtn onClick={() => onModal('CREATE_ROOM')}>
          <Plus src={getR2URL('/assets/icons/plus.svg')} alt="방 만들기 아이콘" />
          <PlusTitle>방 만들기</PlusTitle>
        </CreateRoomBtn>

        <CSearch $open={open}>
          <SearchBtn
            src={getR2URL('/assets/icons/search.svg')} alt="검색 아이콘"
            onClick={onClick}
          />
          {open ? (
            <>
              <SearchInput
                name="keyword"
                value={keyword}
                onChange={onChange}
                maxLength={10}
                autoComplete="off"
              />
              <CloseBtn
                src={getR2URL('/assets/icons/close.svg')} alt="닫기 아이콘"
                onClick={onClick}
              />
            </>
          ) : null}
        </CSearch>

        <RefreshBtn
          src={getR2URL('/assets/icons/refresh.svg')} alt="새로고침 아이콘"
          onClick={onRoomList}
        />
      </LeftIcons>
      <FilterToggled onClick={() => onModal('FILTER')}>
        <FilterIcon src={getR2URL('/assets/icons/filter.svg')} alt="필터 아이콘" />
        {children}
      </FilterToggled>
    </CGameNav>
  );
};

export default GameNav;
