import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const Modal = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;
  background: rgb(0, 0, 0, 0.5);
`;

const CCreateRoom = styled.div`
  display: flex;
  width: 22rem;

  padding: 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 16px;
  border: 2px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const LabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
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
  justify-content: space-between;

  gap: 1rem;
`;

const CLabel = styled.span`
  display: flex;
  width: 4rem;
  height: 2.6875rem;
  flex-direction: column;
  justify-content: center;

  white-space: nowrap;
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

  input {
    display: none;
  }
`;

const CCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const CheckIcon = styled.img`
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

const CButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
`;

const ConfirmButton = styled.button`
  display: flex;
  padding: 1rem 2.625rem;
  justify-content: center;
  align-items: center;

  flex: 1 0 0;

  border-radius: 8px;
  border: none;
  background: ${COLORS.primary};

  &:hover {
    background: ${COLORS['primary-hov']};
  }
`;

const CancleButton = styled.button`
  display: flex;
  width: 5rem;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Outline-Black, rgba(0, 0, 0, 0.1));
  background: ${COLORS['gray-4']};

  &:hover {
    background: ${COLORS['gray-5']};
  }
`;

const ButtonText = styled.span<{ $color?: boolean }>`
  color: ${({ $color }) => ($color ? COLORS['gray-1'] : COLORS.bg)};
  text-align: center;
  font-family: 'WantedSans-SemiBold';
  font-size: ${FONT_SIZES['subtitle-1']};
  font-weight: 600;
`;

export {
  Modal,
  CCreateRoom,
  LabelWithIcon,
  CreateIcon,
  CreateLabel,
  CCreate,
  CCheck,
  CheckBox,
  CheckIcon,
  CLabel,
  CInput,
  Dropdown,
  DropdownItem,
  DropdownLine,
  Selected,
  CButton,
  ButtonText,
  ConfirmButton,
  CancleButton,
};
