import { Board, CKung, Left, Right, Speaker, Tv } from '@/styles/kung/Game';

const Kung = () => {
  return (
    <CKung>
      <Left>
        <Speaker src="/assets/game/speaker.svg" />
        <Tv />
      </Left>
      <Board></Board>
      <Right />
      <Right />
    </CKung>
  );
};

export default Kung;
