import { KickModal as CKick } from '@/components';
import { closeModal, selectModal } from '@/redux/modal/modalSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { kick } from '@/services/socket/socket';
import { useDispatch, useSelector } from 'react-redux';

const KickModal = () => {
  const modal = useSelector(selectModal);
  const roomId = useSelector(selectRoomId) as string;
  const dispatch = useDispatch();

  const { id, name }: { id: string; name: string } = modal.data;

  const onConfirm = () => {
    onCancle();
    kick({ roomId, userId: id });
  };

  const onCancle = () => {
    dispatch(closeModal());
  };
  return <CKick name={name} onConfirm={onConfirm} onCancle={onCancle} />;
};

export default KickModal;
