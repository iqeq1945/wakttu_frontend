import { SelectOption, DropdownSelect, DropdownOption, DropdownWrapper, Item, Leave, ListContainer, TopBar, DropdownText, DropdownImage, LeaveIcon, LeaveText } from "@/styles/mypage/CosmeticList";
import { RightWrapper } from "@/styles/mypage/MypageForm";
import { useEffect, useRef, useState } from "react";

const options = ["전체", "스킨", "머리", "손", "눈"]

const CosmeticList = () => {
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])


  return (
    <RightWrapper>
      <TopBar>

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

        <Leave>
          <LeaveText>나가기</LeaveText>
          <LeaveIcon src="/assets/right-line.svg" />
        </Leave>
      </TopBar>

      <ListContainer>
        <Item />
      </ListContainer>

    </RightWrapper>
  )
}

export default CosmeticList;