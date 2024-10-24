import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getAchieveURL } from '@/services/api';
import {
  Badge,
  CAchieve,
  Content,
  Desc,
  Info,
  Name,
} from '@/styles/common/Achieve';

interface Props {
  achieves: AchieveState[];
}

const Achieve = ({ achieves }: Props) => {
  return (
    <>
      {achieves.map((achieve: AchieveState, idx: number) => {
        return (
          <CAchieve idx={idx} key={achieve.id}>
            <Content>
              <Badge src={getAchieveURL(achieve.id)} />
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
