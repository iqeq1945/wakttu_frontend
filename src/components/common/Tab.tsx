import { Content } from '@/styles/common/Header';

interface Props {
  menuName: string;
  goRouter: () => void;
}

const Tab = ({ menuName, goRouter }: Props) => {
  return (
    <Content onClick={goRouter}>
      <li>{menuName}</li>
    </Content>
  );
};

export default Tab;
