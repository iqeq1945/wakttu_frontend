import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getR2URL, getWAKURL } from '@/services/api';
import {
  Badge,
  CAchieve,
  Content,
  CTitle,
  Desc,
  Info,
  Name,
  Title,
  Trophy,
} from '@/styles/common/Acheive';

interface Props {
  achieves: AchieveState[];
}

const Achieve = ({ achieves }: Props) => {
  console.log(achieves);
  return (
    <>
      {achieves.map((achieve: AchieveState, idx: number) => {
        return (
          <CAchieve idx={idx} key={achieve.id}>
            <CTitle>
              <Trophy src={getR2URL('/assets/icons/trophy.svg')} />
              <Title>도전과제</Title>
            </CTitle>
            <Content>
              <Badge src={getWAKURL(achieve.img)} />
              <Info>
                <Name>{achieve.name}</Name>
                <Desc>{achieve.desc}</Desc>
              </Info>
            </Content>
          </CAchieve>
        );
      })}
    </>
  );
};

export default Achieve;
