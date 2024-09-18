import { hangulTools } from '@/modules/Hangul';
import { Game } from '@/services/socket/socket';
import {
  BTimerBar,
  Container,
  CTimer,
  GaugeBar,
  Modal,
  ModalTitle,
  TimerText,
  RemainText,
  TimerBar,
  TimerIcon,
  TargetText,
  CAnswer,
  AnswerText,
  TitleText,
  LeftTimer,
  RightTimer,
} from '@/styles/kung/Answer';
import { Answer as TypeAnswer } from '@/redux/answer/answerSlice';
import WordErrorEffect from '../WordErrorEffect';
import { R2_URL } from '@/services/api';

interface Props {
  chat: string;
  game: Game;
  timer: any;
  answer: TypeAnswer;
  pause: boolean;
}

const Answer = ({ chat, game, timer, answer, pause }: Props) => {
  const target = () => {
    const res = hangulTools().dueum(game.target);
    if (res !== game.target && res !== '') return `(${res})`;
    else return '';
  };
  return (
    <Container pause={pause}>
      <Modal>
        <ModalTitle>
          <TitleText>
            당신의 차례! 채팅 창에
            {game.chain % 2 === 1 ? ' 세글자 단어' : ' 두글자 단어'} 입력하세요.
          </TitleText>
        </ModalTitle>
        <TargetText>
          {game.target}
          {target()}
        </TargetText>
        {answer.success === false ? (
          <WordErrorEffect word={answer.answer as string} />
        ) : (
          ''
        )}
        <CTimer>
          <LeftTimer>
            <TimerIcon src={R2_URL + '/assets/game/timer-white.svg'} />
            <TimerText>라운드 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>
              {((timer.roundTime - timer.countTime) / 1000.0).toFixed(1)}초
            </RemainText>
            <TimerBar>
              <GaugeBar
                key={game.target}
                gauge={timer.roundTime}
                pause={pause}
              />
            </TimerBar>
          </RightTimer>
        </CTimer>
        <CTimer>
          <LeftTimer>
            <TimerIcon src={R2_URL + '/assets/game/timer-white.svg'} />
            <TimerText>이번턴 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>
              {((timer.turnTime - timer.countTime) / 1000.0).toFixed(1)}초
            </RemainText>
            <BTimerBar>
              <GaugeBar
                key={game.target}
                gauge={timer.turnTime}
                pause={pause}
              />
            </BTimerBar>
          </RightTimer>
        </CTimer>
        <CAnswer>
          <AnswerText>{chat}</AnswerText>
        </CAnswer>
      </Modal>
    </Container>
  );
};

export default Answer;
