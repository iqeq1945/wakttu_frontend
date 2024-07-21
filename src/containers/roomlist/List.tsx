import { List as CList } from '@/components';
import { setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { getRoomList, Room, socket } from '@/services/socket/socket';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const List = () => {
  const [roomList, setRoomList] = useState<Room[]>([]);

  const dispatch = useDispatch();

  const setRoomDesc = (data: any) => {
    console.log(data);
    dispatch(setRoomInfo(data));
  };

  useEffect(() => {
    getRoomList();
  }, []);

  useEffect(() => {
    socket.on('roomList', (data) => {
      setRoomList(data);
    });

    return () => {
      socket.off('roomList');
    };
  }, [roomList]);

  return <CList roomList={roomList} onClick={setRoomDesc} />;
};

export default List;
