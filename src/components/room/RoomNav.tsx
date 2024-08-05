import {
  ButtonText,
  CRoomNav,
  CButton,
  ExitButton,
  ExitIcon,
  UpdateButton,
  UpdateIcon,
} from '@/styles/room/RoomNav';

interface Props {
  onExit: () => void;
  onModal: () => void;
  host?: boolean;
}
const RoomNav = ({ onExit, onModal, host }: Props) => {
  return (
    <CRoomNav>
      <CButton>
        <ExitButton onClick={onExit}>
          <ExitIcon src="/assets/icons/exit.svg" />
          <ButtonText>나가기</ButtonText>
        </ExitButton>
      </CButton>
      {host && (
        <UpdateButton onClick={onModal}>
          <UpdateIcon src="/assets/icons/update.svg" />
          <ButtonText>방 설정</ButtonText>
        </UpdateButton>
      )}
    </CRoomNav>
  );
};

export default RoomNav;
