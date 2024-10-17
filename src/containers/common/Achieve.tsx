import Achieve from '@/components/common/Achieve';
import useEffectSound from '@/hooks/useEffectSound';
import {
  AchieveState,
  clearAchieve,
  selectAchieve,
} from '@/redux/achieve/achieveSlice';
import { selectEffectVolume } from '@/redux/audio/audioSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Achieves = () => {
  const achieves = useSelector(selectAchieve);
  const [data, setData] = useState<AchieveState[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (achieves.length > 0) {
      setData(achieves);
      dispatch(clearAchieve());
      timeId = setTimeout(() => {
        setData([]);
      }, 5000 * achieves.length);
    }
  }, [achieves, dispatch]);

  return <Achieve achieves={data} />;
};

export default Achieves;
