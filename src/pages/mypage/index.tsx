import MyEmoticon from '@/components/mypage/MyEmoticon';
import MyPageHeader from '@/containers/mypage/MyPageHeader';
import CharacterInfo from '@/containers/mypage/CharacterInfo';
import MyStyleList from '@/containers/mypage/MyStyleList';
import { Container } from '@/styles/common/Layout';
import {
  Content,
  ContentFooter,
  LeftWrapper,
  Wrapper,
} from '@/styles/mypage/Mystyles';
import { Copyright } from '@/styles/room/Room';
import Header from '@/containers/common/Header';

const Mypage = () => {
  return (
    <Container>
      <Header />
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
    </Container>
  );
};

export default Mypage;
