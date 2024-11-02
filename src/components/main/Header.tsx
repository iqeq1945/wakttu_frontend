import { WrapContent } from '@/styles/common/Header';
import { MainHeaderBlock, MainHeaderLogo } from '@/styles/main/Header';
import { MainTab } from '@/components';
import { getR2URL } from '@/services/api';

const Header = () => {
  return (
    <MainHeaderBlock>
      <MainHeaderLogo src={getR2URL('/assets/icons/small-logo.svg')} />
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
