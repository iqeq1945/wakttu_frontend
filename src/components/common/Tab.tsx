import { Content } from '@/styles/common/Header';
import Router from 'next/router';
interface Props {
  menuName: string;
  href: string;
  goHome?: () => void;
}

const Tab = ({ menuName, href, goHome }: Props) => {
  return (
    <Content onClick={goHome ? goHome : () => Router.push(href)}>
      <li>{menuName}</li>
    </Content>
  );
};

export default Tab;
