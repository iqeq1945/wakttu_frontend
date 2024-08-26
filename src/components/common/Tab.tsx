import { Content } from '@/styles/common/Header';
import Router from 'next/router';
interface Props {
  menuName: string;
  href: string;
}

const Tab = ({ menuName, href }: Props) => {
  return (
    <Content onClick={() => Router.push(href)}>
      <li>{menuName}</li>
    </Content>
  );
};

export default Tab;
