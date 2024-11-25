import { Item } from '@/containers/achieve/Achieve';
import { getAchieveURL } from '@/services/api';
import {
  Badge,
  Hidden,
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

interface Props {
  achieve: Item;
}

const CHARACTER_NAMES: Record<string, string> = {
  woowakgood: '우왁굳',
  ine: '아이네',
  jingburger: '징버거',
  lilpa: '릴파',
  jururu: '주르르',
  gosegu: '고세구',
  viichan: '비챤',
  gomem: '클래식',
  classic: '클래식',
  academy: '아카데미',
} as const;

const AchieveInfo = ({ achieve }: Props) => {
  const name = (type: string) => CHARACTER_NAMES[type] || '왁타';

  if (achieve.hidden && !achieve.got) {
    return (
      <LeftWrapper>
        <TitleSection>
          <Tag $character={achieve.type ? achieve.type : 'woowakgood'}>
            {name(achieve.type)}
          </Tag>
          <Title>???</Title>
        </TitleSection>
        <InfoSection>
          <InfoTop>
            <Hidden />
          </InfoTop>
          <InfoBottom>
            <Wrap>
              <Info $variant="title">제작자</Info>
              <Info $variant="content">???</Info>
            </Wrap>
            <Wrap>
              <Info $variant="title">내용</Info>
              <Info $variant="content">???</Info>
            </Wrap>
            <Wrap>
              <Info $variant="title">획득 조건</Info>
              <Info $variant="content">???</Info>
            </Wrap>
          </InfoBottom>
        </InfoSection>
      </LeftWrapper>
    );
  }
  return (
    <LeftWrapper>
      <TitleSection>
        <Tag $character={achieve.type ? achieve.type : 'woowakgood'}>
          {name(achieve.type)}
        </Tag>
        <Title>{achieve.name}</Title>
      </TitleSection>
      <InfoSection>
        <InfoTop>
          <Badge got={achieve.got} src={getAchieveURL(achieve.id)} alt="뱃지 이미지" />
        </InfoTop>
        <InfoBottom>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">{achieve.author}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">내용</Info>
            <Info $variant="content">{achieve.desc}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득 조건</Info>
            <Info $variant="content">{achieve.hint}</Info>
          </Wrap>
        </InfoBottom>
      </InfoSection>
    </LeftWrapper>
  );
};

export default AchieveInfo;
