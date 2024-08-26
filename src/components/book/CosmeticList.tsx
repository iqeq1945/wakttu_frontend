import { closeModal } from '@/redux/modal/modalSlice';
import {
  SelectOption,
  Wrap,
  DropdownSelect,
  DropdownOption,
  DropdownWrapper,
  Item,
  Leave,
  ListContainer,
  TopBar,
  DropdownText,
  DropdownImage,
  LeaveIcon,
  LeaveText,
  ItemImage,
  WrapFlex,
} from '@/styles/book/CosmeticList';
import { CosmeticBackground } from '@/styles/book/CosmeticType';
import { RightWrapper } from '@/styles/book/MypageForm';
import { RefObject } from 'react';

interface Props {
  isOpen: boolean;
  dropDownRef: RefObject<HTMLDivElement>;
  selectedOption: string;
  options: any;
  toggleDropdown: () => void;
  handleOptionClick: (option: string) => void;
  handleLeaveClick: () => void;
}

const CosmeticList = ({
  isOpen,
  dropDownRef,
  toggleDropdown,
  options,
  selectedOption,
  handleOptionClick,
  handleLeaveClick,
}: Props) => {
  return (
    <RightWrapper>
      <TopBar>
        <Wrap>
          <WrapFlex>
            <DropdownSelect ref={dropDownRef} isOpen={isOpen}>
              <SelectOption onClick={toggleDropdown}>
                <DropdownText>{selectedOption}</DropdownText>
                <DropdownImage
                  isOpen={isOpen}
                  src="/assets/icons//down-line.svg"
                />
              </SelectOption>
              <DropdownWrapper>
                {options
                  .filter((option: string) => option !== selectedOption)
                  .map((option: string) => (
                    <DropdownOption
                      key={option}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </DropdownOption>
                  ))}
              </DropdownWrapper>
            </DropdownSelect>

            <Leave onClick={handleLeaveClick}>
              <LeaveText>나가기</LeaveText>
              <LeaveIcon src="/assets/icons//right-line.svg" />
            </Leave>
          </WrapFlex>
        </Wrap>
      </TopBar>

      <ListContainer>
        {/* {dataset.map(data => (
          <Item key={data.#}>
            <CosmeticBackground $itemType={data.#}></CosmeticBackground>
            <ItemImage src={data.img} />
          </Item>
        ))} */}
        <Item>
          <CosmeticBackground $itemType="skin"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="skin"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="skin"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="head"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="head"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="hand"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="hand"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="eye"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="eye"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="eye"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="eye"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
        <Item>
          <CosmeticBackground $itemType="eye"></CosmeticBackground>
          <ItemImage src="/assets/ipali.png" />
        </Item>
      </ListContainer>
    </RightWrapper>
  );
};

export default CosmeticList;
