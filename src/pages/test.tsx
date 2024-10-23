import { setAchieve } from '@/redux/achieve/achieveSlice';
import { updatePlayCountLocal } from '@/services/api';
import { useDispatch } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const click = async () => {
    const achieves = await updatePlayCountLocal(0);
    if (achieves) dispatch(setAchieve(achieves));
  };

  return <div onClick={click}>hihi</div>;
};

export default Test;
