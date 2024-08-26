import { MainContent } from '@/styles/main/Header';

interface Props {
  menuName: string;
  href: string;
}

const Tab = ({ menuName, href }: Props) => {
  return (
    <MainContent>
      <li>{menuName}</li>
    </MainContent>
  );
};

export default Tab;
