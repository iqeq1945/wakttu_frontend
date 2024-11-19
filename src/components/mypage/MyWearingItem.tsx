import { getCharacter } from '@/modules/UserInfo';
import { CosmeticStyles } from '@/styles/book/CosmeticType';
import {
  WearingImage,
  WearingItem,
  WearingItems,
  WearingTag,
} from '@/styles/mypage/Mystyles';

export type Variant = 'skin' | 'head' | 'hand' | 'eye';

interface Props {
  character: { skin?: string; head?: string; hand?: string; eye?: string };
}

const MyWearingItem = ({ character }: Props) => {
  const characterInfo = getCharacter(character);
  return (
    <WearingItems>
      {Object.entries(CosmeticStyles)
        .filter(([key]) => key !== 'all')
        .map(([key, value]) => (
          <WearingItem key={key}>
            <WearingImage item={key} src={characterInfo[key as Variant]} alt="장착 중인 스킨" />
            <WearingTag
              $backgroundColor={value.backgroundColor}
              $color={value.color}
            >
              {value.name}
            </WearingTag>
          </WearingItem>
        ))}
    </WearingItems>
  );
};

export default MyWearingItem;
