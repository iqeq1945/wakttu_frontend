import { MainHeader } from '@/components';
import { getR2URL } from '@/services/api';
import { Container } from '@/styles/common/Layout';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Intro = () => {
  return (
    <Container>
      <MainHeader />
      <ScrollContainer>
        <StyledImage src={getR2URL('/intro.png')} alt="" />
      </ScrollContainer>
    </Container>
  );
};

export default Intro;
