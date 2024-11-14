import { AchieveInfo, AchieveList } from '@/components';
import { AchieveState } from '@/redux/achieve/achieveSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import {
  getAchieveList,
  // getMyAchieve,
  getMyAchieveLocal,
} from '@/services/api';
import { CharacterVariant } from '@/styles/achieve/AchieveInfo';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEffectVolume } from '@/redux/audio/audioSlice';
import useClickSound from '@/hooks/useClickSound';

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
  const effectVolume = useSelector(selectEffectVolume);
  const { play } = useClickSound(effectVolume);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      play();
      const id = e.currentTarget.dataset.id;
      if (id) {
        const achieve = achieves.find((data) => data.id === id);
        if (achieve) setAchieve(achieve);
      }
    },
    [achieves, play]
  );

  useEffect(() => {
    const getInfo = async () => {
      try {
        const { achieves } = await getMyAchieveLocal();
        /* user.provider === 'waktaverse.games'
            ? await getMyAchieve()
            : await getMyAchieveLocal();*/
        const list = await getAchieveList();

        if (!achieves || !list) return;

        setList(list);
        const arr: Item[] = list.map((info: Info) => ({
          ...info,
          got: achieves.some((achieve: AchieveState) => achieve.id === info.id),
        }));

        arr.sort((a, b) => Number(a.hidden) - Number(b.hidden));
        setAchieves(arr);
        setAchieve(arr[0]);
      } catch (error) {
        console.error('업적 정보를 불러오는데 실패했습니다:', error);
      }
    };

    getInfo();
  }, [router, user.provider]);

  return (
    <>
      {achieve && <AchieveInfo achieve={achieve} />}
      <AchieveList achieves={achieves} onClick={onClick} />
    </>
  );
};

export default Achieve;
