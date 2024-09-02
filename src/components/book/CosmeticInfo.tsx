import { R2_URL } from '@/services/api';
import {
  CosmeticImage,
  GetButton,
  Info,
  InfoBottom,
  InfoSection,
  InfoTop,
  Tag,
  Title,
  TitleSection,
  Wrap,
} from '@/styles/book/CosmeticInfo';
import { CosmeticBackground } from '@/styles/book/CosmeticType';
import { LeftWrapper } from '@/styles/book/MypageForm';

const CosmeticInfo = () => {
  return (
    <LeftWrapper>
      <TitleSection>
        <Tag $itemType="skin">스킨</Tag>
        <Title>이름</Title>
      </TitleSection>

      <InfoSection>
        <InfoTop>
          <CosmeticBackground $itemType="skin"></CosmeticBackground>
          <CosmeticImage src={R2_URL + '/assets/ipali.png'} />
        </InfoTop>

        <InfoBottom>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">제작자명</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">스킨 설명</Info>
            <Info $variant="content">
              스킨에 대해서 대략 두 줄 정도 이렇게 설명이 들어가면 되겠죠
            </Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득조건</Info>
            <Info $variant="content">
              여기에 이렇게 획득 조건이 들어가게 되겠죠
            </Info>
          </Wrap>
        </InfoBottom>
      </InfoSection>
      <GetButton $itemType="skin">획득하기</GetButton>
    </LeftWrapper>
  );
};

export default CosmeticInfo;
