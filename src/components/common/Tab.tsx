import { Content } from '@/styles/common/Header';

interface Props {
  menuName: string;
  href: string;
}

const Tab = ({ menuName, href }: Props) => {
  return (
    <Content href={href}>
      <li>{menuName}</li>
    </Content>
  );
};

export default Tab;
