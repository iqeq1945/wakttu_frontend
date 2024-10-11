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
          <Plus src={getR2URL('/assets/icons/plus.svg')} />
          <PlusTitle>방 만들기</PlusTitle>
        </CreateRoomBtn>

        <CSearch $open={open}>
          <SearchBtn
            src={getR2URL('/assets/icons/search.svg')}
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
                src={getR2URL('/assets/icons/close.svg')}
                onClick={onClick}
              />
            </>
          ) : null}
        </CSearch>

        <RefreshBtn
          src={getR2URL('/assets/icons/refresh.svg')}
          onClick={onRoomList}
        />
      </LeftIcons>
      <FilterToggled onClick={() => onModal('FILTER')}>
        <FilterIcon src={getR2URL('/assets/icons/filter.svg')} />
        {children}
      </FilterToggled>
    </CGameNav>
  );
};

export default GameNav;
