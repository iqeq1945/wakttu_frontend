import React, { useEffect, useRef, useState } from 'react';
import { createTimer, formatTime } from '../modules/Timer';
import TurnTime from './turnTime';
import Test2 from './wordInput';

interface GameTimeProps {
  onStart: boolean
}

export interface Props {
  start: () => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  getRemainingTime: () => number;
}

export const onTimeout = () => {
  console.log('시간초과');
};

/*타이머 테스트 */
const GameTime: React.FC<GameTimeProps> = ({ onStart }) => {
  const [gameTime, setGameTime] = useState<number>(60000);
  const gameTimerRef = useRef<Props | null>(null);
  const [remainTime, setRemainTime] = useState<number>(60000)

  useEffect(() => {
    const gameTimer: Props = createTimer(
      'start',
      remainingTime => setGameTime(remainingTime),
      () => onTimeout()
    );

    gameTimer.start();
    gameTimerRef.current = gameTimer;

    return () => {
      gameTimer.stop();
    };
  }, []);

  useEffect(() => {
    if (onStart) {
      if (gameTimerRef.current) {
        gameTimerRef.current.pause();
        setRemainTime(0);
      }
    } else {
      if (gameTimerRef.current) {
        setRemainTime(gameTimerRef.current.getRemainingTime())
        gameTimerRef.current.resume();
      }
    }
  }, [onStart])

  // 정지 버튼
  const handleStop = () => {
    if (gameTimerRef.current) {
      gameTimerRef.current.pause();
      setRemainTime(0);
    }
  };

  // 시작 버튼
  const handleStart = () => {
    if (gameTimerRef.current) {
      setRemainTime(gameTimerRef.current.getRemainingTime())
      gameTimerRef.current.resume();
    }
  };

  return (
    <div style={{ fontSize: '24px' }}>
      <div>게임 시간: {formatTime(gameTime)}</div>
      <div>----------</div>
      <TurnTime remainTime={remainTime} />
    </div>
  );
};

export default GameTime;