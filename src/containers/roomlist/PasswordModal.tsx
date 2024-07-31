import { PasswordModal as CPassword } from '@/components';
import useInput from '@/hooks/useInput';
import { closeModal } from '@/redux/modal/modalSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { enter } from '@/services/socket/socket';
import { useDispatch, useSelector } from 'react-redux';

const PasswordModal = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();

  const { inputs, setInputs, onInputChange } = useInput({
    password: undefined,
  });

  const onConfirm = () => {
    const { id, password } = roomInfo;

    if (password !== inputs.password) {
      alert('비빌번호가 틀립니다.');
      return;
    }
    onCancle();
    enter({ roomId: id as string, password });
  };

  const onCancle = () => {
    dispatch(closeModal());
  };

  return <CPassword onConfirm={onConfirm} onCancle={onCancle} />;
};

export default PasswordModal;
