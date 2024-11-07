import { R2_URL } from '@/services/api';
import { Room } from '@/services/socket/socket';
import {
  Button,
  ButtonText,
  CButton,
  CHeader,
  CTitle,
  ExitButton,
  ExitIcon,
  Index,
  Title,
} from '@/styles/kung/Header';
import { useState } from 'react';
import HelpModal from '../HelpModal';

interface Props {
  roomInfo: Room;
  exit: () => void;
}

const Header = ({ roomInfo, exit }: Props) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <CHeader>
      <CButton>
        <Button onClick={() => setIsHelpOpen(true)}>
          <ButtonText>도움말</ButtonText>
        </Button>
      </CButton>
      <CTitle>
        <Index>[ {roomInfo.idx} ]</Index>
        <Title>{roomInfo.title}</Title>
      </CTitle>
      <CButton>
        <ExitButton onClick={exit}>
          <ButtonText>나가기</ButtonText>
          <ExitIcon src={R2_URL + '/assets/game/game-exit.svg'} />
        </ExitButton>
      </CButton>
      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
    </CHeader>
  );
};

export default Header;
