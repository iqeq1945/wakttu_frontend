import styled, { css } from "styled-components";
import { COLORS } from "@/styles/theme";
import { scrollbarStyles } from "../common/Scrollbar";

export type Variant = 'block' | 'none';

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;


const DropdownSelect = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;

  width: 12.625rem;
  max-height: ${({ isOpen }) => (isOpen ? '15rem' : '2.75rem')};
  
  border-radius: 0.5rem;
  border: 1px solid ${COLORS["gray-4"]};
  background-color: #fff;

  list-style-type: none;

  transition: max-height 0.5s;
  overflow: hidden;
  cursor: pointer;

  transition: max-height 0.3s ease;
  z-index: 3;
`;

const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2.75rem;

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

  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)')};
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 90vh;
  overflow-y: auto;

   ${scrollbarStyles}
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

`;

const Item = styled.div`

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
  ListContainer,
  Item
}