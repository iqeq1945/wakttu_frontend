import { setAchieve } from '@/redux/achieve/achieveSlice';
import { client } from '@/services/api';
import { useDispatch } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const click = async () => {
    const data = await client
      .put('/wakta/stat', {
        stats: [{ id: 'LAST_COUNT', val: 1 }],
      })
      .then((response) => response.data)
      .catch(console.error);
    console.log(data);
    const { achieves } = data;
    if (achieves) {
      await dispatch(achieves);
    } else undefined;
  };

  return <div onClick={click}>hihi</div>;
};

export default Test;
