import {
  ButtonText,
  CRoomNav,
  CButton,
  ExitButton,
  ExitIcon,
} from '@/styles/room/RoomNav';

interface Props {
  onExit: () => void;
}
const RoomNav = ({ onExit }: Props) => {
  return (
    <CRoomNav>
      <CButton>
        <ExitButton onClick={onExit}>
          <ExitIcon src="/assets/exit.svg" />
          <ButtonText>나가기</ButtonText>
        </ExitButton>
      </CButton>
    </CRoomNav>
  );
};

export default RoomNav;
