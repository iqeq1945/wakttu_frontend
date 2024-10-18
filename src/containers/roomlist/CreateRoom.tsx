import { CreateRoom as CCreateRoom } from '@/components';
import { cleanTitle } from '@/modules/Slang';
import { closeModal, selectModal } from '@/redux/modal/modalSlice';
import { createRoom } from '@/services/socket/socket';
import { prepareAutoBatched } from '@reduxjs/toolkit';
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
      if (Number.isNaN(onlyNumber) || onlyNumber < 2 || onlyNumber > 30)
        onlyNumber = 10;
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
    } else if (name === 'type') {
      setRoom((prev) => {
        return { ...prev, [name]: value, round: value === 2 ? 10 : 6 };
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
    dispatch(closeModal());
    let roomInfo = {
      ...room,
      title: cleanTitle(room.title),
    };
    createRoom(roomInfo);
  };

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
