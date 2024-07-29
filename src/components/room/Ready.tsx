import { CReady, ReadyButton } from '@/styles/room/Ready';

interface Props {
  onReady: () => void;
}
const Ready = ({ onReady }: Props) => {
  return (
    <CReady>
      <ReadyButton onClick={onReady}>준비</ReadyButton>
    </CReady>
  );
};

export default Ready;
