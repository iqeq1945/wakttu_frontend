import {
  Container,
  Modal,
  Text,
  CButton,
  ConfirmButton,
  ConfrimText,
  CancleButton,
  CancleText,
} from '@/styles/room/KickModal';

interface Props {
  name: string;
  onConfirm: () => void;
  onCancle: () => void;
}

const KickModal = ({ name, onConfirm, onCancle }: Props) => {
  return (
    <Modal>
      <Container>
        <Text>정말로 {name}님을 추방할까요?</Text>
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

export default KickModal;
