import { CreateRoom as CCreateRoom } from '@/components';
import { closeModal, selectModal } from '@/redux/modal/modalSlice';
import { createRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { createRoom, socket } from '@/services/socket/socket';
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

  const [roomInfo, setRoomInfo] = useState<RoomInfo>({
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
      setRoomInfo((prev) => {
        return { ...prev, [name]: onlyNumber };
      });
      return;
    }
    setRoomInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSelect = (name: string, value: any) => {
    if (name === 'option') {
      let copy;
      if (roomInfo.option.indexOf(value) >= 0) {
        copy = roomInfo.option.filter((item) => item !== value);
      } else {
        copy = roomInfo.option;
        copy.push(value);
      }
      setRoomInfo((prev) => {
        return { ...prev, option: copy };
      });
    } else {
      setRoomInfo((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const onCancle = () => {
    dispatch(closeModal());
  };

  const onCreate = () => {
    createRoom(roomInfo);
  };

  useEffect(() => {
    socket.on('createRoom', (data) => {
      const id = data.roomId as string;
      const password = data.password;
      dispatch(createRoomInfo({ id, password }));
      router.push(`/room/${data.roomId}`);
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
      roomInfo={roomInfo}
      onRoomInfo={onRoomInfo}
      onSelect={onSelect}
      onCancle={onCancle}
      onCreate={onCreate}
    />
  );
};

export default CreateRoom;
