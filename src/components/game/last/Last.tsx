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
            <WordText>{history[0].id}</WordText>
            <CDesc>
              <Category>
                <span>{history[0].type[0]}</span>
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
              <Desc>의미</Desc>
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
                뜻ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
              </Desc>
            </CDesc>
          </CWordC>
        </CCargo>
        <CCargo>
          <CWordC>
            <WordText>온</WordText>
            <CDesc>
              <Category>
                <span>명</span>
              </Category>
              <Desc>
                뜻ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
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
