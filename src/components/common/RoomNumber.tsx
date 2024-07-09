import { WrapRoomNumber, RoomNum } from '@/styles/common/RoomNumber';

const RoomNumber = ({ number }: { number: number }) => {
  return (
    <WrapRoomNumber>
      <RoomNum>{number}</RoomNum>
    </WrapRoomNumber>
  );
};

export default RoomNumber;
