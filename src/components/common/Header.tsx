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
import { R2_URL } from '@/services/api';

interface Props {
  user: any;
  goHome: () => void;
}

const Header = ({ user, goHome }: Props) => {
  return (
    <HeaderBlock>
      <HeaderLogo src={R2_URL + '/assets/icons/logo.svg'} onClick={goHome} />
      <WrapContent>
        <Tab menuName="방 목록" href="/roomlist" />
        <Tab menuName="마이 페이지" href="/roomlist" />
        <Tab menuName="사전" href="/roomlist" />
        <Tab menuName="도감" href="/book" />
        <Tab menuName="옵션" href="/roomlist" />
        <Player>
          <Rank src={R2_URL + '/assets/icons/amoeba.svg'} />
          <Line />
          <PlayerName>{user.name}</PlayerName>
        </Player>
      </WrapContent>
    </HeaderBlock>
  );
};

export default Header;
