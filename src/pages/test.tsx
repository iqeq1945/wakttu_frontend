import { Container, GaugeBar, TimerBar } from '@/styles/last/Answer';
import { useEffect, useState } from 'react';

const Test = () => {
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState({
    rounTime: 20000,
    turnTime: 20000,
    countTime: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      console.log('true');
      setPause(true);
    }, 2000);
    setTimeout(() => {
      console.log('false');
      setPause(false);
    }, 5000);
    setTimeout(() => {
      console.log('true');
      setTimer((prev) => {
        return { ...prev, rounTime: 5000 };
      });
      setPause(true);
    }, 7000);
  }, []);

  return (
    <>
      <Container pause={pause}>
        <TimerBar>
          <GaugeBar gauge={timer.rounTime} pause={pause} />
        </TimerBar>
      </Container>
    </>
  );
};

export default Test;
