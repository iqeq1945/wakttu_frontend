import {
  Badge,
  Info,
  InfoBottom,
  InfoSection,
  InfoTop,
  Tag,
  Title,
  TitleSection,
  Wrap,
} from '@/styles/achieve/AchieveInfo';
import { LeftWrapper } from '@/styles/achieve/Layout';

const AchieveInfo = () => {
  return (
    <LeftWrapper>
      <TitleSection>
        <Tag $character="lilpa">릴파</Tag>
        <Title>릴파넴!!!</Title>
      </TitleSection>
      <InfoSection>
        <InfoTop>
          <Badge src="/badge.jpg" />
        </InfoTop>
        <InfoBottom>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">유꾜꾜</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">내용</Info>
            <Info $variant="content">
              내가 특별히 친구 해줄게! ㅊ...친구.. 할 거지...?
            </Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득 조건</Info>
            <Info $variant="content">{`'띨파' 5회 입력`}</Info>
          </Wrap>
        </InfoBottom>
      </InfoSection>
    </LeftWrapper>
  );
};

export default AchieveInfo;
