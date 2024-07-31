import {
  CButton,
  Input,
  Modal,
  Text,
  ConfirmButton,
  CancleButton,
  ConfrimText,
  CancleText,
  Container,
} from '@/styles/roomList/PasswordModal';
import { ChangeEvent } from 'react';

interface Props {
  onConfirm: () => void;
  onCancle: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string | undefined;
}

const PasswordModal = ({ onConfirm, onCancle, onChange, password }: Props) => {
  return (
    <Modal>
      <Container>
        <Text>비밀번호를 입력해 주세요.</Text>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <CButton>
          <ConfirmButton type="button" onClick={onConfirm}>
            <ConfrimText>확인</ConfrimText>
          </ConfirmButton>
          <CancleButton type="button" onClick={onCancle}>
            <CancleText>취소</CancleText>
          </CancleButton>
        </CButton>
      </Container>
    </Modal>
  );
};

export default PasswordModal;
