import { getR2URL, R2_URL } from '@/services/api';
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
import {
  CosmeticBackground,
  CosmeticStyles,
  CosmeticVariant,
} from '@/styles/book/CosmeticType';
import { LeftWrapper } from '@/styles/book/BookForm';
import { ITEM } from '@/containers/book/Cosmetic';
import { AchieveState } from '@/redux/achieve/achieveSlice';

interface Props {
  info: ITEM;
  isMine: boolean;
  onClick: () => void;
}

const CosmeticInfo = ({ info, isMine, onClick }: Props) => {
  return (
    <LeftWrapper>
      <TitleSection>
        <Tag $itemType={info.category as CosmeticVariant}>
          {CosmeticStyles[info.category as CosmeticVariant].name}
        </Tag>
        <Title>{info.name}</Title>
      </TitleSection>

      <InfoSection>
        <InfoTop>
          <CosmeticBackground
            $itemType={info.category as CosmeticVariant}
          ></CosmeticBackground>
          <CosmeticImage
            item={info.category}
            id={info.id}
            src={getR2URL(info.url)}
            alt="스킨 이미지"
          />
        </InfoTop>

        <InfoBottom>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">{info.author}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">스킨 설명</Info>
            <Info $variant="content">{info.description}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득조건</Info>
            <Info $variant="content">{info.hint}</Info>
          </Wrap>
        </InfoBottom>
      </InfoSection>
      <GetButton
        $itemType={info.category as CosmeticVariant}
        onClick={isMine ? onClick : undefined}
      >
        {isMine ? '획득하기' : '획득불가'}
      </GetButton>
    </LeftWrapper>
  );
};

export default CosmeticInfo;
