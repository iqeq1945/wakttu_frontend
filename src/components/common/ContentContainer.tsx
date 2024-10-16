import { ContentContainer } from '@/styles/common/Layout';
import Achieves from '@/containers/common/Achieve';
interface Props {
  path: string;
  children: JSX.Element;
}

const Container = ({ path, children }: Props) => {
  return (
    <ContentContainer path={path}>
      {children}
      <Achieves />
    </ContentContainer>
  );
};

export default Container;
