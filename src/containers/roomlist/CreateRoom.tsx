import { CreateRoom as CCreateRoom } from '@/components';
import { closeModal, selectModal } from '@/redux/modal/modalSlice';
import { createRoomInfo, setRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { createRoom, enter, socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface RoomInfo {
  title: string;
  password?: string | undefined;
  total: number;
  type: number;
  round: number;
  time: number;
  option: string[];
}

const CreateRoom = () => {
  const modal = useSelector(selectModal);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const [room, setRoom] = useState<RoomInfo>({
    title: '왁뚜 생활',
    password: undefined,
    total: 8,
    type: 0,
    round: 6,
    time: 60000,
    option: [],
  });

  const [isDown, setDown] = useState<boolean[]>([false, false]);

  const onDropdown = (index: number) => {
    let copy = [...isDown];
    copy[index] = !copy[index];
    setDown(copy);
  };

  const onRoomInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      let onlyNumber = parseInt(value, 10);
      if (Number.isNaN(onlyNumber) || onlyNumber < 2 || onlyNumber > 8)
        onlyNumber = 8;
      setRoom((prev) => {
        return { ...prev, [name]: onlyNumber };
      });
      return;
    }
    setRoom((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSelect = (name: string, value: any) => {
    if (name === 'option') {
      let copy;
      if (room.option.indexOf(value) >= 0) {
        copy = room.option.filter((item) => item !== value);
      } else {
        copy = room.option;
        copy.push(value);
      }
      setRoom((prev) => {
        return { ...prev, option: copy };
      });
    } else {
      setRoom((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const onCancle = () => {
    dispatch(closeModal());
  };

  const onCreate = () => {
    createRoom(room);
  };

  useEffect(() => {
    socket.on('createRoom', (data) => {
      enter(data);
    });

    socket.on('enter', (data: any) => {
      dispatch(setRoomInfo(data));
      console.log(data);
      router.push(`/room/${data.id}`);
    });

    return () => {
      socket.off('createRoom');
    };
  }, [dispatch, router]);

  useEffect(() => {
    const offModal = (e: any) => {
      if (
        modal.modalType === 'CREATE_ROOM' &&
        modal.open &&
        ref &&
        !ref.current?.contains(e.target as Node)
      ) {
        dispatch(closeModal());
      }
    };
    document.addEventListener('mousedown', offModal);

    return () => {
      document.removeEventListener('mousedown', offModal);
    };
  });

  return (
    <CCreateRoom
      modalRef={ref}
      isDown={isDown}
      onDropdown={onDropdown}
      roomInfo={room}
      onRoomInfo={onRoomInfo}
      onSelect={onSelect}
      onCancle={onCancle}
      onCreate={onCreate}
    />
  );
};

export default CreateRoom;
