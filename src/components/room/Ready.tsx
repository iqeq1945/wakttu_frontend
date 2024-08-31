import { CReady, ReadyButton } from '@/styles/room/Ready';

interface Props {
  ready: boolean;
  onReady: () => void;
  onStart?: () => void;
}
const Ready = ({ onReady, onStart, ready }: Props) => {
  return (
    <CReady>
      {onStart ? (
        <ReadyButton onClick={onStart}>시작</ReadyButton>
      ) : ready ? (
        <ReadyButton onClick={onReady}>준비 취소</ReadyButton>
      ) : (
        <ReadyButton onClick={onReady}>준비</ReadyButton>
      )}
    </CReady>
  );
};

export default Ready;
