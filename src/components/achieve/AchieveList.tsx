import { Item } from '@/containers/achieve/Achieve';
import { AchieveState } from '@/redux/achieve/achieveSlice';
import { getAchieveURL, getR2URL, getWAKURL } from '@/services/api';
import { Badge, BadgeBox, Hidden, List } from '@/styles/achieve/AchieveList';
import { RightWrapper } from '@/styles/achieve/Layout';
import { useSelector } from 'react-redux';
import useWaktaSound from '@/hooks/useWaktaSound';
import { useCallback } from 'react';
import { selectVoiceVolume } from '@/redux/audio/audioSlice';

interface Props {
  achieves: Item[];
  onClick: (e: any) => void;
}

const AchieveList = ({ achieves, onClick }: Props) => {
  const voiceVolume = useSelector(selectVoiceVolume);
  const sound = useWaktaSound(voiceVolume);

  const handleMouseEnter = useCallback(() => {
    if (sound) sound['l-2'].play();
  }, [sound]);

  return (
    <RightWrapper>
      <List>
        {achieves.map((achieve: Item) => {
          return (
            <BadgeBox
              key={achieve.id}
              data-id={achieve.id}
              onClick={onClick}
              onMouseEnter={handleMouseEnter}
            >
              {achieve.hidden && !achieve.got ? (
                <Hidden />
              ) : (
                <Badge got={achieve.got} src={getAchieveURL(achieve.id)} />
              )}
            </BadgeBox>
          );
        })}
      </List>
    </RightWrapper>
  );
};

export default AchieveList;
