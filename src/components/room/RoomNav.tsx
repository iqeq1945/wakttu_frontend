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
          <ExitIcon src={getR2URL('/assets/icons/exit.svg')} alt="나가기 아이콘" />
          <ButtonText>나가기</ButtonText>
        </ExitButton>
        {host && (
          <ChangeButton onClick={onChangeHost}>
            <ChangeIcon src={getR2URL('/assets/icons/host.svg')} alt="방장 바꾸기 아이콘" />
            <ButtonText>방장 바꾸기</ButtonText>
          </ChangeButton>
        )}
      </CButton>
      {host && (
        <UpdateButton onClick={onUpdate}>
          <UpdateIcon src={getR2URL('/assets/icons/update.svg')} alt="방 설정 아이콘" />
          <ButtonText>방 설정</ButtonText>
        </UpdateButton>
      )}
    </CRoomNav>
  );
};

export default RoomNav;
