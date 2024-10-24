import Achieve from '@/components/common/Achieve';
import useEffectSound from '@/hooks/useEffectSound';
import {
  AchieveState,
  clearAchieve,
  selectAchieve,
} from '@/redux/achieve/achieveSlice';
import { selectEffectVolume } from '@/redux/audio/audioSlice';
import { getAchieveList } from '@/services/api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Achieves = () => {
  const achieves = useSelector(selectAchieve);
  const [data, setData] = useState<AchieveState[]>([]);
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAcheiveList = async () => {
      const data = await getAchieveList();
      setInfo(data);
    };

    getAcheiveList();
  }, []);

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (achieves.length > 0 && info.length > 0) {
      const data = info.filter((item: { id: string; [x: string]: any }) =>
        achieves.some((achieve) => achieve.id === item.id)
      );
      setData(data);
      dispatch(clearAchieve());
      timeId = setTimeout(() => {
        setData([]);
      }, 10000);
    }
  }, [achieves, dispatch, info]);

  if (data.length > 0) return <Achieve achieves={data} />;
};

export default Achieves;
