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
import { getIcon } from '@/modules/UserInfo';

interface Props {
  user: any;
  goHome: () => void;
}

const Header = ({ user, goHome }: Props) => {
  const icon = getIcon(user.score, user.provider);
  return (
    <HeaderBlock>
      <HeaderLogo src={R2_URL + '/assets/icons/logo.svg'} onClick={goHome} />
      <WrapContent>
        <Tab menuName="방 목록" href="/roomlist" goHome={goHome} />
        <Tab menuName="마이 페이지" href="/mypage" goHome={goHome} />
        <Tab menuName="사전" href="/roomlist" goHome={goHome} />
        <Tab menuName="도감" href="/book" goHome={goHome} />
        <Tab menuName="옵션" href="/roomlist" goHome={goHome} />
        <Player>
          <Rank src={icon} />
          <Line />
          <PlayerName>{user.name}</PlayerName>
        </Player>
      </WrapContent>
    </HeaderBlock>
  );
};

export default Header;
