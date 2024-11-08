import { Container, ContainerContent } from '@/styles/achieve/Layout';
import Header from '@/containers/common/Header';
import Achieve from '@/containers/achieve/Achieve';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useSelector } from 'react-redux';
import useSound from '@/hooks/useSound';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { socket } from '@/services/socket/socket';

const Achieves = () => {
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
      <ContainerContent>
        <Achieve />
      </ContainerContent>
    </Container>
  );
};

export default Achieves;
