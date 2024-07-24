import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const CSelect = styled.div`
  display: flex;
  width: 16.125rem;
  padding: 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 16px;
  border: 2px solid ${COLORS['gray-3']};
  background: ${COLORS.bg};
  box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.25);
`;

const Dropdown = styled.ul`
  display: flex;
  width: 12.5rem;
  padding: 0.625rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const DropdownLine = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const DropdownItem = styled.li`
  width: 12.5rem;
  padding: 0.375rem 1rem;
`;

const Selected = styled.span`
  color: ${COLORS.text};

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-1']};
`;

const FilterWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const FilterLabel = styled.h5`
  color: ${COLORS.text};

  font-family: 'WantedSans-SemiBold';
`;

export {
  CSelect,
  FilterLabel,
  FilterWithText,
  Dropdown,
  DropdownItem,
  DropdownLine,
  Selected,
};
