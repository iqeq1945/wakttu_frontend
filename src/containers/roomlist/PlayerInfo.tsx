import { PlayerInfo as CPlyerInfo } from '@/components';
import { selectUserInfo, setUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerInfo = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const getUser = useCallback(async () => {
    const { data } = await client.get('/auth/status');
    dispatch(setUserInfo(data.user));
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return isLoading && <CPlyerInfo user={user} />;
};

export default PlayerInfo;
