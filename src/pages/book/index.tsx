import { Container, ContainerContent } from '@/styles/book/BookForm';
import Cosmetic from '@/containers/book/Cosmetic';
import Header from '@/containers/common/Header';

const Book = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Cosmetic />
      </ContainerContent>
    </Container>
  );
};
export default Book;
