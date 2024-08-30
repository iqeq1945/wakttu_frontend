import { PlayerInfo as CPlyerInfo, Loading } from '@/components';
import { selectUserInfo, setUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerInfo = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const getUser = useCallback(async () => {
    const { data } = await client.get(`/user/${user.id}`);
    dispatch(setUserInfo(data));
    setLoading(false);
  }, [dispatch, user.id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return <>{isLoading ? <Loading /> : <CPlyerInfo user={user} />}</>;
};

export default PlayerInfo;
