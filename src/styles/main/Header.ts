import styled from 'styled-components';
import { HeaderBlock } from '../common/Header';
import { COLORS } from '../theme';

const MainHeaderBlock = styled(HeaderBlock)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  width: 88rem;
  height: 4.1875rem;

  padding: 0 2rem;

  border-radius: 1rem;
  border: none;
  background: none;
`;

const MainContent = styled.span`
  font-family: 'WantedSans-Medium';
  font-size: 16px;
  font-weight: 500;

  color: ${COLORS.text};
  cursor: pointer;
`;

export { MainHeaderBlock, MainContent };
