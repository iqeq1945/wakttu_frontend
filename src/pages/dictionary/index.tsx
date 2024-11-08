import React, { useEffect, useState } from 'react';
import Header from '@/containers/common/Header';
import MainSection from '@/components/dictionary/MainSection';
import WordSection from '@/components/dictionary/WordSection';
import { Container } from '@/components/dictionary/Container';
import useSound from '@/hooks/useSound';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useSelector } from 'react-redux';
import { socket } from '@/services/socket/socket';
import { useRouter } from 'next/router';

const Dictionary: React.FC = () => {
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', bgmVolume, 0, true);
  const router = useRouter();

  useEffect(() => {
    const handleDisconnect = () => {
      router.replace('/');
    };

    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('disconnect', handleDisconnect);
    };
  }, [router]);
  useEffect(() => {
    if (sound) sound.play();
  }, [sound]);

  return (
    <Container>
      <Header />
      <MainSection />
      <WordSection />
    </Container>
  );
};

export default Dictionary;
