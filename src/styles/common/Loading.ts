import styled from 'styled-components';
import { COLORS } from '../theme';

export const Container = styled.div<{ loading: boolean }>`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: ${({ loading }) => (loading ? 1000 : -1000)};

  opacity: ${({ loading }) => (loading ? 1 : 0)};
`;

export const CLoading = styled.h2`
  color: ${COLORS.bg};
`;
