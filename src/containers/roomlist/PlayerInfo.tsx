import { PlayerInfo as CPlyerInfo, Loading } from '@/components';
import { selectUserInfo, setUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerInfo = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const getUser = useCallback(async () => {
    if (user.id === null) {
      router.push('/');
      return;
    }
    const { data } = await client.get(`/user/${user.id}`);
    dispatch(setUserInfo(data));
    setLoading(false);
  }, [dispatch, router, user.id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return <>{isLoading ? <Loading /> : <CPlyerInfo user={user} />}</>;
};

export default PlayerInfo;
