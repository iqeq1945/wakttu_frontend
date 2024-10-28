import { getR2URL } from '@/services/api';
import { CosmeticStyles } from '@/styles/book/CosmeticType';
import {
  RightWrapper,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemTag,
  ListBox,
  ListItem,
  ListItems,
  TagBox,
  Tag,
  ImageBox,
} from '@/styles/mypage/MystyleList';
import { MouseEvent, useCallback } from 'react';
import useWaktaSound from '@/hooks/useWaktaSound';
import { selectVoiceVolume } from '@/redux/audio/audioSlice';
import { useSelector } from 'react-redux';

type Variant = 'skin' | 'head' | 'hand' | 'eye';
interface Props {
  itemList?: {
    id: string;
    category: Variant;
    name: string;
    description: string;
    url: string;
    author: string;
  }[];
  clickTag: string;
  clickItem: {
    skin: string;
    hand: string;
    head: string;
    eye: string;
  };
  handleClickTag: (e: MouseEvent<HTMLElement>) => void;
  handleClickItem: (e: MouseEvent<HTMLElement>) => void;
}

const MystyleList = ({
  itemList,
  clickItem,
  clickTag,
  handleClickItem,
  handleClickTag,
}: Props) => {
  const voiceVolume = useSelector(selectVoiceVolume);
  const sound = useWaktaSound(voiceVolume);

  const handleMouseEnter = useCallback(() => {
    if (sound) sound['l-2'].play();
  }, [sound]);

  return (
    <RightWrapper>
      <ListBox>
        <TagBox>
          {Object.entries(CosmeticStyles).map(([key, value]) => (
            <Tag
              key={key}
              data-category={key}
              onClick={handleClickTag}
              $isClicked={clickTag === key}
            >
              {value.name}
            </Tag>
          ))}
        </TagBox>
        <ListItems>
          {itemList &&
            itemList.map((data) => (
              <ListItem
                key={data.id}
                id={data.id}
                data-category={data.category}
                onClick={handleClickItem}
                onMouseEnter={handleMouseEnter} // 마우스 호버 이벤트 추가
                $isClickedItem={clickItem[data.category] === data.id}
              >
                <ImageBox>
                  <ItemImage
                    id={data.id}
                    item={data.category}
                    src={getR2URL(data.url)}
                  />
                </ImageBox>
                <ItemInfo>
                  <ItemTag $itemType={data.category}>
                    {CosmeticStyles[data.category].name}
                  </ItemTag>
                  <ItemName>{data.name}</ItemName>
                </ItemInfo>
              </ListItem>
            ))}
        </ListItems>
      </ListBox>
    </RightWrapper>
  );
};

export default MystyleList;
