import {
  HeaderBlock,
  HeaderLogo,
  WrapContent,
  Player,
  Rank,
  Line,
  PlayerName,
  Content,
} from '@/styles/common/Header';
import { Tab } from '@/components';
import { R2_URL } from '@/services/api';
import { getIcon } from '@/modules/UserInfo';

interface Props {
  user: any;
  goHome: () => void;
  onModal: () => void;
}

const Header = ({ user, goHome, onModal }: Props) => {
  const icon = getIcon(user.score, user.provider);
  return (
    <HeaderBlock>
      <HeaderLogo src={R2_URL + '/assets/icons/logo.svg'} onClick={goHome} />
      <WrapContent>
        <Tab menuName="방 목록" href="/roomlist" goHome={goHome} />
        <Tab menuName="마이 페이지" href="/roomlist" goHome={goHome} />
        <Tab menuName="사전" href="/roomlist" goHome={goHome} />
        <Tab menuName="도감" href="/book" goHome={goHome} />
        <Content onClick={onModal}>
          <li>옵션</li>
        </Content>
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
