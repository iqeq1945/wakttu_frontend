import { KickModal as CKick } from '@/components';
import { closeModal } from '@/redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const KickModal = (name: string) => {
  const dispatch = useDispatch();

  const onConfirm = () => {
    onCancle();
  };

  const onCancle = () => {
    dispatch(closeModal());
  };
  return <CKick name={name} onConfirm={onConfirm} onCancle={onCancle} />;
};

export default KickModal;
