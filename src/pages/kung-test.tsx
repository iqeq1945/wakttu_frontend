import { KHeader } from '@/components';
import WordEffect from '@/components/game/WordEffect';
import {
  Board,
  CKung,
  Info,
  Left,
  Speaker,
  Tv,
  Object,
  ObjectText,
  Pen,
  Round,
  RoundText,
  ChainText,
  Main,
  History,
  HistroyText,
  Right,
  Frame,
  LeftDesc,
  Desc,
  RightDesc,
} from '@/styles/kung/Game';
import { Container } from '@/styles/kung/Layout';

const Kung = () => {
  const roomInfo = {
    title: '',
  };
  return (
    <Container>
      <KHeader
        roomInfo={roomInfo}
        exit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <CKung>ㅇㅇ</CKung>
    </Container>
  );
};

export default Kung;
