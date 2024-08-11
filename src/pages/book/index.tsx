import { Container, ContainerContent } from '@/styles/book/MypageForm';
import { CosmeticInfo } from '@/components';
import CosmeticList from '@/containers/book/CosmeticList';
import Header from '@/containers/common/Header';

const Mypage = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <CosmeticInfo />
        <CosmeticList />
      </ContainerContent>
    </Container>
  );
};
export default Mypage;
