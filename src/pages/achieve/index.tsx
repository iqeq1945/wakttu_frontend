import { ContainerContent } from '@/styles/achieve/Layout';

import Achieve from '@/containers/achieve/Achieve';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useSelector } from 'react-redux';
import useSound from '@/hooks/useSound';
import { useEffect } from 'react';

const Achieves = () => {
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', bgmVolume, 0, true);

  useEffect(() => {
    if (sound) sound.play();
  }, [sound]);

  return (
    <>
      <ContainerContent>
        <Achieve />
      </ContainerContent>
    </>
  );
};

export default Achieves;
