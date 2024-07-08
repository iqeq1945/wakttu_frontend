import {
  HeaderBlock,
  HeaderLogo,
  WrapContent,
  Player,
  Rank,
  Line,
  PlayerName,
} from '@/styles/common/Header';
import { Tab } from '@/components';

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderLogo src='/assets/logo.svg' />
      <WrapContent>
        <Tab menuName='방 목록' href='/roomlist' />
        <Tab menuName='마이 페이지' href='/roomlist' />
        <Tab menuName='사전' href='/roomlist' />
        <Tab menuName='상점' href='/roomlist' />
        <Tab menuName='옵션' href='/roomlist' />
        <Player>
          <Rank src='/assets/amoeba.svg' />
          <Line />
          <PlayerName>플레이어</PlayerName>
        </Player>
      </WrapContent>
    </HeaderBlock>
  );
};

export default Header;
