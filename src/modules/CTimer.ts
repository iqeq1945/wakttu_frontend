/**
 * 시간을 초 형식의 문자열로 변환하는 유틸리티 함수
 * @param time 밀리초 단위의 시간
 * @returns 소수점 이하 한 자리까지 표시(예: 1.0초)
 */
export const formatTime = (time: number): string => {
  const seconds = (time / 1000).toFixed(1);
  return `${seconds}`;
};

/**
 * 타이머 함수를 생성하는 함수
 * @param duration 타이머의 기간(밀리초)
 * @param onTick 매 초마다 호출될 콜백 함수
 * @param onTimeout 타임아웃 발생 시 호출될 콜백 함수
 * @returns 타이머를 시작하는 함수
 */
export const createTimer = (
  roundTime: number | string,
  onTick: (remainingTime: number) => void,
  onTimeout: () => void
): {
  start: () => void;
  stop: () => void;
  getRemainingTime: () => number;
  pause: () => void;
  resume: () => void;
} => {
  let startTime = 0;
  let timeoutId: NodeJS.Timeout | null = null;
  let remainingTime = 0;
  let elapsedTime = 0;
  let paused = false;

  let duration: number;

  /**
   * 라운드 시간 별 턴시간
   * string = 전체 게임 시간-라운드 시간 (60초)
   * number = 턴시간 (15초 ~ 5초)
   */
  if (typeof roundTime === 'string') {
    duration = 60000;
  } else {
    if (51000 <= roundTime && roundTime <= 61000) {
      duration = 15000;
    } else if (41000 <= roundTime && roundTime < 51000) {
      duration = 12000;
    } else if (31000 <= roundTime && roundTime < 41000) {
      duration = 9000;
    } else if (21000 <= roundTime && roundTime < 31000) {
      duration = 6000;
    } else if (11000 <= roundTime && roundTime < 21000) {
      duration = 4000;
    } else if (5100 <= roundTime && roundTime < 11000) {
      duration = 3000;
    } else if (1 <= roundTime && roundTime < 5100) {
      duration = 1000;
    } else {
      duration = 0;
    }
  }

  /**
   * 타이머 시작 함수
   * 0.1초마다 tick 호출
   */
  const start = (): void => {
    startTime = Date.now();
    paused = false;
    tick();
    timeoutId = setInterval(tick, 100);
  };

  /**
   * 타이머 일시 정지 함수
   */
  const pause = (): void => {
    if (timeoutId) {
      clearInterval(timeoutId);
      timeoutId = null;
      elapsedTime += Date.now() - startTime;
      paused = true;
      console.log('일시정지');
    }
  };

  /**
   * 타이머 재개 함수
   */
  const resume = (): void => {
    if (paused) {
      startTime = Date.now();
      paused = false;
      tick();
      timeoutId = setInterval(tick, 100);
      console.log('재개');
    }
  };

  /**
   * 타이머 종료 함수
   */
  const stop = (): void => {
    if (timeoutId) {
      clearInterval(timeoutId);
      timeoutId = null;
      elapsedTime = 0;
      remainingTime = 0;
      paused = false;
      console.log('종료');
    }
    return;
  };

  /**
   * 남은 시간 계산 함수
   * 시간 종료 시 타이머 종료
   */
  const tick = (): void => {
    const currentTime = Date.now();
    remainingTime = Math.max(
      duration - (elapsedTime + (currentTime - startTime)),
      0
    );
    onTick(remainingTime);
    if (remainingTime <= 0) {
      stop();
      onTimeout();
    }
  };

  /**
   * 현재 남은 시간을 반환하는 함수
   */
  const getRemainingTime = (): number => remainingTime;

  return { start, stop, pause, resume, getRemainingTime };
};
