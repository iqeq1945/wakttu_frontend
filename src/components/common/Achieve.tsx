import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getR2URL, getWAKURL } from '@/services/api';
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
  console.log(achieves);
  return (
    <>
      {achieves.map((achieve: AchieveState, idx: number) => {
        return (
          <CAchieve idx={idx} key={achieve.id}>
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
