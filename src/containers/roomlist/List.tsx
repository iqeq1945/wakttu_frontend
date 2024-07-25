import { List as CList } from '@/components';
import { selectFilter } from '@/redux/filter/filterSlice';
import { setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { getRoomList, Room, socket } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const [roomList, setRoomList] = useState<Room[]>([]);

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const setRoomDesc = (data: any) => {
    dispatch(setRoomInfo(data));
  };

  useEffect(() => {
    getRoomList();
  }, []);

  useEffect(() => {
    socket.on('roomList', (data) => {
      data.sort((a: Room, b: Room) => {
        filter.time === 'desc'
          ? a.createdAt - b.createdAt
          : b.createdAt - a.createdAt;
      });
      setRoomList(data);
    });

    return () => {
      socket.off('roomList');
    };
  }, [filter.time, roomList]);

  return <CList roomList={roomList} onClick={setRoomDesc} filter={filter} />;
};

export default List;
