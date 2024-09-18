import { Game } from '@/services/socket/socket';
import {
  BanText,
  Container,
  Modal,
  LeftTimer,
  CTimer,
  RightTimer,
  ModalTitle,
  TimerIcon,
  TimerText,
  RemainText,
  TimerBar,
  GaugeBar,
  Condition,
  ConditionText,
} from '@/styles/kung/Ban';

interface Props {
  chat: string;
  game: Game;
  timer: any;
  pause: boolean;
}

const Ban = ({ chat, game, timer, pause }: Props) => {
  return (
    <Container pause={pause}>
      <Modal>
        <ModalTitle>이번 라운드에서 금지될 단어를 입력해주세요!</ModalTitle>
        <BanText>{chat}</BanText>
        <CTimer>
          <LeftTimer>
            <TimerIcon src="/assets/game/timer-black.svg" />
            <TimerText>입력 남은 시간</TimerText>
          </LeftTimer>
          <RightTimer>
            <RemainText>
              {((timer.turnTime - timer.countTime) / 1000.0).toFixed(1)}초
            </RemainText>
            <TimerBar>
              <GaugeBar
                key={game.target}
                gauge={timer.turnTime}
                pause={pause}
              />
            </TimerBar>
          </RightTimer>
        </CTimer>
        <Condition>
          <ConditionText>두 글자, 세 글자 단어를 입력하세요!</ConditionText>
        </Condition>
      </Modal>
    </Container>
  );
};

export default Ban;
