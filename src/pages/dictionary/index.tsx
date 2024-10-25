import React, { useEffect, useState } from 'react';
import MainSection from '@/components/dictionary/MainSection';
import WordSection from '@/components/dictionary/WordSection';
import { Container } from '@/components/dictionary/Container';
import useSound from '@/hooks/useSound';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useSelector } from 'react-redux';

const Dictionary: React.FC = () => {
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', bgmVolume, 0, true);

  useEffect(() => {
    if (sound) sound.play();
  }, [sound]);

  return (
    <Container>
      <MainSection />
      <WordSection />
    </Container>
  );
};

export default Dictionary;
