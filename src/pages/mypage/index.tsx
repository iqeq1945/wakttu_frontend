import MyEmoticon from '@/components/mypage/MyEmoticon';
import MyPageHeader from '@/containers/mypage/MyPageHeader';
import CharacterInfo from '@/containers/mypage/CharacterInfo';
import MyStyleList from '@/containers/mypage/MyStyleList';
import {
  Content,
  ContentFooter,
  LeftWrapper,
  Wrapper,
} from '@/styles/mypage/Mystyles';
import { Copyright } from '@/styles/room/Room';
import useSound from '@/hooks/useSound';
import { useSelector } from 'react-redux';
import { selectBgmVolume } from '@/redux/audio/audioSlice';
import { useRouter } from 'next/router';
import { socket } from '@/services/socket/socket';
import { useEffect } from 'react';

const Mypage = () => {
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
      <MyPageHeader />
      <Wrapper>
        <LeftWrapper>
          <Content>
            <CharacterInfo />
            <MyEmoticon />
          </Content>
          <ContentFooter>
            <Copyright>
              © copyright WAKTTU.
              <br />
              왁뚜는 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
            </Copyright>
          </ContentFooter>
        </LeftWrapper>
        <MyStyleList />
      </Wrapper>
    </>
  );
};

export default Mypage;
