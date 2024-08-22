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

interface Props {
  chat: string;
  game: Game;
  time: number;
}

const Answer = ({ chat, game, time }: Props) => {
  return (
    <Container>
      <Modal>
        <ModalTitle>
          <TitleText>
            당신의 차례! 아래의 채팅 창에서 답을 입력하세요.
          </TitleText>
        </ModalTitle>
        <TargetText>{game.target}</TargetText>
        <CTimer>
          <LeftTimer>
            <TimerIcon src="/assets/game/timer.svg" />
            <TimerText>라운드 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>88.1초</RemainText>
            <TimerBar>
              <GaugeBar gauge={80} />
            </TimerBar>
          </RightTimer>
        </CTimer>
        <CTimer>
          <LeftTimer>
            <TimerIcon src="/assets/game/timer.svg" />
            <TimerText>이번턴 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>{(time / 1000).toFixed(1)}</RemainText>
            <BTimerBar>
              <GaugeBar gauge={40} />
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
