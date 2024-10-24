import { setAchieve } from '@/redux/achieve/achieveSlice';
import {
  clearResult,
  selectResult,
  setResult,
} from '@/redux/result/resultSlice';
import { updatePlayCountLocal, updateResultLocal } from '@/services/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);

  const click = async () => {
    const word = {
      id: '징버거',
      type: 'JINGBURGER',
      meta: { tag: ['징버거'] },
    };
    dispatch(setResult({ type: 'WORD', word }));
  };

  useEffect(() => {
    const updateResult = async () => {
      let achieves = [];
      const achieve_1 = await updateResultLocal(result);
      const achieve_2 = await updatePlayCountLocal(0);
      achieves = [...achieve_1, ...achieve_2];
      await dispatch(setAchieve(achieves));
    };
    if (result.length > 0) {
      updateResult();
      dispatch(clearResult());
    }
  }, [dispatch, result]);
  return <div onClick={click}>hihi</div>;
};

export default Test;
