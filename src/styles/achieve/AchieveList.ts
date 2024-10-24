import styled from 'styled-components';
import { scrollbarStyles } from './Scrollbar';
import { COLORS } from '../theme';

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: scroll;

  margin-bottom: 2.5rem;
  gap: 2rem;

  ${scrollbarStyles};
`;

export const BadgeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 10rem;
  height: 10rem;

  border: 1px solid ${COLORS['gray-4']};
  border-radius: 1rem;
  box-sizing: border-box;

  cursor: pointer;
`;

export const Badge = styled.img<{ got: boolean }>`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  filter: ${({ got }) => (got ? 'grayscale(0)' : 'grayscale(1)')};
  border-radius: 22.5rem;
`;

export const Hidden = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 22.5rem;
  background-color: black;
`;
