import {
  CDropdown,
  CSelect,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownLine,
  FilterLabel,
  FilterWithText,
  Selected,
} from '@/styles/roomList/FilterBox';
import { FilterIcon } from '@/styles/roomList/GameNav';
import React, { MouseEvent, RefObject } from 'react';

interface Props {
  modalRef: RefObject<HTMLDivElement>;
}

const FilterBox = ({ modalRef }: Props) => {
  return (
    <CSelect ref={modalRef}>
      <FilterWithText>
        <FilterIcon src="/assets/filter.svg" />
        <FilterLabel>필터</FilterLabel>
      </FilterWithText>
      <CDropdown>
        <DropdownLabel>생성순</DropdownLabel>
        <Dropdown>
          <Selected>최근게임 순</Selected>
          <DropdownLine src="/assets/down-line.svg" />
          <DropdownItem>최근 게임 순</DropdownItem>
          <DropdownItem>오래된 게임 순</DropdownItem>
        </Dropdown>
      </CDropdown>
      <CDropdown>
        <DropdownLabel>게임</DropdownLabel>
        <Dropdown>
          <Selected>전체</Selected>
          <DropdownLine src="/assets/down-line.svg" />
          <DropdownItem>전체</DropdownItem>
          <DropdownItem>끝말잇기</DropdownItem>
          <DropdownItem>쿵쿵따</DropdownItem>
        </Dropdown>
      </CDropdown>
      <CDropdown>
        <DropdownLabel>방 상태</DropdownLabel>
        <Dropdown>
          <Selected>전체</Selected>
          <DropdownLine src="/assets/down-line.svg" />
          <DropdownItem>전체</DropdownItem>
          <DropdownItem>대기중</DropdownItem>
          <DropdownItem>게임중</DropdownItem>
        </Dropdown>
      </CDropdown>
    </CSelect>
  );
};

export default FilterBox;
