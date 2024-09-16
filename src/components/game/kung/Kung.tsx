import { hangulTools } from '@/modules/Hangul';
import { History as His } from '@/redux/history/historySlice';
import { Game } from '@/services/socket/socket';
import {
  Board,
  ChainText,
  CTimer,
  CKung,
  CPost,
  CPostTitle,
  Desc,
  Frame,
  GaugeBar,
  History,
  HistroyText,
  Info,
  Left,
  LeftDesc,
  LeftTimer,
  Main,
  Name,
  Object,
  ObjectText,
  Pen,
  Post,
  PostTitle,
  Right,
  RightDesc,
  RightTimer,
  Round,
  RoundText,
  RemainText,
  Speaker,
  Target,
  TimerBar,
  TimerIcon,
  TimerItem,
  TimerText,
  Turn,
  Tv,
  Typing,
  TypingText,
  BTimerBar,
} from '@/styles/kung/Game';
import WordErrorEffect from '../WordErrorEffect';
import { Answer } from '@/redux/answer/answerSlice';
import WordEffect from '../WordEffect';

interface Props {
  game: Game;
  keyword: string[];
  history: His[];
  timer: any;
  pause: boolean;
  answer: Answer;
  name: string;
}

const Kung = ({
  game,
  keyword,
  timer,
  pause,
  name,
  answer,
  history,
}: Props) => {
  const target = () => {
    const res = hangulTools().dueum(game.target);
    if (res !== game.target && res !== '') return `(${res})`;
    else return '';
  };
  return (
    <CKung>
      <Left>
        <Speaker src="/assets/game/speaker.svg" reverse={false} />
        <Tv>{answer.success}</Tv>
      </Left>
      <Board>
        <Info>
          <Object>
            <Pen src="/assets/game/pen.svg" />
            <ObjectText>학습목표</ObjectText>
          </Object>
          <Round>
            {keyword.map((word: string, index: number) => {
              return (
                <RoundText key={index} target={game.round - 1 === index}>
                  {word}
                </RoundText>
              );
            })}
          </Round>
          <ChainText>Chain | {game.chain}</ChainText>
        </Info>
        <Main>
          <History>
            <HistroyText>
              <WordEffect word={history[history.length - 1].id} />
            </HistroyText>
            <Desc>
              <LeftDesc>{history[history.length - 1].type[0]}</LeftDesc>
              <RightDesc>{history[history.length - 1].mean}</RightDesc>
            </Desc>
          </History>
          <Turn>
            <Target>
              {answer.success === false ? (
                <WordErrorEffect word={answer.answer as string} />
              ) : (
                <>
                  {game.target}
                  {target()}
                </>
              )}
            </Target>
            <Typing>
              {pause ? (
                <>
                  <Name>{name}</Name>
                  <TypingText>님이 입력중입니다...</TypingText>
                </>
              ) : (
                <TypingText>쉬는 시간!</TypingText>
              )}
            </Typing>
          </Turn>
        </Main>
        <CTimer>
          <TimerItem>
            <LeftTimer>
              <TimerIcon src="/assets/game/timer-white.svg" />
              <TimerText>라운드 남은시간</TimerText>
            </LeftTimer>
            <RightTimer>
              <RemainText color={true}>
                {((timer.roundTime - timer.countTime) / 1000.0).toFixed(1)}초
              </RemainText>
              <TimerBar>
                <GaugeBar
                  key={game.target}
                  gauge={timer.roundTime}
                  pause={pause}
                  color={true}
                />
              </TimerBar>
            </RightTimer>
          </TimerItem>
          <TimerItem>
            <LeftTimer>
              <TimerIcon src="/assets/game/timer-white.svg" />
              <TimerText>이번턴 남은시간</TimerText>
            </LeftTimer>
            <RightTimer>
              <RemainText color={false}>
                {((timer.turnTime - timer.countTime) / 1000.0).toFixed(1)}
              </RemainText>
              <BTimerBar>
                <GaugeBar
                  key={game.target}
                  gauge={timer.turnTime}
                  pause={pause}
                  color={false}
                />
              </BTimerBar>
            </RightTimer>
          </TimerItem>
        </CTimer>
      </Board>
      <Right>
        <Speaker src="/assets/game/speaker.svg" reverse={true} />
        <Frame src="/assets/game/tae.svg" />
        <Frame src="/assets/game/ment.svg" />
        <CPost>
          <Post>
            <CPostTitle>
              <PostTitle>금지단어</PostTitle>
            </CPostTitle>
          </Post>
        </CPost>
      </Right>
    </CKung>
  );
};

export default Kung;
