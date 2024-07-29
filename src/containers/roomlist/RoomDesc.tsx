import { RoomDesc as CRoomDesc } from '@/components';
import { selectRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { enter, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RoomDesc = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const onEnter = () => {
    const { id, password } = roomInfo;
    enter({ roomId: id as string, password });
  };

  useEffect(() => {
    socket.on('createRoom', (data) => {
      enter(data);
    });

    socket.on('enter', (data: any) => {
      if (data) {
        dispatch(setRoomInfo(data));
        router.push(`/room/${data.id}`);
      }
    });

    return () => {
      socket.off('createRoom');
      socket.off('enter');
    };
  }, [dispatch, router]);

  return <CRoomDesc roomInfo={roomInfo} onEnter={onEnter} />;
};

export default RoomDesc;
