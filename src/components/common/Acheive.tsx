import { getR2URL } from '@/services/api';
import {
  Badge,
  CAcheive,
  Content,
  CTitle,
  Desc,
  Info,
  Name,
  Title,
  Trophy,
} from '@/styles/common/Acheive';

const Acheive = () => {
  return (
    <CAcheive>
      <CTitle>
        <Trophy src={getR2URL('/assets/icons/trophy.svg')} />
        <Title>도전과제</Title>
      </CTitle>
      <Content>
        <Badge src={'/badge.jpg'} />
        <Info>
          <Name>릴파니?</Name>
          <Desc>내가 특별히 친구 해줄게! ㅊ...친구.. 할 거지...?</Desc>
        </Info>
      </Content>
    </CAcheive>
  );
};

export default Acheive;
