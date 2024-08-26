import { PasswordModal as CPassword } from '@/components';
import useInput from '@/hooks/useInput';
import { closeModal } from '@/redux/modal/modalSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { enter } from '@/services/socket/socket';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PasswordModal = () => {
  const roomInfo = useSelector(selectRoomInfo);
  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);

  const { inputs, onInputChange } = useInput({
    password: undefined,
  });

  const onConfirm = () => {
    const { id, password } = roomInfo;
    if (password !== inputs.password) {
      setError(true);
      return;
    }
    onCancle();
    enter({ roomId: id as string, password });
  };

  const onCancle = () => {
    dispatch(closeModal());
  };

  return (
    <CPassword
      onConfirm={onConfirm}
      onCancle={onCancle}
      onChange={onInputChange}
      password={inputs.password}
      $error={error}
    />
  );
};

export default PasswordModal;
