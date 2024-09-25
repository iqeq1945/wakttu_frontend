import { Container, ContainerContent } from '@/styles/book/BookForm';
import { CosmeticInfo } from '@/components';
import CosmeticList from '@/containers/book/CosmeticList';
import Header from '@/containers/common/Header';

const Book = () => {
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
export default Book;
