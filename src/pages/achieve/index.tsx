import { Container, ContainerContent } from '@/styles/achieve/Layout';
import Header from '@/containers/common/Header';
import Achieve from '@/containers/achieve/Achieve';

const Achieves = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Achieve />
      </ContainerContent>
    </Container>
  );
};

export default Achieves;
