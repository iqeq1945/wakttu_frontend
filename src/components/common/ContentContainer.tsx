import { getR2URL } from '@/services/api';
import { ContentContainer } from '@/styles/common/Layout';
import Acheive from './Acheive';

interface Props {
  path: string;
  children: JSX.Element;
}

const Container = ({ path, children }: Props) => {
  return (
    <ContentContainer path={path}>
      {children}
      <Acheive />
    </ContentContainer>
  );
};

export default Container;
