import { useState } from 'react';
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
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <>
      {achieves.map((achieve: AchieveState, idx: number) => {
        return (
          <CAchieve
            idx={idx}
            key={achieve.id}
            style={{
              visibility: loadedImages[achieve.id] ? 'visible' : 'hidden',
            }}
          >
            <Content>
              <Badge
                src={getAchieveURL(achieve.id)}
                onLoad={() => handleImageLoad(achieve.id)}
              />
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
