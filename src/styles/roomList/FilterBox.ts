import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const CSelect = styled.div`
  display: flex;
  width: 16.125rem;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 2rem;
  right: 0;
  padding: 1.75rem;
  gap: 1.5rem;

  border-radius: 16px;
  border: 2px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const CDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const DropdownLabel = styled.span`
  color: ${COLORS.text};

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-2']};
`;
const Dropdown = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  width: 12.5rem;
  padding: 0.625rem 1rem;

  border-radius: 8px;
  border: 1px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const DropdownItem = styled.li`
  width: 12.5rem;

  padding: 6px 0;
  text-align: left;
  color: ${COLORS.text};

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-1']};

  &:first-of-type {
    padding-top: 12px;
  }
`;

const DropdownLine = styled.img`
  width: 1.5rem;
  height: 1.5rem;
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
  CDropdown,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownLine,
  Selected,
};
