import React, { useEffect, useRef, useState } from 'react';
import { createTimer, formatTime } from '../modules/Timer';


interface Props {
  start: () => void;
  stop: () => void;
}

/*타이머 테스트 */
const Test: React.FC = () => {
  const [gameTime, setGameTime] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<Props | null>(null);

  useEffect(() => {
    /* 게임 시간 */
    const gameTimer: Props = createTimer(
      'gameTime',
      remainingTime => setGameTime(remainingTime),
      () => onTimeout()
    );

    gameTimer.start();

    return () => {
      gameTimer.stop();
    };
  }, []);

  useEffect(() => {
    /* 입력 시간 */
    if (timer) {
      timer.stop();
    }

    const newTimer: Props = createTimer(
      level,
      remainingTime => setTime(remainingTime),
      () => onTimeout()
    );

    newTimer.start();
    setTimer(newTimer);

    return () => {
      newTimer.stop();
    };
  }, [level]);

  const onTimeout = () => {
    console.log('시간초과');
  };

  const handleLevelChange = (selectedLevel: number) => {
    setLevel(selectedLevel);
  };


  return (
    <div style={{ fontSize: '24px' }}>
      <div>게임 시간: {formatTime(gameTime)}</div>
      <div>단계 :
        <button onClick={() => handleLevelChange(1)}>1</button>
        <button onClick={() => handleLevelChange(2)}>2</button>
        <button onClick={() => handleLevelChange(3)}>3</button>
      </div>
      <div>남은 시간: {formatTime(time)}</div>
    </div>
  );
};

export default Test;
