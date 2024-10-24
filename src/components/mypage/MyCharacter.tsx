import { getCharacter, getIcon } from '@/modules/UserInfo';
import { getR2URL } from '@/services/api';
import {
  MyCharacterBox,
  User,
  UserIcon,
  UserName,
} from '@/styles/mypage/Mystyles';
import Character from '../common/Character';

interface Props {
  user: any;
  character: any;
}

const MyCharacter = ({ user, character }: Props) => {
  const icon = getIcon(user.score, user.provider);

  return (
    <MyCharacterBox>
      <Character character={character} />
      <User>
        <UserIcon src={icon} />
        <UserName>{user.name}</UserName>
      </User>
    </MyCharacterBox>
  );
};

export default MyCharacter;
