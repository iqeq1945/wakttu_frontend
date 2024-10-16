import { AchieveInfo, AchieveList } from '@/components';
import { AchieveState } from '@/redux/achieve/achieveSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { getAchieveList, getMyAchieve } from '@/services/api';
import { CharacterVariant } from '@/styles/achieve/AchieveInfo';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface Info {
  id: string;
  name: string;
  desc: string;
  hint: string;
  author: string;
  type: CharacterVariant;
  [x: string]: string;
}

const Achieve = () => {
  const router = useRouter();
  const user = useSelector(selectUserInfo);
  const [achieves, setAchieves] = useState<AchieveState[]>([]);
  const [list, setList] = useState<Info[]>([]);
  const [achieve, setAchieve] = useState<AchieveState>();
  const [info, setInfo] = useState<Info>();

  const onClick = useCallback(
    (e: any) => {
      if (e.currentTarget.dataset.id) {
        const info = list.find(
          (data) => data.id === e.currentTarget.dataset.id
        );
        const achieve = achieves.find(
          (data) => data.id === e.currentTarget.dataset.id
        );
        if (info) setInfo(info);
        if (achieve) setAchieve(achieve);
      }
    },
    [list, achieves]
  );

  useEffect(() => {
    const getInfo = async () => {
      const data = await getMyAchieve();
      const list = await getAchieveList();
      if (data) {
        setAchieves(data.achieves);
        if (data.size > 0) setAchieve(data.achieves[0]);
      }
      if (list) setList(list);
    };
    if (user.provider === 'waktaverse.games') getInfo();
    else router.push('/');
  }, [router, user.provider]);

  useEffect(() => {
    if (achieve) {
      const info = list.find((data) => data.id === achieve.id);
      setInfo(info);
    }
  }, [achieve, list]);

  return (
    <>
      {achieve && info && <AchieveInfo achieve={achieve} info={info} />}
      <AchieveList achieves={achieves} onClick={onClick} />
    </>
  );
};

export default Achieve;
