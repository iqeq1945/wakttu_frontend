import { hangulTools } from '@/modules/Hangul';
import { selectTimer } from '@/redux/timer/timerSlice';
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
} from '@/styles/last/Answer';
import { LeftTimer, RightTimer } from '@/styles/last/Info';
import { useSelector } from 'react-redux';

interface Props {
  chat: string;
  game: Game;
}

const Answer = ({ chat, game }: Props) => {
  const timer = useSelector(selectTimer);
  const target = () => {
    const res = hangulTools().dueum(game.target);
    if (res !== game.target) return `(${res})`;
  };
  return (
    <Container>
      <Modal>
        <ModalTitle>
          <TitleText>
            당신의 차례! 아래의 채팅 창에서 답을 입력하세요.
          </TitleText>
        </ModalTitle>
        <TargetText>
          {game.target}
          {target()}
        </TargetText>
        <CTimer>
          <LeftTimer>
            <TimerIcon src="/assets/game/timer.svg" />
            <TimerText>라운드 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>
              {(timer.roundTime - timer.countTime) / 1000.0}초
            </RemainText>
            <TimerBar>
              <GaugeBar
                gauge={
                  ((timer.roundTime - timer.countTime) / timer.roundTime) * 100
                }
              />
            </TimerBar>
          </RightTimer>
        </CTimer>
        <CTimer>
          <LeftTimer>
            <TimerIcon src="/assets/game/timer.svg" />
            <TimerText>이번턴 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>
              {(timer.turnTime - timer.countTime) / 1000.0}
            </RemainText>
            <BTimerBar>
              <GaugeBar
                gauge={
                  ((timer.turnTime - timer.countTime) / timer.turnTime) * 100
                }
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
