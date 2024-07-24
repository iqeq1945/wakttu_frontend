import { FilterBox as CFiterBox } from '@/components';
import { closeModal, selectModal } from '@/redux/modal/modalSlice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FilterBox = () => {
  const modal = useSelector(selectModal);
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
  return (
    modal.modalType === 'FILTER' && modal.open && <CFiterBox modalRef={ref} />
  );
};

export default FilterBox;
