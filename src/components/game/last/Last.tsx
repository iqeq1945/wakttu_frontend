import {
  Category,
  CCargo,
  CDesc,
  CMain,
  CTrain,
  CWord,
  CWordC,
  Desc,
  Left,
  Main,
  Right,
  WordText,
} from '@/styles/last/Game';

const Game = () => {
  return (
    <CMain>
      <Left src="/assets/game/blinker.svg" />
      <Main>
        <CTrain>
          <CWord>
            <WordText>아이네</WordText>
            <CDesc>
              <Category>
                <span>명</span>
              </Category>
              <Desc>
                버츄얼 그룹 ‘이세계아이돌’의 멤버. 보라색을 좋아하며 멤버중
                첫째이다. MBTI는 INFP이며ffffffffffffff
              </Desc>
            </CDesc>
          </CWord>
        </CTrain>
        <CCargo>
          <CWordC>
            <WordText>네온</WordText>
            <CDesc>
              <Category>
                <span>명</span>
              </Category>
              <Desc>
                〈화학〉대기 중에 소량으로 존재하는 가스 상태의 원소. 빛깔도
                냄새도 맛도 없으며, 화학적으로 비활성이다. 방전관에 넣으면
                아름다운 색을 내므로, 네온전구 및 광고용 네온사인으로 널리
                이용한다.
              </Desc>
            </CDesc>
          </CWordC>
        </CCargo>
        <CCargo>
          <CWordC>
            <WordText>네온</WordText>
            <CDesc>
              <Category>
                <span>명</span>
              </Category>
              <Desc>
                〈화학〉대기 중에 소량으로 존재하는 가스 상태의 원소. 빛깔도
                냄새도 맛도 없으며, 화학적으로 비활성이다. 방전관에 넣으면
                아름다운 색을 내므로, 네온전구 및 광고용 네온사인으로 널리
                이용한다.
              </Desc>
            </CDesc>
          </CWordC>
        </CCargo>
        <CCargo>
          <CWordC>
            <WordText>네온</WordText>
            <CDesc>
              <Category>
                <span>명</span>
              </Category>
              <Desc>
                〈화학〉대기 중에 소량으로 존재하는 가스 상태의 원소. 빛깔도
                냄새도 맛도 없으며, 화학적으로 비활성이다. 방전관에 넣으면
                아름다운 색을 내므로, 네온전구 및 광고용 네온사인으로 널리
                이용한다.
              </Desc>
            </CDesc>
          </CWordC>
        </CCargo>
      </Main>
      <Right src="/assets/game/mission.svg" />
    </CMain>
  );
};

export default Game;
