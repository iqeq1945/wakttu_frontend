import { getR2URL } from '@/services/api';
import {
  Container,
  Modal,
  Text,
  CButton,
  ConfirmButton,
  ConfrimText,
  CancleButton,
  CancleText,
  Dropdown,
  Selected,
  DropdownLine,
  DropdownItem,
} from '@/styles/room/HostModal';

interface Props {
  data: any;
  isDown: boolean;
  onDropdown: () => void;
  onSelect: (data: { id: string; name: string }) => void;
  onConfirm: () => void;
  onCancle: () => void;
  selected?: { id: string; name: string };
}

const HostModal = ({
  data,
  isDown,
  selected,
  onDropdown,
  onSelect,
  onConfirm,
  onCancle,
}: Props) => {
  return (
    <Modal>
      <Container>
        <Text>어떤 유저에게 방장을 넘기실 건가요?</Text>
        <Dropdown onClick={onDropdown}>
          <Selected>{selected?.name ? selected.name : ' '}</Selected>
          <DropdownLine
            isopen={isDown}
            src={getR2URL('/assets/icons/down-line.svg')}
          />
          {isDown && (
            <>
              {data.map(
                (user: { id: string; name: string; [x: string]: any }) => {
                  return (
                    <DropdownItem key={user.id} onClick={() => onSelect(user)}>
                      {user.name}
                    </DropdownItem>
                  );
                }
              )}
            </>
          )}
        </Dropdown>
        <CButton>
          <ConfirmButton onClick={onConfirm}>
            <ConfrimText>확인</ConfrimText>
          </ConfirmButton>
          <CancleButton onClick={onCancle}>
            <CancleText>취소</CancleText>
          </CancleButton>
        </CButton>
      </Container>
    </Modal>
  );
};

export default HostModal;
