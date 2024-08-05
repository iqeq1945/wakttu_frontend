import {
  CDropdown,
  CSelect,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownLine,
  FilterLabel,
  FilterWithText,
  Icon,
  Selected,
} from '@/styles/roomList/FilterBox';
import React, { MouseEvent, RefObject } from 'react';

interface Props {
  modalRef: RefObject<HTMLDivElement>;
  onDropdown: (index: number) => void;
  isDown: boolean[];
  onSelect: (e: any, index: number) => void;
  selected: string[];
}

const FilterBox = ({
  modalRef,
  onDropdown,
  isDown,
  onSelect,
  selected,
}: Props) => {
  return (
    <CSelect ref={modalRef}>
      <FilterWithText>
        <Icon src="/assets/icons/filter-green.svg" />
        <FilterLabel>필터</FilterLabel>
      </FilterWithText>
      <CDropdown>
        <DropdownLabel>생성순</DropdownLabel>
        <Dropdown onClick={() => onDropdown(0)}>
          <Selected>{selected[0]}</Selected>
          {!isDown[0] && <DropdownLine src="/assets/icons/down-line.svg" />}
          {isDown[0] && (
            <>
              <DropdownLine src="/assets/icons/up-line.svg" />
              <DropdownItem
                data-value="asc"
                onClick={(e: MouseEvent) => onSelect(e, 0)}
              >
                최근 게임 순
              </DropdownItem>
              <DropdownItem
                data-value="desc"
                onClick={(e: MouseEvent) => onSelect(e, 0)}
              >
                오래된 게임 순
              </DropdownItem>
            </>
          )}
        </Dropdown>
      </CDropdown>
      <CDropdown>
        <DropdownLabel>게임</DropdownLabel>
        <Dropdown onClick={() => onDropdown(1)}>
          <Selected>{selected[1]}</Selected>
          {!isDown[1] && <DropdownLine src="/assets/icons/down-line.svg" />}
          {isDown[1] && (
            <>
              <DropdownLine src="/assets/icons/up-line.svg" />
              <DropdownItem onClick={(e: MouseEvent) => onSelect(e, 1)}>
                전체
              </DropdownItem>
              <DropdownItem
                onClick={(e: MouseEvent) => onSelect(e, 1)}
                data-value="0"
              >
                끝말잇기
              </DropdownItem>
              <DropdownItem
                onClick={(e: MouseEvent) => onSelect(e, 1)}
                data-value="1"
              >
                쿵쿵따
              </DropdownItem>
            </>
          )}
        </Dropdown>
      </CDropdown>
      <CDropdown>
        <DropdownLabel>방 상태</DropdownLabel>
        <Dropdown onClick={() => onDropdown(2)}>
          <Selected>{selected[2]}</Selected>
          {!isDown[2] && <DropdownLine src="/assets/icons/down-line.svg" />}
          {isDown[2] && (
            <>
              <DropdownLine src="/assets/icons/up-line.svg" />
              <DropdownItem onClick={(e: MouseEvent) => onSelect(e, 2)}>
                전체
              </DropdownItem>
              <DropdownItem
                onClick={(e: MouseEvent) => onSelect(e, 2)}
                data-value="대기중"
              >
                대기중
              </DropdownItem>
              <DropdownItem
                onClick={(e: MouseEvent) => onSelect(e, 2)}
                data-value="게임중"
              >
                게임중
              </DropdownItem>
            </>
          )}
        </Dropdown>
      </CDropdown>
    </CSelect>
  );
};

export default FilterBox;
