import { CosmeticStyles } from '@/styles/book/CosmeticType';
import {
  WearingImage,
  WearingItem,
  WearingItems,
  WearingTag,
} from '@/styles/mypage/Mystyles';

const MyWearingItem = () => {
  return (
    <WearingItems>
      {Object.entries(CosmeticStyles)
        .filter(([key]) => key !== 'all')
        .map(([key, value]) => (
          <WearingItem key={key}>
            <WearingImage src="/assets/playerProfile.png" />
            <WearingTag
              $backgroundColor={value.backgroundColor}
              $color={value.color}
            >
              {value.name}
            </WearingTag>
          </WearingItem>
        ))}
    </WearingItems>
  )
}

export default MyWearingItem;