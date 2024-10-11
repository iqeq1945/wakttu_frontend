import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;
  background: rgb(0, 0, 0, 0.1);
`;

const COption = styled.div`
  display: flex;
  width: 50rem;

  padding: 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 2rem;
  border: 2px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const CVolume = styled.div`
  display: flex;
  align-items: center;
  width: 48rem;
`;

const VoulmeText = styled.h3``;

const Range = styled.input`
  width: 38rem;
`;

export { VoulmeText, Range, CVolume, COption, Modal };
