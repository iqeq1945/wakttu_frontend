import { hangulTools } from '@/modules/Hangul';
import { Game as Type } from '@/services/socket/socket';
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
  NameText,
  Right,
  SWheel,
  BWheel,
  WordText,
  Light,
  CLeft,
  MissionText,
  CRight,
} from '@/styles/last/Game';
import { RefObject } from 'react';
import WordErrorEffect from './WordErrorEffect';
import WordEffect from './WordEffect';

interface Props {
  history: any[];
  game: Type;
  answer: any;
  name: string;
  historyBoxRef?: RefObject<HTMLDivElement>;
}

const Game = ({ history, game, answer, historyBoxRef }: Props) => {
  const target = () => {
    const res = hangulTools().dueum(game.target);
    if (res !== game.target && res !== '') return `(${res})`;
    else return '';
  };
  {
    /** const scrollToBottom = useCallback(() => {
    if (historyBoxRef.current) {
      historyBoxRef.current.scrollTop = historyBoxRef.current.scrollHeight;
    }
  }, [historyBoxRef]);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);*/
  }

  return (
    <CMain>
      <CLeft>
        <Left src="/assets/game/blinker.svg" />
        <Light
          src="assets/game/red.svg"
          top="4.6rem"
          onLight={answer.success}
        />
        <Light
          src="assets/game/yellow.svg"
          top="8.25rem"
          onLight={answer.success === undefined}
        />
        <Light
          src="assets/game/green.svg"
          top="11.8rem"
          onLight={answer.success === false}
        />
      </CLeft>

      <Main>
        <CTrain>
          <CWord>
            <WordText>끝말잇기!</WordText>
          </CWord>
          <SWheel src="/assets/game/wheel.svg" $rotate={answer.success} />
          <BWheel
            src="/assets/game/wheel.svg"
            left="9.8rem"
            $rotate={answer.success}
          />
          <BWheel
            src="/assets/game/wheel.svg"
            left="16.8rem"
            $rotate={answer.success}
          />
        </CTrain>
        <CCargo>
          <CWordC>
            <WordText>
              <WordEffect word={history[history.length - 1].id} />
            </WordText>
            <CDesc>
              <Category>
                <span>{history[history.length - 1].type[0]}</span>
              </Category>
              <Desc>{history[history.length - 1].mean}</Desc>
            </CDesc>
          </CWordC>
          <BWheel
            src="/assets/game/wheel.svg"
            left="1.2rem"
            $rotate={answer.success}
          />
          <BWheel
            src="/assets/game/wheel.svg"
            left="12.5rem"
            $rotate={answer.success}
          />
        </CCargo>
        <CCargo>
          <CWordC>
            <WordText>
              {game.target}
              {target()}
            </WordText>
            <CDesc>
              <NameText $name={true}>
                {/*game.users[game.turn].name */}
              </NameText>
              <NameText> 님의 차례!</NameText>
            </CDesc>
            {answer.success === false && (
              <WordErrorEffect word={answer.answer} />
            )}
          </CWordC>
          <BWheel
            src="/assets/game/wheel.svg"
            left="1.2rem"
            $rotate={answer.success}
          />
          <BWheel
            src="/assets/game/wheel.svg"
            left="12.5rem"
            $rotate={answer.success}
          />
        </CCargo>
      </Main>
      <CRight>
        <Right src="/assets/game/mission.svg" />
        <MissionText>{game.mission}</MissionText>
      </CRight>
    </CMain>
  );
};

export default Game;
