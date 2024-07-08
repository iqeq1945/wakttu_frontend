import styled from 'styled-components';
import { COLORS } from '../theme';

const WrapForm = styled.div`
  display: inline-flex;
  height: 12.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 3.375rem;

  border-radius: 1rem;
  border: 0.125rem solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const GameStart = styled.span`
  color: ${COLORS.primary};
  font-size: 2rem;
  font-weight: 600;
`;
