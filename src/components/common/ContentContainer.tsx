import { ContentContainer } from '@/styles/common/Layout';

interface Props {
  path: string;
  children: JSX.Element;
}

const Container = ({ path, children }: Props) => {
  return <ContentContainer path={path}>{children}</ContentContainer>;
};

export default Container;
