import { GaugeBar, TimerBar } from '@/styles/last/Answer';
import { useEffect, useState } from 'react';

const Test = () => {
  const [gauge, setGauge] = useState(1);
  const [timer, setTimer] = useState({
    rounTime: 5000,
    turnTime: 20000,
    countTime: 0,
  });

  return (
    <>
      <TimerBar>
        <GaugeBar gauge={timer.rounTime} />
      </TimerBar>
    </>
  );
};

export default Test;
