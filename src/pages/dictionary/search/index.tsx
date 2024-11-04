// Search.tsx
import Header from '@/containers/common/Header';
import { WordProps, Words_ } from '@/components/dictionary/Word';
import { Container } from '@/components/dictionary/Container';
import SearchSection from '@/components/dictionary/search/SearchSection';
import { useSelector } from 'react-redux';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import useSound from '@/hooks/useSound';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { socket } from '@/services/socket/socket';

interface SearchProps {
  words: WordProps[];
}

const Search: React.FC<SearchProps> = () => {
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
      <SearchSection />
    </Container>
  );
};

export default Search;
