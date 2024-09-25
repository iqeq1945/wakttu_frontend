import Header from '@/containers/common/Header';
import MyPage from '@/containers/mypage/Mypage';
import { Container } from '@/styles/common/Layout';
import { Wrapper } from '@/styles/mypage/Mystyles';

const Mypage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <MyPage />
      </Wrapper>
    </Container>
  );
};

export default Mypage;
