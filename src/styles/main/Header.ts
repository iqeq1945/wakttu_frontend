import styled from 'styled-components';
import { Content, HeaderBlock } from '../common/Header';

const MainHeaderBlock = styled(HeaderBlock)`
  border: none;
  background: none;
`;

const MainContent = styled(Content)`
  & > li {
    font-family: WantedSans-Medium;
  }
`;

export { MainHeaderBlock, MainContent };
