import { AchieveState } from '@/redux/achieve/achieveSlice';
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

interface Props {
  achieves: AchieveState[];
}

const Acheive = ({ achieves }: Props) => {
  return (
    <>
      {achieves.map((achieve: AchieveState) => {
        return (
          <CAcheive key={achieve.id}>
            <CTitle>
              <Trophy src={getR2URL('/assets/icons/trophy.svg')} />
              <Title>도전과제</Title>
            </CTitle>
            <Content>
              <Badge src={achieve.img} />
              <Info>
                <Name>{achieve.name}</Name>
                <Desc>{achieve.desc}</Desc>
              </Info>
            </Content>
          </CAcheive>
        );
      })}
    </>
  );
};

export default Acheive;
