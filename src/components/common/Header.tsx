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
import { getR2URL, R2_URL } from '@/services/api';
import { getIcon } from '@/modules/UserInfo';

interface Props {
  user: any;
  goRouter: (src?: string) => void;
  onModal: () => void;
}

const Header = ({ user, goRouter, onModal }: Props) => {
  const icon = getIcon(user.score, user.provider);
  return (
    <HeaderBlock>
      <HeaderLogo
        src={getR2URL('/assets/icons/small-logo.svg')}
        onClick={() => goRouter()}
      />
      <WrapContent>
        <Tab menuName="방 목록" goRouter={() => goRouter('/roomlist')} />
        <Tab menuName="마이 페이지" goRouter={() => goRouter('/mypage')} />
        <Tab menuName="사전" goRouter={() => goRouter('/dictionary')} />
        <Tab menuName="도감" goRouter={() => goRouter('/book')} />
        <Tab menuName="도전과제" goRouter={() => goRouter('/achieve')} />

        <Content onClick={onModal}>
          <li>옵션</li>
        </Content>
        <Player>
          <Rank src={icon} alt="플레이어 등급" />
          <Line />
          <PlayerName>{user.name}</PlayerName>
        </Player>
      </WrapContent>
    </HeaderBlock>
  );
};

export default Header;
