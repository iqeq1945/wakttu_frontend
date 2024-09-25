import { getR2URL } from '@/services/api';
import { CosmeticStyles, CosmeticVariant } from '@/styles/book/CosmeticType';
import {
  RightWrapper,
  Buttons,
  SaveButton,
  ResetButton,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemTag,
  ListBox,
  ListItem,
  ListItems,
  TagBox,
  Tag,
  ButtonIcon,
  ImageBox,
} from '@/styles/mypage/MystyleList';
import { useState, MouseEvent } from 'react';

interface Props {
  items?: {
    id: string;
    category: CosmeticVariant;
    name: string;
    description: string;
    url: string;
    author: string;
  }[];
}

const MystyleList = ({ items }: Props) => {
  const [clickTag, setClickTag] = useState<string>('all');
  const [clickItem, setClickItem] = useState<string>('');

  const handleClickTag = (e: MouseEvent<HTMLElement>) => {
    const clicked = e.currentTarget.dataset.tag;
    if (clicked) {
      setClickTag(clicked);
    }
  };

  const handleClickItem = (e: MouseEvent<HTMLElement>) => {
    const clickedId = e.currentTarget.dataset.id;
    if (clickedId) {
      if (clickItem === clickedId) setClickItem('');
      setClickItem(clickedId);
    }
  };

  return (
    <RightWrapper>
      <Buttons>
        <SaveButton>
          <ButtonIcon src={getR2URL('/assets/game/save.svg')} />
          저장하기
        </SaveButton>
        <ResetButton>
          <ButtonIcon src={getR2URL('/assets/game/refresh.svg')} />
          되돌리기
        </ResetButton>
      </Buttons>
      <ListBox>
        <TagBox>
          {Object.entries(CosmeticStyles).map(([key, value]) => (
            <Tag
              key={key}
              data-tag={key}
              onClick={handleClickTag}
              isClicked={clickTag === key}
            >
              {value.name}
            </Tag>
          ))}
        </TagBox>
        <ListItems>
          {items &&
            items.map((data) => (
              <ListItem
                key={data.id}
                data-id={data.id}
                onClick={handleClickItem}
                isClickedItem={clickItem === data.id}
              >
                <ImageBox>
                  <ItemImage src={getR2URL(data.url)} />
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
