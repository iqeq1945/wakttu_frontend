import {
  CButton,
  Input,
  Modal,
  Text,
  ConfirmButton,
  CancleButton,
  ConfrimText,
  CancleText,
} from '@/styles/roomList/PasswordModal';

interface Props {
  onConfirm: () => void;
  onCancle: () => void;
}

const PasswordModal = ({ onConfirm, onCancle }: Props) => {
  return (
    <Modal>
      <Text>비밀번호를 입력해 주세요.</Text>
      <Input type="password" />
      <CButton>
        <ConfirmButton type="button" onClick={onConfirm}>
          <ConfrimText>확인</ConfrimText>
        </ConfirmButton>
        <CancleButton type="button" onClick={onCancle}>
          <CancleText>취소</CancleText>
        </CancleButton>
      </CButton>
    </Modal>
  );
};

export default PasswordModal;
