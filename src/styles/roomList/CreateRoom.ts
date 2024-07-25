import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
  height: 100%;
`;

const CCreateRoom = styled.div`
  display: flex;
  width: 21.125rem;
  padding: 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 16px;
  border: 2px solid ${COLORS['gray-4']}
  background: ${COLORS.bg}
`;

const LabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375reml;
`;

const CreateIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const CreateLabel = styled.h5`
  color: ${COLORS.text};

  font-family: 'WantedSans-Semibold';
`;

const CCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

const CLabel = styled.span`
  display: flex;
  width: 4rem;
  height: 2.6875rem;
  flex-direction: column;
  justify-content: center;

  ${COLORS.text}

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-2']};
`;

const CInput = styled.input`
  display: flex;
  width: 12.625rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.625rem;

  border-radius: 8px;
  border: 1px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};

  color: ${COLORS['gray-2']}

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-1']};
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CheckIcon = styled.input`
  width: 1.25rem;
  height: 1.25rem;
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

export {
  Modal,
  CCreateRoom,
  LabelWithIcon,
  CreateIcon,
  CreateLabel,
  CCreate,
  CheckBox,
  CheckIcon,
  CLabel,
  CInput,
  Dropdown,
  DropdownItem,
  DropdownLine,
  Selected,
};
