import { CosmeticStyles, CosmeticVariant } from "@/styles/book/CosmeticType";
import { RightWrapper, Buttons, SaveButton, ResetButton, ItemImage, ItemInfo, ItemName, ItemTag, ListBox, ListItem, ListItems, TagBox, Tag, ButtonIcon, ImageBox } from "@/styles/mypage/MystyleList";
import { useState, MouseEvent } from "react";


const MystyleList = () => {
  const [clickTag, setClickTag] = useState<string>('all')
  const [clickItem, setClickItem] = useState<number>(1)

  // 임시데이터
  const dummy: { id: number; tag: CosmeticVariant; name: string; img: string }[] = [
    { id: 1, tag: 'skin', name: '이파리', img: '/assets/playerProfile.png' },
    { id: 2, tag: 'hand', name: '키라키라캔디로드', img: '/assets/load.png' },
    { id: 3, tag: 'hand', name: '키라키라캔디로드', img: '/assets/load.png' },
    { id: 4, tag: 'hand', name: '키라키라캔디로드', img: '/assets/load.png' },
    { id: 5, tag: 'head', name: '이파리', img: '/assets/playerProfile.png' },
    { id: 6, tag: 'eye', name: '이파리', img: '/assets/playerProfile.png' },
    { id: 7, tag: 'eye', name: '이파리', img: '/assets/playerProfile.png' },
  ]

  const handleClickTag = (e: MouseEvent<HTMLElement>) => {
    const clicked = e.currentTarget.dataset.tag;
    if (clicked) {
      setClickTag(clicked);
    }
  }

  const handleClickItem = (e: MouseEvent<HTMLElement>) => {
    const clickedId = Number(e.currentTarget.dataset.id);
    if (clickedId) {
      setClickItem(clickedId);
    }
  }


  return (
    <RightWrapper>
      <Buttons>
        <SaveButton>
          <ButtonIcon src="/assets/game/save.svg" />
          저장하기
        </SaveButton>
        <ResetButton>
          <ButtonIcon src="/assets/game/refresh.svg" />
          되돌리기
        </ResetButton>
      </Buttons>
      <ListBox>
        <TagBox>
          {Object.entries(CosmeticStyles)
            .map(([key, value]) => (
              <Tag key={key} data-tag={key} onClick={handleClickTag} isClicked={clickTag === key}>{value.name}</Tag>
            ))}
        </TagBox>
        <ListItems>
          {dummy.map((data) =>
            <ListItem
              key={data.id}
              data-id={data.id}
              onClick={handleClickItem}
              isClickedItem={clickItem === data.id}>
              <ImageBox>
                <ItemImage src={data.img} />
              </ImageBox>
              <ItemInfo>
                <ItemTag $itemType={data.tag}>{CosmeticStyles[data.tag].name}</ItemTag>
                <ItemName>{data.name}</ItemName>
              </ItemInfo>
            </ListItem>
          )}
        </ListItems>
      </ListBox>
    </RightWrapper>

  )
};

export default MystyleList;