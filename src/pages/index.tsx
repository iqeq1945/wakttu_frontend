import { useSelector } from 'react-redux';

import { MainHeader } from '@/components';
import Auth from '@/containers/auth/Auth';
import { selectModal } from '@/redux/modal/modalSlice';

import MainFormContainer from '@/containers/main/MainForm';
import { Container } from '@/styles/common/Layout';
import { Wrapper } from '@/styles/main/Layout';
import useSound from '@/hooks/useSound';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useEffect } from 'react';

const Main = () => {
  const modal = useSelector(selectModal);
  const bgmVolume = useSelector(selectBgmVolume);
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', bgmVolume, 0, true);

  useEffect(() => {
    console.log(bgmVolume);
    console.log(sound);
  }, [bgmVolume]);

  return (
    <>
      {modal.open ? (
        <Auth />
      ) : (
        <Container>
          <MainHeader />
          <Wrapper>
            <MainFormContainer />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Main;
