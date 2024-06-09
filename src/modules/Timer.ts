/**
 * 시간을 초 형식의 문자열로 변환하는 유틸리티 함수
 * @param time 밀리초 단위의 시간
 * @returns 소수점 이하 한 자리까지 표시
 */
export function formatTime(time: number): string {
  const seconds = (time / 1000).toFixed(1);
  return `${seconds}`;
}

/**
 * 타이머 함수를 생성하는 함수
 * @param duration 타이머의 기간(밀리초)
 * @param onTick 매 초마다 호출될 콜백 함수
 * @param onTimeout 타임아웃 발생 시 호출될 콜백 함수
 * @returns 타이머를 시작하는 함수
 */
export function createTimer(
  level: number | string,
  onTick: (remainingTime: number) => void,
  onTimeout: () => void,
): { start: () => void; stop: () => void } {
  let startTime = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  let duration: number;

  switch (level) {
    case 1: duration = 8000; break;
    case 2: duration = 7000; break;
    case 3: duration = 6000; break;
    case 4: duration = 5000; break;
    case 5: duration = 4000; break;
    case 6: duration = 3000; break;
    case 'gameTime': duration = 30000; break;
    default: duration = 0; break;
  }

  /**
   * 타이머 시작 함수
   * 1초마다 tick 호출
   */
  function start(): void {
    startTime = Date.now();
    tick();
    timeoutId = setInterval(tick, 100);
  }

  /**
   * 타이머 종료 함수
   */
  function stop(): void {
    if (timeoutId) {
      clearInterval(timeoutId);
      timeoutId = null;
      onTimeout();
      console.log('종료')
    }
  }


  /**
   * 남은 시간 계산 함수
   * 시간 종료 시 타이머 종료
   */
  function tick(): void {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(duration - elapsedTime, 0);
    onTick(remainingTime);
    if (elapsedTime >= duration) {
      stop();
      onTimeout();
    }
  }


  return { start, stop };
}
