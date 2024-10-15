import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getWAKURL } from '@/services/api';
import { Badge, BadgeBox, List } from '@/styles/achieve/AchieveList';
import { RightWrapper } from '@/styles/achieve/Layout';

interface Props {
  achieves: AchieveState[];
  onClick: (e: any) => void;
}

const AchieveList = ({ achieves, onClick }: Props) => {
  return (
    <RightWrapper>
      <List>
        {achieves.map((achieve: AchieveState) => {
          return (
            <BadgeBox key={achieve.id} data-id={achieve.id} onClick={onClick}>
              <Badge src={achieve.img ? getWAKURL(achieve.img) : ''} />
            </BadgeBox>
          );
        })}
      </List>
    </RightWrapper>
  );
};

export default AchieveList;
