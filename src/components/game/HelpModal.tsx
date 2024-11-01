import {
  Overlay,
  Content,
  Title,
  CloseButton,
  HelpContent,
  HelpItem,
  HelpNumber,
  HelpText,
} from '../../styles/game/HelpModal.styles';

interface Props {
  onClose: () => void;
}

const HelpModal = ({ onClose }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>도움말</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
        <HelpContent>
          <HelpItem>
            <HelpNumber>1.</HelpNumber>
            <HelpText>
              자신의 턴의 타이머가 남아있는 동안 화면 하단의 채팅창을 눌러
              단어를 입력합니다.
            </HelpText>
          </HelpItem>
          <HelpItem>
            <HelpNumber>2.</HelpNumber>
            <HelpText>
              자신의 턴이 아닌 경우에는 채팅 기능으로 변환됩니다.
            </HelpText>
          </HelpItem>
          <HelpItem>
            <HelpNumber>3.</HelpNumber>
            <HelpText>게임 규칙을 잘 숙지해주세요!</HelpText>
          </HelpItem>
          <HelpItem>
            <HelpNumber>4.</HelpNumber>
            <HelpText>
              버그가 발생되면 방을 나가 새로고침을 해주시고 다시 방을 만들어
              진행해주세요!
            </HelpText>
          </HelpItem>
        </HelpContent>
      </Content>
    </Overlay>
  );
};

export default HelpModal;
