import { HeaderLogo, WrapContent } from '@/styles/common/Header';
import { MainHeaderBlock } from '@/styles/main/Header';
import Tab from './Tab';

const Header = () => {
  return (
    <MainHeaderBlock>
      <HeaderLogo src="/assets/logo.svg" />
      <WrapContent>
        <Tab menuName="게임 소개" href="/" />
        <Tab menuName="공지" href="/" />
        <Tab menuName="업데이트" href="/" />
        <Tab menuName="랭킹" href="/" />
        <Tab menuName="크레딧" href="/" />
      </WrapContent>
    </MainHeaderBlock>
  );
};

export default Header;
