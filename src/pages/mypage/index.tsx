import Mystyle from '@/components/mypage/Mystyle';
import MystyleList from '@/components/mypage/MystyleList';
import Header from '@/containers/common/Header';
import { Container } from '@/styles/common/Layout';
import { Wrapper } from '@/styles/mypage/Mystyles';


const Mypage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Mystyle />
        <MystyleList />
      </Wrapper>
    </Container>
  );
};

export default Mypage;