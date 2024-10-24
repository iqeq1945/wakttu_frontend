import {
  CButton,
  CInput,
  Error,
  Input,
  Modal,
  Text,
  ConfirmButton,
  CancleButton,
  ConfrimText,
  CancleText,
  Container,
} from '@/styles/roomList/PasswordModal';
import { handleKeyDown } from '@/utils/keyboard';
import { ChangeEvent } from 'react';

interface Props {
  onConfirm: () => void;
  onCancle: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string | undefined;
  $error: boolean;
}

const PasswordModal = ({
  onConfirm,
  onCancle,
  onChange,
  password,
  $error,
}: Props) => {



  return (
    <Modal>
      <Container>
        <Text>비밀번호를 입력해 주세요.</Text>
        <CInput>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            $error={$error}
          />
          {$error && <Error>비밀번호가 틀렸습니다!</Error>}
        </CInput>

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
