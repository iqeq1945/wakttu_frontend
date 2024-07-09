import { HeaderLogo, WrapContent } from '@/styles/common/Header';
import { MainHeaderBlock } from '@/styles/main/Header';
import { MainTab } from '@/components';

const Header = () => {
  return (
    <MainHeaderBlock>
      <HeaderLogo src="/assets/logo.svg" />
      <WrapContent>
        <MainTab menuName="게임 소개" href="/" />
        <MainTab menuName="공지" href="/" />
        <MainTab menuName="업데이트" href="/" />
        <MainTab menuName="랭킹" href="/" />
        <MainTab menuName="크레딧" href="/" />
      </WrapContent>
    </MainHeaderBlock>
  );
};

export default Header;
