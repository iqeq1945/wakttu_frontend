import { getR2URL } from '@/services/api';
import { CosmeticStyles, CosmeticVariant } from '@/styles/book/CosmeticType';
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
import { useState, MouseEvent, useEffect } from 'react';

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
  const [itemList, setItemList] = useState(items)

  const handleClickTag = (e: MouseEvent<HTMLElement>) => {
    const clicked = e.currentTarget.dataset.category;
    if (clicked) {
      setClickTag(clicked);
    }
  };

  const handleClickItem = (e: MouseEvent<HTMLElement>) => {
    const clickedId = e.currentTarget.id;
    if (clickedId) {
      if (clickItem === clickedId) setClickItem('');
      setClickItem(clickedId);
    }
  };

  useEffect(() => {
    if (items) {
      if (clickTag === 'all') {
        setItemList(items);
      } else {
        setItemList(items.filter(item => item.category === clickTag));
      }
    }
  }, [clickTag, items])


  return (
    <RightWrapper>
      <ListBox>
        <TagBox>
          {Object.entries(CosmeticStyles).map(([key, value]) => (
            <Tag
              key={key}
              data-category={key}
              onClick={handleClickTag}
              isClicked={clickTag === key}
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
