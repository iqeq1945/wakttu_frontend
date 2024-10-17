import { getR2URL } from '@/services/api';
import { Container, Logo } from '@/styles/common/Loading';

const Loading = () => {
  return (
    <Container>
      <Logo src={getR2URL('/assets/icons/logo.svg')} />
      <h3>로딩 중...</h3>
    </Container>
  );
};

export default Loading;
