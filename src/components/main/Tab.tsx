import { MainContent, MenuName } from '@/styles/main/Header';

interface Props {
  menuName: string;
  href: string;
}

const Tab = ({ menuName, href }: Props) => {
  return (
    <MainContent href={href}>
      <MenuName>{menuName}</MenuName>
    </MainContent>
  );
};

export default Tab;
