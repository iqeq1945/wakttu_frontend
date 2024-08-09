
import { closeModal } from "@/redux/modal/modalSlice";
import { SelectOption, Wrap, DropdownSelect, DropdownOption, DropdownWrapper, Item, Leave, ListContainer, TopBar, DropdownText, DropdownImage, LeaveIcon, LeaveText, ItemImage, WrapFlex } from "@/styles/mypage/CosmeticList";
import { CosmeticBackground, CosmeticStyles } from "@/styles/mypage/CosmeticType";
import { RightWrapper } from "@/styles/mypage/MypageForm";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const options = Object.values(CosmeticStyles).map(style => style.name);

const CosmeticList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const handleClickOutside = (e: MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const handleLeaveClick = () => {
    dispatch(closeModal());
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])


  return (
    <RightWrapper>
      <TopBar>
        <Wrap>
          <WrapFlex>
            <DropdownSelect ref={dropDownRef} isOpen={isOpen} >
              <SelectOption onClick={toggleDropdown}>
                <DropdownText>{selectedOption}</DropdownText>
                <DropdownImage isOpen={isOpen} src="/assets/down-line.svg" />
              </SelectOption>
              <DropdownWrapper >
                {options.filter(option => option !== selectedOption).map(option => (
                  <DropdownOption key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </DropdownOption>
                ))}
              </DropdownWrapper>
            </DropdownSelect>

            <Leave onClick={handleLeaveClick}>
              <LeaveText>나가기</LeaveText>
              <LeaveIcon src="/assets/right-line.svg" />
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
  )
}

export default CosmeticList;