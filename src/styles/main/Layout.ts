import styled from 'styled-components';
import { ContentContainer, Container } from '../common/Layout';

const MainContainer = styled(ContentContainer)`
  background: url('/assets/background.png') lightgray 50% / cover no-repeat;
`;

const Wrapper = styled(Container)`
  padding: 19.625rem 0rem 26rem;
  justify-content: flex-center;
  align-items: flex-end;
  gap: 0;
`;
export { MainContainer, Wrapper };
