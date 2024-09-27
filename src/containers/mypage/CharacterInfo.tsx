import MyCharacter from '@/components/mypage/MyCharacter';
import MyWearingItem from '@/components/mypage/MyWearingItem';
import { selectUserInfo } from '@/redux/user/userSlice';
import { Character } from '@/styles/mypage/Mystyles';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CharacterInfo = () => {
  const user = useSelector(selectUserInfo);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <Character>
          <MyCharacter user={user} />
          <MyWearingItem />
        </Character>
      )}
    </>
  )
}

export default CharacterInfo;