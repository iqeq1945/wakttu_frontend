import MyCharacter from '@/components/mypage/MyCharacter';
import MyWearingItem from '@/components/mypage/MyWearingItem';
import { selectCharacter, selectUserInfo } from '@/redux/user/userSlice';
import { Character } from '@/styles/mypage/Mystyles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CharacterInfo = () => {
  const user = useSelector(selectUserInfo);
  const character = useSelector(selectCharacter);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <Character>
          <MyCharacter user={user} character={character} />
          <MyWearingItem character={character} />
        </Character>
      )}
    </>
  );
};

export default CharacterInfo;
