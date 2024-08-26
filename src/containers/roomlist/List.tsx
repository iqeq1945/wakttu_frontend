import { List as CList } from '@/components';
import { selectFilter } from '@/redux/filter/filterSlice';
import { setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { getRoomList, Room, socket } from '@/services/socket/socket';
import { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const List = ({ setToggle }: any) => {
  const [roomList, setRoomList] = useState<Room[]>([]);

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const setRoomDesc = (data: any, e: MouseEvent) => {
    e.stopPropagation();
    dispatch(setRoomInfo(data));
    setToggle(true);
  };

  const onToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setToggle(false);
  };

  useEffect(() => {
    getRoomList();
  }, []);

  useEffect(() => {
    const copy = [...roomList].sort((a, b) =>
      filter.time === 'desc' ? a.idx! - b.idx! : b.idx! - a.idx!
    );
    setRoomList(copy);
  }, [filter.time]);

  useEffect(() => {
    socket.on('roomList', (data) => {
      const copy = [...data]
        .sort((a, b) =>
          filter.time === 'desc' ? a.idx! - b.idx! : b.idx! - a.idx!
        )
        .filter((ele) => ele.users.length !== 0);

      setRoomList(copy);
    });

    return () => {
      socket.off('roomList');
    };
  }, [filter.time, roomList]);

  return (
    <CList
      roomList={roomList}
      onClick={setRoomDesc}
      filter={filter}
      onToggle={onToggle}
    />
  );
};

export default List;
