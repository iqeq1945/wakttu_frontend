import { Info as InfoState, Item } from '@/containers/achieve/Achieve';
import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getAchieveURL, getR2URL, getWAKURL } from '@/services/api';
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

const AchieveInfo = ({ achieve }: Props) => {
  const name = (type: string) => {
    switch (type) {
      case 'woowakgood':
        return '우왁굳';
      case 'ine':
        return '아이네';
      case 'jingburger':
        return '징버거';
      case 'lilpa':
        return '릴파';
      case 'jururu':
        return '주르르';
      case 'gosegu':
        return '고세구';
      case 'viichan':
        return '비챤';
      case 'gomem':
        return '고멤';
      case 'academy':
        return '아카데미';
      default:
        return '왁타';
    }
  };

  if (achieve.hidden) {
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
          <Badge got={achieve.got} src={getAchieveURL(achieve.id)} />
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
