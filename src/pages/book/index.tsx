import { ContainerContent } from '@/styles/book/BookForm';
import Cosmetic from '@/containers/book/Cosmetic';
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
    if (!socket.connected) router.push('/');
  }, [router]);

  useEffect(() => {
    if (sound) sound.play();
  }, [sound]);

  return (
    <>
      <ContainerContent>
        <Cosmetic />
      </ContainerContent>
    </>
  );
};
export default Book;
