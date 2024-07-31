import { CReady, ReadyButton } from '@/styles/room/Ready';

interface Props {
  onReady: () => void;
  onStart?: () => void;
}
const Ready = ({ onReady, onStart }: Props) => {
  return (
    <CReady>
      {onStart ? (
        <ReadyButton onClick={onStart}>시작</ReadyButton>
      ) : (
        <ReadyButton onClick={onReady}>준비</ReadyButton>
      )}
    </CReady>
  );
};

export default Ready;
