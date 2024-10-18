import { getR2URL } from '@/services/api';
import {
  ButtonText,
  CRoomNav,
  CButton,
  ExitButton,
  ExitIcon,
  UpdateButton,
  UpdateIcon,
  ChangeButton,
  ChangeIcon,
} from '@/styles/room/RoomNav';

interface Props {
  onExit: () => void;
  onUpdate: () => void;
  onChangeHost: () => void;

  host?: boolean;
}
const RoomNav = ({ onExit, onUpdate, onChangeHost, host }: Props) => {
  return (
    <CRoomNav>
      <CButton>
        <ExitButton onClick={onExit}>
          <ExitIcon src={getR2URL('/assets/icons/exit.svg')} />
          <ButtonText>나가기</ButtonText>
        </ExitButton>
        {host && (
          <ChangeButton onClick={onChangeHost}>
            <ChangeIcon src={getR2URL('/assets/icons/host.svg')} />
            <ButtonText>방장 바꾸기</ButtonText>
          </ChangeButton>
        )}
      </CButton>
      {host && (
        <UpdateButton onClick={onUpdate}>
          <UpdateIcon src={getR2URL('/assets/icons/update.svg')} />
          <ButtonText>방 설정</ButtonText>
        </UpdateButton>
      )}
    </CRoomNav>
  );
};

export default RoomNav;
