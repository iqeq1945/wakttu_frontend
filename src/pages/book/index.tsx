import { Container, ContainerContent } from '@/styles/book/BookForm';
import Cosmetic from '@/containers/book/Cosmetic';
import Header from '@/containers/common/Header';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import useSound from '@/hooks/useSound';
import { useEffect } from 'react';
import { socket } from '@/services/socket/socket';

const Book = () => {
  const router = useRouter();
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', bgmVolume, 0, true);

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
        <Cosmetic />
      </ContainerContent>
    </Container>
  );
};
export default Book;
