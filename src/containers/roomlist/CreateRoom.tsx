import { CreateRoom as CCreateRoom } from '@/components';
import { closeModal } from '@/redux/modal/modalSlice';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const CreateRoom = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const offModal = (e: any) => {
      e.preventDefault();
      if (ref && !ref.current?.contains(e.target as Node)) {
        dispatch(closeModal());
      }
    };
    document.addEventListener('mousedown', offModal);

    return () => {
      document.removeEventListener('mousedown', offModal);
    };
  });

  return <CCreateRoom modalRef={ref} />;
};

export default CreateRoom;
