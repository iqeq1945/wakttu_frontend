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

const Header = ({ user }: any) => {
  return (
    <HeaderBlock>
      <HeaderLogo src="/assets/icons/logo.svg" />
      <WrapContent>
        <Tab menuName="방 목록" href="/roomlist" />
        <Tab menuName="마이 페이지" href="/roomlist" />
        <Tab menuName="사전" href="/roomlist" />
        <Tab menuName="도감" href="/book" />
        <Tab menuName="옵션" href="/roomlist" />
        <Player>
          <Rank src="/assets/icons/amoeba.svg" />
          <Line />
          <PlayerName>{user.name}</PlayerName>
        </Player>
      </WrapContent>
    </HeaderBlock>
  );
};

export default Header;
