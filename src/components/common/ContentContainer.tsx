import { ContentContainer } from '@/styles/common/Layout';
import Achieves from '@/containers/common/Achieve';
import { useLoading } from '@/hooks/useLoading';
import Loading from './Loding';
interface Props {
  path: string;
  children: React.ReactNode;
}

const Container = ({ path, children }: Props) => {
  const isLoading = useLoading();
  return (
    <ContentContainer path={path}>
      {children}
      {isLoading ? <Loading /> : null}
      <Achieves />
    </ContentContainer>
  );
};

export default Container;
