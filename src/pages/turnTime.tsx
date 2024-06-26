import { useEffect, useState } from "react";
import { Props, onTimeout } from "./gameTime";
import { createTimer, formatTime } from "@/modules/Timer";

const TurnTime: React.FC<{ remainTime: number }> = ({ remainTime }) => {
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<Props | null>(null);


  useEffect(() => {
    if (timer) {
      timer.stop();
    }

    const newTimer: Props = createTimer(
      remainTime,
      remainingTime => setTime(remainingTime),
      () => onTimeout()
    );

    newTimer.start();
    setTimer(newTimer);

    return () => {
      newTimer.stop();
    };
  }, [remainTime]);

  const onTimeout = () => {
    console.log('시간초과');
  };

  return (
    <div style={{ fontSize: '24px' }}>{formatTime(time)}</div>
  )
}

export default TurnTime;