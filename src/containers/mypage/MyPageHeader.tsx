import { MypageHeader } from '@/components';
import {
  selectUserId,
  selectCharacter,
  setUserInfo,
} from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyPageHeader = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const character = useSelector(selectCharacter);
  const onSave = useCallback(async () => {
    const { data } = await client.patch(`/user/${userId}`, {
      character: character,
    });
    if (data) alert('저장 완료!');
    else alert('알수없는 이유로 실패!');
    dispatch(setUserInfo(data));
  }, [character, dispatch, userId]);

  const onReload = useCallback(async () => {
    const { data } = await client.get(`/user/${userId}`);
    dispatch(setUserInfo(data));
  }, [dispatch, userId]);

  return <MypageHeader onSave={onSave} onReload={onReload} />;
};

export default MyPageHeader;
