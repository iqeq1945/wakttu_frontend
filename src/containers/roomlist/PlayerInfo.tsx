import { PlayerInfo as CPlyerInfo, Loading } from '@/components';
import { selectUserInfo, setUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerInfo = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const getUser = useCallback(async () => {
    const { data } = await client.get('/auth/status');
    dispatch(setUserInfo(data.user));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      {isLoading ? (
        <Suspense fallback={<Loading />} />
      ) : (
        <CPlyerInfo user={user} />
      )}
    </>
  );
};

export default PlayerInfo;
