import { GetButton, ItemContainer, ItemImage, ItemInfo, Info, Wrap, Itemtag, TitleContainer, Background, ImageContainer } from "@/styles/mypage/ItemInfo";
import { LeftWrapper } from "@/styles/mypage/MypageForm";

const CollectionDetail = () => {
  return (
    <LeftWrapper>
      <TitleContainer>
        {/* <Itemtag /> */}
        <Itemtag $itemType="skin">스킨</Itemtag>
        이름
      </TitleContainer>
      <ItemContainer>
        <Background $itemType="skin"></Background>
        <ImageContainer>
          <ItemImage src="/assets/player-profile.png" />
        </ImageContainer>
        <ItemInfo>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">제작자명</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">스킨 설명</Info>
            <Info $variant="content">스킨에 대해서 대략 두 줄 정도 이렇게 설명이 들어가면 되겠죠</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득조건</Info>
            <Info $variant="content">여기에 이렇게 획득 조건이 들어가게 되겠죠</Info>
          </Wrap>
        </ItemInfo>
      </ItemContainer>
      <GetButton $itemType="skin">획득하기</GetButton>
    </LeftWrapper>
  )
}

export default CollectionDetail