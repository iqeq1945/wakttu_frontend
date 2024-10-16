import { Info as InfoState } from '@/containers/achieve/Achieve';
import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getWAKURL } from '@/services/api';
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

interface Props {
  achieve: AchieveState;
  info: InfoState;
}

const AchieveInfo = ({ achieve, info }: Props) => {
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

  return (
    <LeftWrapper>
      <TitleSection>
        <Tag $character={info.type ? info.type : 'woowakgood'}>
          {name(info.type)}
        </Tag>
        <Title>{achieve.name}</Title>
      </TitleSection>
      <InfoSection>
        <InfoTop>
          <Badge src={getWAKURL(achieve.img)} />
        </InfoTop>
        <InfoBottom>
          <Wrap>
            <Info $variant="title">제작자</Info>
            <Info $variant="content">{info.author}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">내용</Info>
            <Info $variant="content">{info.desc}</Info>
          </Wrap>
          <Wrap>
            <Info $variant="title">획득 조건</Info>
            <Info $variant="content">{info.hint}</Info>
          </Wrap>
        </InfoBottom>
      </InfoSection>
    </LeftWrapper>
  );
};

export default AchieveInfo;
