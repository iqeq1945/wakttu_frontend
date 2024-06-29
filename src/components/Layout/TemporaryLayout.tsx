import { Container } from '@/styles/common/Layout';

interface Props {
  children: React.ReactNode;
}

const TemporaryLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default TemporaryLayout;
