import { Container, ContainerContent } from '@/styles/achieve/Layout';
import Header from '@/containers/common/Header';
import { AchieveInfo } from '@/components';
import { AchieveList } from '@/components';

const Achieve = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <AchieveInfo />
        <AchieveList />
      </ContainerContent>
    </Container>
  );
};

export default Achieve;
