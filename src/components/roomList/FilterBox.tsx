import {
  CSelect,
  Dropdown,
  DropdownItem,
  DropdownLine,
  FilterLabel,
  FilterWithText,
  Selected,
} from '@/styles/roomList/FilterBox';
import { FilterIcon } from '@/styles/roomList/GameNav';
import uuid from 'react-uuid';

interface Props {
  items: any[];
}

const FilterBox = ({ items }: Props) => {
  return (
    <CSelect>
      <FilterWithText>
        <FilterIcon src="/assets/filter.svg" />
        <FilterLabel>필터</FilterLabel>
      </FilterWithText>
      <Dropdown>
        <Selected>선택된것</Selected>
        <DropdownLine src="/assets/down-line.svg" />
        {items.map((itme) => {
          return <DropdownItem key={uuid()}></DropdownItem>;
        })}
        <DropdownItem></DropdownItem>
      </Dropdown>
    </CSelect>
  );
};

export default FilterBox;
