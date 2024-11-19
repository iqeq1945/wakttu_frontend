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
  PauseTv,
  Logo,
  CList,
  Emergency,
} from '@/styles/kung/Game';
import WordErrorEffect from '../WordErrorEffect';
import { Answer } from '@/redux/answer/answerSlice';
import WordEffect from '../WordEffect';
import { getR2URL } from '@/services/api';

interface Props {
  game: Game;
  keyword: string[];
  history: His[];
  timer: any;
  pause: boolean;
  answer: Answer;
  name: string;
  ban: string[];
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
        <Speaker src={getR2URL('/assets/game/speaker.svg')} alt="스피커 아이콘" reverse={false} />
        <Tv>
          {pause ? (
            <Logo src={getR2URL('/assets/game/kung-logo.svg')} alt="추억의 쿵쿵따!" />
          ) : (
            <PauseTv src={getR2URL('/assets/game/pauseTv.svg')} alt="화면 조정 아이콘" />
          )}
        </Tv>
      </Left>
      <Board>
        <Info>
          <Object>
            <Pen src={getR2URL('/assets/game/pen.svg')} alt="수정하기 아이콘" />
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
              <TimerIcon src={getR2URL('/assets/game/timer-white.svg')} alt="타이머 아이콘" />
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
              <TimerIcon src={getR2URL('/assets/game/timer-white.svg')} alt="타이머 아이콘" />
              <TimerText>이번턴 남은시간</TimerText>
            </LeftTimer>
            <RightTimer>
              <RemainText color={false}>
                {((timer.turnTime - timer.countTime) / 1000.0).toFixed(1)}초
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
        <Speaker src={getR2URL('/assets/game/speaker.svg')} alt="스피커 아이콘" reverse={true} />
        <Frame src={getR2URL('/assets/game/tae.svg')} alt="태극기 아이콘" />
        <Frame src={getR2URL('/assets/game/ment.svg')} alt="급훈: 알잘딱" />
        <CPost>
          <Post>
            <CPostTitle>
              <PostTitle>게 시 판</PostTitle>
            </CPostTitle>
            <CList>
              <Emergency src={getR2URL('/assets/game/emergency.png')} alt="(진지) 경고장: 님은 너무 귀엽습니다 조심해주세요" />
            </CList>
          </Post>
        </CPost>
      </Right>
    </CKung>
  );
};

export default Kung;
