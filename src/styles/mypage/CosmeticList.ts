import styled, { css } from "styled-components";
import { COLORS } from "@/styles/theme";
import { scrollbarStyles } from "./Scrollbar";
import { BackgroundImage } from "./CosmeticType";

export type Variant = 'block' | 'none';

const TopBar = styled.div`
  position: relative;
  z-index: 3;
  height: 3.75rem;
`;

const Wrap = styled.div`
  position: absolute;
  width: 34rem;
`;

const WrapFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DropdownSelect = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 12.625rem;
  max-height: ${({ isOpen }) => (isOpen ? '15rem' : '2.75rem')};
  
  border: 1px solid ${COLORS["gray-4"]};
  border-radius: 0.5rem;
  background-color: #fff;

  cursor: pointer;
  transition: max-height 0.3s ease;
`;

const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.625rem 1rem;
  background-color: #fff;
`;

const DropdownText = styled.div`
  font-weight: 600;
  color: ${COLORS.text};
`;

const DropdownImage = styled.img<{ isOpen: boolean }>`
  width: 1.5rem;
  height: 1.5rem;

  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)')};
  transition: transform 0.3s ease;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  max-height: 90vh;
  ${scrollbarStyles};
`;

const DropdownOption = styled.div`
  height: 2.75rem;
  padding: 10px 1rem;
  color: ${COLORS["gray-2"]};
  cursor: pointer;
  
  &:hover {
    background-color: ${COLORS["gray-4"]};
  }
`;

const Leave = styled.div`
  display: flex;
  align-items: center;

  padding: 0.625rem 0;
  cursor: pointer;
`;

const LeaveText = styled.div`
  font-size: 1.125rem;
  color: ${COLORS["gray-3"]};
`;

const LeaveIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  
  padding-bottom: 2rem;
  gap: 2rem;

  ${scrollbarStyles};
`;

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 10rem;
  height: 10rem;

  border: 1px solid ${COLORS["gray-4"]};
  border-radius: 1rem;
  box-sizing: border-box;

  ${BackgroundImage}
  cursor: pointer;
`;

const ItemImage = styled.img`
  z-index: 2;
  width: 6.625rem;
  height: 6.625rem;
`;

export {
  TopBar,
  DropdownWrapper,
  SelectOption,
  DropdownText,
  DropdownImage,
  DropdownSelect,
  DropdownOption,
  Leave,
  LeaveText,
  LeaveIcon,
  Wrap,
  WrapFlex,
  ListContainer,
  Item,
  ItemImage
}