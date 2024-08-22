export class Timer {
  roundTime: number;

  remainingTime: number = 0;
  countTime: number = 0;

  timeoutId: NodeJS.Timeout | null = null;
  paused: boolean = false;
  onTick: (time: number) => void;

  constructor(roundTime: number, onTick: (time: number) => void) {
    this.roundTime = roundTime ? roundTime : 60000;
    this.onTick = onTick;
  }

  setTurnTime = (roundTime: number) => {
    let duration = 0;
    if (71000 <= roundTime && roundTime <= 120000) {
      duration = 20000;
    } else if (61000 <= roundTime && roundTime < 71000) {
      duration = 18000;
    } else if (51000 <= roundTime && roundTime < 61000) {
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
    this.remainingTime = duration;
  };

  /**
   * 타이머 시작 함수
   * 0.1초마다 tick 호출
   */
  start = (): void => {
    this.setTurnTime(this.roundTime);
    this.paused = false;
    this.tick();
    this.timeoutId = setInterval(this.tick, 100);
  };

  /**
   * 타이머 일시 정지 함수
   */
  pause = (): void => {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
      this.timeoutId = null;
      this.paused = true;
      console.log('일시정지');
    }
  };

  /**
   * 타이머 재개 함수
   */
  resume = (): void => {
    if (this.paused) {
      this.paused = false;
      this.tick();
      this.timeoutId = setInterval(this.tick, 100);
      console.log('재개');
    }
  };

  /**
   * 타이머 종료 함수
   */
  stop = (): void => {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
      this.timeoutId = null;
      this.remainingTime = 0;
      this.countTime = 0;
      this.paused = false;
      console.log('종료');
    }
    return;
  };

  /**
   * 남은 시간 계산 함수
   * 시간 종료 시 타이머 종료
   */
  tick = (): void => {
    this.remainingTime -= 100;
    this.countTime += 100;
    this.onTick(this.remainingTime);
    if (this.remainingTime <= 0) {
      this.stop();
    }
  };
}
