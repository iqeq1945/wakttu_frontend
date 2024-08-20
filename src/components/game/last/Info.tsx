import { Game } from '@/services/socket/socket';
import {
  BChainText,
  BTimerBar,
  CChain,
  ChainText,
  CInfo,
  CRound,
  CTarget,
  CTargetList,
  CText,
  CTime,
  CTimer,
  GaugeBar,
  LeftTimer,
  NumberText,
  RemainText,
  RightTimer,
  RoundText,
  TargetRound,
  TimerBar,
  TimerIcon,
  TimerItem,
  TimerText,
  Wrapper,
} from '@/styles/last/Info';

interface Props {
  game: Game;
}

const Info = ({ game }: Props) => {
  const keyword = game.keyword!._id.split('');
  return (
    <Wrapper>
      <CChain $flag={true} />
      <CInfo>
        <CRound>
          <CTarget>
            <RoundText>Round</RoundText>
            <TargetRound>
              <NumberText>{game.round}</NumberText>
            </TargetRound>
          </CTarget>
          <CTargetList>
            {keyword.map((word: string) => {
              return (
                <RoundText key={word} $type={game.target === word}>
                  {word}
                </RoundText>
              );
            })}
          </CTargetList>
        </CRound>
        <CTime>
          <CTimer>
            <TimerItem>
              <LeftTimer>
                <TimerIcon src="/assets/game/timer.svg" />
                <TimerText>라운드 남은 시간</TimerText>
              </LeftTimer>
              <RightTimer>
                <RemainText>{game.roundTime / 1000.0}초</RemainText>
                <TimerBar>
                  <GaugeBar gauge={80} />
                </TimerBar>
              </RightTimer>
            </TimerItem>
            <TimerItem>
              <LeftTimer>
                <TimerIcon src="/assets/game/timer.svg" />
                <TimerText>이번턴 남은 시간</TimerText>
              </LeftTimer>
              <RightTimer>
                <RemainText>{game.turnTime / 1000.0}초</RemainText>
                <BTimerBar>
                  <GaugeBar gauge={30} />
                </BTimerBar>
              </RightTimer>
            </TimerItem>
          </CTimer>
        </CTime>
      </CInfo>
      <CChain>
        <CText>
          <ChainText>CHAIN</ChainText>
          <BChainText>{game.chain}</BChainText>
        </CText>
      </CChain>
    </Wrapper>
  );
};

export default Info;
