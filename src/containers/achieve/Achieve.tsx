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
  hidden: boolean;
}

export interface Item extends Info {
  got: boolean;
}

const Achieve = () => {
  const router = useRouter();
  const user = useSelector(selectUserInfo);
  const [achieves, setAchieves] = useState<Item[]>([]);
  const [list, setList] = useState<Info[]>([]);
  const [achieve, setAchieve] = useState<Item>();

  const onClick = useCallback(
    (e: any) => {
      if (e.currentTarget.dataset.id) {
        const achieve = achieves.find(
          (data) => data.id === e.currentTarget.dataset.id
        );
        if (achieve) setAchieve(achieve);
      }
    },
    [achieves]
  );

  useEffect(() => {
    const getInfo = async () => {
      const { achieves } = await getMyAchieve();
      const list: [] = await getAchieveList();
      if (achieves && list) {
        setList(list);
        const arr: Item[] = list.map((info: Info) => {
          return {
            ...info,
            got: achieves.some(
              (achieve: AchieveState) => achieve.id === info.id
            ),
          };
        });
        arr.sort((a, b) => (a.hidden === b.hidden ? 0 : a.hidden ? 1 : -1));
        setAchieves(arr);
        setAchieve(arr[0]);
      }
    };
    if (user.provider === 'waktaverse.games') getInfo();
    else router.push('/');
  }, [router, user.provider]);

  return (
    <>
      {achieve && <AchieveInfo achieve={achieve} />}
      <AchieveList achieves={achieves} onClick={onClick} />
    </>
  );
};

export default Achieve;
