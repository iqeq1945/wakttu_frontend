import { hangulTools } from '@/modules/Hangul';
import { Game as Type } from '@/services/socket/socket';
import {
  Category,
  CCargo,
  CDesc,
  CHistory,
  CMain,
  CTrain,
  CWord,
  CWordC,
  Desc,
  Left,
  Main,
  NameText,
  Right,
  WordText,
} from '@/styles/last/Game';
import { RefObject, useCallback, useEffect } from 'react';

interface Props {
  history: any[];
  game: Type;
  historyBoxRef: RefObject<HTMLDivElement>;
}

const Game = ({ history, game, historyBoxRef }: Props) => {
  const target = () => {
    const res = hangulTools().dueum(game.target);
    if (res !== game.target) return `(${res})`;
  };
  const scrollToBottom = useCallback(() => {
    if (historyBoxRef.current) {
      historyBoxRef.current.scrollTop = historyBoxRef.current.scrollHeight;
    }
  }, [historyBoxRef]);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  return (
    <CMain>
      <Left src="/assets/game/blinker.svg" />

      <Main>
        <CTrain>
          <CWord>
            <WordText>효과이미지</WordText>
          </CWord>
        </CTrain>
        <CCargo>
          <CWordC>
            <WordText>{history[history.length - 1].id}</WordText>
            <CDesc>
              <Category>
                <span>{history[history.length - 1].type[0]}</span>
              </Category>
              <Desc>{history[history.length - 1].mean}</Desc>
            </CDesc>
          </CWordC>
        </CCargo>
        <CCargo>
          <CWordC>
            <WordText>
              {game.target}
              {target()}
            </WordText>
            <CDesc>
              <NameText $name={true}>{game.users[game.turn].name}</NameText>
              <NameText> 님의 차례!</NameText>
            </CDesc>
          </CWordC>
        </CCargo>
      </Main>
      <Right src="/assets/game/mission.svg" />
    </CMain>
  );
};

export default Game;
