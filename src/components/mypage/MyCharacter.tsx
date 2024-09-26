import { getIcon } from '@/modules/UserInfo';
import { getR2URL } from '@/services/api';
import {
  CharacterImage,
  MyCharacterBox,
  User,
  UserIcon,
  UserName,
} from '@/styles/mypage/Mystyles';

const MyCharacter = ({ user }: any) => {
  const icon = getIcon(user.score, user.provider);
  return (
    <MyCharacterBox>
      <CharacterImage src={getR2URL('/assets/player-profile.png')} />
      <User>
        <UserIcon src={icon} />
        <UserName>{user.name}</UserName>
      </User>
    </MyCharacterBox>
  )
};

export default MyCharacter;