import { getCharacter, getIcon } from '@/modules/UserInfo';
import { getR2URL } from '@/services/api';
import {
  CharacterImage,
  MyCharacterBox,
  User,
  UserIcon,
  UserName,
} from '@/styles/mypage/Mystyles';

interface Props {
  user: any;
  character: { skin?: string; head?: string; hand?: string; eye?: string };
}

const MyCharacter = ({ user, character }: Props) => {
  const icon = getIcon(user.score, user.provider);
  const characterInfo = getCharacter(character);

  return (
    <MyCharacterBox>
      <CharacterImage src={characterInfo.skin} />
      <User>
        <UserIcon src={icon} />
        <UserName>{user.name}</UserName>
      </User>
    </MyCharacterBox>
  );
};

export default MyCharacter;
