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

const Info = () => {
  return (
    <Wrapper>
      <CChain $flag={true} />
      <CInfo>
        <CRound>
          <CTarget>
            <RoundText>Round</RoundText>
            <TargetRound>
              <NumberText>4</NumberText>
            </TargetRound>
          </CTarget>
          <CTargetList>
            <RoundText $type={false}>이</RoundText>
            <RoundText $type={false}>세</RoundText>
            <RoundText $type={false}>계</RoundText>
            <RoundText $type={true}>아</RoundText>
            <RoundText $type={false}>이</RoundText>
            <RoundText $type={false}>돌</RoundText>
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
                <RemainText>8888.1초</RemainText>
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
                <RemainText>8.1초</RemainText>
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
          <BChainText>2</BChainText>
        </CText>
      </CChain>
    </Wrapper>
  );
};

export default Info;
