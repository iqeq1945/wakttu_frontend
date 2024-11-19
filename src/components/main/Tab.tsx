import { MainContent } from '@/styles/main/Header';
import { useRouter } from 'next/router';

interface Props {
  menuName: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Tab = ({ menuName, href, onClick }: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <MainContent onClick={handleClick}>
      <span>{menuName}</span>
    </MainContent>
  );
};

export default Tab;
