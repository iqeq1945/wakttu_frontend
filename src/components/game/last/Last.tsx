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

interface Props {
  history: any[];
}

const Game = ({ history }: Props) => {
  return (
    <CMain>
      <Left src="/assets/game/blinker.svg" />
      <Main>
        <CTrain>
          <CWord>
            <WordText>{history[0]._id}</WordText>
            <CDesc>
              <Category>
                <span>{history[0].type}</span>
              </Category>
              <Desc>{history[0].mean}</Desc>
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
